import styles from "./layout.module.css";
import Link from "next/link";
import { Metadata } from "next";

// 페이지별 경로보단 전체경로 , layout 에서 사용해주는게 좋음

export const metadata: Metadata = {
  title: "Products",
  description: "The world sensation item",
};
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/products/women">여자옷</Link>
          {/* <Link
            href={{
              pathname: "/products/man",
              query: { category: "" },
            }}
          >
            남자옷
          </Link> */}

          {/* 동적 사용 예시*/}
          {/* 잘못된 예시 */}
          {/* <Link
            href={{
              pathname: "/products/[slug]",
              query: { slug: "static" },
            }}
          >
            남자옷
          </Link> */}
          {/* 올바른 예시 */}
          {/* <Link href={`/route/[slug]?slug=${mock.name}`}>link</Link>
          <Link href={`/route/[slug]?slug=dynamicroute`}>dynamicroute</Link> */}
        </nav>
      </div>
      {children}
    </>
  );
}
