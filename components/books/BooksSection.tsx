import styled from "styled-components";
import SingleBook from "./SingleBook";
import { useRef } from "react";
import { InferredBook, SeriesBook } from "../../types/types";

const Container = styled.div<{ wrap: string }>`
  display: flex;
  justify-content: center;
  column-gap: ${({ theme }) => theme.dimensions.base5};
  row-gap: ${({ theme }) => theme.dimensions.base4};
  flex-wrap: ${({ wrap }) => wrap};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    position: relative;
    padding-bottom: 10px;

    /* For WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
      height: ${({ theme }) => theme.dimensions.base05};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.oceanBlue};
    }

    /* For Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.oceanBlue} transparent;
  }
`;

interface Props {
  wrap: "wrap" | "no-wrap";
  books: InferredBook[];
}

const BooksSection = (props: Props) => {
  const { wrap, books } = props;

  const ref = useRef();

  return (
    <Container wrap={wrap} ref={ref}>
      {books &&
        books.map((book, i) => {
          return <SingleBook key={i} book={book} />;
        })}
    </Container>
  );
};
export default BooksSection;
