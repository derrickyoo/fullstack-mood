import Link from "next/link";
import { auth } from "@clerk/nextjs";

async function HomePage() {
  const { userId } = await auth();

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Fullstack Mood</h1>
        <p className="2xl text-white/60 mb-4">
          Built using the latest and greatest in Next.js Version 13
        </p>
        <div>
          <Link href={!userId ? "/new-user" : "/journal"}>
            <button className="bg-pink-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
