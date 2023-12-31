import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import AppLayout from "@/component/AppLayout";
import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import { gql } from "@apollo/client";
import useMe from "@/hooks/useMe";

const AdminDashboard = dynamic(() => import("@/component/AdminDashboard"));

export default function Dashboard() {
  const me = useMe();
  console.log(me);
  return <AdminDashboard />;
}

Dashboard.Layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // TODO: Improve it
  const { token } = getAuthCredentials(ctx);
  if (!isAuthenticated({ token })) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      token,
    },
  };
};
