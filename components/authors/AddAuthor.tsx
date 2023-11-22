import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import SearchBox from "../search/SearchBox";
import ResultsAuthor from "../search/ResultsAuthor";

const AddAuthor = () => {
  return (
    <BlockContainer>
      <BlockHeader title={"New Author"} lined />
      <SearchBox placeholder="Search author" />
      <ResultsAuthor />
    </BlockContainer>
  );
};

export default AddAuthor;
