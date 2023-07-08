import { UserButton } from "@clerk/nextjs";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen relative">
      <aside className="w-[200px] absolute top-0 left-0 h-full border-r border-black/10">
        Mood
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
