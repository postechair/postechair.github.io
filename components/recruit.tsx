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
        <div className="intro">
          <h3 className="jd-h">우리는 대학의 OS를 바꾸고 있습니다</h3>
          <p className="lead">POSTECH은 <b>대학의 체질 자체를 바꾸는 대전환</b>으로 나아가기 위해 2026년 3월 <b>AIR센터(Center for AI &amp; Institutional Research)를 신설</b>하였습니다.</p>
          <p className="vision">우리가 그리는 것은 <b>AI-Native University</b> — <em>지식과 데이터가 스스로 흐르는 대학</em>입니다.</p>
          <p className="follow">단순하고 반복적인 업무는 AI에 맡기고, 구성원은 AI와의 협업을 통해 창의적인 일에 집중합니다.<br /><b>가장 사람다운 일을 하는 대학</b>, 그 변화를 지금 만들어 가고 있습니다.</p>
        </div>

        <h4 className="jd-subh">이미 하고 있는 일</h4>
        <div className="doing">
          <div className="do"><h5>AI Platform</h5><p>폐쇄망 환경에서 민감한 대학 데이터를 보호하며 현업의 AX 리더와 AX 엔지니어가 통제된 환경에서 효율적으로 AI Agent 기반 업무로 전환할 수 있게 지원하는 AI 플랫폼을 개발하고 있습니다. 외부 의존성을 최소화해 <b>&ldquo;내부에 자산으로 쌓이고, 필요하면 우리 손으로 언제든 바꿀 수 있는 자율성&rdquo;</b>을 확보하는 것이 방향입니다.</p></div>
          <div className="do"><h5>제도적 기억의 조직화</h5><p>축적된 내부 데이터를 로컬 AI로 분석하고 KPI와 매칭. 직관과 기억에 기대던 의사결정을 근거와 이력에 기반한 의사결정으로 전환하고 있습니다.</p></div>
          <div className="do"><h5>부서별 맞춤 솔루션 개발 및 운영 지원</h5><p>주요 부서의 <b>내부 인력이 부서의 니즈에 맞게 공동 파트너로 직접 개발</b>하는 방식입니다.</p></div>
          <div className="do"><h5>조직문화 전환 (AX 캠페인 활동)</h5><p>학내 행정부서가 참여하는 자율학습형 워킹그룹 운영과 AX leader 양성으로 <em>&ldquo;내 업무는 내가 바꿀 수 있다&rdquo;</em>는 자율성을 기르는 일입니다.</p></div>
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
        <p>채용과 관련한 상세 내용은 POSTECH AIR센터 이메일 또는 전화로 문의 주시기 바랍니다.</p>
        <a className="applybtn" href="mailto:postech-air@postech.ac.kr">E : postech-air@postech.ac.kr / T : 054-279-3501</a>
      </div>
      <p className="workcond">근무지 포항공과대학교 (경북 포항) · 소속 기획처 AIR센터 · 고용형태·보수는 본교 규정에 따름 (세부 협의)</p>
    </>
  );
}

/** 전형 절차 · 제출 서류 — 두 공고 공통 (3단계 + 추가 가능 명시). 지원 이메일·상세 일정은 공고별로 다름 */
export function SelectionProcessSection({
  applyEmail = "oseam@postech.ac.kr",
  schedule,
}: {
  applyEmail?: string;
  schedule?: [string, React.ReactNode][];
}) {
  return (
    <section className="sec">
      <div className="wrap">
        <h2 className="sech">전형 절차 · 제출 서류</h2>
        {schedule && (
          <div className="schedbox">
            <div className="schedh">채용 일정</div>
            <ol className="sched">
              {schedule.map(([d, t], i) => (
                <li key={i}><span className="sd">{d}</span><span className="st">{t}</span></li>
              ))}
            </ol>
          </div>
        )}
        <div className="req-grid">
          <div className="req">
            <h3>전형 절차</h3>
            <ol className="steps">
              <li>서류 전형</li>
              <li>면접 및 실무과제·라이브 문제해결 평가</li>
              <li>최종 전형 및 처우 협의</li>
            </ol>
            <p className="stepnote">※ 필요시 전형 단계가 추가될 수 있음</p>
          </div>
          <div className="req">
            <h3>제출 서류 <span className="en">자유양식으로서 다음의 자료들을 자유롭게 포함</span></h3>
            <ul className="duties">
              <li>이력서(경력 포함)</li>
              <li>자기소개서(해결한 실제 문제, 본인의 주요 역할 중심)</li>
              <li>포트폴리오 또는 작업산출물</li>
            </ul>
          </div>
        </div>
        <div className="callout">
          <p>지원 방법 : 제출 서류를 <b>zip 파일로 압축</b>하여 채용담당자({applyEmail})로 송부</p>
          <a className="applybtn" href={`mailto:${applyEmail}`}>채용담당자에게 송부 — {applyEmail}</a>
        </div>
      </div>
    </section>
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
