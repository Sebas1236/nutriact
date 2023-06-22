import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.email) return null;
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            }
            // include: {
            //     roles: true,
            // },
        });

        if(!currentUser) return null;

        return {
            ...currentUser,
            // roles: currentUser.roles.map((role) => role.name),
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        };
    } catch (error: any) {
        return null;
    }
}