"use client";
import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
  const { handleSubmit, register, isPending, errorMessage } = useSignUpForm();
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ ...register("email"), required: true, type: "email" }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          ...register("password"),
          required: true,
          type: "password",
        }}
      />
      <UiButton disabled={isPending} variant="primary">
        Sign up
      </UiButton>
      <UiLink href={ROUTES.signIn} className="text-center">
        Sign In
      </UiLink>
      {errorMessage && <span className="text-rose-500">{errorMessage}</span>}
    </form>
  );
}
