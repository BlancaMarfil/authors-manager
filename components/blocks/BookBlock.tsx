import styled from "styled-components";
import theme from "../../styles/theme";
import BlockHeader from "./BlockHeader";
import BlockContainer from "../containers/BlockContainer";
import ColoredBlockContainer from "../containers/ColoredBlockContainer";
import CoverContainer from "../containers/CoverContainer";
import useIsMobile from "../../hooks/useIsMobile";
import { InferredBook } from "../../types/types";
import parse from "html-react-parser";
import Link from "next/link";

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

const BookSeries = styled.h3`
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray};
  font-style: italic;
`;

const BookTitle = styled.h1`
  font-size: ${({ theme }) => theme.dimensions.base4};
  line-height: ${({ theme }) => theme.dimensions.base4};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const BookAuthor = styled.h2`
  font-size: ${({ theme }) => theme.dimensions.base3};
  line-height: ${({ theme }) => theme.dimensions.base3};
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const BookDescription = styled.p`
  margin-top: ${({ theme }) => theme.dimensions.base};
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.gray};
`;

const ReadMoreText = styled.p`
  font-size: 20px;
  line-height: 28px;
  display: inline;
  color: ${({ theme }) => theme.colors.oceanBlue};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
  const bookAuthor = book?.volumeInfo.authors[0];
  const bookImg =
    book?.volumeInfo?.imageLinks?.medium ||
    book?.volumeInfo?.imageLinks?.thumbnail;

  return (
    <BlockContainer>
      {isLastRead && <BlockHeader title={"Last Read"} />}

      <ColoredBlockContainer color={theme.colors.limeGreen}>
        <BlockContent>
          <CoverContainer imgSrc={bookImg} />
          <InfoBlock>
            {serieName && <BookSeries>{bookSeries}</BookSeries>}
            <Link href={`/books/${book.id}`}>
              <BookTitle>{bookTitle}</BookTitle>
            </Link>
            <Link href={`/authors/${bookAuthor}`}>
              <BookAuthor>{bookAuthor}</BookAuthor>
            </Link>
            <BookDescription>{shortDesc} </BookDescription>
            {descLength !== bookDesc.length && (
              <Link href={`/books/${book.id}`}>
                <ReadMoreText>Read more</ReadMoreText>
              </Link>
            )}
          </InfoBlock>
        </BlockContent>
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default BookBlock;
