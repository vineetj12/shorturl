"use client";

import dynamic from "next/dynamic";

const UserClientWrapper = dynamic(() => import("@/component/UserClientWrapper"), {
  ssr: false, 
});

export default function Page() {
  return <UserClientWrapper />;
}
