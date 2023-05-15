export async function getDataApi() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=technology&from=2023-05-04&to=2023-05-05&language=en&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=9`,
  );

  const data = await res.json();
  const articles = data.articles;

  return articles;
}
