import { ReactNode } from "react";

export function UiFormPageLayout({
  title,
  form,
}: {
  form: ReactNode;
  title: string;
}) {
  return (
    <main className="min-h-screen flex flex-col bg-slate-100">
      <div className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 pt-8 pb-16 w-full max-w-[400px] bg-white self-center">
          <h1 className="text-2xl mb-6">{title}</h1>
          {form}
        </div>
      </div>
    </main>
  );
}
