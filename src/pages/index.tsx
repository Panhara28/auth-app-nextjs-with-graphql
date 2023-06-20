import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import AppLayout from "@/component/AppLayout";
import Dashboard from "@/component/Dashboard";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function Home() {
  console.log("1");
  return (
    <>
      <Dashboard />
    </>
  );
}

// Home.Layout = AppLayout;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // TODO: Improve it
//   const token = getAuthCredentials(ctx);
//   console.log(isAuthenticated({ token }));
//   if (isAuthenticated({ token })) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };
