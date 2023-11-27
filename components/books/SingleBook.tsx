import styled from "styled-components";
import Image from "next/image";
import { format } from "date-fns";
import Overlay from "../UI/Overlay";
import Link from "next/link";
import {
  useGetBooksByUserIdQuery,
  useSearchGoogleBooksByBookIdQuery,
} from "../../graphql/generated";
import {
  InferredBook,
  InferredVolumeInfo,
  SeriesBook,
} from "../../types/types";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};
  cursor: pointer;
`;

const BookCover = styled.div`
  width: 133px;
  aspect-ratio: 1/1.5;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 253px;
  }
`;

const TitleAuthorDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base05};
  width: 133px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 253px;
  }
`;

const BookTitle = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const BookAuthor = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.gray};
`;

const ReadText = styled.p`
  font-size: 20px;
  line-height: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.dimensions.base5};
    line-height: ${({ theme }) => theme.dimensions.base5};
  }
`;

interface Props {
  book: InferredBook;
}

const SingleBook = (props: Props) => {
  const { book } = props;
  const { userId } = useContext(AuthContext);

  //DATA
  const { data: dataBook, loading: loadingBook } =
    useSearchGoogleBooksByBookIdQuery({
      variables: { query: book.id },
    });

  const { data: dataEntries, loading: loadingEntries } =
    useGetBooksByUserIdQuery({ variables: { userId: userId } });

  const bookInfo: InferredVolumeInfo =
    dataBook?.searchSingleGoogleBook?.volumeInfo;
  const imgSrc =
    bookInfo?.imageLinks?.medium ||
    bookInfo?.imageLinks?.thumbnail ||
    bookInfo?.imageLinks?.smallThumbnail ||
    process.env.DEFAULT_IMAGE_URL;

  const bookRead =
    dataEntries?.bookEntriesByUserId &&
    dataEntries.bookEntriesByUserId.find(
      (bookEntry) => bookEntry.bookId === book.id
    );

  const date = bookRead && bookRead.dateRead;

  return (
    <>
      <Link href={`/books/${book.id}`}>
        <Container>
          <BookCover>
            {date && (
              <Overlay>
                <ReadText>READ {date}</ReadText>
              </Overlay>
            )}
            <Image
              src={imgSrc}
              alt={bookInfo?.title}
              layout="fill"
              objectFit="cover"
            />
          </BookCover>

          <TitleAuthorDiv>
            <BookTitle>{bookInfo?.title}</BookTitle>
            <BookAuthor>{bookInfo?.authors[0]}</BookAuthor>
          </TitleAuthorDiv>
        </Container>
      </Link>
    </>
  );
};

export default SingleBook;
