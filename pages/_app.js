import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main className={`${ubuntu.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
