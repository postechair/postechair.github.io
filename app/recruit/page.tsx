"use client";
import { useEffect } from "react";

/** /recruit/ 직접 접근 시 홈 채용 허브(/#recruit)로 리다이렉트한다.
 *  채용 허브는 홈에 통합돼 있어 별도 /recruit/ 허브 페이지는 두지 않는다 — 다만
 *  루트를 직접 입력/공유한 방문자가 404를 만나지 않도록 얇은 리다이렉트만 둔다.
 *  정적(GitHub Pages) 사이트라 서버 리다이렉트가 없어 클라이언트에서 처리하고,
 *  JS 미동작 환경을 위해 화면에 바로가기 링크도 남긴다. */
export default function RecruitIndex() {
  useEffect(() => {
    window.location.replace("/#recruit");
  }, []);
  return (
    <main className="jd">
      <section className="hero">
        <div className="wrap">
          <p className="hero-eyebrow">AIR센터 채용</p>
          <p className="hero-sub">
            채용 안내로 이동합니다. 자동으로 이동되지 않으면{" "}
            <a href="/#recruit">채용 안내 바로가기</a>를 눌러 주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
