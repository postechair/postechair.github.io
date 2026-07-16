import wordmark from "@/assets/postech-wordmark-black.png";

/** 채용 페이지 공용 상단바 — 채용 전체는 홈 채용 섹션 앵커로 연결 */
export function RecruitTopbar() {
  return (
    <header className="topbar">
      <div className="wrap">
        <a href="https://postech.ac.kr" target="_blank" rel="noopener" aria-label="POSTECH 공식 홈페이지">
          <img src={wordmark.src} alt="POSTECH" />
        </a>
        <nav className="tb-links">
          <a href="/#recruit">채용 공고 전체</a>
          <a href="/">POSTECH AIR 홈 →</a>
        </nav>
      </div>
    </header>
  );
}

export function RecruitFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <img src={wordmark.src} alt="POSTECH" />
        <span>AIR센터 &nbsp;|&nbsp; 문의 postech-air@postech.ac.kr</span>
      </div>
    </footer>
  );
}

/** 센터 소개 — 채용 공고 2종·홈 "AIR센터" 영역이 공유하는 동일 원문 (JD §1) */
export function CenterIntroSection({ alt = false, heading = "센터 소개", children }: { alt?: boolean; heading?: string; children?: React.ReactNode }) {
  return (
    <section className={"sec jd" + (alt ? " alt" : "")}>
      <div className="wrap">
        <h2 className="sech">{heading}</h2>
        <h3 className="jd-h">우리는 대학의 OS를 바꾸고 있습니다</h3>
        <p>POSTECH은 <b>대학의 체질 자체를 바꾸는 대전환</b>으로 나아가기 위해 2026년 3월 <b>AIR센터(Center for AI &amp; Institutional Research)를 신설</b>하였습니다.</p>
        <p>우리가 그리는 것은 <b>AI-Native University</b> — <em>지식과 데이터가 스스로 흐르는 대학</em>입니다. 단순하고 반복적인 업무는 AI에 맡기고, 구성원은 AI와의 협업을 통해 창의적인 일에 집중합니다. <b>가장 사람다운 일을 하는 대학</b>, 그 변화를 지금 만들어 가고 있습니다.</p>

        <h4 className="jd-subh">이미 하고 있는 일</h4>
        <div className="doing">
          <div className="do"><h5>AI Platform</h5><p>폐쇄망 환경에서 민감한 대학 데이터를 보호하며 현업의 AX 리더와 AX 엔지니어가 통제된 환경에서 효율적으로 AI Agent 기반 업무로 전환할 수 있게 지원하는 AI 플랫폼을 개발하고 있습니다. 외부 의존성을 최소화해 <b>&ldquo;내부에 자산으로 쌓이고, 필요하면 우리 손으로 언제든 바꿀 수 있는 자율성&rdquo;</b>을 확보하는 것이 방향입니다.</p></div>
          <div className="do"><h5>제도적 기억의 조직화</h5><p>축적된 내부 데이터를 로컬 AI로 분석하고 KPI와 매칭. 직관과 기억에 기대던 의사결정을 근거와 이력에 기반한 의사결정으로 전환하고 있습니다.</p></div>
          <div className="do"><h5>부서별 맞춤 솔루션</h5><p>주요 부서의 <b>내부 인력이 부서의 니즈에 맞게 공동 파트너로 직접 개발</b>하는 방식입니다.</p></div>
          <div className="do"><h5>조직문화 전환</h5><p>학내 행정부서가 참여하는 자율학습형 워킹그룹 운영과 AX leader 양성으로 <em>&ldquo;내 업무는 내가 바꿀 수 있다&rdquo;</em>는 자율성을 기르는 일입니다.</p></div>
        </div>
        {children}
      </div>
    </section>
  );
}

/** 지원·문의 본문 (콜아웃 + 근무조건) — 채용 상세 페이지·홈 채용 영역 공용 */
export function ApplyContactBody() {
  return (
    <>
      <div className="callout">
        <p>지원 방법과 전형 일정 등 상세 내용은 이메일로 문의해 주시기 바랍니다.</p>
        <a className="applybtn" href="mailto:postech-air@postech.ac.kr">postech-air@postech.ac.kr로 문의하기</a>
      </div>
      <p className="workcond">근무지 포항공과대학교 (경북 포항) · 소속 기획처 AIR센터 · 고용형태·보수는 본교 규정에 따름 (세부 협의)</p>
    </>
  );
}

/** 지원·문의 — 공용 마감 섹션 */
export function ApplyContactSection({ alt = false }: { alt?: boolean }) {
  return (
    <section className={"sec" + (alt ? " alt" : "")}>
      <div className="wrap">
        <h2 className="sech">지원·문의</h2>
        <ApplyContactBody />
      </div>
    </section>
  );
}
