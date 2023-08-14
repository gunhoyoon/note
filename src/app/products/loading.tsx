import React from "react";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <p>로딩중입니다 ..😅</p>
      {/* 내가 해당 로딩 html을 보여주고 싶은 폴더단에 작성 */}
      {/* React의 suspense boundary와 동일한 기능을 자동으로 사용할 수 있습니다. */}
      {/* 전체 페이지가 준비된 후에 보여주는 것이 아니라 전체 골격을 사용자에게 보여준 뒤 시간이 걸리는 컴포넌트에 loading 을 보여주게 됨 ssr 보완가능 */}
    </div>
  );
}
