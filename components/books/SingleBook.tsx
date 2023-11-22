import styled from "styled-components";
import Image from "next/image";
import { format } from "date-fns";
import Overlay from "../UI/Overlay";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};
`;

const BookCover = styled.div`
  height: 380px;
  aspect-ratio: 1/1.5;
  position: relative;
`;

const TitleAuthorDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base05};
`;

const BookTitle = styled.p`
  font-size: 20px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const BookAuthor = styled.p`
  font-size: 18px;
  line-height: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.gray};
`;

const ReadText = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base5};
  line-height: ${({ theme }) => theme.dimensions.base5};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

interface Props {
  imgSrc: string;
  title: string;
  author: string;
  dateRead?: Date;
}

const SingleBook = (props: Props) => {
  const { imgSrc, title, author, dateRead } = props;

  const date = new Date();
  const formattedDate = format(date, "dd/MM/yyyy");

  return (
    <Container>
      <BookCover>
        {date && (
          <Overlay>
            <ReadText>{formattedDate}</ReadText>
          </Overlay>
        )}
        <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
      </BookCover>

      <TitleAuthorDiv>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
      </TitleAuthorDiv>
    </Container>
  );
};

export default SingleBook;
