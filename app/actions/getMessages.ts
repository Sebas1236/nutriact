import prisma from "@/app/libs/prismadb";

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    //return messages with users dates serialized
    const newMessages = messages.map((message) => {
      return {
        ...message,
        createdAt: message.createdAt.toISOString(),
        seen: message.seen.map((user) => {
          return {
            ...user,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString(),
            //check if emailVerified null
            emailVerified: user.emailVerified
              ? user.emailVerified.toISOString()
              : null,
          };
        }),
        sender: {
          ...message.sender,
          createdAt: message.sender.createdAt.toISOString(),
          updatedAt: message.sender.updatedAt.toISOString(),
          //check if emailVerified null
          emailVerified: message.sender.emailVerified
            ? message.sender.emailVerified.toISOString()
            : null,
        },
      };
    });

    return newMessages;
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
