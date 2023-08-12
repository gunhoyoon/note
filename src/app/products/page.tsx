import Link from "next/link";
import React, { useEffect } from "react";
import { getProducts } from "@/service/products";
import styles from "./page.module.css";
import CatText from "./cat-text";

// export const revalidate = 10;

// 기본적으로 서버는 ssg로 동작하기 떄문에 첫 빌드 후 페이지에 데이터 변경이 있더래도 해당 데이터를 가져오지 않는다.
// 또 dev 모드로 실행하게 되면 ssr 처럼 첫 빌드 이후 요청 시마다 렌더링하기 때문에 build 하고 난 뒤 확인해야한다.
// 지금의 경우 revalidate = 10 으로 설정했기 때문에 10초 후 요청시 데이터가 변했다면 해당 데이터가 업데이트 된 페이지를 볼 수 있다.
// 10초 이전의 요청에는 기존에 빌드했던 캐싱된 페이지를 반환하게 된다.
export default async function ProductPage() {
  console.log("프로덕트 페이지");
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
            {/* 해당 id 값으로 경로를 만들고 그 id가 가지고 있는 name을 보여줄거임 */}
          </li>
        ))}
      </ul>

      {/* <CatText /> */}
    </div>
  );
}

// 지금 이렇게 되면 기존 app 내부의 페이지(ssg) 로 생성 다른 리스트 자체는 ssg / 마지막 리스트의 텍스트만 isr로 동작
// 인줄 알았는데, 5초로 설정해놓고 기존 data, products.json의 데이터를 바꿔보니 5초 후 같이 업데이트 됨
// 왜 그런거임 ????? 그리고 fetch 는 브라우저 api 인데 지금 서버상에서 사용하고 있음 엘리꺼 답변 토대로 다시 보기
