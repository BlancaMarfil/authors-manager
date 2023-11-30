import { useSearchGoogleBooksLazyQuery } from "../../graphql/generated";
import BlockContainer from "../containers/BlockContainer";
import BlockHeader from "../blocks/BlockHeader";
import BooksSection from "../books/BooksSection";
import LoadMoreButton from "./LoadMoreButton";

interface Props {
  title: string;
  bookIds: string[];
  showLoadButton?: boolean;
  onLoadMore?: () => void;
}

const ResultsBooks = (props: Props) => {
  const { title, bookIds, showLoadButton = false, onLoadMore } = props;

  return (
    <BlockContainer>
      <BlockHeader title={title} lined />
      <BooksSection wrap="wrap" bookIds={bookIds} conservative />
      {showLoadButton && (
        <LoadMoreButton onClick={onLoadMore} />
      )}
    </BlockContainer>
  );
};

export default ResultsBooks;
