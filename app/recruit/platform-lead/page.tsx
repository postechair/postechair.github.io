import type { Metadata } from "next";
import { RecruitTopbar, RecruitFooter, ApplyContactSection, SelectionProcessSection } from "@/components/recruit";

export const metadata: Metadata = {
  title: "AI 플랫폼 리드 엔지니어 채용 | POSTECH AIR",
  description:
    "POSTECH AIR센터 채용 — AI Platform Lead Engineer. LLM 게이트웨이, 자체 모델 서빙, 공용 RAG 스택, 개발 표준, 거버넌스 정책을 설계·구축·운영할 플랫폼 리드를 찾습니다.",
};

/* Control / Support / 전략 — 주요 업무 (JD 원문) */
const CONTROL = [
  ["LLM 게이트웨이 구축·운영", <>외부 API(Claude, OpenAI 등)와 <b>내부 자체 모델(온프레미스 서빙)을 아우르는 단일 창구</b>. 모델 종류와 무관하게 인증·사용량·비용·감사 로그를 중앙에서 관측하고, 데이터 민감도에 따라 내부 모델과 외부 API로 <b>자동 라우팅</b>하는 정책 엔진 설계</>],
  ["데이터 거버넌스 정책 수립", <>데이터 분류 기준을 정의하고, 이를 <b>&ldquo;어떤 데이터가 어떤 모델까지 갈 수 있는가&rdquo;</b>로 구체화. 개인정보·민감정보의 외부 LLM 전송 통제 및 반출 차단, 민감 데이터의 내부 모델 처리 원칙</>],
  ["AI 기반 개발·운영 프로세스 수립 및 관리", <>코딩 에이전트와 AI Agent가 개발·운영에 참여하는 것을 전제로 한 프로세스 정의. AI 생성 코드의 리뷰·검증·책임 소재 기준, 에이전트의 시스템 접근 권한과 실행 범위, 프롬프트·에이전트 정의의 버전 관리와 변경 통제, AI 참여 이력의 추적 체계. <b>사람이 만든 코드와 같은 기준으로 심사하되, 만들어지는 속도가 다르다는 전제에서 프로세스를 설계</b></>],
  ["기술 표준 심사·관리", <>승인 모델(외부 API·내부 모델) 및 라이브러리 목록, 아키텍처 패턴 준수 여부, 모델·서비스 평가 기준</>],
  ["자산 레지스트리", <>센터의 모든 자동화 서비스·자산의 목록·소유권·상태 관리</>],
] as const;

const SUPPORT = [
  ["Application Architecture 설계 및 제공", <>센터의 AI 서비스가 공유할 레퍼런스 아키텍처 정의. 서비스 구조 패턴, 계층 분리, 인증·권한 모델, 로깅·에러 처리, 외부 시스템 연동 방식. AX 엔지니어가 <b>아키텍처의 고민 없이 시작할 수 있는 출발점</b>을 제공</>],
  ["개발 표준 수립 및 확산", <>코딩 컨벤션, 프로젝트 구조, 테스트·리뷰 기준, 문서화 규격을 정의하고 <b>스캐폴드·템플릿·예제 코드로 체화</b>. 표준을 문서로 배포하는 데 그치지 않고 AX 엔지니어 대상 가이드·교육·온보딩까지 수행 (주니어 비중이 높은 AX팀 구성상 특히 중요)</>],
  ["내부 자체 LLM 서빙 인프라", <>온프레미스 오픈소스 모델 서빙 및 GPU 자원 관리·스케줄링, 모델 버전 관리, 성능·품질 평가 체계. 폐쇄망에서 민감 데이터를 처리할 수 있는 <b>자체 모델 역량 확보가 플랫폼 자율성의 핵심</b></>],
  ["공용 RAG 스택", <>임베딩, 벡터 DB, 문서 ingest 파이프라인, 검색 품질 (RAG 엔지니어와 협업)</>],
  ["폐쇄망 개발·배포 체계", <>패키지 미러, 컨테이너 레지스트리, CI/CD 템플릿</>],
  ["공용 자산화", <>공통 라이브러리, 템플릿, 내부 SDK (내부 모델·외부 API를 동일한 인터페이스로 호출하는 추상화 포함)</>],
  ["학내 시스템 연동 표준 인터페이스 제공", null],
] as const;

const STRATEGY = [
  ["구축 범위 및 우선순위 수립", <>플랫폼 <b>자체 구축</b>에 있어서 주요 기술 요소를 설계하고, 센터 전략 및 사업 목표에 맞추어 단계적 구축 및 통합 방향의 사업 계획 수립. 외부 API 의존에서 <b>내부 자체 모델로 이전하는 단계와 시점</b>의 판단 포함</>],
  ["Fast Deploy & Re-Build 접근 실행", <>최소 기술 가이드라인으로 AX 엔지니어의 Fast Deploy를 허용하고, 플랫폼 성숙 단계에 맞춰 Re-Build &amp; Integration 수행</>],
  ["자산화 루프 가동", <>AX 엔지니어의 반복 패턴의 가치·유지비용 평가 → 공용 자산으로 모듈화 구현 → 공통 자산의 재사용 확인</>],
] as const;

const MUST = [
  <><b>상용 서비스·상품 개발 경험</b> — 사내 도구나 PoC가 아니라, 실사용자·가용성·장애 대응 책임이 있는 서비스를 만들고 운영해 본 경험</>,
  <><b>프로덕션 환경의 설계·구축·운영 전 주기 경험</b> — 아키텍처 결정부터 배포·모니터링·장애 대응까지 경험</>,
  <><b>클라우드 인프라 및 컨테이너 기반 배포 체계</b> 실무 경험 (Kubernetes, CI/CD 파이프라인 구축 등)</>,
  <><b>LLM 기반 시스템 구축 경험</b> — 외부 API 연동뿐 아니라 <b>자체 모델 서빙</b>까지 포함한 실전 경험. RAG 파이프라인, MCP 서버 구축</>,
  <><b>폐쇄망·망분리 환경에서의 개발·배포 체계 구축 경험</b> — 학내 시스템이 폐쇄망 기반이고 플랫폼을 자체 구축하므로, 패키지 미러·레지스트리·오프라인 배포의 제약을 실제로 다뤄 본 경험이 필요</>,
  <><b>기술 표준·리뷰 체계를 설계하고 다른 개발자들이 따르게 만든 경험</b> — 개발 표준 및 Application Architecture 설계 및 구축 경험. 이에 대한 가이드라인을 작성하고 개발자 교육 및 관리 경험</>,
  <><b>시니어급 경력</b>으로(관련 분야 15년 이상 수준), CTO / 개발 팀장 / Product Manager 경험</>,
];

const NICE = [
  <><b>온프레미스 GPU 인프라 및 오픈소스 모델 서빙</b> 경험 (vLLM, SGLang 등)</>,
  <><b>LLM 게이트웨이 / API 게이트웨이 및 관측(Observability) 체계</b>를 직접 구축한 경험</>,
  <><b>에이전틱 AI 시스템</b> 설계·운영 경험</>,
  <>Single Source of Truth로서 <b>Datalake</b> 구축 경험</>,
  <><b>데이터 거버넌스·개인정보보호 정책</b> 수립 및 운영 경험</>,
  <><b>플랫폼 엔지니어링 또는 DevEx 조직</b> 경험 — 내부 개발자를 고객으로 대해 본 경험</>,
  <>소규모 팀의 테크리드 또는 1인 플랫폼 구축/운영 경험</>,
  <><b>AI 코딩 에이전트를 팀 개발 프로세스에 도입·운영</b>해 본 경험</>,
  <>공공·대학·규제 산업 도메인 이해</>,
];

export default function PlatformLead() {
  return (
    <>
      <RecruitTopbar />
      <main className="jd">
        <section className="hero">
          <div className="wrap">
            <p className="hero-eyebrow">AIR센터 채용</p>
            <h1>AI 플랫폼 리드 엔지니어 <span className="h1-note">(2026.07.17~, 8.6(목) 24:00 지원 마감)</span></h1>
            <p className="hero-sub">AI Platform Lead Engineer</p>
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <h2 className="sech">포지션 개요</h2>
            <p>AIR센터는 학내 행정업무를 AI 기반으로 전환(AX)하는 조직으로, <b>현업에 들어가 변화를 만드는 AX 엔지니어 파트</b>와 <b>그 변화를 뒷받침하면서 동시에 통제하는 AI 플랫폼 파트</b>의 2파트 체계로 운영됩니다.</p>
            <p>플랫폼 리드 엔지니어는 AI 플랫폼 파트를 이끌며, 센터의 기술 기반 전체(LLM 게이트웨이, 내부 자체 모델 서빙, 공용 RAG 스택, Application Architecture 및 개발 표준, 배포 체계, 거버넌스 정책)를 <b>설계하고, 구축하고, 운영</b>합니다.</p>
            <div className="callout">
              <p>이 포지션의 본질은 <b>가속과 통제를 동시에 하는 일</b>입니다.<br />AX 엔지니어팀이 빠르게 만들고 빠르게 배포할 수 있도록 아키텍처·표준·자산을 공급(Support)하는 동시에, 무엇이 어디로 나가는지 항상 아는 상태를 유지(Control)해야 합니다.</p>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <h2 className="sech">주요 업무</h2>
            <div className="dutyblock">
              <div className="db-h"><span className="db-pill">Control 축</span></div>
              <ul className="duties">
                {CONTROL.map(([t, d]) => (
                  <li key={t as string}><b>{t}</b>{d && <> — {d}</>}</li>
                ))}
              </ul>
            </div>
            <div className="dutyblock">
              <div className="db-h"><span className="db-pill">Support 축</span></div>
              <ul className="duties">
                {SUPPORT.map(([t, d]) => (
                  <li key={t as string}><b>{t}</b>{d && <> — {d}</>}</li>
                ))}
              </ul>
            </div>
            <div className="dutyblock">
              <div className="db-h"><span className="db-pill">플랫폼 전략 및 자산화 루프 운영</span></div>
              <ul className="duties">
                {STRATEGY.map(([t, d]) => (
                  <li key={t as string}><b>{t}</b>{d && <> — {d}</>}</li>
                ))}
              </ul>
            </div>
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

        <SelectionProcessSection
          schedule={[
            ["8.6(목) 24:00", "지원서 접수 마감"],
            ["8.7(금)", <>서류심사 합격자 발표 <span className="snote">(개별 유선 통보)</span></>],
            ["8.14(금) ~ 8.19(수) 중 1일", "면접전형"],
            ["면접전형 다음날", <>최종 합격자 발표 <span className="snote">(개별 유선 통보)</span></>],
          ]}
        />
        <ApplyContactSection alt />
      </main>
      <RecruitFooter />
    </>
  );
}
