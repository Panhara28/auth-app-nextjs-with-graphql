import React from "react";
import { useRouter } from "next/router";
import { getAuthCredentials } from "./auth-utils";

interface PrivateRouteProps {
  authProps: any;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, authProps }) => {
  const router = useRouter();
  const { token } = getAuthCredentials();
  const isUser = !!token;

  React.useEffect(() => {
    if (!isUser) router.replace("/login"); // If not authenticated, force log in
  }, [isUser]);

  if (isUser) {
    return <>{children}</>;
  }
  if (isUser) {
    return <>Access Denied</>;
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <>Loading...</>;
};

export default PrivateRoute;
