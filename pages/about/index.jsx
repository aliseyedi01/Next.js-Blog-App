import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Image from "next/image";
import AboutImage from "@/public/image/About.jpg";
import { ScrollPanel } from "primereact/scrollpanel";

export default function About() {
  return (
    <div className="bg-sky-200 h-screen pb-20">
      <ScrollPanel className=" w-full h-full  ">
        <PageMetaHead title="About" />
        <div className="max-w-screen-lg mx-auto px-4  lg:px-8 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-flow-row grid-flow-row-dense md:gap-8 items-center">
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
              <h1 className="text-4xl font-bold mb-4">About Our Blog </h1>
              <p className=" leading-loose font-serif text-justify text-lg  ">
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
