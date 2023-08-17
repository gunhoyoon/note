import Link from "next/link";
import React, { useEffect } from "react";
import { getProducts } from "@/service/products";
import styles from "./page.module.css";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

// export const revalidate = 10;

// 기본적으로 서버는 ssg로 동작하기 떄문에 첫 빌드 후 페이지에 데이터 변경이 있더래도 해당 데이터를 가져오지 않는다.
// 또 dev 모드로 실행하게 되면 ssr 처럼 첫 빌드 이후 요청 시마다 렌더링하기 때문에 build 하고 난 뒤 확인해야한다.
// 지금의 경우 revalidate = 10 으로 설정했기 때문에 10초 후 요청시 데이터가 변했다면 해당 데이터가 업데이트 된 페이지를 볼 수 있다.
// 10초 이전의 요청에는 기존에 빌드했던 캐싱된 페이지를 반환하게 된다.
export default async function ProductPage() {
  // throw new Error();
  console.log("프로덕트 페이지");
  const products = await getProducts();

  return (
    <div>
      <Image src={clothesImage} alt="clothes" />
      {/* Nextjs에서 제공하는 image 태그 , 서버상에 가지고있는 이미지라면 이렇게 작성해서 사용가능 */}
      {/* Nextjs 제공하는 태그 사용시 next가 이미지 최적화 해줘서 용량 줄어듦 */}
      <h1>제품 소개 페이지! 버전 2</h1>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
            {/* 해당 id 값으로 경로를 만들고 그 id가 가지고 있는 name을 보여줄거임 */}
            {/* 기존 페이지별 라우팅에서 컴포넌트별 라우팅이 가능해진다고 하는게 렌더링 방식에서 ssr와 csr이 가능하다는거지 isr ssg ssr이 페이지단 하나에서 나뉘어서 가능하다는 게 아닌가?
             */}
          </li>
        ))}
      </ul>

      <MeowArticle />
    </div>
  );
}

// 지금 이렇게 되면 기존 app 내부의 페이지(ssg) 로 생성 다른 리스트 자체는 ssg / 마지막 리스트의 텍스트만 isr로 동작
// 인줄 알았는데, 5초로 설정해놓고 기존 data, products.json의 데이터를 바꿔보니 5초 후 같이 업데이트 됨
// revalidate 를 사용한 해당 url 만 업데이트 시키는 것이 아닌 해당 url 이 바뀐걸 감지할 때 페이지 전체 중 바뀐 부분을 업데이트 해주는 거임
// revalidate 라는 속성의 역할임
// 왜 그런거임 ????? 그리고 fetch 는 브라우저 api 인데 지금 서버상에서 사용하고 있음 엘리꺼 답변 토대로 다시 보기
