import AuthorsBlock from "../components/AuthorsBlock";
import LastReadBlock from "../components/LastReadBlock";
import Loader from "../components/UI/Loader";
import { useSearchGoogleBooksQuery } from "../graphql/generated";
import useIsMobile from "../hooks/useIsMobile";
import { InferredBooks, InferredVolumeInfo } from "../types/types";

const Home = () => {
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
          <LastReadBlock isMobile={isMobile} />
          <AuthorsBlock isMobile={isMobile} />
        </>
      )}
    </>
  );
};

export default Home;
