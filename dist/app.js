const links = {
  email: 'mailto:naeem.ullah@gmail.com',
  github: 'https://github.com/naeemullah-datascientist',
  linkedin: 'https://www.linkedin.com/in/naeemm-ullah/',
  orcid: 'https://orcid.org/0009-0004-5921-3884',
  paper: 'https://ieeexplore.ieee.org/document/11333604',
  doi: 'https://doi.org/10.1109/FIT67061.2025.11333604'
};

const projects = [
  {
    slug: 'xploiteye', title: 'XploitEye', year: '2026', type: 'AI security platform',
    tags: ['Multi-agent systems', 'FastAPI', 'Security'], theme: 'security',
    excerpt: 'A multi-agent platform for authorized security assessment, red and blue team workflows, and clearer vulnerability reporting.',
    problem: 'Security assessments often involve separate tools, manual handoffs, and a large amount of work turning findings into useful reports. XploitEye explores how an AI-assisted workflow can bring these steps together for authorized testing.',
    contribution: 'For my final year project, I built a full-stack platform that coordinates red and blue team workflows, runs approved assessment tools, provides retrieval-based guidance, and turns findings into reports that are easier to review.',
    approach: [
      'Connected specialized agent workflows to assessment tools including Nmap, OWASP ZAP, and SQLMap.',
      'Built Python and FastAPI services with RabbitMQ for task coordination and ChromaDB for retrieval-based assistance.',
      'Created a Next.js interface for running workflows and reviewing results.'
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'ChromaDB', 'RabbitMQ', 'Docker', 'Nmap', 'OWASP ZAP', 'SQLMap'],
    links: [{label: 'Watch the project demo ↗', href: 'https://youtu.be/9R0QUzMMXsA'}]
  },
  {
    slug: 'voice-authenticity', title: 'AI-Generated Voice Detection', year: '2026', type: 'Audio AI research',
    tags: ['PyTorch', 'Audio AI', 'FastAPI'], theme: 'voice',
    excerpt: 'A research and engineering prototype for distinguishing human speech from synthetic audio, with an interactive demo and API inference.',
    problem: 'Synthetic speech is increasingly convincing. A useful detector must do more than classify familiar samples: it should also be tested against speech from sources it has not seen before.',
    contribution: 'I compared model approaches, fine-tuned a compact RawNetLite classifier, built audio visualizations, and exposed inference through an API and Gradio demo. I also investigated how performance changes across voice sources.',
    approach: [
      'Prepared speech data and explored mel spectrograms, CQT features, and model inputs.',
      'Fine-tuned a compact classifier and evaluated held-out and unseen-source cases separately.',
      'Built a usable inference flow with FastAPI, Gradio, and model export experiments.'
    ],
    stack: ['Python', 'PyTorch', 'RawNetLite', 'Wav2Vec2', 'FastAPI', 'Gradio', 'ONNX'],
    links: [{label: 'Open the interactive demo ↗', href: 'https://huggingface.co/spaces/naeemullah11111/deepfake-voice-qa-lite'}]
  },
  {
    slug: 'cricket-vision', title: 'Cricket Ball Tracking & Delivery Analysis', year: '2025', type: 'Computer vision research',
    tags: ['Computer Vision', 'YOLOv5', 'IEEE research'], theme: 'cricket',
    excerpt: 'A vision pipeline that follows a cricket ball through a delivery and helps analyze where it lands. The work led to an IEEE publication.',
    problem: 'Delivery analysis is usually done by close visual inspection or specialist systems. This project investigates an automated way to detect a ball, maintain its trajectory, and classify delivery length.',
    contribution: 'I worked on a computer vision pipeline using YOLOv5s for detection, Kalman filtering for tracking, homography to map image coordinates, and delivery-length analysis.',
    approach: [
      'Detected the ball across video frames with a YOLOv5s-based model.',
      'Used Kalman filtering to maintain a useful track when detections were inconsistent.',
      'Mapped coordinates with homography and analyzed the delivery location.'
    ],
    stack: ['Python', 'YOLOv5s', 'Kalman filtering', 'Homography', 'Computer Vision'],
    links: [
      {label: 'Read the IEEE paper ↗', href: links.paper},
      {label: 'View the code ↗', href: 'https://github.com/naeemullah-datascientist/cricket-ball-tracking-system'}
    ]
  }
];

const questions = [
  {q: 'What does Naeem build?', a: 'I build AI applications, Python backends, APIs, and automation. My recent public work includes a multi-agent security platform, synthetic voice detection, and computer vision research.'},
  {q: 'Why hire Naeem?', a: 'I bring together hands-on AI engineering, backend development, and research. I can take a problem from experimentation to a working interface and API, then explain the tradeoffs clearly.'},
  {q: 'What is his current role?', a: 'I am an Associate AI Engineer at AB Ark Private Limited in Lahore, where I work on practical AI and backend engineering.'},
  {q: 'Which AI tools does he use?', a: 'My work includes LLM applications, RAG, agent workflows, PyTorch, computer vision, speech models, and Python services built with FastAPI.'},
  {q: 'Can he build backends?', a: 'Yes. I work with Python, FastAPI, REST APIs, data processing, Docker, and integrations that connect AI systems to usable products.'},
  {q: 'What is XploitEye?', a: 'XploitEye is my final year project: a full-stack, multi-agent platform for authorized vulnerability assessment and red and blue team workflows. A video demo is linked from its project page.'},
  {q: 'Has he published research?', a: 'Yes. My cricket delivery analysis research was published at IEEE FIT 2025. You can find the title, DOI, and paper link on the Publications page.'},
  {q: 'Does he work with voice AI?', a: 'Yes. I built an AI-generated voice detection prototype, including model evaluation, visualizations, an inference API, and an interactive demo.'},
  {q: 'What is his education?', a: 'I completed a BS in Data Science at the University of the Punjab, PUCIT/FCIT, in 2026.'},
  {q: 'How can I contact him?', a: 'Email me at naeem.ullah@gmail.com or connect through LinkedIn. Both links are on the Contact Me page.'}
];

const path = decodeURIComponent(location.pathname).replace(/\/+$/, '') || '/';
const app = document.querySelector('#app');
const external = (href, label, className = '') => `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const icons = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.5v-5.6c0-1.3 0-3-1.9-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7Z"/></svg>',
  paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5h10l4 4v13H5z"/><path d="M15 3.5v4h4M8 12h8M8 16h8"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 8.4 8.4 0 0 1-3.4-.7L4 20l1.2-4.6A8 8 0 1 1 20 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></svg>'
};

function avatar(className = '') {
  return `<span class="avatar ${className}" role="img" aria-label="Naeem Ullah portrait placeholder"><span>NU</span></span>`;
}
function socials(extra = '') {
  return `<div class="social-links ${extra}"><a href="${links.email}" class="social-icon" aria-label="Email Naeem">${icons.mail}</a><a href="${links.github}" class="social-icon" aria-label="Naeem on GitHub" target="_blank" rel="noopener noreferrer">${icons.github}</a><a href="${links.linkedin}" class="social-icon" aria-label="Naeem on LinkedIn" target="_blank" rel="noopener noreferrer">${icons.linkedin}</a><a href="/publications" class="social-icon" aria-label="Publications">${icons.paper}</a></div>`;
}
function header() {
  return `<header class="site-header glass"><a class="brand" href="/" aria-label="Naeem Ullah home">${avatar('nav-avatar')}<span>Naeem Ullah <span class="brand-role">| AI Engineer</span></span></a><nav class="nav-links" id="main-nav" aria-label="Main navigation"><a href="/portfolio">Portfolio</a><a href="/about">About</a><a href="/publications">Publications</a><a class="nav-contact" href="/contact">Contact Me</a></nav><button class="menu-button" id="menu-open" aria-label="Open menu" aria-controls="main-nav" aria-expanded="false">☰</button></header>`;
}
function footer() {
  return `<footer class="site-footer">${socials()}<p>Naeem Ullah&nbsp; • &nbsp;© ${new Date().getFullYear()}&nbsp; • &nbsp;Associate AI Engineer</p></footer>`;
}
function qaPanel() {
  return `<div class="qa-wrap"><button id="qa-toggle" class="qa-toggle glass" aria-label="Open quick answers about Naeem" aria-controls="qa-panel" aria-expanded="false">${icons.chat}<span>Ask about Naeem</span></button><section id="qa-panel" class="qa-panel glass" aria-label="Quick answers about Naeem" hidden><div class="qa-heading"><div><span class="eyebrow">QUICK ANSWERS</span><h2>Get to know Naeem</h2></div><button id="qa-close" aria-label="Close quick answers">×</button></div><p class="qa-intro">Choose a question. These are curated answers from my portfolio.</p><div class="qa-questions">${questions.map((item, index) => `<button type="button" class="qa-question" data-question="${index}">${item.q}<span aria-hidden="true">↗</span></button>`).join('')}</div><div class="qa-answer" hidden aria-live="polite"><button class="qa-back" type="button">← All questions</button><h3></h3><p></p></div></section></div>`;
}
function projectVisual(project, detail = false) {
  return `<div class="project-visual ${project.theme} ${detail ? 'visual-large' : ''}" aria-hidden="true"><div class="visual-grid"></div>${project.theme === 'security' ? '<div class="visual-shield">◇</div><div class="visual-top">XPLOITEYE <span>SECURITY SYSTEMS</span></div><div class="visual-nodes"><span>RED TEAM</span><i>↔</i><span>BLUE TEAM</span></div><div class="visual-bottom">SCAN · ANALYZE · REPORT</div>' : project.theme === 'voice' ? '<div class="visual-top">VOICE / AUTHENTICITY <span>01 — 02</span></div><div class="visual-wave">' + [20,35,52,74,45,65,95,56,81,44,67,90,39,72,50,83,46,62,92,57,34,68,49,25].map((n, i) => `<i style="height:${n}%;animation-delay:${i * 35}ms"></i>`).join('') + '</div><div class="visual-bottom">REAL SPEECH / SYNTHETIC AUDIO</div>' : '<div class="visual-top">CRICKET / VISION <span>FRAME 024</span></div><div class="pitch"><span class="crease crease-one"></span><span class="crease crease-two"></span><span class="ball ball-one"></span><span class="ball ball-two"></span><span class="ball ball-three"></span><span class="trajectory"></span></div><div class="visual-bottom">DETECT · TRACK · ANALYZE</div>'}</div>`;
}
function projectRow(project) {
  return `<li class="post-row"><div class="row-meta"><span>${project.year}</span><span>${project.type}</span></div><div class="post-main"><h3><a href="/portfolio/${project.slug}">${project.title}</a></h3><div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><p>${project.excerpt}</p><a class="text-link" href="/portfolio/${project.slug}">Read the case study <span aria-hidden="true">→</span></a></div></li>`;
}
function profileCard() {
  return `<div class="profile-card glass">${avatar('portrait')}<h3>Naeem Ullah</h3><p>Associate AI Engineer</p><p>AB Ark Private Limited</p>${socials()}<a class="card-publication" href="/publications">View my publication <span aria-hidden="true">↗</span></a></div>`;
}
function contactClosing() {
  return `<section class="contact-closing" id="contact"><span class="eyebrow">HAVE A PROBLEM WORTH SOLVING?</span><h2>Let’s build something useful.</h2><p>AI products, Python backends, or research-driven prototypes — I’m open to thoughtful conversations.</p><div class="closing-actions"><a class="glass pill primary-pill" href="${links.email}">Email me ↗</a><a class="glass pill" href="/contact">Contact details →</a></div></section>`;
}
function home() {
  return `<canvas class="ambient-canvas" id="ambient-canvas" aria-hidden="true"></canvas><main class="home-main"><section class="hero"><div class="hero-inner"><p class="hero-eyebrow"><span>Hi,</span> I’m</p><h1>Naeem Ullah</h1><p class="hero-tagline" aria-live="polite"><span id="typed-tagline">I build practical AI systems, from research to reliable APIs.</span><span class="typing-caret" aria-hidden="true"></span></p><div class="hero-actions"><a class="glass pill" href="/portfolio">Explore my projects</a><button class="glass pill" id="tagline-button">Another line ↻</button></div><p class="tagline-note">Curated lines about my work, shown without an API.</p></div></section><section class="home-profile">${profileCard()}<div class="profile-copy"><span class="eyebrow">THE PERSON BEHIND THE WORK</span><p class="profile-summary">I’m an Associate AI Engineer at AB Ark, and a Data Science graduate from the University of the Punjab. I build AI applications and Python backends that turn complex ideas into tools people can use.</p><a class="text-link" href="/about">More about me →</a></div></section><section class="latest-section" id="featured"><div class="section-heading"><span class="eyebrow">SELECTED WORK</span><h2>Featured Projects</h2><p class="section-description">Real problems, deliberate engineering, and research you can explore.</p></div><ul class="post-list">${projects.map(projectRow).join('')}</ul><a class="all-posts-link" href="/portfolio">All Projects →</a></section>${contactClosing()}</main>`;
}
function pageTitle(title, description = '', eyebrow = '') {
  return `<div class="page-heading">${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h1>${title}</h1>${description ? `<p>${description}</p>` : ''}</div>`;
}
function portfolio() {
  return `<main class="inner-main portfolio-main">${pageTitle('Portfolio', 'Selected AI, backend, and research work. Each project has a fuller story behind the result.', 'SELECTED WORK')}<div class="project-grid">${projects.map(project => `<article class="project-card"><a class="visual-link" href="/portfolio/${project.slug}" aria-label="Read about ${project.title}">${projectVisual(project)}</a><div class="project-card-copy"><span class="eyebrow">${project.type} · ${project.year}</span><h2><a href="/portfolio/${project.slug}">${project.title}</a></h2><p>${project.excerpt}</p><a class="text-link" href="/portfolio/${project.slug}">Read the case study →</a></div></article>`).join('')}</div>${contactClosing()}</main>`;
}
function about() {
  return `<main class="inner-main about-main">${pageTitle('About', 'AI engineering grounded in software development and research.', 'THE JOURNEY')}<div class="about-layout"><aside class="about-person">${avatar('portrait')}<h3>Naeem Ullah</h3><p>Associate AI Engineer</p><p>Lahore, Pakistan</p>${socials()}</aside><article class="about-prose"><h2>Making AI useful in the real world.</h2><p>I’m a Data Science graduate from the University of the Punjab (PUCIT/FCIT) and an Associate AI Engineer at AB Ark Private Limited. My work focuses on Python backend development, AI applications, and intelligent automation.</p><p>I’ve built projects across multi-agent security workflows, synthetic voice detection, and computer vision. I enjoy connecting the research side of a problem with the engineering needed to make it usable: APIs, data flows, interfaces, and careful evaluation.</p><div class="about-facts"><div><span class="eyebrow">CURRENT ROLE</span><strong>Associate AI Engineer</strong><p>AB Ark Private Limited, Lahore</p></div><div><span class="eyebrow">EDUCATION</span><strong>BS Data Science</strong><p>University of the Punjab · 2026</p></div><div><span class="eyebrow">RESEARCH</span><strong>IEEE FIT 2025</strong><p>Computer vision for cricket delivery analysis</p></div></div><h2>Areas I work in</h2><div class="skill-groups"><span>Python & FastAPI</span><span>Generative AI & RAG</span><span>Agentic systems</span><span>PyTorch</span><span>Computer vision</span><span>Audio AI</span><span>Backend APIs</span><span>Docker</span></div><p class="about-next">Explore <a href="/portfolio">my projects</a>, read <a href="/publications">the publication</a>, or <a href="/contact">get in touch</a>.</p></article></div>${contactClosing()}</main>`;
}
function publications() {
  return `<main class="inner-main publications-main">${pageTitle('Publications', 'Peer-reviewed research and the engineering behind it.', 'RESEARCH')}<article class="publication-card"><span class="publication-index">01 / 01</span><div><div class="publication-meta">IEEE FIT 2025 <span>•</span> COMPUTER VISION</div><h2>Beyond the Naked Eye: Automated Delivery Analysis in Cricket with Computer Vision</h2><p>A computer vision approach to analyzing cricket deliveries using YOLOv5s object detection, Kalman filtering, coordinate transformation with homography, and delivery-length analysis.</p><p class="publication-doi">DOI: 10.1109/FIT67061.2025.11333604</p><div class="publication-actions">${external(links.paper, 'Read on IEEE Xplore ↗', 'text-link')}${external(links.doi, 'Open DOI ↗', 'text-link')}<a class="text-link" href="/portfolio/cricket-vision">Explore the project →</a></div></div></article><p class="research-note">Other investigations, including voice AI and AI security, appear as projects. This page lists formal publications only.</p>${contactClosing()}</main>`;
}
function contact() {
  return `<main class="inner-main contact-main">${pageTitle('Contact Me', 'Let’s talk about an idea, a project, or an opportunity.', 'GET IN TOUCH')}<div class="contact-card glass"><span class="eyebrow">OPEN TO CONVERSATIONS</span><h2>Tell me what you’re building.</h2><p>For AI engineering, Python backend work, research collaboration, or a role that brings them together, connect with me through the links below.</p><div class="contact-options"><a class="contact-option" href="${links.email}">${icons.mail}<span><strong>Email</strong><small>naeem.ullah@gmail.com ↗</small></span></a>${external(links.linkedin, `${icons.linkedin}<span><strong>LinkedIn</strong><small>Message me about work or collaboration ↗</small></span>`, 'contact-option')}${external(links.github, `${icons.github}<span><strong>GitHub</strong><small>Explore my public code ↗</small></span>`, 'contact-option')}<a class="contact-option" href="/publications">${icons.paper}<span><strong>Publications</strong><small>Read my IEEE research ↗</small></span></a></div></div></main>`;
}
function caseStudy(project) {
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  return `<main class="inner-main case-main"><a class="back-link" href="/portfolio">← All projects</a><div class="case-heading"><span class="eyebrow">${project.type} · ${project.year}</span><h1>${project.title}</h1><p>${project.excerpt}</p></div>${projectVisual(project, true)}<div class="case-layout"><aside class="case-side"><div class="case-side-block"><span class="eyebrow">ROLE</span><p>Research, engineering & implementation</p></div><div class="case-side-block"><span class="eyebrow">STACK</span><div class="stack-list">${project.stack.map(item => `<span>${item}</span>`).join('')}</div></div><div class="case-side-block"><span class="eyebrow">EXPLORE</span>${project.links.map(item => external(item.href, item.label, 'side-link')).join('')}</div></aside><article class="case-body"><section><span class="eyebrow">01 / THE PROBLEM</span><h2>What needed solving</h2><p>${project.problem}</p></section><section><span class="eyebrow">02 / MY WORK</span><h2>What I built</h2><p>${project.contribution}</p></section><section><span class="eyebrow">03 / THE APPROACH</span><h2>How it works</h2><ul>${project.approach.map(item => `<li>${item}</li>`).join('')}</ul></section><div class="case-links">${project.links.map(item => external(item.href, item.label, 'glass pill')).join('')}</div></article></div><div class="case-next"><span class="eyebrow">NEXT PROJECT</span><a href="/portfolio/${next.slug}">${next.title} <span aria-hidden="true">↗</span></a></div>${contactClosing()}</main>`;
}
function notFound() {
  return `<main class="inner-main not-found">${pageTitle('Page not found')}<p>That page isn’t part of this portfolio.</p><a class="text-link" href="/">Back to homepage →</a></main>`;
}

let content;
if (path === '/') content = home();
else if (path === '/portfolio' || path === '/projects') content = portfolio();
else if (path === '/about') content = about();
else if (path === '/publications') content = publications();
else if (path === '/contact') content = contact();
else if (path.startsWith('/portfolio/')) {
  const project = projects.find(item => item.slug === path.split('/')[2]);
  content = project ? caseStudy(project) : notFound();
} else content = notFound();
app.innerHTML = `<div class="site-wrap ${path === '/' ? 'is-home' : 'is-inner'}">${header()}${content}${footer()}${qaPanel()}</div>`;
const pageName = path === '/about' ? 'About' : path === '/publications' ? 'Publications' : path === '/contact' ? 'Contact' : path === '/portfolio' ? 'Portfolio' : projects.find(item => path === `/portfolio/${item.slug}`)?.title || 'Portfolio';
document.title = path === '/' ? 'Naeem Ullah | AI Engineer' : `${pageName} | Naeem Ullah`;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === path || (path.startsWith('/portfolio/') && link.getAttribute('href') === '/portfolio')) link.setAttribute('aria-current', 'page');
});

document.querySelector('#menu-open').addEventListener('click', function () {
  const open = document.querySelector('#main-nav').classList.toggle('open');
  this.setAttribute('aria-expanded', String(open));
  this.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

const qaToggle = document.querySelector('#qa-toggle');
const qaPanelElement = document.querySelector('#qa-panel');
const questionList = document.querySelector('.qa-questions');
const answerBox = document.querySelector('.qa-answer');
function setQaOpen(open) {
  qaPanelElement.hidden = !open;
  qaToggle.setAttribute('aria-expanded', String(open));
  qaToggle.setAttribute('aria-label', open ? 'Close quick answers about Naeem' : 'Open quick answers about Naeem');
  if (open) document.querySelector('#qa-close').focus();
  else qaToggle.focus();
}
qaToggle.addEventListener('click', () => setQaOpen(qaPanelElement.hidden));
document.querySelector('#qa-close').addEventListener('click', () => setQaOpen(false));
document.querySelectorAll('.qa-question').forEach(button => button.addEventListener('click', () => {
  const item = questions[Number(button.dataset.question)];
  answerBox.querySelector('h3').textContent = item.q;
  answerBox.querySelector('p').textContent = item.a;
  questionList.hidden = true;
  answerBox.hidden = false;
  answerBox.querySelector('button').focus();
}));
document.querySelector('.qa-back').addEventListener('click', () => {
  answerBox.hidden = true;
  questionList.hidden = false;
  questionList.querySelector('button').focus();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !qaPanelElement.hidden) setQaOpen(false);
});

if (path === '/') {
  const lines = [
    'I build practical AI systems, from research to reliable APIs.',
    'I turn complex AI ideas into tools people can actually use.',
    'I connect machine learning, backend engineering, and real problems.',
    'I explore AI deeply, then make it useful in the real world.'
  ];
  const field = document.querySelector('#typed-tagline');
  let position = 0;
  let timer;
  document.querySelector('#tagline-button').addEventListener('click', () => {
    position = (position + 1) % lines.length;
    clearTimeout(timer);
    const value = lines[position];
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { field.textContent = value; return; }
    field.textContent = '';
    let index = 0;
    const step = () => { field.textContent = value.slice(0, ++index); if (index < value.length) timer = setTimeout(step, 33); };
    step();
  });
  drawAmbient(document.querySelector('#ambient-canvas'));
}
function drawAmbient(canvas){
  const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');let w=0,h=0,dpr=1,mouseX=0,mouseY=0,frame=0;
  const grain=document.createElement('canvas');grain.width=160;grain.height=160;
  const grainContext=grain.getContext('2d');const grainPixels=grainContext.createImageData(160,160);
  for(let i=0;i<grainPixels.data.length;i+=4){const value=Math.random();grainPixels.data[i]=108;grainPixels.data[i+1]=130;grainPixels.data[i+2]=46;grainPixels.data[i+3]=value>.46?Math.floor(value*53):0}
  grainContext.putImageData(grainPixels,0,0);const grainPattern=ctx.createPattern(grain,'repeat');
  const bands=[[-.25,.18,560,155,.35],[.18,.02,520,95,.43],[.40,-.08,600,80,.2],[.46,.35,550,170,.39],[.83,.16,440,74,.25],[-.12,.55,680,130,.28],[.10,.70,700,110,.47],[.58,.61,680,135,.43],[.75,.83,490,115,.31],[.03,1.05,650,120,.42]];
  function resize(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}
  function render(){
    frame++;ctx.fillStyle='#020302';ctx.fillRect(0,0,w,h);
    const scale=Math.max(w/1600,h/900);
    bands.forEach((band,i)=>{
      const [x,y,length,width,opacity]=band;const drift=motion.matches?0:Math.sin(frame*.002+i*1.3)*18;
      ctx.save();ctx.translate(x*w+mouseX*(i%3-1)*.012+drift,y*h+mouseY*(i%2?1:-1)*.01);ctx.rotate(.73);
      const gradient=ctx.createLinearGradient(0,-width/2,0,width/2);
      gradient.addColorStop(0,'rgba(21,36,3,0)');gradient.addColorStop(.18,'rgba(54,83,8,'+(opacity*.55)+')');gradient.addColorStop(.48,'rgba(92,126,24,'+opacity+')');gradient.addColorStop(.74,'rgba(57,87,11,'+(opacity*.68)+')');gradient.addColorStop(1,'rgba(18,31,2,0)');
      ctx.fillStyle=gradient;ctx.shadowColor='rgba(50,83,7,.32)';ctx.shadowBlur=40*scale;ctx.fillRect(-length*.2*scale,-width*.5*scale,length*scale,width*scale);ctx.restore();
    });
    const shade=ctx.createRadialGradient(w*.48,h*.48,w*.15,w*.48,h*.48,w*.8);shade.addColorStop(0,'rgba(0,0,0,.02)');shade.addColorStop(1,'rgba(0,0,0,.82)');ctx.fillStyle=shade;ctx.fillRect(0,0,w,h);
    ctx.globalAlpha=.28;ctx.fillStyle=grainPattern;ctx.fillRect(0,0,w,h);ctx.globalAlpha=1;
    if(!motion.matches)requestAnimationFrame(render);
  }
  resize();addEventListener('resize',resize);addEventListener('pointermove',e=>{mouseX=e.clientX-w/2;mouseY=e.clientY-h/2},{passive:true});render();
}
