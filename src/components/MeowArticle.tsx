"use client";
import React, { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";
export default function MeowArticle() {
  // 처음 마운트 될 때만 실행해주고 싶음
  const [text, setText] = useState();
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <div className={styles.factText}>{text ? text : "loading😅"}</div>;
  // js + 필요한 파일을 다운받고 화면에 띄우기까지의 시간이 걸림
}

// cache : "force-cache" // 영원히 캐시됨 ssg
// cache : "no-store" // ssr 처럼 동작 캐시를 안해서 요청시 처리하기 때문에,
// 이 페이지에선 product의 list를 보여주는게 더 중요함
// 해당 데이터가 그렇게 중요한 정보가 아니라 조금 늦게 화면에 보여줘도 된다면? CSR로 사용이 가능하다.
// 처음 빌드 후 렌더링, 데이터가 업데이트 될 때, 5초 이후 요청을 받아서 보여줄 화면을 준비하고 한번 더 요청했을 때 준비한걸 보내줌

// 클라이언트 컴포넌트
// 1. "use client"
// 2. 메인 정보보단 그 홈페이지 자체의 부가적인 요소. 해당 페이지에서 중요 순위가 아닌 데이터일 때 고려
// 3. 상태 관리가 가능하므로 useState, useEffect 사용이 가능해짐
// 4. useEffect 의 사용으로 isr , ssr , ssg의 캐시의 대한 사용 , revalidate 등 서버쪽 관련 속성 사용 x
// 5. loading , skeleton 등 처리 필요

// api 라우트
// pages 내부에서의 api에서 app안에 api로 바뀜
// 기존 api 라우트의 경우 request가 GET인지 POST 인지 DELETE 인지 PUT fetch 인지에 대한 if문을 전부 처리해줬어야하는데
