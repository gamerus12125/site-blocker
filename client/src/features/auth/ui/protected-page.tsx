"use client";
import { useSessionQuery } from "@/entities/session";
import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isPending, isError } = useSessionQuery();
    if (isPending) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.signUp);
    }

    return <Component {...props} />;
  };
}
