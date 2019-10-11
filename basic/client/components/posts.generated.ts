import * as Types from "../gen/types";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";

export type PostsQueryVariables = {};

export type PostsQuery = { __typename?: "Query" } & {
  posts: Array<
    { __typename?: "Post" } & Pick<Types.Post, "id" | "title"> & {
        author: Types.Maybe<
          { __typename?: "Author" } & Pick<Types.Author, "contract"> &
            AuthorFieldsFragment
        >;
      }
  >;
};

export type AuthorFieldsFragment = { __typename?: "Author" } & Pick<
  Types.Author,
  "firstName" | "lastName"
>;

export const AuthorFieldsFragmentDoc = gql`
  fragment authorFields on Author {
    firstName
    lastName
  }
`;
export const PostsDocument = gql`
  query posts {
    posts {
      id
      title
      author {
        ...authorFields
        contract
      }
    }
  }
  ${AuthorFieldsFragmentDoc}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PostsQuery,
    PostsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    baseOptions
  );
}
export function usePostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PostsQuery,
    PostsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    baseOptions
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
