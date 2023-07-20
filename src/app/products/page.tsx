import Link from "next/link";
import React from "react";
import styles from "./products.module.css";

export default function ProductPage() {
  const products = ["shirt", "pants", "skrit", "shose"];
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.list}>
        {products.map((product, i) => (
          <li key={i}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
