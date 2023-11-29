import styled from "styled-components";
import AuthorsSection from "../authors/AuthorsSection";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import LoadMoreButton from "./LoadMoreButton";

interface Props {
  authorNames: string[];
  onLoadMore: () => void;
  showLoadButton: boolean;
}

const ResultsAuthor = (props: Props) => {
  const { authorNames, onLoadMore, showLoadButton } = props;

  return (
    <BlockContainer>
      <BlockHeader title={"Authors"} lined />
      <AuthorsSection
        authorNames={authorNames}
        color={theme.colors.oceanBlue}
        searchTheme
      />
      {showLoadButton && <LoadMoreButton onClick={onLoadMore} />}
    </BlockContainer>
  );
};

export default ResultsAuthor;
