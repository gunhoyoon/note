"use client";

import { useEffect } from "react";
// 상태에 관한 useEffect 이나 useState 를 사용해야하기 때문에 useClien에서 사용해야됨
type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러입니다 !!!!!!!!!!!</h2>
      <button onClick={() => reset()}></button>
    </div>
    //  <Suspense fallback={<Error / >}>
    //  </Suspense> 에러 바운더리
    // 같은 레벨에 에러 처리를 해주지 않았다면 그 상위 상위로 계속 올라감
  );
}
