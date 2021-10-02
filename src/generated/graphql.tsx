import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  createVocabulary: Vocabulary;
  updateVocabulary: Maybe<Vocabulary>;
  toggleVocabularyMark: Scalars['Boolean'];
  deleteVocabularies: Scalars['Boolean'];
};


export type MutationCreateVocabularyArgs = {
  sentence: Scalars['String'];
  ch: Scalars['String'];
  en: Scalars['String'];
};


export type MutationUpdateVocabularyArgs = {
  sentence: Scalars['String'];
  ch: Scalars['String'];
  en: Scalars['String'];
};


export type MutationToggleVocabularyMarkArgs = {
  en: Scalars['String'];
};


export type MutationDeleteVocabulariesArgs = {
  vocabularies: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  vocabularies: Array<Vocabulary>;
  vocabulary: Maybe<Vocabulary>;
};


export type QueryVocabularyArgs = {
  en: Scalars['String'];
};

export type Vocabulary = {
  __typename?: 'Vocabulary';
  en: Scalars['String'];
  ch: Scalars['String'];
  sentence: Scalars['String'];
  isMarked: Scalars['Boolean'];
  counter: Scalars['Int'];
  createAt: Scalars['DateTime'];
  updateAt: Scalars['DateTime'];
};

export type CreateVocabularyMutationVariables = Exact<{
  en: Scalars['String'];
  ch: Scalars['String'];
  sentence: Scalars['String'];
}>;


export type CreateVocabularyMutation = { __typename?: 'Mutation', createVocabulary: { __typename?: 'Vocabulary', en: string, ch: string, sentence: string, isMarked: boolean, counter: number, createAt: any, updateAt: any } };

export type DeleteVocabularyMutationVariables = Exact<{
  vocabularies: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteVocabularyMutation = { __typename?: 'Mutation', deleteVocabularies: boolean };

export type ToggleVocabularyMarkMutationVariables = Exact<{
  en: Scalars['String'];
}>;


export type ToggleVocabularyMarkMutation = { __typename?: 'Mutation', toggleVocabularyMark: boolean };

export type UpdateVocabularyMutationVariables = Exact<{
  en: Scalars['String'];
  ch: Scalars['String'];
  sentence: Scalars['String'];
}>;


export type UpdateVocabularyMutation = { __typename?: 'Mutation', updateVocabulary: Maybe<{ __typename?: 'Vocabulary', en: string, ch: string, sentence: string, isMarked: boolean, counter: number, createAt: any, updateAt: any }> };

export type VocabulariesQueryVariables = Exact<{ [key: string]: never; }>;


export type VocabulariesQuery = { __typename?: 'Query', vocabularies: Array<{ __typename?: 'Vocabulary', en: string, ch: string, sentence: string, isMarked: boolean, counter: number, createAt: any, updateAt: any }> };

export type VocabularyQueryVariables = Exact<{
  en: Scalars['String'];
}>;


export type VocabularyQuery = { __typename?: 'Query', vocabulary: Maybe<{ __typename?: 'Vocabulary', en: string, ch: string, sentence: string, isMarked: boolean, counter: number, createAt: any, updateAt: any }> };


export const CreateVocabularyDocument = gql`
    mutation CreateVocabulary($en: String!, $ch: String!, $sentence: String!) {
  createVocabulary(en: $en, ch: $ch, sentence: $sentence) {
    en
    ch
    sentence
    isMarked
    counter
    createAt
    updateAt
  }
}
    `;
export type CreateVocabularyMutationFn = Apollo.MutationFunction<CreateVocabularyMutation, CreateVocabularyMutationVariables>;

/**
 * __useCreateVocabularyMutation__
 *
 * To run a mutation, you first call `useCreateVocabularyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVocabularyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVocabularyMutation, { data, loading, error }] = useCreateVocabularyMutation({
 *   variables: {
 *      en: // value for 'en'
 *      ch: // value for 'ch'
 *      sentence: // value for 'sentence'
 *   },
 * });
 */
export function useCreateVocabularyMutation(baseOptions?: Apollo.MutationHookOptions<CreateVocabularyMutation, CreateVocabularyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVocabularyMutation, CreateVocabularyMutationVariables>(CreateVocabularyDocument, options);
      }
export type CreateVocabularyMutationHookResult = ReturnType<typeof useCreateVocabularyMutation>;
export type CreateVocabularyMutationResult = Apollo.MutationResult<CreateVocabularyMutation>;
export type CreateVocabularyMutationOptions = Apollo.BaseMutationOptions<CreateVocabularyMutation, CreateVocabularyMutationVariables>;
export const DeleteVocabularyDocument = gql`
    mutation DeleteVocabulary($vocabularies: [String!]!) {
  deleteVocabularies(vocabularies: $vocabularies)
}
    `;
export type DeleteVocabularyMutationFn = Apollo.MutationFunction<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>;

/**
 * __useDeleteVocabularyMutation__
 *
 * To run a mutation, you first call `useDeleteVocabularyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVocabularyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVocabularyMutation, { data, loading, error }] = useDeleteVocabularyMutation({
 *   variables: {
 *      vocabularies: // value for 'vocabularies'
 *   },
 * });
 */
export function useDeleteVocabularyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>(DeleteVocabularyDocument, options);
      }
export type DeleteVocabularyMutationHookResult = ReturnType<typeof useDeleteVocabularyMutation>;
export type DeleteVocabularyMutationResult = Apollo.MutationResult<DeleteVocabularyMutation>;
export type DeleteVocabularyMutationOptions = Apollo.BaseMutationOptions<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>;
export const ToggleVocabularyMarkDocument = gql`
    mutation ToggleVocabularyMark($en: String!) {
  toggleVocabularyMark(en: $en)
}
    `;
export type ToggleVocabularyMarkMutationFn = Apollo.MutationFunction<ToggleVocabularyMarkMutation, ToggleVocabularyMarkMutationVariables>;

/**
 * __useToggleVocabularyMarkMutation__
 *
 * To run a mutation, you first call `useToggleVocabularyMarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleVocabularyMarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleVocabularyMarkMutation, { data, loading, error }] = useToggleVocabularyMarkMutation({
 *   variables: {
 *      en: // value for 'en'
 *   },
 * });
 */
export function useToggleVocabularyMarkMutation(baseOptions?: Apollo.MutationHookOptions<ToggleVocabularyMarkMutation, ToggleVocabularyMarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleVocabularyMarkMutation, ToggleVocabularyMarkMutationVariables>(ToggleVocabularyMarkDocument, options);
      }
export type ToggleVocabularyMarkMutationHookResult = ReturnType<typeof useToggleVocabularyMarkMutation>;
export type ToggleVocabularyMarkMutationResult = Apollo.MutationResult<ToggleVocabularyMarkMutation>;
export type ToggleVocabularyMarkMutationOptions = Apollo.BaseMutationOptions<ToggleVocabularyMarkMutation, ToggleVocabularyMarkMutationVariables>;
export const UpdateVocabularyDocument = gql`
    mutation UpdateVocabulary($en: String!, $ch: String!, $sentence: String!) {
  updateVocabulary(en: $en, ch: $ch, sentence: $sentence) {
    en
    ch
    sentence
    isMarked
    counter
    createAt
    updateAt
  }
}
    `;
export type UpdateVocabularyMutationFn = Apollo.MutationFunction<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>;

/**
 * __useUpdateVocabularyMutation__
 *
 * To run a mutation, you first call `useUpdateVocabularyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVocabularyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVocabularyMutation, { data, loading, error }] = useUpdateVocabularyMutation({
 *   variables: {
 *      en: // value for 'en'
 *      ch: // value for 'ch'
 *      sentence: // value for 'sentence'
 *   },
 * });
 */
export function useUpdateVocabularyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>(UpdateVocabularyDocument, options);
      }
export type UpdateVocabularyMutationHookResult = ReturnType<typeof useUpdateVocabularyMutation>;
export type UpdateVocabularyMutationResult = Apollo.MutationResult<UpdateVocabularyMutation>;
export type UpdateVocabularyMutationOptions = Apollo.BaseMutationOptions<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>;
export const VocabulariesDocument = gql`
    query Vocabularies {
  vocabularies {
    en
    ch
    sentence
    isMarked
    counter
    createAt
    updateAt
  }
}
    `;

/**
 * __useVocabulariesQuery__
 *
 * To run a query within a React component, call `useVocabulariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVocabulariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVocabulariesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVocabulariesQuery(baseOptions?: Apollo.QueryHookOptions<VocabulariesQuery, VocabulariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VocabulariesQuery, VocabulariesQueryVariables>(VocabulariesDocument, options);
      }
export function useVocabulariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VocabulariesQuery, VocabulariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VocabulariesQuery, VocabulariesQueryVariables>(VocabulariesDocument, options);
        }
export type VocabulariesQueryHookResult = ReturnType<typeof useVocabulariesQuery>;
export type VocabulariesLazyQueryHookResult = ReturnType<typeof useVocabulariesLazyQuery>;
export type VocabulariesQueryResult = Apollo.QueryResult<VocabulariesQuery, VocabulariesQueryVariables>;
export const VocabularyDocument = gql`
    query Vocabulary($en: String!) {
  vocabulary(en: $en) {
    en
    ch
    sentence
    isMarked
    counter
    createAt
    updateAt
  }
}
    `;

/**
 * __useVocabularyQuery__
 *
 * To run a query within a React component, call `useVocabularyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVocabularyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVocabularyQuery({
 *   variables: {
 *      en: // value for 'en'
 *   },
 * });
 */
export function useVocabularyQuery(baseOptions: Apollo.QueryHookOptions<VocabularyQuery, VocabularyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VocabularyQuery, VocabularyQueryVariables>(VocabularyDocument, options);
      }
export function useVocabularyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VocabularyQuery, VocabularyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VocabularyQuery, VocabularyQueryVariables>(VocabularyDocument, options);
        }
export type VocabularyQueryHookResult = ReturnType<typeof useVocabularyQuery>;
export type VocabularyLazyQueryHookResult = ReturnType<typeof useVocabularyLazyQuery>;
export type VocabularyQueryResult = Apollo.QueryResult<VocabularyQuery, VocabularyQueryVariables>;