import BlockContainer from "../components/BlockContainer";
import BlockHeader from "../components/BlockHeader";
import BooksSection from "../components/books/BooksSection";

const Books = () => {
  return (
    <BlockContainer>
      <BlockHeader title={"Books you've read"} lined />
      <BooksSection wrap="wrap" />
    </BlockContainer>
  );
};

export default Books;
