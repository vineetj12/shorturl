import { redirect } from "next/navigation";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { shorturl: string } }) {
  const result = await prisma.tryurl.findFirst({
    where: { shorturl: params.shorturl },
  });

  if (result) {
    redirect(result.url);
  }

  return <div>Short URL not found</div>;
}
