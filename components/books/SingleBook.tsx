import styled from "styled-components";
import Overlay from "../UI/Overlay";
import Link from "next/link";
import {
  useGetBookReadByUserQuery,
  useSearchGoogleBooksByBookIdQuery,
} from "../../graphql/generated";
import { InferredVolumeInfo } from "../../types/types";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
import CustomImage from "../UI/CustomImage";

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

const BookRead = styled.p`
  color: ${({ theme }) => theme.colors.sunsetRed};
  font-size: 18px;
  line-height: 18px;
  font-style: italic;
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
  bookId: string;
  conservative?: boolean;
}

const SingleBook = (props: Props) => {
  const { bookId, conservative = false } = props;
  const { userId } = useContext(AuthContext);
  const router = useRouter();

  //DATA
  /* We need to query the real url of the book,
  not the one provided by a general search */
  const { data: dataBook, loading: loadingBook } =
    useSearchGoogleBooksByBookIdQuery({
      variables: { query: bookId },
    });

  const bookInfo: InferredVolumeInfo =
    dataBook?.searchSingleGoogleBook?.volumeInfo;
  const imgSrc =
    bookInfo?.imageLinks?.medium ||
    bookInfo?.imageLinks?.thumbnail ||
    bookInfo?.imageLinks?.smallThumbnail ||
    process.env.DEFAULT_IMAGE_URL;

  const { data: dataBookRead, loading: loadingBookRead } =
    useGetBookReadByUserQuery({
      variables: { userId: userId, bookId: bookId },
    });

  const date = dataBookRead?.bookReadByUser?.dateRead;
  const authorName = bookInfo?.authors?.length > 0 ? bookInfo?.authors[0] : "";

  return (
    <>
      <Link href={`/books/${bookId}`}>
        <Container>
          <BookCover>
            {date && !conservative && (
              <Overlay>
                <ReadText>READ {date}</ReadText>
              </Overlay>
            )}
            <CustomImage imgSrc={imgSrc} alt={bookInfo?.title} />
          </BookCover>

          <TitleAuthorDiv>
            <BookTitle>{bookInfo?.title}</BookTitle>
            <BookAuthor>{authorName}</BookAuthor>
            {date && conservative && <BookRead>Read on {date}</BookRead>}
          </TitleAuthorDiv>
        </Container>
      </Link>
    </>
  );
};

export default SingleBook;
