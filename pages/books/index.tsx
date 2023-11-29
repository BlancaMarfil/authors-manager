import styled from "styled-components";
import { useContext } from "react";
import BlockContainer from "../../components/BlockContainer";
import BlockHeader from "../../components/BlockHeader";
import BooksSection from "../../components/books/BooksSection";
import { useGetBooksByUserIdQuery } from "../../graphql/generated";
import AuthContext from "../../context/AuthContext";
import ResultsBooks from "../../components/search/ResultsBooks";
import Button from "../../components/UI/Button";
import { useRouter } from "next/router";

const NoBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base3};
  justify-items: center;
  margin-top: ${({ theme }) => theme.dimensions.base10};
`;

const NoBooksText = styled.h1`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

const ExploreButton = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base5};
`;

const Books = () => {
  const { userId } = useContext(AuthContext);
  const router = useRouter();
  const { data, loading } = useGetBooksByUserIdQuery({
    variables: { userId: userId },
  });

  const bookIds = [...(data?.bookEntriesByUserId || [])]
    .sort(
      (a, b) => new Date(a.dateRead).getTime() - new Date(b.dateRead).getTime()
    )
    .map((bookEntry) => bookEntry.bookId);

  const handleExploreClick = () => {
    router.push("/search");
  };

  return (
    <>
      {bookIds.length === 0 ? (
        <NoBooksContainer>
          <NoBooksText>You haven't added any books yet</NoBooksText>
          <Button onClick={handleExploreClick}>
            <ExploreButton>Explore</ExploreButton>
          </Button>
        </NoBooksContainer>
      ) : (
        <ResultsBooks title={"Books you've read"} bookIds={bookIds} />
      )}
    </>
  );
};

export default Books;
