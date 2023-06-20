import { useApollo } from "@/apollo/apollo";
import PrivateRoute from "@/apollo/private-route";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

const Noop: React.FC = ({ children }: any) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const Layout = (Component as any).Layout || Noop;
  const authProps = (Component as any).authenticate;

  return (
    <ApolloProvider client={apolloClient}>
      {authProps ? (
        <PrivateRoute authProps={authProps}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </PrivateRoute>
      ) : (
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      )}
    </ApolloProvider>
  );
}
