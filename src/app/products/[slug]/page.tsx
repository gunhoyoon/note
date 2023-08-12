import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";

export const dynamicParams = true;

// export const revalidate = 10;
// 인 경우 strumming server side rendering 으로 동작함
// true(기본값): 에 포함되지 않은 동적 세그먼트는 generateStaticParams요청 시 생성됩니다. 라고 나와있는데
type Props = {
  params: {
    slug: string;
  };
};

// 객체 안에 키와 값이 있는 구조임

// 데이터 베이스에 있는 제품의 리스트를 읽어와서, 화면에 뿌려줄거임

export default async function ProductPage({ params: { slug } }: Props) {
  // const { slug } = params;
  // 서버 파일에 있는 데이터중 해당 파일을 찾아서 보여줄거임
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  // 해당 컴포넌트에서 id 라는 인자를 받기로 했음. 그게 slug 이고 전달해줄 때 인자의 갯수를 정해서 보내준 상황임
  // true 로 설정해서 기본적으로 동적인 페이지를 만들수도,
  // notFound 페이지를 반환할수도,
  // false 로 설정해서 대체 페이지를 준비하지 않을수도 있음
  return <div>{product.name} 제품 설명 페이지</div>;

  // 이 친구같은 경우 notFound() 또 return 문 이미 만들어진 클라이언트 요소이지만 결정은 서버에서 하는 증거
  // 이 안에서의 useEffect함수와 같은 클라이언트에서 사용하는 동작을 할 경우
}

export async function generateStaticParams() {
  // 아직 사이즈가 크지 않기 때문에 모든 제품 페이지를 미리 만들게 해줄거임
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
  // 프론트 서버 단에서 도는 친구인데 use client 박으면 어찌되나?
}

// 서버단에서 도는 함수 , 클라이언트 실행 useEffect 섞였을 떄  어떻게 동작하는지?

// 기본동작 dynamicparams 없고 generateStaticParams 에 속한 친구를 클릭 할 때 Page 함수 동작하지 않음

// dynamic = "error " 및 force-static 으로 설정하면 기본적으로 dynamicParams의 기본값이 false 로 동작함
// 그럼 여기서 dynamicParams 가 false 라면 , true 라면 의 동작이 어떻게 되는지?

// dynamic Params 의 기본값은 true

// fallback 의 true false blocking 을 대체한다.
// fallback == true 시 빌드 시점에 생성되지 않은 페이지를 로드할 경우 요청을 받은 시에 서버에서 생성함
// fallback == false 시 빌드 시점에 생성되지 않은 페이지를 로드할 경우 404 페이지를 반환하게 됨
// fallback == blocking 시 빌드 시점에 생성되지 않은 페이지를 로드할 경우 미리 만들어놓은 로딩화면을 보여주는게 아닌

// false 시 404 를 반환하며 앱 폴더의 not found 페이지를 반환하게 된다.
// true 시 우선 대체페이지(로딩 페이지) 가 나온 후 products 의 not-found 페이지를 반환한다.
