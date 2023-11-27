import { SearchGoogleBooksQuery } from "../graphql/generated";

export type RegistrationType = "login" | "signup";

// Graphql
export type InferredBook =
  SearchGoogleBooksQuery["searchGoogleBooks"]["items"][number];

export type InferredVolumeInfo = InferredBook["volumeInfo"];

// Own
export interface SeriesBook {
  order: number;
  book: InferredBook;
}

export interface Series {
  name?: string;
  books?: SeriesBook[];
}

export {};
