import styled from "styled-components";
import BooksSection from "./BooksSection";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import ArrowDown from "../../public/icons/arrow_back.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};
`;

const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.dimensions.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0;
  }
`;

const StyledTitle = styled.p`
  font-size: 28px;
  line-height: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const StyledBookSection = styled.div<{ maxheight: string }>`
  max-height: ${({ maxheight }) => maxheight + "px"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

interface Props {
  title: string;
}

const SerieSection = (props: Props) => {
  const { title } = props;
  const { isMobile } = useIsMobile();

  // Mobile
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const typeWrap = isMobile ? "wrap" : "no-wrap";

  useEffect(() => {
    if (showContent) {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        setContentHeight(contentHeight);
      }
    } else {
      setContentHeight(0);
    }
  }, [showContent, contentHeight]);

  const booksSectionComponent = (
    <BooksSection wrap={typeWrap} />
  );

  return (
    <Container>
      <TitleHeader onClick={() => setShowContent(!showContent)}>
        <StyledTitle>{title}</StyledTitle>
        {isMobile && <ArrowDown />}
      </TitleHeader>
      {isMobile ? (
        <StyledBookSection
          maxheight={contentHeight.toString()}
          ref={contentRef}
        >
          {booksSectionComponent}
        </StyledBookSection>
      ) : (
        booksSectionComponent
      )}
    </Container>
  );
};

export default SerieSection;
