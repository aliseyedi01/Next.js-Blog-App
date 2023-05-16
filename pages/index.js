import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Link from "next/link";
import { Button } from "primereact/button";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen  w-full bg-sky-200 dark:bg-indigo-950  ">
      <PageMetaHead title="Home" />
      <div className="mx-auto max-w-5xl px-4 py-12  sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-600 dark:text-gray-400">
            Welcome to Blog App
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-800 dark:text-red-500  sm:text-4xl">
            A Simple Blog App
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-100 lg:mx-auto">
            This is a simple blog app built with Next.js and Tailwind CSS. It allows you to read
            blog posts, as well as view a list of all blog posts. It's perfect for those who want to
            learn Next.js and build a simple blog app.
          </p>

          <div className="mt-10 flex gap-3 sm:justify-center lg:justify-center">
            <Link href="/blog">
              <Button type="button" label="Get Start" icon="pi pi-slack" severity="danger" raised />
            </Link>
            <Link href="/home#">
              <Button icon="pi pi-users" type="button" label="Learn More" raised severity="info" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
