import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
// 객체 안에 키와 값이 있는 구조임
export default function PantsPage({ params }: Props) {
  const { slug } = params;

  return <div>{slug} 동적 라우팅 페이지</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  // 실무에선 자주 방문 / 검색하는 키워드가 들어간 데이터 정도가 들어갈 듯
  return products.map((product) => ({
    slug: product,
  }));
}
