import styled, { css } from "styled-components";
import BlockContainer from "../BlockContainer";
import BlockHeader from "../BlockHeader";
import ColoredBlockContainer from "../ColoredBlockContainer";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import AuthorsSection from "./AuthorsSection";
import useIsMobile from "../../hooks/useIsMobile";
import { useGetAuthorsByUserIdQuery } from "../../graphql/generated";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const StyledBlockContainer = styled(BlockContainer)`
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: ${({ theme }) => theme.dimensions.base3};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.dimensions.base3};
`;

const ButtonDiv = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base10};
`;

interface Props {
  truncate?: boolean;
}

const AuthorsBlock = (props: Props) => {
  const { truncate = false } = props;
  const { isMobile } = useIsMobile();
  const { userId } = useContext(AuthContext);

  const router = useRouter();

  const { data: dataAuthors, loading: loadingAuthors } =
    useGetAuthorsByUserIdQuery({ variables: { userId: userId } });
  const authorNames: string[] = dataAuthors?.authorsByUserId;

  // Actions
  const onViewAllPressed = () => {
    router.push("/authors");
  };

  return (
    <StyledBlockContainer>
      {!loadingAuthors && (
        <>
          <BlockHeader
            title={"Your Authors"}
            rightElement={!isMobile && truncate && "View all"}
            onPressed={onViewAllPressed}
          />

          <ColoredBlockContainer
            color={theme.colors.oceanBlue}
            mobileColor={theme.colors.oceanBlue}
          >
            <AuthorsSection
              authorNames={authorNames}
              truncate={truncate}
              showNewAuthor
            />
            {isMobile && (
              <ButtonContainer>
                <Button onClick={onViewAllPressed}>
                  <ButtonDiv>View all</ButtonDiv>
                </Button>
              </ButtonContainer>
            )}
          </ColoredBlockContainer>
        </>
      )}
    </StyledBlockContainer>
  );
};

export default AuthorsBlock;
