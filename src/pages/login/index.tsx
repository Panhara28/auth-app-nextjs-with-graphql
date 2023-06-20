import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import AuthPageLayout from "@/component/AuthLayout";
import { LoginForm } from "@/component/LoginForm";
import { GetServerSideProps } from "next";

export default function LoginPage() {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // TODO: Improve it
  const { token } = getAuthCredentials(ctx);
  if (isAuthenticated({ token })) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
