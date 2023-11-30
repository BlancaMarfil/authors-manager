import styled from "styled-components";
import BlockContainer from "../containers/BlockContainer";
import ColoredBlockContainer from "../containers/ColoredBlockContainer";
import theme from "../../styles/theme";
import SingleAuthor from "./SingleAuthor";
import Button from "../UI/Button";
import {
  useFollowAuthorMutation,
  useIsAuthorFollowedQuery,
  useUnFollowAuthorMutation,
} from "../../graphql/generated";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const {
  isAuthorFollowed,
  getAuthorsByUserId,
} = require("../../graphql/queries/catalogue.graphql");

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

const NameFollowingDiv = styled.div<{ following: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ following, theme }) =>
      following === "true" ? theme.dimensions.base6 : 0};
    gap: ${({ theme }) => theme.dimensions.base2};
  }
`;

const StyledAuthorName = styled.h1`
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

const StyledFollow = styled.h2`
  font-size: ${({ theme }) => theme.dimensions.base2};
  line-height: ${({ theme }) => theme.dimensions.base2};
  font-style: italic;
  color: ${({ theme }) => theme.colors.sunsetRed};

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

interface Props {
  authorName: string;
}

const AuthorNameBlock = (props: Props) => {
  const { authorName } = props;
  const { userId } = useContext(AuthContext);

  // Data
  const [followAuthor] = useFollowAuthorMutation();
  const [unFollowAuthor] = useUnFollowAuthorMutation();

  const { data, loading } = useIsAuthorFollowedQuery({
    variables: { userId: userId, authorName: authorName },
  });

  let following = false;

  if (data?.findAuthorbyName) {
    following = data.findAuthorbyName;
  }

  // Actions
  const queriesToRefetch = [
    {
      query: isAuthorFollowed,
      variables: { userId: userId, authorName: authorName },
    },
    {
      query: getAuthorsByUserId,
      variables: { userId: userId },
    },
  ];
  const handlefollowing = () => {
    if (following) {
      unFollowAuthor({
        variables: { userId: userId, authorName: authorName },
        refetchQueries: queriesToRefetch,
      });
      // setFollowing(false);
    } else {
      followAuthor({
        variables: { userId: userId, authorName: authorName },
        refetchQueries: queriesToRefetch,
      });
      // setFollowing(true);
    }
  };

  // Style
  const followButton = following ? "Unfollow" : "Follow";
  const followButtonStyle = following ? "terciary" : "primary";

  return (
    <StyledBlockContainer>
      <ColoredBlockContainer
        color={theme.colors.limeGreen}
        mobileColor={theme.colors.limeGreen}
      >
        <Container>
          <SingleAuthor
            authorName={authorName}
            color={theme.colors.white}
            searchTheme={false}
            showName={false}
          />
          {!loading && following !== undefined && (
            <TextButtonDiv>
              <NameFollowingDiv following={following.toString()}>
                <StyledAuthorName>{authorName}</StyledAuthorName>
                {following && <StyledFollow>Following</StyledFollow>}
              </NameFollowingDiv>
              <Button buttonStyle={followButtonStyle} onClick={handlefollowing}>
                <StyledButton>{followButton}</StyledButton>
              </Button>
            </TextButtonDiv>
          )}
        </Container>
      </ColoredBlockContainer>
    </StyledBlockContainer>
  );
};

export default AuthorNameBlock;
