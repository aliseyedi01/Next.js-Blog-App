import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Image from "next/image";
import React from "react";

const ImagePlaceholder =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33NUKvo6xLaAcTaCGFggAzBhYYEf7Rn2RzAVr5PB3NZ94VwKxFrAL_8KHjdXJqRbP6U0&usqp=CAU";

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=technology&from=2023-05-04&to=2023-05-05&language=en&sortBy=publishedAt&apiKey=2765d2e713f34a409a42560bfa4c6f38&pageSize=30",
  );
  const data = await res.json();
  const articles = data.articles;

  return {
    props: { articles },
  };
}

export default function Blog({ articles }) {
  let ali = [];
  articles.map((article) => {
    // console.log(article.urlToImage);
    ali.push(article.urlToImage?.split("/")[2]);
  });

  console.log(ali);

  if (!articles) {
    return null; // or render a loading spinner
  }

  return (
    <div className="h-screen w-full bg-red-400 overflow-y-scroll">
      <PageMetaHead title="Blog News" />
      <h2 className="text-2xl font-semibold mb-4 p-3 pb-0">Blog News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {articles.map((article) => (
          <div key={article.url} className="bg-white w-full h-full rounded-lg shadow-lg ">
            <a href={article.url}>
              <Image
                src={article?.urlToImage ? article.urlToImage : ImagePlaceholder}
                alt={article.title}
                width={900}
                height={300}
                loading="lazy"
                className="h-48 w-full object-cover rounded-t-lg"
              />

              {/* <img
                src={article.urlToImage ? article.urlToImage : ImagePlaceholder}
                alt={article.title}
                className="h-48 w-full object-cover rounded-t-lg"
              /> */}
            </a>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-500">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
