import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Image from "next/image";
import React from "react";
import { ScrollTop } from "primereact/scrolltop";
import { ScrollPanel } from "primereact/scrollpanel";
import Link from "next/link";
import ImagePlaceholder from "@/public/image/PlaceHolderImage.png";
import { Button } from "primereact/button";
import { getDataApi } from "@/lib/getDataApi";

function Blog({ articles }) {
  if (!articles) {
    return null;
  }

  return (
    <div className="h-screen w-full  bg-sky-200 pb-24 dark:bg-indigo-950  ">
      <ScrollPanel className=" h-full w-full  ">
        <PageMetaHead title="Blog News" />
        <h2 className="mb-4 p-3 pb-0 font-ubuntu text-2xl font-semibold dark:text-white md:mb-3 md:px-6">
          Blog News
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 md:p-6 md:pt-2">
          {articles.map((article, i) => (
            <div
              key={article.url}
              className="flex h-[30rem] w-full flex-col rounded-lg  bg-white shadow-lg "
            >
              <div className="h-[12rem] min-h-[14rem] w-full ">
                <Image
                  src={article?.urlToImage ? article.urlToImage : ImagePlaceholder}
                  alt={article.title}
                  width={900}
                  height={400}
                  loading="lazy"
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="flex h-[17rem] min-h-[17rem] flex-col justify-between rounded-b-lg p-4  ">
                <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{article.title}</h3>
                <p className="line-clamp-4 text-justify text-gray-500">{article.description}</p>
                <div className="flex w-full items-center justify-between">
                  <Link href={`/blog/${encodeURIComponent(article.title)}`}>
                    <Button
                      icon="pi pi-angle-right"
                      iconPos="right"
                      label="Read More"
                      className="w-40 text-right "
                    />
                  </Link>
                  <p className="font-ubuntu font-bold text-red-900">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollTop
          target="parent"
          threshold={100}
          className="w-3rem h-3rem  border-round-md bg-primary sticky bottom-20 right-7 md:bottom-7 md:right-5 "
          icon="pi pi-chevron-up text-base"
        />
      </ScrollPanel>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getDataApi();

  return {
    props: { articles },
  };
}

export default Blog;
