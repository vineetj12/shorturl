import dynamic from "next/dynamic";
const UserPage = dynamic(() => import("@/component/UserPage"), {
  ssr: false,  
});
export default function Page() {
  return <UserPage />;
}
