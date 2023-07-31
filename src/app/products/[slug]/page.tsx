import { notFound } from "next/navigation";
import React from "react";
import os from "os";

export const dynamicParams = true;
// 인 경우 strumming server side rendering 으로 동작함
// true(기본값): 에 포함되지 않은 동적 세그먼트는 generateStaticParams요청 시 생성됩니다. 라고 나와있는데
type Props = {
  params: {
    slug: string;
  };
};

// 객체 안에 키와 값이 있는 구조임
const products = ["pants", "skrit"];

export default function Page({ params }: Props) {
  const { slug } = params;

  if (!products.find((item) => item === slug)) {
    console.log("im server!");

    notFound();
    // true 로 설정해서 기본적으로 동적인 페이지를 만들수도,
    // notFound 페이지를 반환할수도,
    // false 로 설정해서 대체 페이지를 준비하지 않을수도 있음
  }

  return <div>{slug} 제품 설명 페이지</div>;
  // 이 친구같은 경우 notFound() 또 return 문 이미 만들어진 클라이언트 요소이지만 결정은 서버에서 하는 증거
  // 이 안에서의 useEffect함수 ,
}

export function generateStaticParams() {
  // 실무에선 자주 방문 , 검색하는 키워드가 들어간 데이터 정도가 들어갈 듯

  console.log(os.hostname());
  console.log("브라우저");
  return products.map((product) => ({
    slug: product,
  }));
  // 프론트 서버 단에서 도는 친구인데 use client 박으면 어찌되나?
}

// 서버단에서 도는 함수 , 클라이언트 실행 useEffect 섞였을 떄  어떻게 동작하는지?

// export const dynamicParams = false; 이 친구 관련 함수 공식 사이트 보고 정리
// 테스트 해볼 수 있는 애들 테스트.

// 기본동작 dynamicparams 없고 generateStaticParams 에 속한 친구를 클릭 할 때 Page 함수 동작하지 않음

// dynamic = "error " 및 force-static 으로 설정하면 기본적으로 dynamicParams의 기본값이 false 로 동작함
// 그럼 여기서 dynamicParams 가 false 라면 , true 라면 의 동작이 어떻게 되는지?

// dynamic Params 의 기본값은 true
// 없는 경로를 입력해 접속할 경우 , 404 반환.

// fallback 의 true false blocking 을 대체한다.
// fallback == true 시 빌드 시점에 생성되지 않은 페이지를 로드할 경우 요청을 받은 시에 서버에서 생성함
// fallback == false 시 빌드 시점에 생성되지 않은 페이지를 로드할 경우 404 페이지를 반환하게 됨
// fallback == blocking 시 빌드 시점에 생성되지 않은 페이지를 로드할 경우 미리 만들어놓은 로딩화면을 보여주는게 아닌

// false 시 404 를 반환하며 앱 폴더의 not found 페이지를 반환하게 된다.
// true 시 우선 대체페이지(로딩 페이지) 가 나온 후 products 의 not-found 페이지를 반환한다.
