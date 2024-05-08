import { useResetSession } from "@/entities/session";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useSignOut() {
    const resetSession = useResetSession()
    const router = useRouter()

    const {isPending, mutate} = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess() {
            router.push(ROUTES.signIn)
            resetSession()
        }
    })

    return {
        isPending,
        signOut: mutate
    }
}