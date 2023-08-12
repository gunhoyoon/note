import React from "react";

export default async function CatText() {
  const res = await fetch(
    "https://meowfacts.herokuapp.com",
    (() => {
      return {
        next: {
          revalidate: 5,
          // 처음 빌드 후 렌더링, 데이터가 업데이트 될 때, 5초 이후 요청을 받아서 보여줄 화면을 준비하고 한번 더 요청했을 때 준비한걸 보내줌
        },
      };
    })()
  );

  const data = await res.json();

  const factText = data.data[0] as string;

  return (
    <div>
      {(() => {
        console.log(data);
        return "a";
      })()}
      {factText}
    </div>
  );
}
