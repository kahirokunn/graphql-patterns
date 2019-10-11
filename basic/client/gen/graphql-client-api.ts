import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
   __typename?: 'Author',
  id: Scalars['Int'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  posts?: Maybe<Array<Maybe<Post>>>,
};


export type AuthorPostsArgs = {
  findTitle?: Maybe<Scalars['String']>
};

export type Mutation = {
   __typename?: 'Mutation',
  addPost?: Maybe<Post>,
};


export type MutationAddPostArgs = {
  title: Scalars['String'],
  authorId: Scalars['ID']
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['Int'],
  title: Scalars['String'],
  author: Author,
};

export type Query = {
   __typename?: 'Query',
  posts?: Maybe<Array<Maybe<Post>>>,
  authors?: Maybe<Array<Maybe<Author>>>,
};

export type AddPostMutationVariables = {
  title: Scalars['String'],
  authorId: Scalars['ID']
};


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { addPost: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title'>
    & { author: (
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstName' | 'lastName'>
    ) }
  )> }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title'>
    & { author: (
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstName' | 'lastName'>
    ) }
  )>>> }
);

export type DeepUserPostsQueryVariables = {
  findTitle: Scalars['String']
};


export type DeepUserPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title'>
    & { author: (
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstName' | 'lastName'>
      & { posts: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title'>
        & { author: (
          { __typename?: 'Author' }
          & Pick<Author, 'id' | 'firstName' | 'lastName'>
          & { posts: Maybe<Array<Maybe<(
            { __typename?: 'Post' }
            & Pick<Post, 'id' | 'title'>
            & { author: (
              { __typename?: 'Author' }
              & Pick<Author, 'id' | 'firstName' | 'lastName'>
              & { posts: Maybe<Array<Maybe<(
                { __typename?: 'Post' }
                & Pick<Post, 'id' | 'title'>
              )>>> }
            ) }
          )>>> }
        ) }
      )>>> }
    ) }
  )>>> }
);

export const AddPostDocument = gql`
    mutation addPost($title: String!, $authorId: ID!) {
  addPost(title: $title, authorId: $authorId) {
    id
    title
    author {
      id
      firstName
      lastName
    }
  }
}
    `;
export type AddPostMutationFn = ApolloReactCommon.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, baseOptions);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = ApolloReactCommon.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const PostsDocument = gql`
    query posts {
  posts {
    id
    title
    author {
      id
      firstName
      lastName
    }
  }
}
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
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;
export const DeepUserPostsDocument = gql`
    query deepUserPosts($findTitle: String!) {
  posts {
    id
    title
    author {
      id
      firstName
      lastName
      posts(findTitle: $findTitle) {
        id
        title
        author {
          id
          firstName
          lastName
          posts(findTitle: $findTitle) {
            id
            title
            author {
              id
              firstName
              lastName
              posts(findTitle: $findTitle) {
                id
                title
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useDeepUserPostsQuery__
 *
 * To run a query within a React component, call `useDeepUserPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeepUserPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeepUserPostsQuery({
 *   variables: {
 *      findTitle: // value for 'findTitle'
 *   },
 * });
 */
export function useDeepUserPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DeepUserPostsQuery, DeepUserPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<DeepUserPostsQuery, DeepUserPostsQueryVariables>(DeepUserPostsDocument, baseOptions);
      }
export function useDeepUserPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DeepUserPostsQuery, DeepUserPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DeepUserPostsQuery, DeepUserPostsQueryVariables>(DeepUserPostsDocument, baseOptions);
        }
export type DeepUserPostsQueryHookResult = ReturnType<typeof useDeepUserPostsQuery>;
export type DeepUserPostsLazyQueryHookResult = ReturnType<typeof useDeepUserPostsLazyQuery>;
export type DeepUserPostsQueryResult = ApolloReactCommon.QueryResult<DeepUserPostsQuery, DeepUserPostsQueryVariables>;
