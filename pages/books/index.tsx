import styled from "styled-components";
import { useContext } from "react";
import { useGetBooksByUserIdQuery } from "../../graphql/generated";
import AuthContext from "../../context/AuthContext";
import ResultsBooks from "../../components/search/ResultsBooks";
import Button from "../../components/UI/Button";
import { useRouter } from "next/router";
import Loader from "../../components/UI/Loader";
import { parse } from "date-fns";

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

const getTimestamp = (dateString: string) => {
  return parse(dateString, "dd/MM/yyyy", new Date()).getTime();
};

const Books = () => {
  const { userId } = useContext(AuthContext);
  const router = useRouter();
  const { data, loading } = useGetBooksByUserIdQuery({
    variables: { userId: userId },
  });

  const bookIds = [...(data?.bookEntriesByUserId || [])]
    .sort((a, b) => getTimestamp(a.dateRead) - getTimestamp(b.dateRead))
    .map((bookEntry) => bookEntry.bookId);

  const handleExploreClick = () => {
    router.push("/search");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : bookIds.length === 0 ? (
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
