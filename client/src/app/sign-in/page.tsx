import { SignInForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export default function SignIn() {
  return <UiFormPageLayout title="Sign In" form={<SignInForm />} />;
}
