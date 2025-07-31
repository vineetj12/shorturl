"use client";
import UserPage from "@/component/UserPage";
import { RecoilRoot } from "recoil";
export default function UserClientWrapper() {
  return <RecoilRoot><UserPage /></RecoilRoot>;
}
