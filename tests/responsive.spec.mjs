import {test, expect} from '@playwright/test';
import fs from 'node:fs';

const viewports = [320, 375, 390, 768, 1024, 1280, 1440, 1920];
const routes = [
  '/', '/portfolio', '/about', '/publications', '/publications/beyond-the-naked-eye', '/contact',
  '/portfolio/xploiteye', '/portfolio/truck-dispatch-automation', '/portfolio/voice-authenticity',
  '/portfolio/cricket-vision', '/portfolio/legal-ai', '/portfolio/incident-escalation',
  '/portfolio/fulfillment-workflows'
];
const screenshots = process.env.PW_SCREENSHOT_DIR || '/tmp/naeem-playwright-screens';

async function prepare(page) {
  const base = new URL(process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:4173').origin;
  await page.context().route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin !== base) return route.fulfill({status: 200, contentType: 'text/html', body: '<!doctype html><title>External destination</title>'});
    return route.continue();
  });
}

async function assertLayout(page, width) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1);

  const header = page.locator('.site-header');
  const box = await header.boundingBox();
  expect(box).not.toBeNull();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(width + 1);

  const visibleChildren = header.locator(':scope > *:visible');
  for (let index = 0; index < await visibleChildren.count(); index += 1) {
    const child = await visibleChildren.nth(index).boundingBox();
    expect(child.x).toBeGreaterThanOrEqual(box.x - 1);
    expect(child.x + child.width).toBeLessThanOrEqual(box.x + box.width + 1);
  }

  const hero = page.locator('.hero');
  if (await hero.count()) {
    const heroBox = await hero.boundingBox();
    expect(heroBox.y).toBeGreaterThanOrEqual(box.y + box.height - 1);
  }

  const veil = await page.locator('.site-wrap').evaluate(element => {
    const style = getComputedStyle(element, '::before');
    return {position: style.position, pointerEvents: style.pointerEvents, zIndex: Number(style.zIndex), height: parseFloat(style.height)};
  });
  expect(veil.position).toBe('fixed');
  expect(veil.pointerEvents).toBe('none');
  expect(veil.zIndex).toBeGreaterThan(0);
  expect(veil.height).toBeGreaterThan(box.y + box.height);

  const start = await header.boundingBox();
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(80);
  const end = await header.boundingBox();
  expect(Math.abs(end.x - start.x)).toBeLessThanOrEqual(1);
  expect(Math.abs(end.y - start.y)).toBeLessThanOrEqual(1);
  expect(Math.abs(end.width - start.width)).toBeLessThanOrEqual(1);
  await page.evaluate(() => window.scrollTo(0, 0));
}

for (const width of viewports) {
  test(`responsive layout ${width}px`, async ({page}) => {
    fs.mkdirSync(screenshots, {recursive: true});
    await page.setViewportSize({width, height: width <= 390 ? 844 : 900});
    const consoleErrors = [];
    const failedRequests = [];
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    page.on('requestfailed', request => failedRequests.push(`${request.method()} ${request.url()} ${request.failure()?.errorText || ''}`));
    await prepare(page);
    await page.goto('/', {waitUntil: 'domcontentloaded'});
    await assertLayout(page, width);

    const compact = width <= 840;
    if (compact) {
      await expect(page.locator('#menu-open')).toBeVisible();
      await page.locator('#menu-open').click();
      await expect(page.locator('#main-nav')).toHaveClass(/open/);
      await expect(page.locator('#main-nav a')).toHaveCount(4);
      await page.keyboard.press('Escape');
      await expect(page.locator('#main-nav')).not.toHaveClass(/open/);
      await expect(page.locator('#menu-open')).toBeFocused();
    } else {
      await expect(page.locator('#menu-open')).toBeHidden();
      await expect(page.locator('#main-nav')).toBeVisible();
    }

    await page.locator('#qa-toggle').click();
    await expect(page.locator('#qa-panel')).toBeVisible();
    const panel = await page.locator('#qa-panel').boundingBox();
    expect(panel.x).toBeGreaterThanOrEqual(0);
    expect(panel.x + panel.width).toBeLessThanOrEqual(width + 1);
    await page.locator('#qa-close').click();
    await expect(page.locator('#qa-panel')).toBeHidden();

    await page.screenshot({path: `${screenshots}/home-${width}.png`, fullPage: true});
    await page.evaluate(() => window.scrollTo(0, Math.round(document.documentElement.scrollHeight * .48)));
    await page.waitForTimeout(80);
    await page.screenshot({path: `${screenshots}/scroll-${width}.png`});
    await page.evaluate(() => window.scrollTo(0, 0));
    expect(consoleErrors, consoleErrors.join('\n')).toEqual([]);
    expect(failedRequests, failedRequests.join('\n')).toEqual([]);
  });
}

test('header navigation and anchor offsets', async ({page}) => {
  await page.setViewportSize({width: 1280, height: 900});
  await prepare(page);
  for (const [label, pathname] of [['Portfolio', '/portfolio'], ['About', '/about'], ['Publications', '/publications'], ['Contact Me', '/contact']]) {
    await page.goto('/');
    await page.locator('.site-header').getByRole('link', {name: label, exact: true}).click();
    await expect(page).toHaveURL(new RegExp(`${pathname}/?$`));
    const header = await page.locator('.site-header').boundingBox();
    const heading = await page.locator('.page-heading h1').boundingBox();
    expect(heading.y).toBeGreaterThan(header.y + header.height);
  }
  await page.goto('/publications/beyond-the-naked-eye');
  await page.getByRole('link', {name: /Read the paper below/}).click();
  const header = await page.locator('.site-header').boundingBox();
  const reader = await page.locator('#paper-reader').boundingBox();
  expect(reader.y).toBeGreaterThanOrEqual(header.y + header.height);
});

test('interactive controls and every Ask Naeem question', async ({page}) => {
  await page.setViewportSize({width: 1280, height: 900});
  await prepare(page);
  await page.goto('/');
  const original = await page.locator('#typed-tagline').textContent();
  await page.locator('#tagline-button').click();
  await expect(page.locator('#typed-tagline')).not.toHaveText(original);

  await page.locator('#qa-toggle').click();
  const questions = page.locator('.qa-question');
  expect(await questions.count()).toBe(10);
  for (let index = 0; index < 10; index += 1) {
    await questions.nth(index).click();
    await expect(page.locator('.qa-answer')).toBeVisible();
    await expect(page.locator('.qa-action')).not.toHaveAttribute('href', '#');
    await expect(page.locator('#qa-play-pause')).toBeEnabled();
    await page.locator('#qa-mute').click();
    await page.locator('#qa-stop').click();
    await page.locator('#qa-replay').click();
    await page.locator('.qa-back').click();
  }
  await page.locator('#qa-close').click();

  await page.goto('/portfolio/xploiteye');
  const chapter = page.locator('.demo-chapters button').first();
  await chapter.click();
  await expect(chapter).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.video-embed iframe')).toHaveAttribute('src', /start=498/);
});

test('link crawler and external destination behavior', async ({page, request, context, baseURL}) => {
  await page.setViewportSize({width: 1280, height: 900});
  await prepare(page);
  const internal = new Set();
  const external = new Map();

  for (const route of routes) {
    await page.goto(route, {waitUntil: 'domcontentloaded'});
    const links = await page.locator('a[href]').evaluateAll((elements, sourceRoute) => elements.map(link => ({
      href: link.getAttribute('href'), target: link.getAttribute('target'), rel: link.getAttribute('rel'), sourceRoute
    })), route);
    for (const link of links) {
      expect(link.href).toBeTruthy();
      expect(link.href.trim()).not.toBe('#');
      expect(link.href.toLowerCase().startsWith('javascript:')).toBeFalsy();
      const parsed = new URL(link.href, new URL(route, baseURL));
      if (parsed.protocol === 'mailto:') {
        expect(parsed.pathname).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
      } else if (parsed.origin === new URL(baseURL).origin) {
        internal.add(`${parsed.pathname}${parsed.hash}`);
      } else {
        expect(link.target).toBe('_blank');
        expect(link.rel || '').toContain('noopener');
        expect(link.rel || '').toContain('noreferrer');
        if (!external.has(parsed.href)) external.set(parsed.href, route);
      }
    }
  }

  for (const href of internal) {
    const url = new URL(href, baseURL);
    const response = await request.get(url.pathname);
    expect(response.status(), href).toBeLessThan(400);
    if (url.hash) {
      await page.goto(url.pathname);
      await expect(page.locator(url.hash)).toHaveCount(1);
    }
  }

  for (const [href, sourceRoute] of external) {
    await page.goto(sourceRoute);
    const link = page.locator(`a[href="${href}"]`).first();
    const popupPromise = context.waitForEvent('page');
    await link.click();
    const popup = await popupPromise;
    await popup.waitForLoadState('domcontentloaded');
    expect(popup.url()).toBe(href);
    await popup.close();
  }
});

test('keyboard focus is visible and mobile menu returns focus', async ({page}) => {
  await page.setViewportSize({width: 375, height: 844});
  await prepare(page);
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.brand')).toBeFocused();
  const outline = await page.locator('.brand').evaluate(element => getComputedStyle(element).outlineStyle);
  expect(outline).not.toBe('none');
  await page.locator('#menu-open').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-nav a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('#menu-open')).toBeFocused();
});
