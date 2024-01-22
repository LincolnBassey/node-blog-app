import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/helper";
import prisma from "@/prisma";
import bcrypt from "bcrypt"


export const POST = async (req: Request) =>{
  const {name, email, password} = await req.json();
  if(!name||  !email||  !password){
    return NextResponse.json({message:"invalid Data"},{status:422});
  }
  try{
    await connectToDb();
    const hashedPassword=await bcrypt.hash(password,10);
    const user = await prisma.user.create({data:{email, name , password: hashedPassword}});

    return NextResponse.json(
      {
        message:"user Sucessfully Created",
        ...user,
      },{status:201}
    );
  } catch(error: any) {
    return NextResponse.json(
      {
        message:"error creating user",
        ...error,
      },
      {status:500}
    )
  } finally{
    await prisma.$disconnect()
  }
};