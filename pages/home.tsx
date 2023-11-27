import AuthorsBlock from "../components/authors/AuthorsBlock";
import DiscoverBooksBlock from "../components/DiscoverBooksBlock";
import BookBlock from "../components/BookBlock";
import Loader from "../components/UI/Loader";
import {
  useGetAuthorsByUserIdQuery,
  useGetLastBookReadQuery,
  useSearchGoogleBooksQuery,
} from "../graphql/generated";
import { InferredBook, InferredVolumeInfo } from "../types/types";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { userId } = useContext(AuthContext);

  // DATA Last Book
  const { data: dataLastBook } = useGetLastBookReadQuery({
    variables: { userId: userId },
  });

  const lastBookId = dataLastBook?.lastBookReadByUserId?.bookId;

  const { data: dataBooks, loading: loadingBooks } = useSearchGoogleBooksQuery({
    variables: {
      query: lastBookId,
      apiKey: process.env.GOOGLE_API_KEY!,
    },
    skip: lastBookId === undefined,
  });

  const books: InferredBook[] = dataBooks?.searchGoogleBooks?.items || [];
  const bookLastRead: InferredVolumeInfo = books[0]?.volumeInfo;

  return (
    <>
      {loadingBooks ? (
        <Loader />
      ) : (
        <>
          {lastBookId && <BookBlock isLastRead />}
          <AuthorsBlock truncate={true} />
          <DiscoverBooksBlock />
        </>
      )}
    </>
  );
};

export default Home;
