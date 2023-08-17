import React from "react";
export default function ProductsLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <p>로딩중입니다 ..😅</p>
      {/* 내가 해당 로딩 html을 보여주고 싶은 폴더단에 작성 */}
      {/* React의 suspense 를 사용함. */}
      {/* 전체 페이지가 준비된 후에 보여주는 것이 아니라 전체 골격을 사용자에게 보여준 뒤 시간이 걸리는 컴포넌트에 loading 을 보여주게 됨 ssr 보완가능 */}
      {/* router 별로 처리가능 */}
      {/* <Suspense fallback={<Loading / >}>
          <Page />
      </Suspense> */}
      {/* 페이지 컴포넌트가 준비되기전에 fallback 에 설정해놓은 Loading 컴포넌트가 먼저 보여짐 */}
    </div>
  );
}
