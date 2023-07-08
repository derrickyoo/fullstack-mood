import EntryCard from "@/app/components/EntryCard";
import NewEntryCard from "@/app/components/NewEntryCard";
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

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-8">Journal page</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />

        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default JournalPage;
