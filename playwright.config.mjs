import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  expect: {timeout: 8_000},
  workers: 1,
  use: {
    baseURL: process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:4173',
    browserName: 'chromium',
    launchOptions: {
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    },
    reducedMotion: 'reduce',
    trace: 'retain-on-failure'
  }
});
