import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export function useToggleBlocking() {
  const { data, isSuccess } = useAccountQuery();

  const { mutate, isPending } = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (data) {
      mutate({
        isBlockingEnabled: !data.isBlockingEnabled,
      });
    }
  };

  return {
    isPending,
    isBlockingEnabled: data?.isBlockingEnabled ?? false,
    toggleBlocking,
    isReady: isSuccess,
  };
}
