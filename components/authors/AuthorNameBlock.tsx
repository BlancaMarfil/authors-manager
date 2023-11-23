import styled from "styled-components";
import BlockContainer from "../BlockContainer";
import ColoredBlockContainer from "../ColoredBlockContainer";
import theme from "../../styles/theme";
import SingleAuthor from "./SingleAuthor";
import Button from "../UI/Button";

const StyledBlockContainer = styled(BlockContainer)`
  margin-top: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ theme }) => theme.dimensions.base7};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base3};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-content: space-between;
    gap: ${({ theme }) => theme.dimensions.base4};
  }
`;

const TextButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.dimensions.base4};
  }
`;

const NameFollowingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ theme }) => theme.dimensions.base6};
    gap: ${({ theme }) => theme.dimensions.base2};
  }
`;

const StyledAuthorName = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base3};
  line-height: ${({ theme }) => theme.dimensions.base3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.dimensions.base4};
    line-height: ${({ theme }) => theme.dimensions.base2};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.dimensions.base6};
    line-height: ${({ theme }) => theme.dimensions.base4};
  }
`;

const StyledFollow = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base2};
  line-height: ${({ theme }) => theme.dimensions.base2};
  font-style: italic;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.dimensions.base4};
    line-height: ${({ theme }) => theme.dimensions.base3};
  }
`;

const StyledButton = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0 ${({ theme }) => theme.dimensions.base10};
  }
`;

const AuthorNameBlock = () => {
  const img =
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw";

  return (
    <StyledBlockContainer>
      <ColoredBlockContainer
        color={theme.colors.limeGreen}
        mobileColor={theme.colors.limeGreen}
      >
        <Container>
          <SingleAuthor
            imgSrc={img}
            name={"J. K. Rowling"}
            color={theme.colors.white}
            searchTheme={false}
            showName={false}
          />
          <TextButtonDiv>
            <NameFollowingDiv>
              <StyledAuthorName>J. K. Rowling</StyledAuthorName>
              <StyledFollow>Following</StyledFollow>
            </NameFollowingDiv>
            <Button>
              <StyledButton>Follow</StyledButton>
            </Button>
          </TextButtonDiv>
        </Container>
      </ColoredBlockContainer>
    </StyledBlockContainer>
  );
};

export default AuthorNameBlock;
