import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center transition",
        {
          primary:
            "text-white bg-teal-500 shadow shadow-teal-500/30 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-default",
          secondary: "text-white bg-rose-500 shadow shadow-rose-500/30 hover:bg-rose-600 disabled:opacity-50 disabled:cursor-default",
          outlined: "border-slate-500 border hover:bg-slate-300 disabled:opacity-50 disabled:cursor-default",
        }[variant],
      )}
    />
  );
}
