import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, instructions, ingredients, hour, calories, image } = body;

  try {
    const user = await prisma.food.create({
      data: {
        name,
        instructions,
        ingredients,
        hour,
        calories,
        image,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Error en la creacion de receta" },
        { status: 400 }
      );
    } else {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
