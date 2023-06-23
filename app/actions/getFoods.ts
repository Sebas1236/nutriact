import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
    const foods = await prisma.food.findMany({
    
    });


    return foods;
  } catch (error: any) {
    throw new Error(error);
  }
}
