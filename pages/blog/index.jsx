import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Image from "next/image";
import React from "react";
import { ScrollTop } from "primereact/scrolltop";
import { ScrollPanel } from "primereact/scrollpanel";
import Link from "next/link";
import ImagePlaceholder from "@/public/image/PlaceHolderImage.png";

export default function BlogPost({ articles }) {
  if (!articles) {
    return null; // or render a loading spinner
  }

  return (
    <div className="h-screen pb-24  w-full bg-sky-200  ">
      <ScrollPanel className=" w-full h-full  ">
        <PageMetaHead title="Blog News" />
        <h2 className="text-2xl font-semibold mb-4 p-3 pb-0">Blog News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {articles.map((article, i) => (
            <div key={article.url} className="bg-white w-full h-full rounded-lg shadow-lg ">
              <Link href={`/blog/${article.title}`}>
                {/* <Link href={`/blog/${i}`}> */}
                <Image
                  src={article?.urlToImage ? article.urlToImage : ImagePlaceholder}
                  alt={article.title}
                  width={900}
                  height={300}
                  loading="lazy"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-500">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        <ScrollTop
          target="parent"
          threshold={200}
          className="w-2rem h-2rem border-round-md bg-primary	 "
          icon="pi pi-chevron-up text-base"
        />
      </ScrollPanel>
    </div>
  );
}

export async function getDataApi() {
  // const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const API_KEY = "0aa43ac2957f409e9d2c8ccc1ceb37aa";

  console.log(API_KEY);
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=technology&from=2023-05-04&to=2023-05-05&language=en&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=30`,
    );
    const data = await res.json();
    const articles = data.articles;
    return articles;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getStaticProps() {
  const articles = await getDataApi();

  return {
    props: { articles },
  };
}
