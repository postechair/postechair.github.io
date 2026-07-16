#!/usr/bin/env node
/** 루트 홈 링크 assert — docs/ (설계문서 검증 항목) */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const docs = resolve(__dir, "../docs");
const html = readFileSync(join(docs, "index.html"), "utf8");

const REQUIRED = [
  ["행사 가이드(/event/)", 'href="/event/"'],
  ["문의 mailto", "postech-air@postech.ac.kr"],
  ["공식 홈페이지", "https://postech.ac.kr"],
  ["채용 카드 — 플랫폼 리드", 'href="/recruit/platform-lead/"'],
  ["채용 카드 — AX 엔지니어", 'href="/recruit/ax-engineer/"'],
];

let fail = 0;
for (const [name, needle] of REQUIRED) {
  const ok = html.includes(needle);
  console.log(`${ok ? "✅" : "❌"} ${name}`);
  if (!ok) fail = 1;
}

/* 채용 페이지 — 존재 + 핵심 문구/링크 */
const SUBPAGES = [
  ["recruit 허브", "recruit/index.html", ['href="/recruit/platform-lead/"', 'href="/recruit/ax-engineer/"', "mailto:postech-air@postech.ac.kr"]],
  ["platform-lead", "recruit/platform-lead/index.html", ["AI 플랫폼 리드 엔지니어", "가속과 통제를 동시에 하는 일", 'href="/recruit/"', "mailto:postech-air@postech.ac.kr", "근무지 포항공과대학교"]],
  ["ax-engineer", "recruit/ax-engineer/index.html", ["AX 엔지니어", "사내 FDE", 'href="/recruit/"', "mailto:postech-air@postech.ac.kr", "포트폴리오 또는 GitHub"]],
];
for (const [name, rel, needles] of SUBPAGES) {
  let h;
  try {
    h = readFileSync(join(docs, rel), "utf8");
  } catch {
    console.log(`❌ ${name}: 파일 없음`);
    fail = 1;
    continue;
  }
  const missing = needles.filter((n) => !h.includes(n));
  console.log(`${missing.length === 0 ? "✅" : "❌"} ${name}${missing.length ? `: 누락 ${missing.join(", ")}` : ""}`);
  if (missing.length) fail = 1;
}

/* 대외 비공개 내용 유출 차단 — 전체 HTML에 채용 운영 메모(JD 부록) 문구가 없어야 함 */
const FORBIDDEN = ["대외 비공개", "채용 운영 메모", "보상 격차", "관료 드래그", "성장 트랙 사전 설계", "AX 솔루션 엔지니어"];
const htmlFiles = readdirSync(docs, { recursive: true }).filter((f) => String(f).endsWith(".html"));
let leaks = [];
for (const f of htmlFiles) {
  const h = readFileSync(join(docs, String(f)), "utf8");
  for (const bad of FORBIDDEN) if (h.includes(bad)) leaks.push(`${f}: "${bad}"`);
}
console.log(`${leaks.length === 0 ? "✅" : "❌"} 내부 메모 유출 없음 (${htmlFiles.length}개 HTML 검사)${leaks.length ? `: ${leaks.join(" · ")}` : ""}`);
if (leaks.length) fail = 1;

process.exit(fail);
