import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import AppLayout from "@/component/AppLayout";
import {
  allowedRoles,
  getAuthCredentials,
  hasAccess,
  isAuthenticated,
} from "@/apollo/auth-utils";

const AdminDashboard = dynamic(() => import("@/component/AdminDashboard"));
const OwnerDashboard = dynamic(() => import("@/component/OwnerDashboard"));

export default function Dashboard({ userPermissions }: any) {
  return <AdminDashboard />;
}

Dashboard.Layout = AppLayout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // TODO: Improve it
  const { token, permissions } = getAuthCredentials(ctx);
  if (
    !isAuthenticated({ token, permissions }) ||
    !hasAccess(allowedRoles, permissions)
  ) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      userPermissions: permissions,
    },
  };
};
