import React from "react";
import { Head } from "next/document";

export default function PageMetaHead() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="blog" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cdn-icons-png.flaticon.com/512/6114/6114045.png"
      />
      <meta charSet="utf-8" />
      <title>Blog App</title>
    </Head>
  );
}
