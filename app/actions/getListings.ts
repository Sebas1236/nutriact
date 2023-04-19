import prisma from "@/app/libs/prismadb";
import { ExerciseTarget } from '../interfaces/exercise-target';

export default async function getListings() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return listings;
    } catch (error: any) {
        throw new Error(error);
    }
}