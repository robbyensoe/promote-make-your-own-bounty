// Entry program for the make.fun bounty post-x-promote-make-your-own-bounty-01
// (Node 22, standard library only — no dependencies).
//
// What the entry is: a single post on X, published from the entrant's own
// public account, quoting make.fun's make-your-own-bounty announcement
// (https://x.com/makefunai/status/2124915864336236646) with an original photo
// attached. POST.json at the repository root holds that post's URL.
//
// What this program does: it is only the courier. It reads POST.json from the
// bot directory, checks that the file parses and that its "url" really is an
// X post address, then copies the file unchanged into the output directory.
// The house takes the address from there and scores the post itself — one
// point per reply, repost, and quote; views and likes count for nothing.
//
// Run it exactly as the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function die(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const postFile = join(botDir, 'POST.json');

let text: string;
try {
  text = readFileSync(postFile, 'utf8');
} catch {
  die(`cannot read POST.json at ${postFile}`);
}

let data: unknown;
try {
  data = JSON.parse(text);
} catch {
  die('POST.json is not valid JSON');
}

const url = (data as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || url.trim() === '') {
  die('POST.json must contain a non-empty "url" string');
}
if (!/^https:\/\/(x\.com|twitter\.com)\/\S+$/.test(url)) {
  die(`"url" is not an X post address: ${url}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, 'POST.json'));
console.log(`POST.json copied to ${join(outputDir, 'POST.json')}`);
