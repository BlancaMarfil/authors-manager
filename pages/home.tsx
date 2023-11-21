import LastReadBlock from "../components/LastReadBlock";
import Loader from "../components/UI/Loader";
import { useSearchGoogleBooksQuery } from "../graphql/generated";
import { InferredBooks, InferredVolumeInfo } from "../types/types";

const Home = () => {
  const { data, loading, fetchMore } = useSearchGoogleBooksQuery({
    variables: {
      query: "melissa%20tagg",
      apiKey: process.env.GOOGLE_API_KEY!,
    },
  });

  const books: InferredBooks[] = data?.searchGoogleBooks?.items || [];
  const bookLastRead: InferredVolumeInfo = books[0]?.volumeInfo;

  console.log("BOOK", bookLastRead);

  return <>{loading ? <Loader /> : <LastReadBlock />}</>;
};

export default Home;
