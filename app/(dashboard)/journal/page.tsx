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
}

function JournalPage() {
  return <div>Journal page</div>;
}

export default JournalPage;
