import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";

// variable font : size , weight 등 글꼴 속성마다 다 다운로드를 받아 사용해야하는데, 한가지 파일로 갖가지 버전을 다 가지고 있음을 뜻한다.
const sans = Open_Sans({ subsets: ["latin"] });
// variable font
const gothic = Nanum_Gothic({ weight: "700", subsets: ["latin"] });
// variable font X

export const metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      {/* font 사용법 className={sans.className} */}
      {/* 로컬에 있는 폰트를 사용할 시 경로를 설정하는것도 가능
      https://nextjs.org/docs/pages/building-your-application/optimizing/fonts */}
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>
            <Link href="/">Demo Header</Link>
          </h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
