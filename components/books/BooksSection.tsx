import styled from "styled-components";
import SingleBook from "./SingleBook";
import { useRef } from "react";

const Container = styled.div<{ wrap: string }>`
  display: flex;
  justify-content: center;
  column-gap: ${({ theme }) => theme.dimensions.base5};
  row-gap: ${({ theme }) => theme.dimensions.base2};
  flex-wrap: ${({ wrap }) => wrap};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    row-gap: ${({ theme }) => theme.dimensions.base4};
  }

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
  bookIds: string[];
  conservative?: boolean;
}

const BooksSection = (props: Props) => {
  const { wrap, bookIds, conservative = false } = props;

  const ref = useRef();

  return (
    <Container wrap={wrap} ref={ref}>
      {bookIds &&
        bookIds.map((id, i) => {
          return <SingleBook key={i} bookId={id} conservative={conservative} />;
        })}
    </Container>
  );
};
export default BooksSection;
