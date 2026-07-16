#!/usr/bin/env node
/** 루트 홈 스모크: 반응형 오버플로 + /event 카드 href assert + 캡처
 *  전제: http://127.0.0.1:<port>/ 서빙 중 (기본 3111) */
import { chromium } from "playwright";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const port = process.argv[2] || "3111";
const url = `http://127.0.0.1:${port}/`;
const out = resolve(__dir, "out");
const results = [];
const browser = await chromium.launch();

for (const w of [390, 1600]) {
  const p = await browser.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  results.push([`${w}px 가로 오버플로 없음 (scrollWidth ${sw})`, sw <= w]);
  await p.screenshot({ path: `${out}/root-${w}.png`, fullPage: true });
  if (w === 1600) {
    // /event 카드는 href assert 한정 (로컬 서빙엔 /event 미존재 — 설계문서)
    results.push(["/event 카드 존재", (await p.locator('a.card[href="/event/"]').count()) === 1]);
    results.push(["홈 채용 카드 1개 (AX 숨김)", (await p.locator('a.card[href^="/recruit/"]').count()) === 1]);
    results.push(["채용 앵커 #recruit 존재", (await p.locator("#recruit").count()) === 1]);
    results.push(["폰트 로드", await p.evaluate(() => document.fonts.check('16px "Pretendard"'))]);
  }
  await p.close();
}

// 채용 상세 2종: 로드 + 반응형
for (const slug of ["recruit/platform-lead", "recruit/ax-engineer"]) {
  for (const w of [390, 1600]) {
    const p = await browser.newPage({ viewport: { width: w, height: 900 } });
    await p.goto(`http://127.0.0.1:${port}/${slug}/`, { waitUntil: "networkidle" });
    const sw = await p.evaluate(() => document.documentElement.scrollWidth);
    const h1 = await p.locator("h1").first().textContent();
    results.push([`/${slug} (${w}px) h1="${h1?.trim()}" 오버플로 없음(${sw})`, sw <= w && !!h1?.trim()]);
    await p.close();
  }
}
await browser.close();

let fail = 0;
for (const [name, ok] of results) { console.log(`${ok ? "✅" : "❌"} ${name}`); if (!ok) fail = 1; }
process.exit(fail);
