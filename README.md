# POSTECH AI 시리즈 — 루트 홈 (postechair.github.io)

POSTECH AIR센터의 AI 시리즈 공개 대표 페이지. 미니멀+확장 구조 —
"진행 중인 프로그램" 카드 그리드에 카드를 추가하는 것만으로 확장한다.

- 배포 주소: https://postechair.github.io/
- 설계: office-hours 2026-07-13 (`~/.gstack/projects/postechair-event/mus-main-design-20260713-root.md`)
- /event (행사 가이드)는 별도 repo `postechair/event`가 서빙 — 이 repo와 무관하게 공존

## 원칙 (설계문서 전제)

- **카드는 공개 인터넷에서 접근 가능한 공개 URL 한정** — 내부 시스템 URL 게재 금지
- 개인정보·미공개 정보 게재 금지 (ws13 콘텐츠 이식은 별도 검토 필요)
- POSTECH AIR DS v1.0 토큰만 사용
- basePath 는 코드 기본값 `""` 고정 (env 의존 금지 — /event repo와 다름에 주의)

## 개발 · 배포

```bash
pnpm install
pnpm dev          # http://localhost:3110/

pnpm deploy:docs  # next build → out/ → docs/ (+ .nojekyll)
node visual/verify-links.mjs
mkdir -p visual/serve && ln -s ../../docs visual/serve/root 2>/dev/null
(cd docs && python3 -m http.server 3111 &) && node visual/smoke.mjs 3111
git add -A && git commit && git push
```

### 최초 1회 (오너 액션 3종)

1. GitHub 에 repo **`postechair.github.io`** 생성 (**Public** — 무료 계정 Pages 는 public 한정)
2. postechair fine-grained PAT 의 대상 repo 에 `postechair.github.io` 추가 (기존 토큰은 event 한정 — 미조치 시 push 403)
3. push 후 Settings → Pages → **Deploy from a branch → `main` / `/docs`**
