import React from "react";
import Head from "next/head";

export default function PageMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cdn-icons-png.flaticon.com/512/6114/6114045.png"
      />
      <meta charSet="utf-8" />
    </Head>
  );
}

PageMetaHead.defaultProps = {
  title: "Blog App",
  keywords: "blog",
  Description: "blog app for learning next.js",
};
