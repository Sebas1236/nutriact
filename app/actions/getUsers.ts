import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getUsers = async () => {
  const session = await getSession();
  if (!session?.user?.email) {
    return [];
  }

  try {
    let users = await prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    //create a new array with serialized dates
    let newUsers = users.map((user) => {
      return {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
        //check if emailVerified null
        emailVerified: user.emailVerified
          ? user.emailVerified.toISOString()
          : null,
      };
    });

    return newUsers;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
