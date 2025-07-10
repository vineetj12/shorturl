import { NextRequest,NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma=new PrismaClient();
export async function POST(request:NextRequest){
    try {
        const body=await request.json();
        const existing=await prisma.user.findFirst({where:{username:body.username}});
        if(existing){
            const password = crypto.createHash("sha256").update(body.password).digest("hex");
            const existing2=await prisma.user.findFirst({where:{username:body.username,password:password}});
            if(existing2){
                return NextResponse.json({
                    mes:"it is correct password"
                })
            }
            else{
                return NextResponse.json({
                    mes:"passowrd is incorrect"
                })
            }
        }
        else{
            return NextResponse.json({
                mes:"the use donot exist"
            })
        }
    } catch (error) {
      console.log("API error",error);
      return NextResponse.json({mes:"Internal Server Error"},{status:500});
    }
}