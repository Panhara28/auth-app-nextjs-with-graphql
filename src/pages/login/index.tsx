import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import AuthPageLayout from "@/component/AuthLayout";
import { LoginForm } from "@/component/LoginForm";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const token = getAuthCredentials();
  console.log(isAuthenticated({ token }));
  if (isAuthenticated({ token })) {
    // router.replace("/");
  }

  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
}
