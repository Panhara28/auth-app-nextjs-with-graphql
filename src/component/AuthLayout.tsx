import { useRouter } from "next/router";

const AuthPageLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { locale } = useRouter();
  const dir = locale === "ar" || locale === "he" ? "rtl" : "ltr";

  return (
    <div
      className="flex items-center justify-center h-screen bg-light sm:bg-gray-100"
      dir={dir}
    >
      <div className="m-auto max-w-[420px] w-full bg-light sm:shadow p-5 sm:p-8 rounded">
        <div className="flex justify-center mb-2">
          <h1>Logo</h1>
        </div>
        {children}
      </div>
    </div>
  );
};
export default AuthPageLayout;
