
import { PrismaClient } from '@prisma/client';
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url: string = body.url;

    const existing = await prisma.tryurl.findUnique({
      where: { url },
    });

    if (!existing) {
      const short = crypto
        .createHash("sha256")
        .update(url)
        .digest("hex")
        .substring(0, 9);

      await prisma.tryurl.create({
        data: {
          url,
          shorturl: short,
        },
      });
      await prisma.data.create({data:{
        username:body.username,
        nickname:body.url,
        url:body.url,
      }})
      return NextResponse.json({ hash: short });
    } else {
      return NextResponse.json({ hash: existing.shorturl });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
