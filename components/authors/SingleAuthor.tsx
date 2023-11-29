import styled from "styled-components";
import PlusIcon from "../../public/icons/plus.svg";
import theme from "../../styles/theme";
import Link from "next/link";
import Avatar from "react-avatar";
import { generateBackground } from "../../lib/utils/JSFunctions";
import { useIsAuthorFollowedQuery } from "../../graphql/generated";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
  margin-bottom: ${({ theme }) => theme.dimensions.base2};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 0;
  }
`;

const AuthorContainer = styled.div`
  width: ${({ theme }) => theme.dimensions.base17};
  height: ${({ theme }) => theme.dimensions.base17};
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.base20};
    height: ${({ theme }) => theme.dimensions.base20};
  }
`;

const AvatarContainer = styled.div`
  width: ${({ theme }) => theme.dimensions.base17};
  height: ${({ theme }) => theme.dimensions.base17};
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.base20};
    height: ${({ theme }) => theme.dimensions.base20};
  }

  &:hover {
    ${({ theme }) => theme.boxShadows.button};
  }
`;

const AuthorName = styled.p<{ color: string }>`
  width: ${({ theme }) => theme.dimensions.base17};
  font-size: 18px;
  line-height: 18px;
  color: ${({ color }) => color};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ theme }) => theme.dimensions.base};
    width: ${({ theme }) => theme.dimensions.base20};
  }
`;

const FollowedText = styled.p`
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.sunsetRed};
  text-align: center;
`;

interface Props {
  authorName: string;
  color: string;
  searchTheme: boolean;
  showName?: boolean;
}

const SingleAuthor = (props: Props) => {
  const { authorName = "", color, searchTheme, showName = true } = props;
  const { userId } = useContext(AuthContext);

  const { data } = useIsAuthorFollowedQuery({
    variables: { userId: userId, authorName: authorName },
  });
  const following = data?.findAuthorbyName || false;

  return (
    <Link href={`/authors/${authorName}`}>
      <AuthorBlock>
        <AvatarContainer>
          <Avatar
            name={authorName}
            size={"160px"}
            round={true}
            color={generateBackground(authorName || "")}
            style={{ fontFamily: theme.fontFamily }}
          />
        </AvatarContainer>
        {showName && <AuthorName color={color}>{authorName}</AuthorName>}
        {searchTheme && following && <FollowedText>Following</FollowedText>}
      </AuthorBlock>
    </Link>
  );
};

const NewAuthorName = styled(AuthorName)`
  font-style: italic;
`;

const NewAuthor = styled(AuthorContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.limeGreen};
`;

export const NewAuthorSection = () => {
  return (
    <Link href="/search">
      <AuthorBlock>
        <NewAuthor>
          <PlusIcon
            width={40}
            height={40}
            style={{ fill: theme.colors.limeGreen }}
          />
        </NewAuthor>
        <NewAuthorName color={theme.colors.white}>
          Add a new author
        </NewAuthorName>
      </AuthorBlock>
    </Link>
  );
};

export default SingleAuthor;
