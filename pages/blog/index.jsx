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
    return null; // or render a loading spinner
  }

  return (
    <div className="h-screen pb-24  w-full bg-sky-200 dark:bg-indigo-950  ">
      <ScrollPanel className=" w-full h-full  ">
        <PageMetaHead title="Blog News" />
        <h2 className="text-2xl font-semibold font-ubuntu mb-4 md:mb-3 dark:text-white p-3 md:px-6 pb-0">
          Blog News
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 md:p-6 md:pt-2 p-4">
          {articles.map((article, i) => (
            <div
              key={article.url}
              className="bg-white w-full h-[30rem] flex flex-col  rounded-lg shadow-lg "
            >
              <div className="h-[12rem] min-h-[14rem] w-full ">
                <Image
                  src={article?.urlToImage ? article.urlToImage : ImagePlaceholder}
                  alt={article.title}
                  width={900}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 h-[17rem] min-h-[17rem] flex flex-col justify-between rounded-b-lg  ">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-500 line-clamp-4 text-justify">{article.description}</p>
                <div className="flex justify-between w-full items-center">
                  <Link href={`/blog/${encodeURIComponent(article.title)}`}>
                    <Button
                      icon="pi pi-angle-right"
                      iconPos="right"
                      label="Read More"
                      className="w-40 text-right "
                    />
                  </Link>
                  <p className="text-red-900 font-bold font-ubuntu">
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
          threshold={200}
          className="w-2rem h-2rem md:w-3rem md:h-3rem border-round-md bg-primary	 "
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
    revalidate: 120,
  };
}

export default Blog;
