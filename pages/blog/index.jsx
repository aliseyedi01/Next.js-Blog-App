import PageMetaHead from "@/components/MetaHead/PageMetaHead";
import React from "react";

export default function blog() {
  return (
    <div className="grid h-screen place-content-center bg-red-400">
      <PageMetaHead title="Blog" />
      Blog
    </div>
  );
}
