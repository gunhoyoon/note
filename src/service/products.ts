import path from "path";
// const path = require("path"); 로도 불러올 수 있음
import { promises as fs } from "fs";
// nodejs 중에 파일 시스템에 접근하겠다는 것 fs

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export async function getProducts(): Promise<Product[]> {
  const filepath = path.join(
    process.cwd(),
    "data",
    "products",
    "products.json"
  );
  // 내가 이거 경로 바뀌는지 확인하려고 폴더 구조를 products 폴더 하나 추가해서 작성했었는데. route 파일에서 GET 함수만들어서 get 메서드 사용할때 해당 폴더 구조가 잘못된줄알고 건들였다가
  // 제대로 요청했음에도 서버 에러남. 사실 export defalut 로 선언한게 잘못이었는데 500에러가 떠도 서버가 나기 때문에 내 문제임

  // console.log(filepath);
  //현재 경로 반환 (해당 로직의 경우 /data/products/products.json)test
  const data = await fs.readFile(filepath, "utf-8");
  // fs가 비동기이기 떄문에 await 를 사용함으로 확실하게 데이터를 받아옴
  // console.log(data);
  // 데이터 가져옴
  // console.log(JSON.parse(data));
  // JSON 형식의 데이터를 jS 객체 형태로 변환
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  // 타입 , Product | undefined id가 없을 경우 undefind 처리
  const products = await getProducts();
  return products.find((item) => item.id == id);
}
