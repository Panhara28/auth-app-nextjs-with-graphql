import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import AppLayout from "@/component/AppLayout";
import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";

const AdminDashboard = dynamic(() => import("@/component/AdminDashboard"));
const OwnerDashboard = dynamic(() => import("@/component/OwnerDashboard"));

export default function Dashboard({ userPermissions }: any) {
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
    props: {},
  };
};
