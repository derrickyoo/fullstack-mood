import EntryEditor from "@/app/components/EntryEditor";
import getUserByClerkId from "@/utils/auth";
import { prisma } from "@/utils/db";

async function getEntry(id: string) {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });

  return entry;
}

async function JournalEntryPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const entry = await getEntry(params.id);

  return (
    <div>
      {params.id}
      <EntryEditor entry={entry} />
    </div>
  );
}

export default JournalEntryPage;
