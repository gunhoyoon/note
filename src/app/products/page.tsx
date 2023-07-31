import Link from "next/link";
import React from "react";
import styles from "./products.module.css";

export default async function ProductPage() {
  const products = ["shirt", "pants", "skrit", "shose"];
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: {
      revalidate: 0,
    },
  });
  const data = await res.json();
  const CatData = data.data[0];
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.list}>
        {products.map((product, i) => (
          <li key={i}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
        <li>{CatData}</li>
      </ul>
    </div>
  );
}
