import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'dist/app.js'), 'utf8');
const block = source.slice(source.indexOf('const questions ='), source.indexOf('const path ='));
const questions = vm.runInNewContext(block + ';questions');
const output = {
  portrait: 'dist/assets/naeem-portrait.png',
  direction: 'A calm, confident, conversational English male voice. Direct eye contact, natural blinking, restrained head movement, no exaggerated gestures, no presenter-style sales pitch. Preserve Naeem’s identity, suit, and dark olive setting. Match the exact script and review lip synchronization, pronunciation, and visual consistency before publishing.',
  answers: questions.map(({id, q, a}) => ({id, question: q, script: a}))
};
process.stdout.write(JSON.stringify(output, null, 2) + '\n');
