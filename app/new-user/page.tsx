import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function createNewUser() {
  const user = await currentUser();

  if (user) {
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (!match) {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }

    redirect("/journal");
  } else {
    throw new Error("Impossible condition with Clerk middleware in place");
  }
}

async function NewUserPage() {
  await createNewUser();
  return <div>Loading...</div>;
}

export default NewUserPage;
