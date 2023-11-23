import styled from "styled-components";
import BlockContainer from "../BlockContainer";
import ColoredBlockContainer from "../ColoredBlockContainer";
import theme from "../../styles/theme";
import SingleAuthor from "./SingleAuthor";
import Button from "../UI/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base4};
`;

const AuthorNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};
  flex: 1;
  margin-top: ${({ theme }) => theme.dimensions.base6};
`;

const StyledAuthorName = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base6};
  line-height: ${({ theme }) => theme.dimensions.base4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const StyledFollow = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base4};
  line-height: ${({ theme }) => theme.dimensions.base3};
  font-style: italic;
`;

const StyledButton = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base10};
`;

const AuthorNameBlock = () => {
  const img =
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw";

  return (
    <BlockContainer>
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
          <AuthorNameDiv>
            <StyledAuthorName>J. K. Rowling</StyledAuthorName>
            <StyledFollow>Following</StyledFollow>
          </AuthorNameDiv>
          <Button>
            <StyledButton>Follow</StyledButton>
          </Button>
        </Container>
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default AuthorNameBlock;
