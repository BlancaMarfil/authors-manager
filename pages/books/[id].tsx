import BookBlock from "../../components/blocks/BookBlock";
import ReadHeader from "../../components/books/ReadHeader";
import {
  SearchGoogleBooksByBookIdQuery,
  useGetBookReadByUserQuery,
  useSearchGoogleBooksByAuthorSeriesQuery,
} from "../../graphql/generated";
import useIsMobile from "../../hooks/useIsMobile";
import apolloClient from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import { InferredBook, Series } from "../../types/types";
import { getSeriesFromBooks } from "../../lib/utils/bookFunctions";
import BookShelfBlock from "../../components/books/BookShelfBlock";
import SerieSection from "../../components/books/SerieSection";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
const {
  SearchGoogleBooksByBookId,
} = require("../../graphql/queries/googleBooks.graphql");

interface Props {
  id: string;
  data: SearchGoogleBooksByBookIdQuery;
}

const Book = (props: Props) => {
  const { id, data: dataSearch } = props;

  const { userId } = useContext(AuthContext);
  const [dateRead, setDateRead] = useState("");

  // Data Book Read
  const { data: dataBookRead, loading: loadingBookRead } =
    useGetBookReadByUserQuery({
      variables: { userId: userId, bookId: id },
    });

  const book: InferredBook = dataSearch.searchSingleGoogleBook;
  let series: Series[] = [];

  // Series
  const seriesMock = getSeriesFromBooks([book]);
  const { name: seriesName } = seriesMock.length > 0 && seriesMock[0];
  const { data: dataSeriesBook } = useSearchGoogleBooksByAuthorSeriesQuery({
    variables: {
      query: seriesName,
      author: book.volumeInfo.authors[0],
      apiKey: process.env.GOOGLE_API_KEY!,
    },
    skip: seriesMock.length === 0,
  });

  if (dataSeriesBook?.searchGoogleBookAuthorSeries?.items) {
    series = getSeriesFromBooks(
      dataSeriesBook?.searchGoogleBookAuthorSeries?.items
    );
  }

  // useEffect
  useEffect(() => {
    if (!loadingBookRead && dataBookRead?.bookReadByUser?.dateRead) {
      setDateRead(dataBookRead?.bookReadByUser?.dateRead);
    } else {
      setDateRead("");
    }
  }, [dataBookRead, loadingBookRead]);

  return (
    <>
      {!loadingBookRead && (
        <>
          <ReadHeader
            bookId={id}
            dateReadInput={dateRead}
            onChangeDateRead={(newDate) => setDateRead(newDate)}
          />
          <BookBlock book={book} serieName={seriesName} />
          {series.length > 0 && (
            <BookShelfBlock blockTitle="Other books in this series">
              <SerieSection
                title={series[0].name}
                seriesBooks={series[0].books}
              />
            </BookShelfBlock>
          )}
        </>
      )}
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const { data } = await apolloClient.query({
      query: SearchGoogleBooksByBookId,
      variables: { query: params.id },
    });

    return {
      props: {
        ...params,
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        error: "Error fetching data",
      },
    };
  }
};

export default Book;
