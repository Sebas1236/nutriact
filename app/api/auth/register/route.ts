import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password } = body;
  const role="client"
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        role,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    } else {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
