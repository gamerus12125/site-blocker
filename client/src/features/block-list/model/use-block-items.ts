import { useBlockListQuery } from "@/entities/block-list";
import { useDebouncedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const { data, isPending } = useBlockListQuery({
    q: useDebouncedValue(q, 400),
  });

  const items = data?.items ?? [];

  return {
    items,
    isPending,
    q,
    setQ,
  };
}
