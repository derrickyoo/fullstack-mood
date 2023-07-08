import getUserByClerkId from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

// Allows POST to URL `/api/journal`
export async function POST() {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Write about your day",
    },
  });

  return NextResponse.json({ data: entry });
}
