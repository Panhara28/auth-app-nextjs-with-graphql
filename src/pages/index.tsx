import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import AppLayout from "@/component/AppLayout";
import { getAuthCredentials, isAuthenticated } from "@/apollo/auth-utils";
import { gql, useQuery } from "@apollo/client";

const AdminDashboard = dynamic(() => import("@/component/AdminDashboard"));

const ME_QUERY = gql`
  query Me {
    me {
      fullname
    }
  }
`;

export default function Dashboard() {
  const { data, loading } = useQuery(ME_QUERY);
  if (loading || !data) <>Loading...</>;
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
