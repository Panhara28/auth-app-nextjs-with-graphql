import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("@/component/Layouts/admin"));
const OwnerLayout = dynamic(() => import("@/component/Layouts/owner"));

export default function AppLayout({
  userPermissions,
  ...props
}: {
  userPermissions: string[];
}) {
  return <AdminLayout {...props} />;
}
