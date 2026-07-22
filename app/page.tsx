import wordmark from "@/assets/postech-wordmark-black.png";
import { CenterIntroSection } from "@/components/recruit";

/** 교내망 전용 솔루션 — 공개 페이지에는 이름·설명만 (내부 링크·포트 게재 금지 원칙) */
const SOLUTIONS = [
  { k: "데이터 포털", b: "ver1.0(26.12월)", t: "IR · KPI · 데이터 카탈로그", d: "대학 KPI 정의서, 데이터 연동맵, 기관연구(IR) 분석을 제공합니다.", featured: true },
  { k: "직원업무관리", b: "ver1.0(26.9월)", t: "업무 목표·실적 관리", d: "부서·개인의 업무 목표와 실적을 등록·관리하고 평가를 지원하는 시스템입니다." },
  { k: "공간관리", b: "ver1.0(26.10월)", t: "캠퍼스 공간 정보·도면", d: "건물·실 단위 공간 정보와 도면을 관리하고 공간 활용 분석을 지원하는 시스템입니다." },
  { k: "대학규정통합관리", b: "ver1.0(26.11월)", t: "규정 지식 구조화 (LLM Wiki)", d: "대학 규정을 agent-readable 지식으로 구조화해 규정 간 상충·경합·유사·위계 관계 분석과 유관 법령 개정 시 효력 영향 추적을 지원하는 시스템입니다." },
  { k: "WG 스튜디오", b: "ver1.0 운영중", live: true, t: "워킹그룹 협업·실습", d: "AI 교육 워킹그룹의 협업·실습 자료·즉석 설문·학습 진단 공간입니다." },
  { k: "교육지원 플랫폼", b: "구축 중", t: "학생 성장 전주기 분석", d: "입학→재학→성장→졸업 전주기 학생 분석·상담·분반 지원 플랫폼입니다." },
  { k: "Connect 챗봇", b: "구축 중", t: "RAG 상담 위젯", d: "문서 기반 RAG 답변과 담당자 핸드오프를 제공하는 상담 위젯입니다." },
  { k: "직원 업무 챗봇", b: "구축 중", t: "부서별 업무 도우미", d: "그룹웨어 공지·부서 업무 지식 기반의 직원 업무 질의응답 챗봇입니다." },
  { k: "동문·발전기금", b: "PoC(Proof of Concept)", t: "동문 통합 DB · 기부 관리", d: "동문 마스터 데이터와 발전기금·기부 관리를 위한 시스템입니다." },
  { k: "연구지원팀 IRIS 모니터링", b: "PoC(Proof of Concept)", t: "연구행정 알림 자동화", d: "연구행정시스템(IRIS)의 회수금·연구비·제안서 현황을 매일 자동 수집해 담당자에게 이메일·Teams 알림을 제공하는 시스템입니다." },
  { k: "AP포럼 운영관리", b: "PoC(Proof of Concept)", t: "포럼 회원·참석 관리", d: "AP포럼의 회원 정보와 초청·참석(RSVP) 현황을 관리하는 운영 시스템입니다." },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <a href="https://postech.ac.kr" target="_blank" rel="noopener" aria-label="POSTECH 공식 홈페이지">
            <img src={wordmark.src} alt="POSTECH" />
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="wrap">
            <h1>POSTECH AIR</h1>
            <p className="hero-sub">Center for AI &amp; Institutional Research</p>
          </div>
        </section>

        <CenterIntroSection heading="AIR센터">
          <a className="more" href="https://postech.ac.kr" target="_blank" rel="noopener">POSTECH에 대해 알아보기 ↗</a>
        </CenterIntroSection>

        <section className="sec alt jd" id="recruit">
          <div className="wrap">
            <h2 className="sech">채용</h2>
            <p className="sec-intro">AI-Native University 전환을 함께 만들 동료를 찾습니다.</p>
            <div className="cards">
              <a className="card" href="/recruit/platform-lead/">
                <span className="card-t">AI 플랫폼 리드 엔지니어(2026.07.17~, 8.6(목) 24:00 지원 마감)</span>
                <span className="card-d">AI Platform Lead Engineer — 센터의 기술 기반 전체(LLM 게이트웨이 · 자체 모델 서빙 · 공용 RAG 스택 · 개발 표준 · 거버넌스 정책)를 설계·구축·운영할 플랫폼 리드</span>
                <span className="card-go">Job Description 보기 →</span>
              </a>
              <a className="card" href="/recruit/ax-engineer/">
                <span className="card-t">AX 엔지니어(상시 채용, 채용 완료시 마감)</span>
                <span className="card-d">AX Engineer — 행정 현장에 임베드되어 문제 발굴부터 AI 솔루션 설계·개발·배포·정착까지 end-to-end로 책임지는 풀스택 엔지니어</span>
                <span className="card-go">Job Description 보기 →</span>
              </a>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <h2 className="sech">AX 캠페인 활동</h2>
            <p className="sec-intro">포스텍 구성원의 AI 전환(AX)을 돕는 교육·실습·챌린지 프로그램입니다.</p>
            <div className="cards">
              <a className="card" href="/event/">
                <span className="card-t">2026 AIR EVENT</span>
                <span className="card-d">Working Group · AX 부트캠프(고급교육) · AX 공모전 — 2026 하반기 3개 행사 안내와 신청</span>
                <span className="card-go">바로가기 →</span>
              </a>
            </div>
          </div>
        </section>

        <section className="sec alt">
          <div className="wrap">
            <h2 className="sech">AIR&rsquo;s WORKS</h2>
            <div className="aaep">
              <h3>PAAIP (POSTECH Agentic AI Institute Platform)</h3>
              <span className="pill-building">구축 중</span>
              <p>PAAIP는 AIR센터가 구축 중인 <b>전사 에이전틱 AI 플랫폼</b>입니다. AI 에이전트가 대학 업무를 수행할 때 필요한 <b>거버넌스 통제면</b>(행동 정책 통제 · 행 수준 데이터 권한 · 변조 불가 감사 추적)을 기반으로, 구성원 누구나 안전하게 업무 AI를 활용할 수 있는 환경을 목표로 합니다.</p>
            </div>
            <div className="sols">
              {SOLUTIONS.map((s) => (
                <div className={"sol" + (s.featured ? " featured" : "")} key={s.k}>
                  <div className="k-row"><span className="k">{s.k}</span><span className={"sol-badge" + (s.live ? " live" : "")}>{s.b}</span></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <p className="sol-note">위 업무 솔루션은 내부망(교내)에서만 접속되며, 서비스별 접근 권한은 담당 부서 협의로 부여됩니다.</p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <img src={wordmark.src} alt="POSTECH" />
          <span>AIR센터 &nbsp;|&nbsp; 문의 postech-air@postech.ac.kr</span>
        </div>
      </footer>
    </>
  );
}
