import PrimeReact from "primereact/api";
PrimeReact.ripple = true;

import { Menubar } from "primereact/menubar";
import { Image } from "primereact/image";
import { useRouter } from "next/router";
import DarkMode from "./DarkModeButton";

export default function NavBar() {
  const router = useRouter();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      className: " font-bold font-mono",
      command: () => {
        router.push("/");
      },
    },
    {
      label: "Blog",
      icon: "pi pi-th-large",
      className: " font-bold font-mono",
      command: () => {
        router.push("/blog");
      },
    },
    {
      label: "About",
      icon: "pi pi-users",
      className: " font-bold font-mono",
      command: () => {
        router.push("/about");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
      className: " font-bold font-mono",
      command: () => {
        router.push("/contact");
      },
    },
  ];

  const startTemplate = (
    <div className="mr-6 flex items-center gap-2">
      <Image width="50" height="50" alt="blog" src="/image/blog.png" />
      <p className="font-mono text-xl font-bold  uppercase">Blog</p>{" "}
    </div>
  );

  const endTemplate = (
    <div className="flex items-center gap-x-2">
      <DarkMode />
      <div className=" relative h-[2rem]   w-[2rem] overflow-hidden rounded-full  border-2 border-red-600 md:h-[35px] md:w-[35px] ">
        <Image
          width="50"
          height="50"
          alt="blog"
          src="/image/avatar.jpg"
          className="rounded-full "
        />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-sky-200 p-3 px-4 dark:bg-indigo-950 md:px-6   ">
      <Menubar
        model={items}
        start={startTemplate}
        end={endTemplate}
        className="rounded-lg border border-indigo-500  dark:bg-cyan-200"
      />
    </div>
  );
}
