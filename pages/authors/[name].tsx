import styled from "styled-components";
import AuthorNameBlock from "../../components/authors/AuthorNameBlock";
import { useRouter } from "next/router";
import SeriesBlock from "../../components/books/SeriesBlock";
import StandAloneBlock from "../../components/books/StandAloneBlock";
import { useState } from "react";
import { InferredBook, Series } from "../../types/types";
import { useSearchGoogleBooksByAuthorQuery } from "../../graphql/generated";
import { getSeriesFromBooks } from "../../lib/utils/bookFunctions";
import BookShelfBlock from "../../components/books/BookShelfBlock";
import SerieSection from "../../components/books/SerieSection";
import BooksSection from "../../components/books/BooksSection";

const Author = () => {
  const router = useRouter();
  const authorName = router.query.name as string;

  const [books, setBooks] = useState<InferredBook[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [remainingItems, setRemainingItems] = useState(999);

  const maxResults = 40;
  let series: Series[] = [];

  /* We need to get all books from an author to find those in certain series
  because they do not come categorized from the api */
  const { data, loading } = useSearchGoogleBooksByAuthorQuery({
    variables: {
      query: authorName,
      apiKey: process.env.GOOGLE_API_KEY!,
      startIndex: startIndex,
    },
    skip: remainingItems <= 0,
  });

  if (data && data.searchGoogleBooks && data.searchGoogleBooks.items) {
    setBooks((prevBooks) => [...prevBooks, ...data.searchGoogleBooks.items]);
    setRemainingItems(
      data.searchGoogleBooks?.totalItems - (startIndex + maxResults)
    );
    setStartIndex(startIndex + maxResults);
  }

  // Series
  if (remainingItems <= 0) {
    series = getSeriesFromBooks(books);
  }

  // Stand-alone books
  const seriesBookIds: string[] = series
    .flatMap((series) => series.books || [])
    .map((seriesBook) => seriesBook.book.id);

  const standAloneWorksIds = books.filter(
    (book) => !seriesBookIds.includes(book.id)
  ).map(book => book.id);

  return (
    <>
      <AuthorNameBlock authorName={authorName} />

      <BookShelfBlock blockTitle="Series">
        {series.map((serie, i) => (
          <SerieSection key={i} title={serie.name} seriesBooks={serie.books} />
        ))}
      </BookShelfBlock>

      <BookShelfBlock blockTitle="Stand-alone works">
        <BooksSection wrap="wrap" bookIds={standAloneWorksIds} />
      </BookShelfBlock>
    </>
  );
};

export default Author;
