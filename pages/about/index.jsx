import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Image from "next/image";
import AboutImage from "@/public/image/about.jpg";
import { ScrollPanel } from "primereact/scrollpanel";

export default function About() {
  return (
    <div className="h-screen bg-sky-200 pb-20 dark:bg-indigo-950">
      <ScrollPanel className=" h-full w-full  ">
        <PageMetaHead title="About" />
        <div className="mx-auto max-w-screen-lg px-4  py-3 lg:px-8">
          <div className="grid grid-flow-row-dense grid-cols-1 items-center gap-4 md:grid-flow-row md:grid-cols-2 md:gap-8">
            <div className="w-full">
              <Image
                src={AboutImage}
                alt="About image"
                width={800}
                height={600}
                className="rounded-lg "
              />
            </div>
            <div className="mb-4 md:mb-0">
              <h1 className="mb-4 text-4xl font-bold dark:text-slate-200">About Our Blog </h1>
              <p className=" text-justify font-serif text-lg leading-loose  dark:text-slate-300 ">
                Welcome to our blog! We are a team of passionate writers and content creators who
                are dedicated to providing informative and engaging articles on various topics that
                matter to you.
                <br /> Our mission is to share knowledge and ideas that inspire and empower our
                readers to lead better lives. We believe that everyone has a unique perspective and
                story to tell, and we strive to create a platform that encourages and celebrates
                diverse voices.
              </p>
            </div>
          </div>
        </div>
      </ScrollPanel>
    </div>
  );
}
