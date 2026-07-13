#!/usr/bin/env node
/** 루트 홈 링크 assert — docs/index.html (설계문서 검증 항목) */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(__dir, "../docs/index.html"), "utf8");

const REQUIRED = [
  ["행사 가이드(/event/)", 'href="/event/"'],
  ["문의 mailto", "postech-air@postech.ac.kr"],
  ["공식 홈페이지", "https://postech.ac.kr"],
];

let fail = 0;
for (const [name, needle] of REQUIRED) {
  const ok = html.includes(needle);
  console.log(`${ok ? "✅" : "❌"} ${name}`);
  if (!ok) fail = 1;
}
process.exit(fail);
