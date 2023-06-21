import { setAuthCredentials } from "@/apollo/auth-utils";
import { LOGIN_MUTATION } from "@/graphql/mutation";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const email = useRef("");
  const password = useRef("");
  const [login] = useMutation(LOGIN_MUTATION);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        input: {
          email: email.current,
          password: password.current,
        },
      },
      onCompleted: ({ loginUser }) => {
        setAuthCredentials(loginUser);
        router.push("/");
        return;
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => (email.current = e.target.value)} />
      <hr />
      <input
        type="password"
        onChange={(e) => (password.current = e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
