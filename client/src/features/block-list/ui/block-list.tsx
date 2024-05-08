"use client";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "./block-item";

export function BlockList({ className }: { className?: string }) {
  const { isPending, items, q, setQ } = useBlockItems();

  const isEmptyText = !isPending && items.length === 0;
  return (
    <div className={className}>
      <UiTextField
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
        label="Search"
        className="mb-2"
      />
      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isPending && <UiSpinner className="text-teal-600 w-10 h-10" />}
        {isEmptyText ? (
          <p className="text-xl py-1 text-center">List is empty.</p>
        ) : (
          items.map((item) => <BlockItem {...item} key={item.id} />)
        )}
      </div>
    </div>
  );
}
