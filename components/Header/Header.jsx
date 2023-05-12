import PrimeReact from "primereact/api";
PrimeReact.ripple = true;

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Badge } from "primereact/badge";
import { useRouter } from "next/router";
import avatar from "@/public/image/avatar.jpg";
import blog from "@/public/image/blog.png";

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
      {/* <Image fill={true} alt="blog" src={avatar} /> */}
      <Image width="50px" alt="" src="https://cdn-icons-png.flaticon.com/512/1809/1809216.png" />
      <p className="font-mono text-xl uppercase font-bold">Blog</p>{" "}
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
        <Image
          width="30px"
          alt=""
          // src={blog}
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
          className="rounded-full"
        />
      </Button>
    </div>
  );

  return (
    <div className="w-full p-3 px-6 bg-sky-200   ">
      <Menubar
        model={items}
        start={startTemplate}
        end={endTemplate}
        className="border border-indigo-500  rounded-lg"
      />
    </div>
  );
}
