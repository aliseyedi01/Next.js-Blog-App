import React from "react";
import Link from "next/link";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { AiFillFileText, AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { useRouter } from "next/router";

const Items = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    name: "Blog",
    path: "/blog",
    icon: <AiFillFileText />,
  },
  {
    id: 3,
    name: "About",
    path: "/about",
    icon: <HiUserGroup />,
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
    icon: <BsFillEnvelopeAtFill />,
  },
];

export default function Header() {
  const router = useRouter();
  const activeRouter = router.asPath;
  // console.log(router.asPath);

  return (
    <div className="bg-sky-500 w-full  flex justify-between  items-center  h-14 px-3">
      <div className="h-full flex gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1809/1809216.png"
          alt="name app"
          className="h-11"
        />
        <p className="font-mono text-xl uppercase font-bold">Blog</p>
      </div>

      <div className="h-full flex  ">
        <ul className="flex gap-2 font-serif  font-bold capitalize items-center">
          {Items.map((item) => (
            <Link rel="stylesheet" href={item.path}>
              <li
                key={item.id}
                className={`cursor-pointer hover:bg-green-400 flex rounded-md items-center gap-1  px-2 py-1  ${
                  item.path === activeRouter ? "text-white" : ""
                }`}
              >
                {item.icon}
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="h-full flex justify-between gap-3 items-center ">
        <span className="pi pi-bell text-2xl "></span>
        <img
          className="h-9 rounded-full"
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
          alt="user"
        />
      </div>
    </div>
  );
}
