"use client";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  {
    label: "Website",
    value: AddBlockItemDtoType.Website,
  },
  {
    label: "Keyword",
    value: AddBlockItemDtoType.KeyWord,
  },
];

export function AddBlockItemForm() {
  const { handleSubmit, register, isPending, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        options={typeOptions}
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === "KeyWord" ? "Enter key word" : "Enter website",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isPending}>
        Add block item
      </UiButton>
    </form>
  );
}
