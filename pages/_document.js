import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <PageMetaHead />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
