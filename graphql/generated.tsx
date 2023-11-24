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

export type AuthorToCatalogueInput = {
  authorId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type BookEntry = {
  __typename?: 'BookEntry';
  _id: Scalars['ID']['output'];
  bookEntryId: Scalars['String']['output'];
  bookId: Scalars['String']['output'];
  dateRead: Scalars['String']['output'];
};

export type BookEntryInput = {
  bookId: Scalars['String']['input'];
  dateRead: Scalars['String']['input'];
};

export type BookFromCatalogueInput = {
  bookId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type BookToCatalogueInput = {
  bookId: Scalars['String']['input'];
  dateRead: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Catalogue = {
  __typename?: 'Catalogue';
  _id: Scalars['ID']['output'];
  authors: Array<Scalars['String']['output']>;
  bookEntries: Array<Maybe<BookEntry>>;
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
  addAuthorToUserCatalogue?: Maybe<Catalogue>;
  addBookToUserCatalogue?: Maybe<Catalogue>;
  createBookEntry?: Maybe<BookEntry>;
  createUser?: Maybe<AuthUser>;
  loginUser?: Maybe<AuthUser>;
  removeAuthorFromUserCatalogue?: Maybe<Catalogue>;
  removeBookFromUserCatalogue?: Maybe<Catalogue>;
};


export type MutationAddAuthorToUserCatalogueArgs = {
  input?: InputMaybe<AuthorToCatalogueInput>;
};


export type MutationAddBookToUserCatalogueArgs = {
  input?: InputMaybe<BookToCatalogueInput>;
};


export type MutationCreateBookEntryArgs = {
  input?: InputMaybe<BookEntryInput>;
};


export type MutationCreateUserArgs = {
  user?: InputMaybe<UserInput>;
};


export type MutationLoginUserArgs = {
  credentials?: InputMaybe<UserInput>;
};


export type MutationRemoveAuthorFromUserCatalogueArgs = {
  input?: InputMaybe<AuthorToCatalogueInput>;
};


export type MutationRemoveBookFromUserCatalogueArgs = {
  input?: InputMaybe<BookFromCatalogueInput>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  authorsByUserId?: Maybe<Array<Scalars['String']['output']>>;
  bookEntriesByUserId: Array<Maybe<BookEntry>>;
  bookEntryById: BookEntry;
  searchGoogleBooks: SearchBooks;
  userById?: Maybe<User>;
  userByToken?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryAuthorsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryBookEntriesByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryBookEntryByIdArgs = {
  bookEntryId: Scalars['String']['input'];
};


export type QuerySearchGoogleBooksArgs = {
  apiKey: Scalars['String']['input'];
  query: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserByTokenArgs = {
  token: Scalars['String']['input'];
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

export type GetUserByTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetUserByTokenQuery = { __typename?: 'Query', userByToken?: { __typename?: 'User', userId: string, email: string } | null };


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
export const GetUserByTokenDocument = gql`
    query getUserByToken($token: String!) {
  userByToken(token: $token) {
    userId
    email
  }
}
    `;

/**
 * __useGetUserByTokenQuery__
 *
 * To run a query within a React component, call `useGetUserByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetUserByTokenQuery(baseOptions: Apollo.QueryHookOptions<GetUserByTokenQuery, GetUserByTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByTokenQuery, GetUserByTokenQueryVariables>(GetUserByTokenDocument, options);
      }
export function useGetUserByTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByTokenQuery, GetUserByTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByTokenQuery, GetUserByTokenQueryVariables>(GetUserByTokenDocument, options);
        }
export function useGetUserByTokenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByTokenQuery, GetUserByTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByTokenQuery, GetUserByTokenQueryVariables>(GetUserByTokenDocument, options);
        }
export type GetUserByTokenQueryHookResult = ReturnType<typeof useGetUserByTokenQuery>;
export type GetUserByTokenLazyQueryHookResult = ReturnType<typeof useGetUserByTokenLazyQuery>;
export type GetUserByTokenSuspenseQueryHookResult = ReturnType<typeof useGetUserByTokenSuspenseQuery>;
export type GetUserByTokenQueryResult = Apollo.QueryResult<GetUserByTokenQuery, GetUserByTokenQueryVariables>;