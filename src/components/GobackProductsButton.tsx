"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function GobackProductsButton() {
  const router = useRouter();
  //  import next/navigate , router xx
  return (
    <button
      onClick={() => {
        router.push("/products");
        // 이전으로 이동하고 싶을 때 back , 이전 이외 다른 페이지로 이동하고 싶을 때 push("/해당경로")
      }}
    >
      제품 목록으로 아동하기
    </button>
  );
}
