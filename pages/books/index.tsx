import styled from "styled-components";
import { useContext } from "react";
import BlockContainer from "../../components/BlockContainer";
import BlockHeader from "../../components/BlockHeader";
import BooksSection from "../../components/books/BooksSection";
import { useGetBooksByUserIdQuery } from "../../graphql/generated";
import AuthContext from "../../context/AuthContext";

const NoBooksText = styled.h1`
  color: ${({ theme }) => theme.colors.lightGray},
  text-align: center;
`;

const Books = () => {
  const { userId } = useContext(AuthContext);
  const { data, loading } = useGetBooksByUserIdQuery({
    variables: { userId: userId },
  });

  const bookIds = [...(data?.bookEntriesByUserId || [])]
    .sort(
      (a, b) => new Date(a.dateRead).getTime() - new Date(b.dateRead).getTime()
    )
    .map((bookEntry) => bookEntry.bookId);

  return (
    <BlockContainer>
      <BlockHeader title={"Books you've read"} lined />
      <BooksSection wrap="wrap" bookIds={bookIds} conservative />
    </BlockContainer>
  );
};

export default Books;
