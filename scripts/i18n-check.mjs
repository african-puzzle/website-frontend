// Compares en/pcm against fr (source). Exit 1 on any problem.
import { readFileSync } from 'node:fs';

const load = (l) => JSON.parse(readFileSync(new URL(`../src/i18n/translations/${l}.json`, import.meta.url), 'utf8'));
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const ph = (s) => [...new Set(s.match(/\{[^}]+\}/g) ?? [])].sort().join(',');
const problems = [];

function walk(locale, src, tgt, path) {
  for (const k of Object.keys(tgt)) if (!(k in src)) problems.push(`${locale}: ${path}${k}: extra key`);
  for (const [k, s] of Object.entries(src)) {
    const key = path + k;
    if (!(k in tgt)) { problems.push(`${locale}: ${key}: missing key`); continue; }
    const v = tgt[k];
    if (isObj(s) !== isObj(v)) problems.push(`${locale}: ${key}: shape mismatch`);
    else if (isObj(s)) walk(locale, s, v, `${key}.`);
    else if (typeof v !== 'string' || v.trim() === '') problems.push(`${locale}: ${key}: empty or non-string`);
    else if (ph(s) !== ph(v)) problems.push(`${locale}: ${key}: placeholders differ (fr ${ph(s) || 'none'}, ${locale} ${ph(v) || 'none'})`);
  }
}

const fr = load('fr');
for (const l of ['en', 'pcm']) walk(l, fr, load(l), '');
problems.forEach((p) => console.error(p));
if (problems.length) process.exit(1);
console.log('i18n: ok');
