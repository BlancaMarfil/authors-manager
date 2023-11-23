import styled from "styled-components";
import BooksSection from "./BooksSection";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import { useIsOverflow } from "../../hooks/useIsOverflow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};
`;

const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 28px;
  line-height: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const ButtonDiv = styled.div`
  padding: 2px 10px;
  font-size: 20px;
`;

interface Props {
  title: string;
}

const SerieSection = (props: Props) => {
  const { title } = props;
  const [isOverflow, setIsOverflow] = useState(false);

  return (
    <Container>
      <TitleHeader>
        <StyledTitle>{title}</StyledTitle>
        {isOverflow && (
          <Button buttonStyle="secondary">
            <ButtonDiv>See more</ButtonDiv>
          </Button>
        )}
      </TitleHeader>
      <BooksSection wrap="no-wrap" sendOverflow={() => setIsOverflow(true)} />
    </Container>
  );
};

export default SerieSection;
