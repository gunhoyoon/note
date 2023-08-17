import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Counter />
      <Image
        src={"https://images.unsplash.com/photo-1441986300917-64674bd600d8"}
        width={400}
        height={400}
        alt="unsplash"
        // priority
      />
      {/* 서버상에 있는 이미지는 nextjs 가 이미지에 대한 정보를 알고있지만 외부 이미지를 사용할땐 width height를 알려줘야함 + next config에 해당 정보 추가해야됨 protocol + 도메인 */}
      {/*  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  }, 추가 / config 수정시 재실행 */}
      {/* nextjs Image 는 다운로드 되기전 되고나서 이미지의 크기를 알기때문에 공간을 차지해둠, 레이아웃 쉬프트가 일어나지 않음 */}
      {/* 이미지가 여러개라면 가장 중요해서 먼저 다운로드 받아줄 이미지에 priority 속성을 넣어줘야함 */}
    </>
  );
}
