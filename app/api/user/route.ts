import { connectToDb } from "@/lib/helper"
import prisma from "@/prisma";
import { NextResponse } from "next/server";


export const GET = async () => {
  try{
    await connectToDb();
    const users = await prisma.user.findMany()
    return NextResponse.json({message: "success", ...users}, {status:200})
  } catch(error){
NextResponse.json({message:"UError", error},{status:500});
  }finally {
await prisma.$disconnect()
  }
};