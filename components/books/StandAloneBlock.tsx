import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import BooksSection from "./BooksSection";

const StandAloneBlock = () => {
  return (
    <BlockContainer>
      <BlockHeader title="Stand-alone works" lined />
      <BooksSection wrap="wrap" />
    </BlockContainer>
  );
};

export default StandAloneBlock;
