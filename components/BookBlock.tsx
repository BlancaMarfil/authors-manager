import styled from "styled-components";
import PlusIcon from "../public/icons/plus.svg";
import theme from "../styles/theme";
import BlockHeader from "./BlockHeader";
import BlockContainer from "./BlockContainer";
import ColoredBlockContainer from "./ColoredBlockContainer";
import CoverContainer from "./CoverContainer";
import useIsMobile from "../hooks/useIsMobile";
import { InferredBook } from "../types/types";
import parse from "html-react-parser";

const PlusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.sunsetRed};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.sunsetRed};
`;

const BlockContent = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.dimensions.base6};
  }
`;

const InfoBlock = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
`;

const BookSeries = styled.p`
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray};
  font-style: italic;
`;

const BookTitle = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base4};
  line-height: ${({ theme }) => theme.dimensions.base4};
  font-weight: 600;
`;

const BookAuthor = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base3};
  line-height: ${({ theme }) => theme.dimensions.base3};
  font-weight: 400;
`;

const BookDescription = styled.p`
  margin-top: ${({ theme }) => theme.dimensions.base};
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.gray};
`;

interface Props {
  book: InferredBook;
  serieName?: string;
  isLastRead?: boolean;
}

const BookBlock = (props: Props) => {
  const { book, serieName, isLastRead = false } = props;
  const { isMobile } = useIsMobile();

  const bookTitle = serieName
    ? book?.volumeInfo.title.split(" (")[0]
    : book?.volumeInfo.title;
  const bookOrder =
    serieName && book?.volumeInfo.title.split("#")[1].split(")")[0];
  const bookSeries = serieName && serieName + " #" + bookOrder;
  const bookDesc = book?.volumeInfo.description;
  const descLength = isLastRead ? (isMobile ? 500 : 700) : bookDesc.length;
  const shortDesc = parse(
    bookDesc.slice(0, descLength) + (descLength < bookDesc.length ? "..." : "")
  );

  const rightHeaderElement = isMobile ? (
    <PlusDiv>
      <PlusIcon width={28} height={28} style={{ fill: theme.colors.white }} />
    </PlusDiv>
  ) : (
    "Add"
  );
  return (
    <BlockContainer>
      {isLastRead && (
        <BlockHeader title={"Last Read"} rightElement={rightHeaderElement} />
      )}

      <ColoredBlockContainer color={theme.colors.limeGreen}>
        <BlockContent>
          <CoverContainer imgSrc={book?.volumeInfo.imageLinks.medium} />
          <InfoBlock>
            {serieName && <BookSeries>{bookSeries}</BookSeries>}
            <BookTitle>{bookTitle}</BookTitle>
            <BookAuthor>{book?.volumeInfo.authors[0]}</BookAuthor>
            <BookDescription>{shortDesc}</BookDescription>
          </InfoBlock>
        </BlockContent>
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default BookBlock;
