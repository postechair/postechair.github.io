import type { Metadata } from "next";
import { RecruitTopbar, RecruitFooter, CenterIntroSection, ApplyContactSection } from "@/components/recruit";

export const metadata: Metadata = {
  title: "채용 | POSTECH AIR",
  description:
    "POSTECH AIR센터 채용 — AI-Native University 전환을 함께 만들 동료를 찾습니다. AI 플랫폼 리드 엔지니어 · AX 엔지니어.",
};

export default function Recruit() {
  return (
    <>
      <RecruitTopbar hub />
      <main className="jd">
        <section className="hero">
          <div className="wrap">
            <p className="hero-eyebrow">POSTECH AIR센터</p>
            <h1>채용</h1>
            <p className="hero-sub">AI-Native University 전환을 함께 만들 동료를 찾습니다</p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <h2 className="sech">모집 중인 포지션</h2>
            <div className="cards">
              <a className="card" href="/recruit/platform-lead/">
                <span className="card-t">AI 플랫폼 리드 엔지니어</span>
                <span className="card-d">AI Platform Lead Engineer — 센터의 기술 기반 전체(LLM 게이트웨이 · 자체 모델 서빙 · 공용 RAG 스택 · 개발 표준 · 거버넌스 정책)를 설계·구축·운영할 플랫폼 리드</span>
                <span className="card-go">공고 보기 →</span>
              </a>
              <a className="card" href="/recruit/ax-engineer/">
                <span className="card-t">AX 엔지니어</span>
                <span className="card-d">AX Engineer — 행정 현장에 임베드되어 문제 발굴부터 AI 솔루션 설계·개발·배포·정착까지 end-to-end로 책임지는 풀스택 엔지니어</span>
                <span className="card-go">공고 보기 →</span>
              </a>
            </div>
          </div>
        </section>

        <CenterIntroSection alt />
        <ApplyContactSection />
      </main>
      <RecruitFooter />
    </>
  );
}
