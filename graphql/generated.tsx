import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthUser = {
  __typename?: 'AuthUser';
  email: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type GoogleBook = {
  __typename?: 'GoogleBook';
  id: Scalars['String']['output'];
  volumeInfo: VolumeInfo;
};

export type ImageLinks = {
  __typename?: 'ImageLinks';
  smallThumbnail: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createUser?: Maybe<AuthUser>;
  loginUser?: Maybe<AuthUser>;
};


export type MutationCreateUserArgs = {
  user?: InputMaybe<UserInput>;
};


export type MutationLoginUserArgs = {
  credentials?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  searchGoogleBooks: SearchBooks;
  userById?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QuerySearchGoogleBooksArgs = {
  apiKey: Scalars['String']['input'];
  query: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['String']['input'];
};

export type SearchBooks = {
  __typename?: 'SearchBooks';
  items?: Maybe<Array<GoogleBook>>;
  kind: Scalars['String']['output'];
  totalItems: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type VolumeInfo = {
  __typename?: 'VolumeInfo';
  authors?: Maybe<Array<Scalars['String']['output']>>;
  description: Scalars['String']['output'];
  imageLinks: ImageLinks;
  infoLink: Scalars['String']['output'];
  language: Scalars['String']['output'];
  previewLink: Scalars['String']['output'];
  publishedDate: Scalars['String']['output'];
  publisher: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'AuthUser', userId: string, token: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'AuthUser', userId: string, token: string } | null };

export type SearchGoogleBooksQueryVariables = Exact<{
  query: Scalars['String']['input'];
  apiKey: Scalars['String']['input'];
}>;


export type SearchGoogleBooksQuery = { __typename?: 'Query', searchGoogleBooks: { __typename?: 'SearchBooks', totalItems: number, items?: Array<{ __typename?: 'GoogleBook', id: string, volumeInfo: { __typename?: 'VolumeInfo', title: string, authors?: Array<string> | null, description: string, publisher: string, publishedDate: string, infoLink: string, previewLink: string, imageLinks: { __typename?: 'ImageLinks', smallThumbnail: string, thumbnail: string } } }> | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', userId: string, email: string }> | null };


export const SignUpDocument = gql`
    mutation signUp($email: String!, $password: String!) {
  createUser(user: {email: $email, password: $password}) {
    userId
    token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  loginUser(credentials: {email: $email, password: $password}) {
    userId
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SearchGoogleBooksDocument = gql`
    query SearchGoogleBooks($query: String!, $apiKey: String!) {
  searchGoogleBooks(query: $query, apiKey: $apiKey) @rest(type: "SearchBooks", path: "?q={args.query}&key={args.apiKey}") {
    totalItems
    items @type(name: "GoogleBook") {
      id
      volumeInfo @type(name: "GoogleBookVolumeInfo") {
        title
        authors
        description
        publisher
        publishedDate
        imageLinks @type(name: "GoogleBookImageLinks") {
          smallThumbnail
          thumbnail
        }
        infoLink
        previewLink
      }
    }
  }
}
    `;

/**
 * __useSearchGoogleBooksQuery__
 *
 * To run a query within a React component, call `useSearchGoogleBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGoogleBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGoogleBooksQuery({
 *   variables: {
 *      query: // value for 'query'
 *      apiKey: // value for 'apiKey'
 *   },
 * });
 */
export function useSearchGoogleBooksQuery(baseOptions: Apollo.QueryHookOptions<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>(SearchGoogleBooksDocument, options);
      }
export function useSearchGoogleBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>(SearchGoogleBooksDocument, options);
        }
export function useSearchGoogleBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>(SearchGoogleBooksDocument, options);
        }
export type SearchGoogleBooksQueryHookResult = ReturnType<typeof useSearchGoogleBooksQuery>;
export type SearchGoogleBooksLazyQueryHookResult = ReturnType<typeof useSearchGoogleBooksLazyQuery>;
export type SearchGoogleBooksSuspenseQueryHookResult = ReturnType<typeof useSearchGoogleBooksSuspenseQuery>;
export type SearchGoogleBooksQueryResult = Apollo.QueryResult<SearchGoogleBooksQuery, SearchGoogleBooksQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    userId
    email
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;