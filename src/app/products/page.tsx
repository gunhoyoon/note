import Link from "next/link";
import React from "react";
import styles from "./products.module.css";
import { getProducts } from "@/service/products";

export default async function ProductPage() {
  const products = await getProducts();
  // producst에 할당한 getProducts의 타입은 프로미스니까 await 을 사용해줘야한다.

  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   next: {
  //     revalidate: 0,
  //   },
  // });
  // const data = await res.json();
  // const CatData = data.data[0];
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.list}>
        {products.map((product, i) => (
          <li key={i}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
            {/* 해당 id 값으로 경로를 만들고 그 id가 가지고 있는 name을 보여줄거임 */}
          </li>
        ))}
      </ul>
    </div>
  );
}
