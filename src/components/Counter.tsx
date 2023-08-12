"use client";
import React, { useState, useRef } from "react";
import styles from "./Counter.module.css";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className={styles.changeButton}
        onClick={() => {
          setCount((count) => count + 1);
          console.log(count);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          if (count == 0) {
            return;
          }
          setCount((count) => count - 1);
          // 이전 상태값 보장하면서 업데이트.
          // setCount(count +1);
          // 여러번의 상태 업데이트가 발생될 때 최신 상태를 보장하지 못할 수 있음
          console.log(count);
        }}
      >
        -1
      </button>
      <h1>
        현재 점수는
        <span className={styles.count}>{count}</span>
      </h1>
    </>
  );
}

// 현재 이 컴포넌트는 브라우저단에서 동작, 이걸 page(서버단에) import해서 사용할 때, 어떻게 동작하는지?
// 서버에선 브라우저의 상태를 기억하지 못하기 때문에, useState 와 같은 상태 기억을 필요로 하는 것에 대한 사용이 불가하다.
// 그럴 때 해당 컴포넌트에서 "use client" 를 사용해 이 컴포넌트에 한해서 상태를 기억할 수 있게 해주는 것이다.

//  브라우저에서 보면 클라이언트에서 받은 클라이언트 컴포넌트도 들어있는걸 볼 수 있음
// 이에 따라 클라이언트 컴포넌트가 무조건 csr 이 되는것이 아닌 사용자의 클릭처럼 브라우저에서 실행해야하는걸 클라이언트 컴포넌트라고 하고,
// 프리렌더링 되어서 ssg 빌드시에 페이지 생성을 하기 때문에 이벤트를 제외한 ul 요소들은 다 포함이 되는 것임.
// 여기서 컴포넌트 실행에 필요한 js와 react 코드를 다운받아 hydration 의 과정을 거치게 되면 버튼 클릭과 같은 이벤트가 동작하게 되는 것.
// 부분적으로 업데이트가 가능한거임 page(서버)단에 각각의 컴포넌트를 실행하는것이 가능한 것은 네트워크의 component 부분에서 각각의 프래그먼트를 나눠놨기 때문이라고 할 수 있음.

// 기본적으로 앱 디렉토리는 서버 컴포넌트임. 그렇기 때문에 client 에게 html js 코드 등 번들한 코드  양이 작아서 부담이 없음
//  next 13부터는 react 18버전의 서버 컴포넌트 도입으로 인해. 12버전의 페이지 단위의 csr ssr 에서 / 컴포넌트단위의 csr ssr 을 하게 된 것
