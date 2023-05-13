import PrimeReact from "primereact/api";
PrimeReact.ripple = true;

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Badge } from "primereact/badge";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      className: " font-bold font-mono",
      command: () => {
        router.push("/home");
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
      <p className="font-mono text-xl uppercase  font-bold">Blog</p>{" "}
    </div>
  );

  const endTemplate = (
    <div className="flex items-center gap-x-0.5">
      <Button
        icon={
          <i className="pi pi-fw pi-bell text-gray-600 p-overlay-badge">
            <Badge
              severity="warning"
              className="!min-w-[6px] w-[6px] min-h-[6px] bg-orange-600   animate-pulse !h-[6px]"
            />
          </i>
        }
        text
        className="!border-none !outline-none !ring-0"
      />
      <Button text className="!border-none !outline-none !ring-0 py-2 grid place-items-center">
        <div className=" w-[2rem] h-[2rem]   relative md:w-[50px] md:h-[50px]  rounded-full border-2 border-red-600 overflow-hidden ">
          <Image
            width="50"
            height="50"
            alt="blog"
            src="/image/avatar.jpg"
            className="rounded-full "
          />
        </div>
      </Button>
    </div>
  );

  return (
    <div className="w-full p-3 px-4 md:px-6 bg-sky-200   ">
      <Menubar
        model={items}
        start={startTemplate}
        end={endTemplate}
        className="border border-indigo-500  rounded-lg"
      />
    </div>
  );
}
