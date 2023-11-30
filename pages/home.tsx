import AuthorsBlock from "../components/authors/AuthorsBlock";
import DiscoverBooksBlock from "../components/DiscoverBooksBlock";
import BookBlock from "../components/BookBlock";
import Loader from "../components/UI/Loader";
import {
  useGetAuthorsByUserIdQuery,
  useGetLastBookReadQuery,
  useSearchGoogleBooksByBookIdQuery,
  useSearchGoogleBooksQuery,
} from "../graphql/generated";
import { InferredBook, InferredVolumeInfo } from "../types/types";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { userId } = useContext(AuthContext);

  // DATA Last Book
  const { data: dataLastBook, loading: loadingLastBook } =
    useGetLastBookReadQuery({
      variables: { userId: userId },
    });

  const lastBookId = dataLastBook?.lastBookReadByUserId?.bookId;

  const { data: dataBooks, loading: loadingBooks } =
    useSearchGoogleBooksByBookIdQuery({
      variables: {
        query: lastBookId,
      },
      skip: lastBookId === undefined,
    });

  const lastReadBook: InferredBook = dataBooks?.searchSingleGoogleBook;

  return (
    <>
      {loadingBooks || loadingLastBook ? (
        <Loader />
      ) : (
        <>
          {lastReadBook && <BookBlock book={lastReadBook} isLastRead />}
          <AuthorsBlock truncate={true} />
          <DiscoverBooksBlock />
        </>
      )}
    </>
  );
};

export default Home;
