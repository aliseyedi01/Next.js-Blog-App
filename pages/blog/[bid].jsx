import React from "react";
import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Image from "next/image";
import { ScrollTop } from "primereact/scrolltop";
import { ScrollPanel } from "primereact/scrollpanel";
import { useRouter } from "next/router";
import ImagePlaceholder from "@/public/image/PlaceHolderImage.png";
import { Button } from "primereact/button";
import { getDataApi } from "@/lib/getDataApi";

export default function SinglePost({ articles }) {
  const router = useRouter();
  const IdArticle = router.query.bid;
  const article = articles?.find((item) => item.title == IdArticle);

  if (!article) {
    return null; // or render a loading spinner
  }

  const backRoute = () => {
    router.back();
  };

  return (
    <div className="relative h-screen w-full bg-sky-200 pb-11 dark:bg-indigo-950  ">
      <ScrollPanel className=" h-full w-full ">
        <PageMetaHead title={article.title} />
        <div className="flex w-full flex-col p-4 ">
          <div className="flex items-baseline justify-start">
            <Button
              icon="pi pi-arrow-left"
              text
              severity="info"
              aria-label="User"
              onClick={backRoute}
            />
            <h2 className="mb-4 p-3 pb-0 text-xl font-semibold  text-sky-600 dark:text-yellow-300">
              {article.title}
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 place-content-center    gap-5 px-2 pt-4 md:grid-cols-2 ">
            <div>
              <Image
                src={article?.urlToImage ? article.urlToImage : ImagePlaceholder}
                alt={article.title}
                width={900}
                height={300}
                priority
                className="h-80 w-auto cursor-pointer rounded-lg object-cover shadow-2xl"
              />
            </div>
            <div className="w-full ">
              <p className="my-4 w-full text-2xl text-sky-800 dark:text-gray-300">
                {article.description}
              </p>
              <p className="my-4 w-full text-xl text-sky-600 dark:text-sky-400">
                {article.content}
              </p>
            </div>
          </div>
        </div>
        <ScrollTop
          target="parent"
          threshold={100}
          icon="pi pi-chevron-up text-base "
          className="w-3rem h-3rem md:w-4rem md:h-4rem border-round-md bg-primary sticky  bottom-20 right-7 md:hidden	"
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

export async function getStaticPaths() {
  const articles = await getDataApi();

  const paths = articles?.map((article) => ({ params: { bid: article.title } }));

  return {
    paths: paths,
    fallback: true,
  };
}
