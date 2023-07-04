import getUserByClerkId from "@/utils/auth";
import { prisma } from "@/utils/db";

async function getJournalEntries() {
  const user = await getUserByClerkId();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
}

async function JournalPage() {
  const entries = await getJournalEntries();

  return <div>Journal page</div>;
}

export default JournalPage;
