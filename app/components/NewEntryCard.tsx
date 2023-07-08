"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

function NewEntryCard() {
  const router = useRouter();

  async function handleClick() {
    const data = await createNewEntry();
    // HTTP routes are basically a stack
    // router.replace would be great for a modal as you would not want a user to hit back and go back to the modal
    router.push(`/journal/${data.id}`);
  }

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow"
      onClick={handleClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  );
}

export default NewEntryCard;
