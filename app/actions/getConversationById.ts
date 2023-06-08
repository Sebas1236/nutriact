import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    if (!conversation) {
      return null;
    }

    //serialize dates
    const newConversation = {
      ...conversation,
      createdAt: conversation.createdAt.toISOString(),
      lastMessageAt: conversation.lastMessageAt.toISOString(),

      users: conversation.users.map((user) => ({
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
        emailVerified: user.emailVerified
          ? user.emailVerified.toISOString()
          : null,
      })),
    };

    return newConversation;
  } catch (error: any) {
    return null;
  }
};

export default getConversationById;
