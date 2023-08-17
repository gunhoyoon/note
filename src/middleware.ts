import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("미들웨어가 실행 중 !!");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    // 전달된 Url에 nextUrl에 pathname이 /products/1004 로 시작한다면 ?
    console.log("미들웨어 - 경로를  리다이렉팅함");
    return NextResponse.redirect(new URL("/products", request.url));
    // /products 로 보내줄거고 , 2번째 인자 base url은 requset.url 이 될거임
  }
}

// ex) 로그인이 되어있는지에 대한 로직을, 사용자가 방문할 때 매번 공통적으로 검사해야할것들
// 각 페이지마다 작성해둘 필요없이 미들웨어가 매 페이지를 검사해서 해당 조건을 작동함.

// 미들웨어란 문지기이다. 만약 로그인이 필요한 페이지에 해당 사용자가 접근하려하면 로그인이 됐는지? 와 같은 유효성을 체크해주는 애임
// src 최상위 또는 src을 쓰지않는다면 프로젝트 최상위 레벨에 만들어둬야함

// 프로젝트 모든 경로에서 미들웨어가 실행된다.
// 전체가 실행되기 때문에 미들웨어를 사용하지 않을 수 있게 처리도 가능하다

// export const config = {
//   matcher: ["/products/:path+", "/about/:path"], // 단일 , 다중 경로에 대한 처리도 가능
//   // /products/:path* : 관련 경로에만 미들웨어가 동작하게 됨, products 기본 페이지도 미들웨어 포함
//   // /products/:path+ : products 메인페이지 미들웨어 미포함
// };

// 제품 소개 페이지(청바지 , 티셔츠 , 부츠 리스트 있는 페이지)에서
