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
  catalogueByUserId?: Maybe<Catalogue>;
  lastBookReadByUserId?: Maybe<BookEntry>;
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


export type QueryCatalogueByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryLastBookReadByUserIdArgs = {
  userId: Scalars['String']['input'];
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

export type GetCatalogueUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetCatalogueUserIdQuery = { __typename?: 'Query', catalogueByUserId?: { __typename?: 'Catalogue', authors: Array<string>, bookEntries: Array<{ __typename?: 'BookEntry', bookId: string, dateRead: string } | null> } | null };

export type GetLastBookReadQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetLastBookReadQuery = { __typename?: 'Query', lastBookReadByUserId?: { __typename?: 'BookEntry', bookId: string, dateRead: string } | null };

export type GetAuthorsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetAuthorsByUserIdQuery = { __typename?: 'Query', authorsByUserId?: Array<string> | null };

export type GetBooksByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetBooksByUserIdQuery = { __typename?: 'Query', bookEntriesByUserId: Array<{ __typename?: 'BookEntry', bookId: string, dateRead: string } | null> };

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
export const GetCatalogueUserIdDocument = gql`
    query getCatalogueUserId($userId: String!) {
  catalogueByUserId(userId: $userId) {
    authors
    bookEntries {
      bookId
      dateRead
    }
  }
}
    `;

/**
 * __useGetCatalogueUserIdQuery__
 *
 * To run a query within a React component, call `useGetCatalogueUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogueUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogueUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCatalogueUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>(GetCatalogueUserIdDocument, options);
      }
export function useGetCatalogueUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>(GetCatalogueUserIdDocument, options);
        }
export function useGetCatalogueUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>(GetCatalogueUserIdDocument, options);
        }
export type GetCatalogueUserIdQueryHookResult = ReturnType<typeof useGetCatalogueUserIdQuery>;
export type GetCatalogueUserIdLazyQueryHookResult = ReturnType<typeof useGetCatalogueUserIdLazyQuery>;
export type GetCatalogueUserIdSuspenseQueryHookResult = ReturnType<typeof useGetCatalogueUserIdSuspenseQuery>;
export type GetCatalogueUserIdQueryResult = Apollo.QueryResult<GetCatalogueUserIdQuery, GetCatalogueUserIdQueryVariables>;
export const GetLastBookReadDocument = gql`
    query getLastBookRead($userId: String!) {
  lastBookReadByUserId(userId: $userId) {
    bookId
    dateRead
  }
}
    `;

/**
 * __useGetLastBookReadQuery__
 *
 * To run a query within a React component, call `useGetLastBookReadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastBookReadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastBookReadQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetLastBookReadQuery(baseOptions: Apollo.QueryHookOptions<GetLastBookReadQuery, GetLastBookReadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastBookReadQuery, GetLastBookReadQueryVariables>(GetLastBookReadDocument, options);
      }
export function useGetLastBookReadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastBookReadQuery, GetLastBookReadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastBookReadQuery, GetLastBookReadQueryVariables>(GetLastBookReadDocument, options);
        }
export function useGetLastBookReadSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLastBookReadQuery, GetLastBookReadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLastBookReadQuery, GetLastBookReadQueryVariables>(GetLastBookReadDocument, options);
        }
export type GetLastBookReadQueryHookResult = ReturnType<typeof useGetLastBookReadQuery>;
export type GetLastBookReadLazyQueryHookResult = ReturnType<typeof useGetLastBookReadLazyQuery>;
export type GetLastBookReadSuspenseQueryHookResult = ReturnType<typeof useGetLastBookReadSuspenseQuery>;
export type GetLastBookReadQueryResult = Apollo.QueryResult<GetLastBookReadQuery, GetLastBookReadQueryVariables>;
export const GetAuthorsByUserIdDocument = gql`
    query getAuthorsByUserId($userId: String!) {
  authorsByUserId(userId: $userId)
}
    `;

/**
 * __useGetAuthorsByUserIdQuery__
 *
 * To run a query within a React component, call `useGetAuthorsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAuthorsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>(GetAuthorsByUserIdDocument, options);
      }
export function useGetAuthorsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>(GetAuthorsByUserIdDocument, options);
        }
export function useGetAuthorsByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>(GetAuthorsByUserIdDocument, options);
        }
export type GetAuthorsByUserIdQueryHookResult = ReturnType<typeof useGetAuthorsByUserIdQuery>;
export type GetAuthorsByUserIdLazyQueryHookResult = ReturnType<typeof useGetAuthorsByUserIdLazyQuery>;
export type GetAuthorsByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetAuthorsByUserIdSuspenseQuery>;
export type GetAuthorsByUserIdQueryResult = Apollo.QueryResult<GetAuthorsByUserIdQuery, GetAuthorsByUserIdQueryVariables>;
export const GetBooksByUserIdDocument = gql`
    query getBooksByUserId($userId: String!) {
  bookEntriesByUserId(userId: $userId) {
    bookId
    dateRead
  }
}
    `;

/**
 * __useGetBooksByUserIdQuery__
 *
 * To run a query within a React component, call `useGetBooksByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetBooksByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>(GetBooksByUserIdDocument, options);
      }
export function useGetBooksByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>(GetBooksByUserIdDocument, options);
        }
export function useGetBooksByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>(GetBooksByUserIdDocument, options);
        }
export type GetBooksByUserIdQueryHookResult = ReturnType<typeof useGetBooksByUserIdQuery>;
export type GetBooksByUserIdLazyQueryHookResult = ReturnType<typeof useGetBooksByUserIdLazyQuery>;
export type GetBooksByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetBooksByUserIdSuspenseQuery>;
export type GetBooksByUserIdQueryResult = Apollo.QueryResult<GetBooksByUserIdQuery, GetBooksByUserIdQueryVariables>;
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