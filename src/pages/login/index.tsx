import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import AuthPageLayout from "@/component/AuthLayout";
import { LoginForm } from "@/component/LoginForm";
import { useRouter } from "next/router";

export default function LoginPage() {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
}
