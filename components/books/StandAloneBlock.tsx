import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import BooksSection from "./BooksSection";
import { InferredBook } from "../../types/types";

interface Props {
  books: InferredBook[];
}

const StandAloneBlock = (props: Props) => {
  const { books } = props;

  return (
    <BlockContainer>
      <BlockHeader title="Stand-alone works" lined />
      <BooksSection wrap="wrap" books={books} />
    </BlockContainer>
  );
};

export default StandAloneBlock;
