// Entry program for make.fun's post-x-promote-make-your-own-bounty-01 bounty
// (Node 22, standard library only).
//
// The entry itself is one post on X, named in POST.json at the repository root: a post
// of the entrant's own that quotes make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, with a photo of
// its own attached. This program only hands that address to the grader: it validates
// the file's shape, then copies it byte for byte to POST.json in the output directory,
// where the house reads the address and scores the post itself (its replies, reposts
// and quotes, one point each). Nothing this program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'POST.json');

let raw: string;
try {
  raw = readFileSync(source, 'utf8');
} catch {
  fail(`POST.json could not be read from ${source}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  fail('POST.json is not valid JSON');
}

const url = (parsed as { url?: unknown })?.url;
if (typeof url !== 'string' || url.length === 0) {
  fail('POST.json must hold a "url" string naming the post on X');
}
if (!/^https:\/\/(x\.com|twitter\.com)\//.test(url)) {
  // The address is the post's address on X; the same post on twitter.com passes too.
  fail(`POST.json url is not an X address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
