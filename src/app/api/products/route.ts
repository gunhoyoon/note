import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
  // NextResponse 기존 reponse 의 확장 버전 , 기존 reponse 로는 next js Ts에서 에러가 발생해서 이를 확장시켜 안정화를 갖춘 객체
}
// 13버전 api router
// 함수 이름 자체가 method가 되는 형식
// app/api안에 route.js | ts 로 작성 기존 index 예약어가 route 로 바뀌었기 때문이 파일 이름을 이렇게 정해줘야함

/*
export async function handler(res: Response, req: Request) {
  if (req.method === "GET") {
    // 해당 처리 res 어쩌고 저쩌고 ,,,
  } else if (req.method === "POST") {
    // 해당 처리
  } else if (req.method === "PUT") {
    // 해당 처리 등 이런식으로 로직 자체가 복잡해져 가독성이 떨어지는 경향이 있음
  }
}

// api/index.js | ts
*/
