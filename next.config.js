/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", // 기존에 사용하던 이 url은 더 이상 존재하지 않거나 바뀌었기 때문에 이 url로 접근하면
        destination: "/products", // 여기로 보내줘라
        permanent: true, // true 설정 시 status code 308을 반환, 영원히 사라진게 맞으니까 destination 해당 경로를 캐시해라고 검색언진한테 알려줌
      },
      {
        source: "/products/deleted_temp", // 기존에 사용하던 이 url은 더 이상 존재하지 않거나 바뀌었기 때문에 이 url로 접근하면
        destination: "/products", // 여기로 보내줘라
        permanent: false, // false 설정 시 status code 307을 반환, 일시적으로 바뀐거 뿐이니 캐시하지마라
      },
    ];
  }, // 이전 경로를 북마크 , 즐겨찾기 해두고 사용하는 사용자들이 있을 수 있기 떄문에

  async rewrites() {
    // 사용자가 url 쓰기 복잡해 간편하게 사용하고 싶거나 , 그대로 노출되는게 부담이 있을 때
    return [
      {
        source: "/dep",
        destination: "/about/dep1/dep2",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
