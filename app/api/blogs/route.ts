import { connectToDb, generateErrorMessage, generateSuccessMessage } from "@/lib/helper"
import prisma from "@/prisma";
import { NextResponse } from "next/server";


export const GET = async () => {
  try{
    await connectToDb();
    const blogs = await prisma.blog.findMany();
    return generateSuccessMessage({blogs}, 200)
  } catch(error){
return generateErrorMessage({error},500);
  }finally {
await prisma.$disconnect()
  }
};


export const POST = async (req: Request) => {
  try{
    const{name} = await req.json();
    await connectToDb();
    const category = await prisma.category.create({data:{name}})
    return generateSuccessMessage({category}, 200)
  } catch(error){
return generateErrorMessage({error},500);
  }finally {
await prisma.$disconnect()
  }
}; 