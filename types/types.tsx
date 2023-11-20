import { SearchGoogleBooksQuery } from "../graphql/generated";

export type RegistrationType = "login" | "signup";

// Graphql
export type InferredBooks =
  SearchGoogleBooksQuery["searchGoogleBooks"]["items"][number];

export type InferredVolumeInfo = InferredBooks["volumeInfo"];

export {};
