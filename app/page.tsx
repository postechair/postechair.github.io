import wordmark from "@/assets/postech-wordmark-black.png";

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
            <h1>POSTECH AI 시리즈</h1>
            <p>포스텍 구성원의 AI 전환(AX)을 돕는 교육·실습·챌린지 프로그램입니다.</p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <h2 className="sech">진행 중인 프로그램</h2>
            <div className="cards">
              <a className="card" href="/event/">
                <span className="card-t">나에게 맞는 AI 행사 찾기</span>
                <span className="card-d">Working Group · 고급교육(AX Leaders) · 공모전 — 2026 하반기 3개 행사 안내와 신청</span>
                <span className="card-go">바로가기 →</span>
              </a>
            </div>
          </div>
        </section>

        <section className="sec about">
          <div className="wrap">
            <h2 className="sech">AIR센터</h2>
            <p>AIR센터(Center for AI &amp; Institutional Research)는 POSTECH의 AI-Native University 전략을 추진하며, 데이터 기반 의사결정과 구성원의 AI 역량 강화를 지원합니다.</p>
            <a className="more" href="https://postech.ac.kr" target="_blank" rel="noopener">postech.ac.kr ↗</a>
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
