import type { Metadata } from "next";
import { RecruitTopbar, RecruitFooter, ApplyContactSection, SelectionProcessSection } from "@/components/recruit";

export const metadata: Metadata = {
  title: "AX 엔지니어 채용 | POSTECH AIR",
  description:
    "POSTECH AIR센터 채용 — AX Engineer. 행정 현장에 임베드되어 문제 발굴부터 AI 솔루션 설계·개발·배포·정착까지 end-to-end로 책임지는 풀스택 엔지니어를 찾습니다.",
};

/* 주요 업무 (JD §3 — R&R 4개 영역) */
const DUTIES = [
  ["현장 발굴 · 문제 정의", [
    <>행정부서 담당자와 직접 협업하여 업무 흐름·데이터·규정·예외 케이스를 파악</>,
    <>모호하게 표현된 현업 니즈를 <b>해결 가능한 문제로 구조화</b></>,
  ]],
  ["솔루션 설계 · 개발 · 배포", [
    <>문제 → 프로토타입 → 운영 배포까지 <b>end-to-end 단독 수행</b></>,
    <>LLM/RAG/agent 기반 애플리케이션, 데이터 파이프라인, 업무 자동화 흐름 구축</>,
    <>폐쇄망·자체 GPU·온프레미스 제약 안에서 안전하게 배포</>,
  ]],
  ["운영 · 반복 · 정착", [
    <>배포 후 사용자 피드백 기반 개선, <b>eval·관측 지표로 품질 관리</b></>,
    <>비기술 사용자의 도입·정착을 지원 (가이드, 핸드오버)</>,
  ]],
  ["자산화 · 제품화", [
    <>부서 간 반복되는 패턴을 <b>재사용 컴포넌트/템플릿으로 일반화</b>하여 센터 플랫폼에 환류</>,
    <>결정 사항·구조를 문서화 (ADR, 아키텍처 노트)</>,
  ]],
] as const;

const MUST = [
  <><b>풀스택 개발 역량</b> — 백엔드·데이터·기본 프런트엔드를 아우르며, 하나의 솔루션을 <b>스스로 end-to-end로 완성</b>한 경험</>,
  <><b>LLM/RAG/agent 기반 애플리케이션 구축 경험</b></>,
  <><b>비개발 이해관계자와 협업</b>하여 요구사항을 정의하고 동작하는 솔루션으로 전환한 경험</>,
  <><b>Linux · 컨테이너(Docker)</b> 기반 개발·배포 기본 역량</>,
  <><b>모호한 문제를 스스로 구조화</b>하고, 정답이 정해지지 않은 상태에서 추진한 경험</>,
  <><b>경력 연수·학위보다 포트폴리오·실문제 해결 능력을 우선 평가</b> (신입/경력 무관, 고잠재력 주니어 지원 환영)</>,
];

const NICE = [
  <>온프레미스 / 폐쇄망 / 자체 GPU 환경 구축·운영 경험</>,
  <>eval·관측(observability) 기반으로 LLM 시스템 품질을 관리한 경험</>,
  <>데이터 파이프라인(ELT), 벡터DB(예: Qdrant), 임베딩·리랭킹 운영 경험</>,
  <>harness/agent orchestration, Claude Code 등 agentic 개발 도구 실무 활용</>,
  <>반복 작업을 <b>재사용 자산으로 제품화</b>한 경험</>,
  <>행정·공공·대학 도메인 또는 규제·보안 제약 환경에 대한 이해</>,
];

export default function AxEngineer() {
  return (
    <>
      <RecruitTopbar />
      <main className="jd">
        <section className="hero">
          <div className="wrap">
            <p className="hero-eyebrow">AIR센터 채용</p>
            <h1>AX 엔지니어</h1>
            <p className="hero-sub">AX Engineer</p>
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <h2 className="sech">포지션 개요</h2>
            <p>AIR센터는 학내 행정업무를 AI 기반으로 전환(AX)하는 조직으로, <b>현업에 들어가 변화를 만드는 AX 엔지니어 파트</b>와 <b>그 변화를 뒷받침하면서 동시에 통제하는 AI 플랫폼 파트</b>의 2파트 체계로 운영됩니다.<br />AX 엔지니어는 이 중 <b>현장 배포(forward)의 실행 주체</b>이며, 센터의 <b>현장 배포(딜리버리) 처리량을 확장</b>하기 위한 핵심 포지션입니다.<br />반복되는 작업을 재사용 자산으로 승격(제품화)하는 책임을 함께 가집니다.</p>
            <div className="callout">
              <p><b>행정 현장에 직접 들어가(임베드) 현업의 문제를 발굴·정의하고, AI 기반 솔루션을 설계·개발·배포·정착까지 단독으로 책임지는 풀스택 엔지니어</b>입니다.</p>
            </div>

            <h3 className="jd-subh">&ldquo;사내 FDE&rdquo; 모델</h3>
            <ul className="duties">
              <li>FDE(Forward Deployed Engineer)는 <b>고객 조직에 임베드되어 현장 제약 안에서 솔루션을 끝까지 책임지는 엔지니어</b>를 의미합니다.</li>
              <li>AIR센터는 외부 고객이 아니라 <b>학내 행정부서를 &ldquo;고객&rdquo;으로 하는 사내 FDE 모델</b>을 적용합니다. 상품 판매가 아닌, 현장에서 실제로 동작하는 솔루션의 <b>딜리버리 그 자체</b>가 직무의 본질입니다.</li>
            </ul>

            <h3 className="jd-subh">일반 개발자 / IT 담당과의 차이</h3>
            <ul className="duties">
              <li>(일반 개발자) 정의된 스펙을 받아 코드를 구현 → 본 포지션은 <b>스펙이 없는 상태에서 문제를 직접 정의</b>합니다.</li>
              <li>(IT 운영) 기존 시스템 유지·관리 → 본 포지션은 <b>0→1 솔루션 창출과 현장 정착</b>을 만듭니다.</li>
              <li>(외주/SI) 산출물 납품 후 종료 → 본 포지션은 <b>도입·적응·성과(채택률)까지 소유</b>합니다.</li>
              <li>핵심은 <b>엔지니어링 깊이 + 도메인 몰입 + 이해관계자 소통</b>의 <b>융합</b>입니다. 셋 중 하나만으로는 부적합합니다.</li>
            </ul>

            <h3 className="jd-subh">미션 / 기대 성과</h3>
            <ul className="duties">
              <li>행정부서의 반복·비효율 업무를 AI 솔루션으로 전환하여 <b>측정 가능한 성과(처리시간 단축, 오류 감소, 자동화율)</b>를 창출합니다.</li>
              <li>PoC에 머무르지 않고 <b>실제 배포·정착</b>까지 도달시키는 비율을 높입니다. (엔터프라이즈 생성형 AI의 가장 큰 실패 원인은 모델이 아니라 <em>배포</em>입니다)</li>
              <li>개별 솔루션을 <b>재사용 가능한 사내 자산(컴포넌트·템플릿·파이프라인)</b>으로 축적합니다.</li>
            </ul>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <h2 className="sech">주요 업무</h2>
            {DUTIES.map(([t, items]) => (
              <div className="dutyblock" key={t as string}>
                <div className="db-h"><span className="db-pill">{t}</span></div>
                <ul className="duties">
                  {items.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <h2 className="sech">자격 요건</h2>
            <div className="req-grid">
              <div className="req must">
                <h3>필수 <span className="en">Must-have</span></h3>
                <ul className="duties">
                  {MUST.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
              <div className="req">
                <h3>우대 <span className="en">Nice-to-have</span></h3>
                <ul className="duties">
                  {NICE.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SelectionProcessSection />

        <ApplyContactSection alt />
      </main>
      <RecruitFooter />
    </>
  );
}
