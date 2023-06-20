import { useRouter } from "next/router";

const AdminLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { locale } = useRouter();
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150 bg-gray-100">
      <main className="w-full lg:ps-72 xl:ps-76">
        <div className="h-full p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
};
export default AdminLayout;
