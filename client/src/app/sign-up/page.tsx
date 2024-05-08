import { SignUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export default function SignUp() {
  return <UiFormPageLayout form={<SignUpForm />} title="Sign Up" />;
}
