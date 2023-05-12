import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import Link from "next/link";
import { Button } from "primereact/button";
import React from "react";

export default function Home() {
  return (
    <div className="bg-cyan-100  min-h-screen w-full ">
      <PageMetaHead title="Home" />
      <div className="max-w-5xl mx-auto py-12 px-4  sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
            Welcome to Blog App
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Simple Blog App
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This is a simple blog app built with Next.js and Tailwind CSS. It allows you to read
            blog posts, as well as view a list of all blog posts. It's perfect for those who want to
            learn Next.js and build a simple blog app.
          </p>
          <div className="mt-10 flex sm:justify-center lg:justify-center gap-3">
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
