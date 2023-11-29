import styled from "styled-components";
import SearchBox from "../components/search/SearchBox";
import { useEffect, useState } from "react";
import {
  useSearchGoogleBooksByAuthorLazyQuery,
  useSearchGoogleBooksLazyQuery,
} from "../graphql/generated";
import ResultsAuthor from "../components/search/ResultsAuthor";
import ResultsBooks from "../components/search/ResultsBooks";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base4};
`;

const Search = () => {
  const maxResultsBooks = 12;
  const maxResultsAuthors = 15;

  const [inputValue, setInputValue] = useState("");

  const [bookIds, setBookIds] = useState<string[]>([]);
  const [startBooks, setStartBooks] = useState(0);
  const [showLoadButtonBooks, setShowLoadButtonBooks] = useState(true);

  const [authorNames, setAuthorNames] = useState<string[]>([]);
  const [startAuthors, setStartAuthors] = useState(0);
  const [showLoadButtonAuthors, setShowLoadButtonAuthors] = useState(true);

  const [searchBooks, { data: dataBooks, loading: loadingBooks }] =
    useSearchGoogleBooksLazyQuery();
  const [searchAuthors, { data: dataAuthors, loading: loadingAuthors }] =
    useSearchGoogleBooksByAuthorLazyQuery();

  const handleSearch = (
    value: string,
    newSearch: boolean,
    type?: "books" | "authors"
  ) => {
    if (!type || type === "books") {
      newSearch && setBookIds([]);
      searchBooks({
        variables: {
          query: value,
          apiKey: process.env.GOOGLE_API_KEY,
          startIndex: startBooks,
          maxResults: maxResultsBooks,
        },
      });
      setStartBooks(startBooks + maxResultsBooks);
    }

    if (!type || type === "authors") {
      newSearch && setAuthorNames([]);
      searchAuthors({
        variables: {
          query: value,
          apiKey: process.env.GOOGLE_API_KEY,
          startIndex: startAuthors,
          maxResults: maxResultsAuthors,
        },
      });
      setStartAuthors(startAuthors + maxResultsAuthors);
    }
  };

  const handleOnClick = (value: string) => {
    setInputValue(value);
    handleSearch(value, true);
  };

  useEffect(() => {
    if (dataBooks?.searchGoogleBooks?.items && startBooks > bookIds.length) {
      const newBookIds = (dataBooks?.searchGoogleBooks?.items || []).map(
        (book) => book.id
      );
      if (!newBookIds.every((element) => bookIds.includes(element))) {
        setBookIds((prevItems) => [...prevItems, ...newBookIds]);
      }
      setShowLoadButtonBooks(newBookIds.length === maxResultsBooks);
    }
  }, [dataBooks]);

  useEffect(() => {
    if (
      dataAuthors?.searchGoogleBooks?.items &&
      startAuthors > authorNames.length
    ) {
      const newAuthors = Array.from(
        new Set(
          (dataAuthors?.searchGoogleBooks?.items || []).flatMap(
            (results) => results.volumeInfo.authors
          )
        )
      );
      if (!newAuthors.every((element) => authorNames.includes(element))) {
        setAuthorNames((prevAuthorNames) => [
          ...prevAuthorNames,
          ...newAuthors,
        ]);
      }
      setShowLoadButtonAuthors(newAuthors.length === maxResultsAuthors);
    }
  }, [dataAuthors]);

  return (
    <Container>
      <SearchBox
        placeholder="Type a book title, author name, series..."
        onSearch={handleOnClick}
      />
      {bookIds.length > 0 && (
        <ResultsBooks
          title={"Books"}
          bookIds={bookIds}
          onLoadMore={() => handleSearch(inputValue, false, "books")}
          showLoadButton={showLoadButtonBooks}
        />
      )}
      {authorNames.length > 0 && (
        <ResultsAuthor
          authorNames={authorNames}
          onLoadMore={() => handleSearch(inputValue, false, "authors")}
          showLoadButton={showLoadButtonAuthors}
        />
      )}
    </Container>
  );
};

export default Search;
