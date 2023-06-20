import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const token = getAuthCredentials();

  if (isAuthenticated({ token })) {
    router.replace("/");
    console.log(isAuthenticated({ token }));
  }
  return <h1>Dashboard</h1>;
}
