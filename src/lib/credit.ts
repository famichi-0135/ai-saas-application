import "server-only";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function getUserCredit() {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        credits: true,
      },
    });
    return dbUser?.credits ?? 0;
  } catch (error) {
    console.error("Error fetching user Credit", error);
    return 0;
  }
}

export async function decrementUserCredit(clerkId: string) {
  try {
    const user = await prisma.user.update({
      where: {
        clerkId: clerkId,
      },
      data: {
        credits: {
          decrement: 1,
        },
      },
      select: {
        credits: true,
      },
    });
    return user?.credits ?? 0;
  } catch (error) {
    console.error("Error decrementing user Credit", error);
    return new Error("Failed to updated Credits");
  }
}
