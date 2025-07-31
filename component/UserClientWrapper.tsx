
"use client";

import { RecoilRoot } from "recoil";
import UserPage from "./UserPage"; 

export default function UserClientWrapper() {
  return (
    <RecoilRoot>
      <UserPage />
    </RecoilRoot>
  );
}
