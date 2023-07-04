import { prisma } from "@/utils/db";
import { auth } from "@clerk/nextjs";

async function getUserByClerkId() {
  const { userId } = await auth();

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  });

  return user;
}

export default getUserByClerkId;
