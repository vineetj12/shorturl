import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  const data = await prisma.user.findMany({
    where: { username: username || undefined },
  });

  return NextResponse.json({ data });
}
