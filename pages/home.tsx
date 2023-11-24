import AuthorsBlock from "../components/authors/AuthorsBlock";
import DiscoverBooksBlock from "../components/DiscoverBooksBlock";
import BookBlock from "../components/BookBlock";
import Loader from "../components/UI/Loader";
import { useSearchGoogleBooksQuery } from "../graphql/generated";
import useIsMobile from "../hooks/useIsMobile";
import { InferredBooks, InferredVolumeInfo } from "../types/types";

interface Props {
  userId?: string;
}

const Home = ({ userId }: Props) => {
  const { isMobile } = useIsMobile();

  const { data, loading, fetchMore } = useSearchGoogleBooksQuery({
    variables: {
      query: "melissa%20tagg",
      apiKey: process.env.GOOGLE_API_KEY!,
    },
  });

  const books: InferredBooks[] = data?.searchGoogleBooks?.items || [];
  const bookLastRead: InferredVolumeInfo = books[0]?.volumeInfo;

  console.log("BOOK", bookLastRead);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BookBlock isMobile={isMobile} isLastRead />
          <AuthorsBlock isMobile={isMobile} origin="home" />
          <DiscoverBooksBlock isMobile={isMobile} />
        </>
      )}
    </>
  );
};

export default Home;
