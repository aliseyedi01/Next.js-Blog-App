/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NewsKey: "0aa43ac2957f409e9d2c8ccc1ceb37aa",
  },
  images: {
    domains: [
      "northern.starweekly.com.au",
      "ml.globenewswire.com",
      "ww2.kqed.org",
      "cdn-japantimes.com",
      "stockcharts.com",
      "chinadigitaltimes.net",
      "cdn.newsbusters.org",
      "static.foxnews.com",
      "bloximages.chicago2.vip.townnews.com",
      "bloximages.newyork1.vip.townnews.com",
      "mma.prnewswire.com",
      "cdn.incrediblethings.com",
      "images.barrons.com",
      "zycrypto.com",
      "monevator.com",
      "img.helpnetsecurity.com",
      "www.thewrap.com",
      "media.zenfs.com",
      "www.valuewalk.com",
      "c.biztoc.com",
      "cdn.punchng.com",
      "imageio.forbes.com",
      "thehillstimes.in",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
