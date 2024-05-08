"use client";
import { protectedPage } from "@/features/auth";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <h1 className="text-2xl ">Main Page</h1>
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <div>
          <h2 className="text-2xl mb-8">Block list</h2>
          <AddBlockItemForm />
          <BlockList className="mt-3" />
        </div>
      </div>
    </main>
  );
}

export default protectedPage(Home);
