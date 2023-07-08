import getUserByClerkId from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }) {
  // Uses Request web standard (see MDN)
  // To get the body
  const { content } = await request.json();

  const user = await getUserByClerkId();

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  });

  return NextResponse.json({ data: updatedEntry });
}
