import { redirect } from "next/navigation";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Page({
  params,
}: {
  params: Promise<{ shorturl: string }>;
}) {
  const { shorturl } = await params;

  const result = await prisma.tryurl.findFirst({
    where: { shorturl },
  });

  if (result?.url) {
    redirect(result.url);
  }

  return <div>Short URL not found</div>;
}
