import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const { isPending, mutate, error } = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.home);
    },
  });

  const errorMessage = error ? "Sign up failed" : undefined;

  return {
    register,
    handleSubmit: handleSubmit((data) => mutate(data)),
    isPending,
    errorMessage,
  };
}
