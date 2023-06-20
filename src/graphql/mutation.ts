import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginUser($input: UserLoginInput!) {
    loginUser(input: $input)
  }
`;
