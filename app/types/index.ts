import { Listing, User, Conversation, Message } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeMessage = Omit<Message, "createdAt"> & {
  createdAt: string;
};

export type FullMessageType = SafeMessage & {
  sender: SafeUser;
  seen: SafeUser[];
};

export type SafeConversation = Omit<
  Conversation,
  "createdAt" | "lastMessageAt"
> & {
  createdAt: string;
  lastMessageAt: string;
};

export type FullConversationType = SafeConversation & {
  users: SafeUser[];
  messages: FullMessageType[];
};
