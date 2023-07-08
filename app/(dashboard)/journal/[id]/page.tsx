import EntryEditor from "@/app/components/EntryEditor";

function JournalEntryPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div>
      {params.id}
      <EntryEditor />
    </div>
  );
}

export default JournalEntryPage;
