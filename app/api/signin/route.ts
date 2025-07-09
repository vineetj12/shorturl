import { NextRequest,NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma=new PrismaClient();
export async function POST(request:NextRequest){
    try {
        const body=await request.json();
        const password = crypto.createHash("sha256").update(body.password).digest("hex");
        const existing=await prisma.user.findFirst({where:{username:body.username,password:password}});
        if(existing){
            return NextResponse.json({
                mes:"it is correct password"
            })
        }
        else{
            return NextResponse.json({
                mes:"incorrect password"
            })
        }
    } catch (error) {
      console.log("API error",error);
      return NextResponse.json({mes:"Internal Server Error"},{status:500});
    }
}