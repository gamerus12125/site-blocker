"use client";
import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isPending, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isPending}
      onClick={toggleBlocking}
      variant={isBlockingEnabled ? "secondary" : "primary"}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UiButton>
  );
}
