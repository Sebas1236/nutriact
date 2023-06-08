import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) return [];
  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });

    //return conversations with users dates serialized
    const newConversations = conversations.map((conversation) => {
      return {
        ...conversation,
        createdAt: conversation.createdAt.toISOString(),
        lastMessageAt: conversation.lastMessageAt.toISOString(),
        users: conversation.users.map((user) => {
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
        messages: conversation.messages.map((message) => {
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
        }),
      };
    });

    return newConversations;
  } catch (error: any) {
    return [];
  }
};

export default getConversations;
