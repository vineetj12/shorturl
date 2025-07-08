import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
export async function POST(request: NextRequest){
   try {
    const body = await request.json();
    const username:string=body.username;
    const password:string=body.password;
    const existing=await prisma.user.findFirst({
        where:{username},
    })
    if(!existing){
      await prisma.user.create({data:{username:username,password:password}});
      return NextResponse.json({mes:"new user added"});
    }
    else{
        return NextResponse.json({mes:"user already exist"});
    }
   } catch (error) {
     console.log("API error",error);
     return NextResponse.json({mes:"Internal Server Error"},{status:500});
   }
}