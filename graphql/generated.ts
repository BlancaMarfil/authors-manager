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

export type Cat = {
  __typename?: 'Cat';
  description?: Maybe<Scalars['String']['output']>;
  lifespan?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']['output']>;
  getCats?: Maybe<Array<Maybe<Cat>>>;
};


export type QueryGetCatsArgs = {
  name: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCatByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetCatByNameQuery = { __typename?: 'Query', getCats?: Array<{ __typename?: 'Cat', name?: string | null, description?: string | null } | null> | null };


export const GetCatByNameDocument = gql`
    query getCatByName($name: String!) {
  getCats(name: $name) {
    name
    description
  }
}
    `;

/**
 * __useGetCatByNameQuery__
 *
 * To run a query within a React component, call `useGetCatByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCatByNameQuery(baseOptions: Apollo.QueryHookOptions<GetCatByNameQuery, GetCatByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatByNameQuery, GetCatByNameQueryVariables>(GetCatByNameDocument, options);
      }
export function useGetCatByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatByNameQuery, GetCatByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatByNameQuery, GetCatByNameQueryVariables>(GetCatByNameDocument, options);
        }
export function useGetCatByNameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCatByNameQuery, GetCatByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCatByNameQuery, GetCatByNameQueryVariables>(GetCatByNameDocument, options);
        }
export type GetCatByNameQueryHookResult = ReturnType<typeof useGetCatByNameQuery>;
export type GetCatByNameLazyQueryHookResult = ReturnType<typeof useGetCatByNameLazyQuery>;
export type GetCatByNameSuspenseQueryHookResult = ReturnType<typeof useGetCatByNameSuspenseQuery>;
export type GetCatByNameQueryResult = Apollo.QueryResult<GetCatByNameQuery, GetCatByNameQueryVariables>;