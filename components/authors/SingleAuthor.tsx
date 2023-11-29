import styled from "styled-components";
import PlusIcon from "../../public/icons/plus.svg";
import theme from "../../styles/theme";
import Link from "next/link";
import Avatar from "react-avatar";
import { generateBackground } from "../../lib/utils/JSFunctions";

const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
  margin-bottom: ${({ theme }) => theme.dimensions.base2};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 0;
    gap: ${({ theme }) => theme.dimensions.base2};
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
`;

const AuthorName = styled.p<{ color: string }>`
  width: ${({ theme }) => theme.dimensions.base17};
  font-size: 18px;
  line-height: 18px;
  color: ${({ color }) => color};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.base20};
  }
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

interface Props {
  authorName: string;
  color: string;
  searchTheme: boolean;
  showName?: boolean;
}

const SingleAuthor = (props: Props) => {
  const { authorName = "", color, searchTheme, showName = true } = props;

  return (
    <Link href={`/authors/${authorName}`}>
      <AuthorBlock>
        <AvatarContainer>
          {searchTheme && (
            <IconDiv>
              <PlusIcon
                width={56}
                height={56}
                style={{ fill: theme.colors.white }}
              />
            </IconDiv>
          )}

          <Avatar
            name={authorName}
            size={"160px"}
            round={true}
            color={generateBackground(authorName || "")}
            style={{ fontFamily: theme.fontFamily }}
          />
        </AvatarContainer>
        {showName && <AuthorName color={color}>{authorName}</AuthorName>}
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
    <AuthorBlock>
      <NewAuthor>
        <PlusIcon
          width={40}
          height={40}
          style={{ fill: theme.colors.limeGreen }}
        />
      </NewAuthor>
      <NewAuthorName color={theme.colors.white}>Add a new author</NewAuthorName>
    </AuthorBlock>
  );
};

export default SingleAuthor;
