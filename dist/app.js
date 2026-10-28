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
    tags: ['Agentic AI', 'Cybersecurity', 'Full stack'], role: 'AI systems & full-stack engineering',
    excerpt: 'One security workspace linking network reconnaissance, controlled validation, remediation, web assessment, and a scan-aware AI advisor.',
    problem: 'Security teams often move between disconnected scanners, exploit tools, vulnerability databases, and ticketing systems. The costly part is the handoff: carrying context from a detected service to a verified finding, a useful fix, and a report someone can act on.',
    contribution: 'XploitEye unifies that cycle in a full-stack product. A Next.js interface connects to a FastAPI control plane, streams operation output, and keeps assessment records together. In the recorded walkthrough, the team demonstrates a network scan, controlled validation in a deliberately vulnerable lab, blue-agent remediation, web findings, and a retrieval-backed security advisor.',
    approach: [
      'The operator authenticates, defines an authorized target, and starts assessment from a unified dashboard. Explicit API routes and validation keep scans, agent runs, and chat separate.',
      'Nmap fingerprints open services; detected versions are correlated with CVE and severity data. Findings are stored and streamed into the browser through WebSockets.',
      'A LangGraph red-agent workflow branches on runtime results. The video demonstrates controlled exploit validation against a deliberately vulnerable lab machine, behind an additional authentication step.',
      'A LangChain blue-agent workflow turns verified context into a remediation plan and a packaged handoff containing a plain-language report and hardening scripts.',
      'Web assessment runs checks concurrently and distinguishes passive checks on real sites from active demonstrations on intentionally vulnerable applications.',
      'A RAG security advisor retrieves CVE knowledge and the current session’s scan records, so answers refer to the actual environment instead of generic security advice.'
    ],
    outcome: 'The recorded product walkthrough shows a connected path from discovery to validated risk, remediation delivery, and contextual answers. Its active security demonstration uses a controlled lab environment.',
    stack: ['Python', 'FastAPI', 'Next.js', 'LangGraph', 'LangChain', 'MongoDB', 'Qdrant', 'MCP', 'WebSockets', 'Nmap'],
    links: [{label: 'Watch the product walkthrough ↓', href: '#demo'}], demo: 'video'
  },
  {
    slug: 'truck-dispatch-automation', title: 'End-to-End Truck Dispatch Automation', year: 'Client engagement', type: 'Business process automation',
    tags: ['n8n', 'WhatsApp APIs', 'Workflow automation'], role: 'Automation architecture & end-to-end implementation',
    excerpt: 'An n8n workflow that carries a trucking request through validation, calculations, dispatch tracking, operational updates, and final delivery.',
    problem: 'The client’s dispatch process began with a call and continued through order capture, manual calculations, dispatch processing, tracking, repeated updates, and delivery follow-up. Each handoff depended on manual work, which made the operation repetitive and required the team to keep checking multiple stages of the job.',
    contribution: 'I translated the client’s existing process into an end-to-end n8n automation. I mapped the business requirements, implemented validation and calculations, connected external services through APIs, orchestrated dispatch and delivery stages, and delivered important operational updates through WhatsApp. I also tested different scenarios and refined the workflow around client feedback.',
    approach: [
      'Received the required order and dispatch information, validated mandatory fields, and transformed the data into a consistent structure for the workflow.',
      'Applied the client’s confidential business rules, conditions, and calculations before allowing an order to continue.',
      'Moved validated orders through dispatch processing and status tracking, with controlled execution and error-handling paths for unreliable steps.',
      'Sent calculations, important status changes, and operational updates through WhatsApp, then continued the workflow through final delivery.'
    ],
    outcome: 'The solution turned a manual sequence into one connected operational workflow. It reduced repetitive processing and calculations, improved the movement of information between dispatch stages, and gave the operations team faster WhatsApp updates without constant manual follow-up.',
    stack: ['n8n', 'WhatsApp integration', 'REST APIs', 'Workflow orchestration', 'Data validation', 'Conditional logic', 'Error handling'],
    note: 'Client engagement. The company name, operational data, calculations, and internal business rules are confidential. The workflow visual is illustrative and contains no private information.', links: []
  },
  {
    slug: 'voice-authenticity', title: 'AI-Generated Voice Detection', year: '2026', type: 'Audio AI research',
    tags: ['PyTorch', 'Speech AI', 'FastAPI'], role: 'Model research & inference engineering',
    excerpt: 'A voice-authenticity system that evaluates real and synthetic speech, visualizes the audio signal, and serves predictions through an interactive demo.',
    problem: 'Synthetic speech can sound convincing, yet detectors often learn artifacts from one voice generator instead of general signs of manipulation. The engineering challenge is to build a usable classifier while testing how it behaves on speech sources outside its training distribution.',
    contribution: 'I built an end-to-end evaluation and inference workflow: preparing audio, comparing model approaches, fine-tuning a compact RawNetLite classifier, and connecting inference to an API and a Gradio interface. The work also examined threshold selection, model size, and performance on unseen TTS sources.',
    approach: [
      'Prepared speech from different real and synthetic sources and inspected waveform, mel-spectrogram, and CQT representations.',
      'Compared candidate architectures, then fine-tuned a compact RawNetLite model for the classification task.',
      'Separated held-out evaluation from tests on unseen generators to expose where a model does and does not generalize.',
      'Built sliding-window inference, audio visualizations, a FastAPI endpoint, and a Gradio demo so a visitor can test a clip.'
    ],
    outcome: 'The public demo makes the research tangible; the evaluation keeps its limitations visible instead of reducing performance to one headline score.',
    stack: ['Python', 'PyTorch', 'RawNetLite', 'Wav2Vec2', 'FastAPI', 'Gradio', 'ONNX'],
    links: [{label: 'Try the interactive demo ↓', href: '#demo'}], demo: 'voice'
  },
  {
    slug: 'cricket-vision', title: 'Cricket Ball Tracking & Delivery Analysis', year: '2025', type: 'Computer vision research',
    tags: ['Computer Vision', 'YOLOv5', 'IEEE research'], role: 'Computer vision research & engineering',
    excerpt: 'A single-camera vision pipeline that tracks a cricket ball, maps its path onto the pitch, and analyzes delivery length.',
    problem: 'Professional ball-tracking systems rely on expensive synchronized cameras and specialist hardware. Coaches and smaller clubs need a more accessible way to turn ordinary video into useful, objective delivery analysis.',
    contribution: 'The research combines ball detection, temporal tracking, perspective mapping, and delivery classification in a single-camera pipeline. The work was published at IEEE FIT 2025 as “Beyond the Naked Eye: Automated Delivery Analysis in Cricket with Computer Vision.”',
    approach: [
      'OpenCV extracts frames from a fixed-camera video; YOLOv5s identifies likely ball positions.',
      'A Kalman filter predicts and updates the trajectory through blur or short detection gaps.',
      'Homography maps image coordinates to a top-down pitch plane after camera calibration.',
      'The mapped landing position supports delivery-length classification and a reviewable visual result.'
    ],
    outcome: 'The paper reports approximately 50 frames per second and 8.2 cm mean pitch-distance error in its evaluation. It also explains that homography calibration limits precision when camera geometry changes.',
    stack: ['Python', 'OpenCV', 'YOLOv5s', 'Kalman filtering', 'Homography'],
    links: [
      {label: 'Read the paper here →', href: '/publications/beyond-the-naked-eye'},
      {label: 'View the code ↗', href: 'https://github.com/naeemullah-datascientist/cricket-ball-tracking-system', external: true}
    ],
    note: 'The paper is co-authored research. The code link opens the public repository.'
  },
  {
    slug: 'legal-ai', title: 'Legal AI & Document Retrieval', year: 'Professional work', type: 'Internal AI system',
    tags: ['RAG', 'Document AI', 'Python'], role: 'AI & backend engineering',
    excerpt: 'A knowledge-grounded assistant that helps turn legal documents into more useful search and question-answering workflows.',
    problem: 'Legal teams work across dense documents where the relevant answer may be spread over multiple files. Plain keyword search can miss the context needed to interpret a passage responsibly.',
    contribution: 'Worked on legal-domain retrieval and question-answering capabilities, connecting document processing, knowledge relationships, and grounded responses through Python backend services.',
    approach: [
      'Prepared source documents for extraction and retrieval while keeping source context available.',
      'Explored RAG and graph-oriented retrieval to connect related passages and concepts.',
      'Designed assistant workflows that return useful context alongside an answer rather than an unsupported response.'
    ],
    outcome: 'The work demonstrates a practical pattern for domain-specific AI: retrieve trustworthy context first, then use it to support a more useful answer.',
    stack: ['Python', 'RAG', 'GraphRAG', 'LLMs', 'Document processing', 'APIs'],
    note: 'Internal work. The workflow graphic is illustrative and project details are generalized; no client material or private code is shown.', links: []
  },
  {
    slug: 'incident-escalation', title: 'Incident Triage & Escalation', year: 'Client engagement', type: 'Client system',
    tags: ['AI workflows', 'Backend APIs', 'Automation'], role: 'AI workflow & backend engineering',
    excerpt: 'An incident-management workflow that classifies incoming reports, tracks acknowledgement, and escalates unresolved cases.',
    problem: 'Urgent reports need a dependable path from intake to the right person. Manual triage and follow-up can leave a case waiting without a clear status or ownership.',
    contribution: 'Built a prototype that structures incoming reports, creates case references, routes incidents by severity, records acknowledgement, and escalates unresolved items according to time and level.',
    approach: [
      'Turned incoming messages into structured incidents with severity and an auditable reference.',
      'Connected notification and acknowledgement steps to an operator-facing workflow.',
      'Applied timed escalation rules when an incident remained unresolved.',
      'Maintained a dashboard and activity history so the case status stayed visible.'
    ],
    outcome: 'The flow makes responsibility and progress easier to follow from first report through escalation.',
    stack: ['Python', 'Backend APIs', 'LLM integrations', 'Webhooks', 'Automation'],
    note: 'Client engagement. Details are intentionally generalized; no client name, messages, operational data, or internal code are shown.', links: []
  },
  {
    slug: 'fulfillment-workflows', title: 'AI-Assisted Fulfillment Workflows', year: 'Client engagement', type: 'Client product',
    tags: ['Workflow design', 'API integration', 'AI assistance'], role: 'Full-stack product engineering',
    excerpt: 'A product workflow connecting purchase-order review, shipments, tracking, activity history, and conversational changes.',
    problem: 'Fulfillment work often crosses order details, shipment state, contacts, and change history. When these are separate, operators spend time rebuilding context before they can act.',
    contribution: 'Worked on multi-step fulfillment flows spanning purchase orders, shipment review, tracking, contact information, activity logging, and conversational editing of confirmed product details.',
    approach: [
      'Connected order and shipment views to backend data and status transitions.',
      'Handled multi-select actions and review steps while preserving the state of each order.',
      'Integrated change history and contact details into the workflow.',
      'Explored conversational editing as a controlled way to update already-confirmed products.'
    ],
    outcome: 'The work brings complex operational actions into a more coherent product experience.',
    stack: ['Frontend state', 'API integration', 'Backend persistence', 'Workflow testing', 'AI assistance'],
    note: 'Client product. The case study describes my work at a high level and uses an illustrative workflow; no proprietary interface or customer data are included.', links: []
  }
];

const questions = [
  {id: 'intro', q: 'Tell me about yourself.', a: 'I’m a full-stack AI engineer who enjoys turning complex ideas into software people can actually use. I work across AI workflows, Python backends, APIs, interfaces, testing, and deployment. My experience includes professional engineering work, client automation, freelance delivery, and published computer vision research.', href: '/about', cta: 'Read more about me →'},
  {id: 'fit', q: 'Why would you be a good fit for our team?', a: 'I connect AI engineering with the backend and product work around it. I can contribute to the model workflow, APIs, interface, integrations, and deployment instead of treating each part in isolation. I also communicate limitations clearly and focus on building something the team can test, maintain, and improve.', href: '/projects', cta: 'See my work →'},
  {id: 'ownership', q: 'What have you personally built?', a: 'I’ve built across research and product engineering. In my voice detection work, I compared model approaches, fine-tuned a compact classifier, evaluated unfamiliar speech sources, and connected inference to an API and interactive demo. For a logistics client, I mapped and implemented an n8n dispatch workflow with calculations, status handling, and WhatsApp updates.', href: '/projects/deepfake-voice-detection', cta: 'See my implementation →'},
  {id: 'production', q: 'Can you take an idea from MVP to production?', a: 'Yes. I start by clarifying the real workflow, the data, and what success should look like. Then I can work across the AI layer, backend, integrations, interface, testing, containerization, and deployment. I use tools such as Docker, GitHub Actions, Linux, and Azure Container Apps when the project requires them.', href: '/about', cta: 'See my engineering background →'},
  {id: 'clients', q: 'Have you worked on real client projects?', a: 'Yes. For a logistics client, I converted a manual truck-dispatch process into an n8n workflow covering validation, business calculations, dispatch tracking, WhatsApp updates, and final delivery. I handled process mapping, workflow logic, integrations, testing, and client-driven improvements while keeping the client’s private rules confidential.', href: '/projects/truck-dispatch-automation', cta: 'Read the dispatch case study →'},
  {id: 'systems', q: 'What kind of AI and automation systems have you built?', a: 'My work includes retrieval-based document assistants, multi-agent security workflows, voice authenticity detection, computer vision, incident escalation, fulfillment systems, and business process automation. I’ve connected models and business rules to Python APIs, n8n workflows, databases, web interfaces, and services such as WhatsApp.', href: '/projects', cta: 'Explore the projects →'},
  {id: 'reliability', q: 'How do you make AI systems reliable and safe?', a: 'I make the evidence and failure cases visible. For model work, I separate normal evaluation from tests on unfamiliar data. For retrieval systems, I keep the source context behind an answer. I also consider permissions, input validation, data exposure, error handling, and controlled execution as part of the engineering work.', href: '/projects/xploiteye', cta: 'See the security approach →'},
  {id: 'challenge', q: 'What is one technically challenging project you solved?', a: 'XploitEye was technically challenging because it connects several security stages in one product: reconnaissance, vulnerability context, controlled validation, remediation, web assessment, and retrieval-based guidance. My work involved connecting AI workflows with backend services and a usable interface while keeping active security demonstrations inside an authorized lab environment.', href: '/projects/xploiteye', cta: 'Explore XploitEye →'},
  {id: 'background', q: 'What experience would you bring to this role?', a: 'I bring professional AI and Python backend experience from AB Ark Private Limited, alongside client and freelance delivery. I’ve worked on AI applications, integrations, workflow automation, security, voice AI, and computer vision. I also co-authored an IEEE paper, which strengthened how I evaluate technical claims and explain limitations.', href: '/publications/beyond-the-naked-eye', cta: 'Read my published research →'},
  {id: 'start', q: 'How would we start working together?', a: 'Tell me what you are building, what is already in place, and where you need help. I would clarify the scope, constraints, and what success looks like, then suggest the first useful milestone. For a role, share the responsibilities you want me to own. For a project, we can start from the most valuable workflow.', href: '/contact', cta: 'Let’s talk →'}
];

const fallbackAnswer = 'I don’t have enough verified information in my portfolio to answer that accurately, but you can contact me directly and I’d be happy to discuss it.';

const path = decodeURIComponent(location.pathname).replace(/\/+$/, '') || '/';
const app = document.querySelector('#app');
const external = (href, label, className = '') => `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const projectRoutes = {
  'xploiteye': 'xploiteye',
  'truck-dispatch-automation': 'truck-dispatch-automation',
  'voice-authenticity': 'deepfake-voice-detection',
  'cricket-vision': 'cricket-ball-tracking',
  'legal-ai': 'legal-ai-document-retrieval',
  'incident-escalation': 'incident-triage-escalation',
  'fulfillment-workflows': 'ai-assisted-fulfillment'
};
const projectPath = project => `/projects/${projectRoutes[project.slug] || project.slug}`;
const icons = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.5v-5.6c0-1.3 0-3-1.9-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7Z"/></svg>',
  paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5h10l4 4v13H5z"/><path d="M15 3.5v4h4M8 12h8M8 16h8"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 8.4 8.4 0 0 1-3.4-.7L4 20l1.2-4.6A8 8 0 1 1 20 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></svg>'
};

function avatar(className = '') {
  return `<img class="avatar ${className}" src="/assets/naeem-portrait.png" alt="Naeem Ullah" width="192" height="192">`;
}
function socials(extra = '') {
  return `<div class="social-links ${extra}"><a href="${links.email}" class="social-icon" aria-label="Email Naeem">${icons.mail}</a><a href="${links.github}" class="social-icon" aria-label="Naeem on GitHub" target="_blank" rel="noopener noreferrer">${icons.github}</a><a href="${links.linkedin}" class="social-icon" aria-label="Naeem on LinkedIn" target="_blank" rel="noopener noreferrer">${icons.linkedin}</a><a href="/publications" class="social-icon" aria-label="Publications">${icons.paper}</a></div>`;
}
function header() {
  return `<header class="site-header glass"><a class="brand" href="/" aria-label="Naeem Ullah home">${avatar('nav-avatar')}<span class="brand-copy"><span class="brand-name">Naeem Ullah</span><span class="brand-role"><span class="role-full"> | AI Engineer</span><span class="role-short"> | AI Engineer</span></span></span></a><nav class="nav-links" id="main-nav" aria-label="Main navigation"><a href="/projects">Projects</a><a href="/about">About</a><a href="/publications">Publications</a><a class="nav-contact" href="/contact">Contact Me</a></nav><button type="button" class="menu-button" id="menu-open" aria-label="Open menu" aria-controls="main-nav" aria-expanded="false"><span aria-hidden="true">☰</span></button></header>`;
}
function footer() {
  return `<footer class="site-footer">${socials()}<p>Naeem Ullah&nbsp; • &nbsp;© ${new Date().getFullYear()}&nbsp; • &nbsp;AI Engineer</p></footer>`;
}
function qaPanel() {
  return `<div class="qa-wrap"><button id="qa-toggle" class="qa-toggle glass" aria-label="Open answers from Naeem" aria-controls="qa-panel" aria-expanded="false">${icons.chat}<span>Ask Naeem</span></button><section id="qa-panel" class="qa-panel glass" aria-label="Interactive answers from Naeem" hidden><div class="qa-heading"><div><span class="eyebrow">ASK NAEEM</span><h2>What would you like to know?</h2></div><button id="qa-close" aria-label="Close answers">×</button></div><div class="qa-presenter"><div class="qa-face"><span class="qa-ring" aria-hidden="true"></span><span class="qa-ring qa-ring-two" aria-hidden="true"></span><img src="/assets/naeem-portrait.png" alt="Naeem Ullah"><span class="qa-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div><div class="qa-presenter-copy"><strong>Naeem Ullah</strong><span>AI Engineer</span><span id="qa-status" class="qa-introduction" role="status">Choose a hiring or client question and I’ll answer in first person.</span></div></div><audio id="qa-audio" preload="none"></audio><div class="qa-questions">${questions.map((item, index) => `<button type="button" class="qa-question" data-question="${index}">${item.q}<span aria-hidden="true">↗</span></button>`).join('')}</div><form class="qa-custom" id="qa-custom-form"><label for="qa-custom-input">Ask anything about my work</label><div><input id="qa-custom-input" maxlength="160" autocomplete="off" placeholder="Ask me something about my work…"><button type="submit">Ask</button></div><p>Answers stay grounded in verified portfolio information.</p></form><div class="qa-answer" hidden><div class="qa-answer-bubble"><span class="eyebrow">MY ANSWER</span><h3 tabindex="-1"></h3><p></p><div class="qa-answer-actions"><button id="qa-play-pause" type="button">Ⅱ Pause</button><button id="qa-replay" type="button">↻ Replay</button><button id="qa-mute" type="button">🔊 Sound</button><button id="qa-stop" type="button">■ Stop</button></div><a class="qa-action text-link" href="/projects">Explore my work →</a></div><button class="qa-back" type="button">← Ask another question</button><p class="qa-disclosure">Recorded voice · answer reviewed by Naeem</p></div><a class="qa-contact" href="/contact">Have a role or project in mind? Let’s talk →</a></section></div>`;
}
function projectVisual(project, detail = false) {
  const evidence = {
    xploiteye: {file: 'xploiteye-walkthrough.jpg', alt: 'Red agent workflow shown in the XploitEye product walkthrough', label: 'FRAME FROM PRODUCT WALKTHROUGH'},
    'voice-authenticity': {file: 'voice-demo-screen.png', alt: 'Actual interface of the public AI-generated voice detection demo', label: 'LIVE DEMO INTERFACE'},
    'cricket-vision': {file: 'cricket-source-frame.png', alt: 'Cricket delivery video frame included in the public project repository', label: 'SOURCE VIDEO / PUBLIC REPOSITORY'}
  }[project.slug];
  if (evidence) return `<div class="project-visual visual-evidence visual-${project.slug} ${detail ? 'visual-large' : ''}"><div class="evidence-window"><div class="evidence-bar"><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>${project.title}</span></div><img src="/assets/${evidence.file}" alt="${evidence.alt}" ${detail ? 'fetchpriority="high"' : 'loading="lazy"'}></div><span class="visual-caption">${evidence.label}</span></div>`;
  const workflow = {
    'legal-ai': `<div class="workflow-flow legal-flow"><div class="workflow-card"><span class="flow-icon">01</span><strong>Source documents</strong><small>Extract · structure · index</small><div class="document-lines"><i></i><i></i><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card"><span class="flow-icon">02</span><strong>Grounded retrieval</strong><small>Find relevant passages</small><div class="search-lines"><i></i><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card"><span class="flow-icon">03</span><strong>Answer + context</strong><small>Source-aware response</small><div class="answer-line"></div></div></div>`,
    'truck-dispatch-automation': `<div class="workflow-flow dispatch-flow"><div class="workflow-card dispatch-card"><span class="flow-icon">01</span><strong>Request + validation</strong><small>Required order data</small><div class="document-lines"><i></i><i></i><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card dispatch-card"><span class="flow-icon">02</span><strong>Rules + calculations</strong><small>Conditions in n8n</small><div class="search-lines"><i></i><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card dispatch-card"><span class="flow-icon">03</span><strong>Dispatch + tracking</strong><small>Status through delivery</small><div class="progress-track"><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card dispatch-card"><span class="flow-icon">WA</span><strong>WhatsApp updates</strong><small>Results to operations</small><div class="answer-line"></div></div></div>`,
    'incident-escalation': `<div class="workflow-flow incident-flow"><div class="workflow-card"><span class="status-dot"></span><strong>Incoming report</strong><small>Intake + case reference</small></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card"><span class="status-dot amber"></span><strong>Severity triage</strong><small>Route + notify owner</small></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card"><span class="status-dot"></span><strong>Escalation</strong><small>Timed follow-up</small></div></div>`,
    'fulfillment-workflows': `<div class="workflow-flow fulfillment-flow"><div class="workflow-card order-card"><span class="flow-icon">PO</span><strong>Purchase order</strong><small>Items · quantity · changes</small><div class="document-lines"><i></i><i></i><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card order-card"><span class="flow-icon">SH</span><strong>Shipment review</strong><small>Tracking · contact · status</small><div class="progress-track"><i></i></div></div><div class="flow-arrow" aria-hidden="true">→</div><div class="workflow-card order-card"><span class="flow-icon">LOG</span><strong>Activity history</strong><small>Decisions in one place</small><div class="document-lines"><i></i><i></i></div></div></div>`
  }[project.slug];
  return `<div class="project-visual visual-workflow visual-${project.slug} ${detail ? 'visual-large' : ''}"><div class="workflow-heading"><span>WORKFLOW / ${project.type.toUpperCase()}</span><span aria-hidden="true">↗</span></div>${workflow}<span class="visual-caption">ILLUSTRATIVE WORKFLOW · NO PRIVATE DATA</span></div>`;
}
function projectLink(item, className = '') {
  return item.external ? external(item.href, item.label, className) : `<a class="${className}" href="${item.href}">${item.label}</a>`;
}
function projectRow(project) {
  return `<li class="post-row"><div class="row-meta"><span>${project.year}</span><span>${project.type}</span></div><div class="post-main"><h3><a href="${projectPath(project)}">${project.title}</a></h3><div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><p>${project.excerpt}</p><a class="text-link" href="${projectPath(project)}">Read the case study <span aria-hidden="true">→</span></a></div></li>`;
}
function profileCard() {
  return `<div class="profile-card glass">${avatar('portrait')}<h3>Naeem Ullah</h3><p>AI Engineer</p><p>AB Ark Private Limited</p>${socials()}<a class="card-publication" href="/publications">View my publication <span aria-hidden="true">↗</span></a></div>`;
}
function contactClosing() {
  return `<section class="contact-closing" id="contact"><span class="eyebrow">HAVE A PROBLEM WORTH SOLVING?</span><h2>Let’s build something useful.</h2><p>From an AI product idea to a working MVP, backend, and deployment — I’m open to thoughtful conversations.</p><div class="closing-actions"><a class="glass pill primary-pill" href="${links.email}">Email me ↗</a><a class="glass pill" href="/contact">Contact details →</a></div></section>`;
}
function home() {
  return `<canvas class="ambient-canvas" id="ambient-canvas" aria-hidden="true"></canvas><main class="home-main"><section class="hero"><div class="hero-inner"><p class="hero-eyebrow"><span>Hi,</span> I’m</p><h1>Naeem Ullah</h1><p class="hero-tagline" aria-live="polite"><span id="typed-tagline">Building AI products from first idea to deployed software.</span><span class="typing-caret" aria-hidden="true"></span></p><div class="hero-actions"><a class="glass pill" href="/projects">Explore my projects</a><button class="glass pill" id="tagline-button">Another line ↻</button></div><p class="tagline-note">AI agents · RAG · workflow automation · computer vision · voice AI · Python backends.</p></div></section><section class="home-profile">${profileCard()}<div class="profile-copy"><span class="eyebrow">THE ENGINEER BEHIND THE WORK</span><p class="profile-summary">AI Engineer building products across company, client, and freelance work. I connect models to Python services, usable interfaces, and deployment workflows, with hands-on experience in security, voice AI, computer vision, and IEEE-published research.</p><a class="text-link" href="/about">More about Naeem →</a></div></section><section class="delivery-section"><div class="section-heading"><span class="eyebrow">FROM IDEA TO RELEASE</span><h2>More than a working demo.</h2><p class="section-description">I work across the layers that turn an AI idea into a product people can use and a team can maintain.</p></div><div class="delivery-grid"><article><span>01 / DEFINE</span><h3>Find the real workflow</h3><p>Clarify the user problem, data, constraints, and what success looks like before building.</p></article><article><span>02 / BUILD</span><h3>Connect the system</h3><p>Develop Python APIs, AI or retrieval workflows, data services, and clear web interfaces.</p></article><article><span>03 / SHIP</span><h3>Prepare for deployment</h3><p>Containerize with Docker, use CI/CD, and deploy on Linux or Azure Container Apps when the project calls for it.</p></article><article><span>04 / STRENGTHEN</span><h3>Evaluate and secure</h3><p>Test model behavior and failure cases, review security risks, and make the outcome understandable.</p></article></div></section><section class="latest-section" id="featured"><div class="section-heading"><span class="eyebrow">SELECTED WORK</span><h2>Featured Projects</h2><p class="section-description">Products, client workflows, and research with a clear problem behind each build.</p></div><ul class="post-list">${projects.map(projectRow).join('')}</ul><a class="all-posts-link" href="/projects">All Projects →</a></section>${contactClosing()}</main>`;
}
function pageTitle(title, description = '', eyebrow = '') {
  return `<div class="page-heading">${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h1>${title}</h1>${description ? `<p>${description}</p>` : ''}</div>`;
}
function portfolio() {
  return `<main class="inner-main portfolio-main">${pageTitle('Projects', 'Selected AI engineering, research, and client work. Each case study explains the problem, engineering decisions, and result.', 'SELECTED WORK')}<div class="project-grid">${projects.map(project => `<article class="project-card"><a class="visual-link" href="${projectPath(project)}" aria-label="Read about ${project.title}">${projectVisual(project)}</a><div class="project-card-copy"><span class="eyebrow">${project.type} · ${project.year}</span><h2><a href="${projectPath(project)}">${project.title}</a></h2><p>${project.excerpt}</p><a class="text-link" href="${projectPath(project)}">Read the case study →</a></div></article>`).join('')}</div>${contactClosing()}</main>`;
}
function about() {
  return `<main class="inner-main about-main">${pageTitle('About', 'AI engineering backed by product delivery, client work, security practice, and published research.', 'THE JOURNEY')}<div class="about-layout"><aside class="about-person">${avatar('portrait')}<h3>Naeem Ullah</h3><p>AI Engineer</p><p>Lahore, Pakistan</p>${socials()}</aside><article class="about-prose"><h2>I build AI that holds up beyond the demo.</h2><p>I develop AI applications and Python backend systems for teams and clients. My work spans agentic systems, knowledge retrieval, document intelligence, voice AI, computer vision, workflow automation, and the APIs and interfaces that make those capabilities useful.</p><p>At AB Ark Private Limited and through client and freelance engagements, I have worked from problem definition through product implementation. I connect model behavior and business rules to backend services, web interfaces, integrations, testing, containerization, and deployment workflows, so an MVP has a clear path toward a dependable product.</p><p>Security is a practical part of my work: XploitEye demonstrates authorized assessment, vulnerability context, controlled validation, remediation, and reporting. I also work with generative video and voice workflows using Google Flow, Gemini, ComfyUI, ElevenLabs, and HeyGen.</p><div class="about-facts"><div><span class="eyebrow">PROFESSIONAL WORK</span><strong>AI Engineering</strong><p>AB Ark Private Limited · client & freelance engagements</p></div><div><span class="eyebrow">BACKGROUND</span><strong>BS Data Science</strong><p>University of the Punjab · PUCIT/FCIT</p></div><div><span class="eyebrow">RESEARCH</span><strong>IEEE FIT 2025</strong><p>Computer vision for cricket delivery analysis</p></div></div><h2>Areas of focus</h2><div class="skill-groups"><span>Python & FastAPI</span><span>Generative AI & RAG</span><span>Agentic systems</span><span>n8n & process automation</span><span>React & Next.js</span><span>Docker & CI/CD</span><span>Azure Container Apps</span><span>AI security</span><span>Generative video</span><span>Computer vision</span><span>Audio AI</span></div><p class="about-next">Explore <a href="/projects">my projects</a>, read <a href="/publications/beyond-the-naked-eye">my paper</a>, or <a href="/contact">get in touch</a>.</p></article></div>${contactClosing()}</main>`;
}
function publications() {
  return `<main class="inner-main publications-main">${pageTitle('Publications', 'Peer-reviewed research and the engineering behind it.', 'RESEARCH')}<article class="publication-card"><span class="publication-index">01 / 01</span><div><div class="publication-meta">IEEE FIT 2025 <span>•</span> COMPUTER VISION</div><h2><a href="/publications/beyond-the-naked-eye">Beyond the Naked Eye: Automated Delivery Analysis in Cricket with Computer Vision</a></h2><p>Single-camera cricket delivery analysis using YOLOv5s detection, Kalman filtering, and pitch-coordinate mapping through homography.</p><p class="publication-doi">DOI: 10.1109/FIT67061.2025.11333604</p><div class="publication-actions"><a href="/publications/beyond-the-naked-eye" class="text-link">Read the full paper here →</a>${external(links.paper, 'View on IEEE Xplore ↗', 'text-link')}${external(links.doi, 'Open DOI ↗', 'text-link')}<a class="text-link" href="/projects/cricket-ball-tracking">Explore the project →</a></div></div></article><p class="research-note">The full six-page paper is available to read in this portfolio. Other technical investigations appear as projects.</p>${contactClosing()}</main>`;
}
function paperPage() {
  return `<main class="inner-main paper-main"><a class="back-link" href="/publications">← All publications</a><header class="paper-heading"><span class="eyebrow">IEEE FIT 2025 · COMPUTER VISION</span><h1>Beyond the Naked Eye: Automated Delivery Analysis in Cricket with Computer Vision</h1><p class="paper-authors">Muhammad Shoaib Ahmad · Rana Umer Riaz · Naeem Ullah · Faisal Bukhari</p><p>Single-camera ball detection, tracking, pitch mapping, and delivery classification for more accessible cricket analysis.</p><div class="paper-actions"><a class="glass pill" href="#paper-reader">Read the paper below ↓</a>${external(links.paper, 'View on IEEE Xplore ↗', 'glass pill')}</div></header><div class="paper-summary"><div><span class="eyebrow">THE QUESTION</span><p>Can a single standard camera provide useful delivery analysis without the cost and complexity of a multi-camera tracking system?</p></div><div><span class="eyebrow">THE METHOD</span><p>YOLOv5s detects the ball, a Kalman filter maintains the trajectory, and homography maps positions onto the pitch for delivery-length analysis.</p></div><div><span class="eyebrow">THE LIMIT</span><p>The paper reports approximately 50 FPS and 8.2 cm mean pitch-distance error in its evaluation, while noting sensitivity to camera calibration.</p></div></div><section id="paper-reader" class="paper-reader"><div class="reader-heading"><div><span class="eyebrow">FULL PAPER</span><h2>Read in the portfolio</h2></div><a class="text-link" href="/assets/beyond-the-naked-eye.pdf" target="_blank" rel="noopener noreferrer">Open full-size PDF ↗</a></div><iframe title="Beyond the Naked Eye research paper PDF" src="/assets/beyond-the-naked-eye.pdf#view=FitH" loading="lazy"></iframe><p>If your browser does not display embedded PDFs, <a href="/assets/beyond-the-naked-eye.pdf">open the PDF directly</a>.</p></section>${contactClosing()}</main>`;
}
function contact() {
  return `<main class="inner-main contact-main">${pageTitle('Contact Me', 'Let’s talk about an idea, a project, or an opportunity.', 'GET IN TOUCH')}<div class="contact-card glass"><span class="eyebrow">OPEN TO CONVERSATIONS</span><h2>Tell me what you’re building.</h2><p>For AI engineering, Python backend work, research collaboration, or a role that brings them together, connect with me through the links below.</p><div class="contact-options"><a class="contact-option" href="${links.email}">${icons.mail}<span><strong>Email</strong><small>naeem.ullah@gmail.com ↗</small></span></a>${external(links.linkedin, `${icons.linkedin}<span><strong>LinkedIn</strong><small>Message me about work or collaboration ↗</small></span>`, 'contact-option')}${external(links.github, `${icons.github}<span><strong>GitHub</strong><small>Explore my public code ↗</small></span>`, 'contact-option')}<a class="contact-option" href="/publications">${icons.paper}<span><strong>Publications</strong><small>Read my IEEE research ↗</small></span></a></div></div></main>`;
}
function demoSection(project) {
  if (project.demo === 'video') return `<section class="case-demo" id="demo"><span class="eyebrow">RECORDED PRODUCT WALKTHROUGH</span><h2>See the complete workflow</h2><p>The demonstration shows XploitEye moving from reconnaissance to a controlled lab validation, remediation handoff, web assessment, and scan-aware answers.</p><div class="demo-chapters" aria-label="Jump to a video chapter"><button type="button" data-start="498"><span>08:18</span> Network assessment</button><button type="button" data-start="674"><span>11:14</span> Red agent</button><button type="button" data-start="972"><span>16:12</span> Blue remediation</button><button type="button" data-start="1165"><span>19:25</span> Web assessment</button><button type="button" data-start="1522"><span>25:22</span> Security advisor</button></div><div class="embed-shell video-embed"><iframe src="https://www.youtube-nocookie.com/embed/9R0QUzMMXsA?rel=0" title="XploitEye product walkthrough" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="embed-fallback">If the video cannot play here, ${external('https://youtu.be/9R0QUzMMXsA', 'open it on YouTube ↗', 'text-link')}.</p></section>`;
  if (project.demo === 'voice') return `<section class="case-demo" id="demo"><span class="eyebrow">INTERACTIVE DEMO</span><h2>Test a voice sample</h2><p>Use the embedded research demo to explore the inference workflow. Results are experimental and should not be treated as a definitive authenticity judgment.</p><div class="embed-shell voice-embed"><iframe src="https://naeemullah11111-deepfake-voice-qa-lite.hf.space" title="AI-generated voice detection interactive demo" loading="lazy" allow="microphone; clipboard-read; clipboard-write"></iframe></div><p class="embed-fallback">If the embedded demo is unavailable, ${external('https://huggingface.co/spaces/naeemullah11111/deepfake-voice-qa-lite', 'open the Space on Hugging Face ↗', 'text-link')}.</p></section>`;
  return '';
}
function caseStudy(project) {
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  return `<main class="inner-main case-main"><a class="back-link" href="/projects">← All projects</a><div class="case-heading"><span class="eyebrow">${project.type} · ${project.year}</span><h1>${project.title}</h1><p>${project.excerpt}</p></div>${projectVisual(project, true)}<div class="case-layout"><aside class="case-side"><div class="case-side-block"><span class="eyebrow">ENGINEERING FOCUS</span><p>${project.role}</p></div><div class="case-side-block"><span class="eyebrow">STACK</span><div class="stack-list">${project.stack.map(item => `<span>${item}</span>`).join('')}</div></div>${project.links.length ? `<div class="case-side-block"><span class="eyebrow">EXPLORE</span>${project.links.map(item => projectLink(item, 'side-link')).join('')}</div>` : ''}${project.note ? `<p class="case-note">${project.note}</p>` : ''}</aside><article class="case-body"><section><span class="eyebrow">01 / THE PROBLEM</span><h2>What needed solving</h2><p>${project.problem}</p></section><section><span class="eyebrow">02 / THE BUILD</span><h2>What was built</h2><p>${project.contribution}</p></section><section><span class="eyebrow">03 / THE APPROACH</span><h2>How it works</h2><ol>${project.approach.map(item => `<li>${item}</li>`).join('')}</ol></section><section><span class="eyebrow">04 / THE RESULT</span><h2>What it delivers</h2><p>${project.outcome}</p></section></article></div>${project.slug === 'cricket-vision' ? `<figure class="research-figure"><img src="/assets/cricket-paper-method.png" loading="lazy" alt="Frame extraction, YOLOv5 detection, Kalman tracking, and analytics pipeline from the published paper"><figcaption>System architecture from the co-authored IEEE FIT 2025 paper. <a href="/publications/beyond-the-naked-eye">Read the full paper →</a></figcaption></figure>` : ''}${demoSection(project)}<div class="case-next"><span class="eyebrow">NEXT PROJECT</span><a href="${projectPath(next)}">${next.title} <span aria-hidden="true">↗</span></a></div>${contactClosing()}</main>`;
}
function notFound() {
  return `<main class="inner-main not-found">${pageTitle('Page not found')}<p>That page isn’t part of this portfolio.</p><a class="text-link" href="/">Back to homepage →</a></main>`;
}

let content;
if (path === '/') content = home();
else if (path === '/portfolio' || path === '/projects') content = portfolio();
else if (path === '/about') content = about();
else if (path === '/publications') content = publications();
else if (path === '/publications/beyond-the-naked-eye') content = paperPage();
else if (path === '/contact') content = contact();
else if (path.startsWith('/portfolio/') || path.startsWith('/projects/')) {
  const routeSlug = path.split('/')[2];
  const project = projects.find(item => item.slug === routeSlug || projectRoutes[item.slug] === routeSlug);
  content = project ? caseStudy(project) : notFound();
} else content = notFound();
app.innerHTML = `<div class="site-wrap ${path === '/' ? 'is-home' : 'is-inner'}">${header()}${content}${footer()}${qaPanel()}</div>`;
const pageName = path === '/about' ? 'About' : path === '/publications' ? 'Publications' : path === '/publications/beyond-the-naked-eye' ? 'Beyond the Naked Eye' : path === '/contact' ? 'Contact' : (path === '/portfolio' || path === '/projects') ? 'Projects' : projects.find(item => path === projectPath(item) || path === `/portfolio/${item.slug}`)?.title || 'Projects';
document.title = path === '/' ? 'Naeem Ullah | AI Engineer' : `${pageName} | Naeem Ullah`;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === path || ((path.startsWith('/portfolio/') || path.startsWith('/projects/')) && link.getAttribute('href') === '/projects') || (path.startsWith('/publications/') && link.getAttribute('href') === '/publications')) link.setAttribute('aria-current', 'page');
});

const menuButton = document.querySelector('#menu-open');
const mainNavigation = document.querySelector('#main-nav');
function setMenuOpen(open, returnFocus = false) {
  mainNavigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuButton.querySelector('span').textContent = open ? '×' : '☰';
  if (open) mainNavigation.querySelector('a').focus();
  else if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenuOpen(!mainNavigation.classList.contains('open')));
mainNavigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

const qaToggle = document.querySelector('#qa-toggle');
const qaPanelElement = document.querySelector('#qa-panel');
const questionList = document.querySelector('.qa-questions');
const customForm = document.querySelector('#qa-custom-form');
const customInput = document.querySelector('#qa-custom-input');
const answerBox = document.querySelector('.qa-answer');
const qaAudio = document.querySelector('#qa-audio');
const qaStatus = document.querySelector('#qa-status');
const playPauseButton = document.querySelector('#qa-play-pause');
const replayButton = document.querySelector('#qa-replay');
const muteButton = document.querySelector('#qa-mute');
const stopButton = document.querySelector('#qa-stop');
let audioManifestPromise;
function getAudioManifest() {
  if (!audioManifestPromise) audioManifestPromise = fetch('/assets/answers/audio.json').then(response => response.ok ? response.json() : null).catch(() => null);
  return audioManifestPromise;
}
let activeQuestion = null;
let audioRun = 0;
let lastQuestionButton = null;
function setQaStatus(message, state = 'idle') {
  qaStatus.textContent = message;
  qaPanelElement.dataset.state = state;
  qaPanelElement.classList.toggle('is-speaking', state === 'speaking');
}
function updateAudioControls() {
  playPauseButton.textContent = qaAudio.paused ? (qaAudio.ended ? '▶ Play again' : '▶ Resume') : 'Ⅱ Pause';
  muteButton.textContent = qaAudio.muted ? '🔇 Muted' : '🔊 Sound';
  muteButton.setAttribute('aria-pressed', String(qaAudio.muted));
}
function localAudioPath(value) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value, location.origin);
    return url.origin === location.origin && url.pathname.startsWith('/assets/answers/') ? url.href : null;
  } catch { return null; }
}
function stopAnswer(reset = false) {
  audioRun += 1;
  qaAudio.pause();
  qaAudio.currentTime = 0;
  if (reset) {
    qaAudio.removeAttribute('src');
    qaAudio.load();
    setQaStatus('Ask about my work, projects, engineering approach, or how I can help your team.');
  } else {
    setQaStatus('Answer stopped. Replay it whenever you’re ready.', 'finished');
  }
  updateAudioControls();
}
async function loadAndPlayAnswer(item) {
  audioRun += 1;
  const run = audioRun;
  qaAudio.pause();
  qaAudio.removeAttribute('src');
  qaAudio.load();
  setQaStatus('Preparing my answer…', 'loading');
  const manifest = await getAudioManifest();
  if (run !== audioRun || qaPanelElement.hidden || activeQuestion !== item) return;
  const recording = manifest?.answers?.[item.id];
  const source = recording && recording.text === item.a ? localAudioPath(recording.src) : null;
  if (!source) {
    setQaStatus('You can read my verified answer below.', 'finished');
    playPauseButton.disabled = true;
    replayButton.disabled = true;
    stopButton.disabled = true;
    return;
  }
  playPauseButton.disabled = false;
  replayButton.disabled = false;
  stopButton.disabled = false;
  qaAudio.src = source;
  qaAudio.load();
  try {
    await qaAudio.play();
  } catch (error) {
    if (run !== audioRun) return;
    setQaStatus(error.name === 'NotAllowedError' ? 'Press play to hear my answer.' : 'The audio is unavailable. You can read my answer below.', 'paused');
    updateAudioControls();
  }
}
function showAnswer(item, questionText = item.q) {
  activeQuestion = item;
  answerBox.querySelector('h3').textContent = questionText;
  answerBox.querySelector('p').textContent = item.a;
  const action = answerBox.querySelector('.qa-action');
  action.href = item.href;
  action.textContent = item.cta;
  questionList.hidden = true;
  customForm.hidden = true;
  answerBox.hidden = false;
  qaPanelElement.scrollTop = 0;
  answerBox.querySelector('h3').focus({preventScroll: true});
  loadAndPlayAnswer(item);
}
function matchCustomQuestion(value) {
  const normalized = value.toLowerCase();
  const rules = [
    [/(tell.*yourself|about yourself|who are you|background)/, 'intro'],
    [/(why.*(fit|hire)|good fit|your team)/, 'fit'],
    [/(personally|ownership|what.*built)/, 'ownership'],
    [/(mvp|production|deploy|devops|docker|azure)/, 'production'],
    [/(client|freelanc|logistics|truck|dispatch)/, 'clients'],
    [/(automation|n8n|whatsapp|rag|voice|computer vision|systems)/, 'systems'],
    [/(reliable|safe|security|evaluation|risk|failure)/, 'reliability'],
    [/(challeng|xploiteye)/, 'challenge'],
    [/(experience|current role|research|ieee|education)/, 'background'],
    [/(start|contact|work together|available)/, 'start']
  ];
  const match = rules.find(([pattern]) => pattern.test(normalized));
  return match ? questions.find(item => item.id === match[1]) : null;
}
function setQaOpen(open) {
  qaPanelElement.hidden = !open;
  qaToggle.setAttribute('aria-expanded', String(open));
  qaToggle.setAttribute('aria-label', open ? 'Close quick answers about Naeem' : 'Open quick answers about Naeem');
  if (open) document.querySelector('#qa-close').focus();
  else {
    stopAnswer(true);
    qaToggle.focus();
  }
}
qaToggle.addEventListener('click', () => setQaOpen(qaPanelElement.hidden));
document.querySelector('#qa-close').addEventListener('click', () => setQaOpen(false));
document.querySelectorAll('.qa-question').forEach(button => button.addEventListener('click', () => {
  const item = questions[Number(button.dataset.question)];
  lastQuestionButton = button;
  showAnswer(item);
}));
customForm.addEventListener('submit', event => {
  event.preventDefault();
  const questionText = customInput.value.trim();
  if (!questionText) return customInput.focus();
  const match = matchCustomQuestion(questionText);
  const item = match || {id: 'fallback', q: questionText, a: fallbackAnswer, href: '/contact', cta: 'Contact me →'};
  showAnswer(item, questionText);
});
document.querySelector('.qa-back').addEventListener('click', () => {
  stopAnswer(true);
  answerBox.hidden = true;
  questionList.hidden = false;
  customForm.hidden = false;
  (lastQuestionButton || questionList.querySelector('button')).focus();
});
playPauseButton.addEventListener('click', async () => {
  if (!qaAudio.getAttribute('src')) return activeQuestion && loadAndPlayAnswer(activeQuestion);
  if (qaAudio.ended || (qaAudio.duration && qaAudio.currentTime >= qaAudio.duration - .2)) qaAudio.currentTime = 0;
  try { qaAudio.paused ? await qaAudio.play() : qaAudio.pause(); }
  catch { setQaStatus('The audio is unavailable. You can read my answer below.', 'paused'); }
});
replayButton.addEventListener('click', async () => {
  if (!qaAudio.getAttribute('src')) return activeQuestion && loadAndPlayAnswer(activeQuestion);
  qaAudio.currentTime = 0;
  try { await qaAudio.play(); } catch { setQaStatus('Press play to hear my answer.', 'paused'); }
});
muteButton.addEventListener('click', () => { qaAudio.muted = !qaAudio.muted; updateAudioControls(); });
stopButton.addEventListener('click', () => stopAnswer());
qaAudio.addEventListener('play', () => { setQaStatus('Naeem is answering…', 'speaking'); updateAudioControls(); });
qaAudio.addEventListener('pause', () => {
  if (!qaAudio.ended && qaAudio.currentTime > 0 && qaPanelElement.dataset.state === 'speaking') setQaStatus('Answer paused.', 'paused');
  updateAudioControls();
});
qaAudio.addEventListener('ended', () => { setQaStatus('Answer complete. Ask another question.', 'finished'); updateAudioControls(); });
qaAudio.addEventListener('error', () => {
  if (!qaAudio.getAttribute('src')) return;
  setQaStatus('The audio is unavailable. You can read my answer below.', 'paused');
  updateAudioControls();
});
qaAudio.addEventListener('timeupdate', () => {
  const progress = qaAudio.duration ? qaAudio.currentTime / qaAudio.duration : 0;
  qaPanelElement.style.setProperty('--voice-progress', String(progress));
});
window.addEventListener('pagehide', () => stopAnswer(true));
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!qaPanelElement.hidden) setQaOpen(false);
  else if (mainNavigation.classList.contains('open')) setMenuOpen(false, true);
});
document.querySelectorAll('.demo-chapters button').forEach(button => button.addEventListener('click', () => {
  const frame = document.querySelector('.video-embed iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/9R0QUzMMXsA?rel=0&start=${Number(button.dataset.start)}&autoplay=1`;
  document.querySelectorAll('.demo-chapters button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  frame.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center'});
}));

if (path === '/') {
  const lines = [
    'Building AI products from first idea to deployed software.',
    'From prototype to product: AI, backend, interface, and deployment.',
    'Making complex workflows useful, secure, and ready to grow.',
    'Connecting generative AI to software people can actually use.'
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
