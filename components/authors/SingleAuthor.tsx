import styled, { css } from "styled-components";
import Image from "next/image";
import PlusIcon from "../../public/icons/plus.svg";
import theme from "../../styles/theme";
import Overlay from "../UI/Overlay";

const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
  margin-bottom: ${({ theme }) => theme.dimensions.base2};

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

const AuthorName = styled.p<{ color: string }>`
  font-size: 18px;
  line-height: 18px;
  color: ${({ color }) => color};
  text-align: center;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: black;
  opacity: 0;
  &:hover {
    opacity: 0.5;
  }
`;

interface Props {
  imgSrc: string;
  name: string;
  color: string;
  searchTheme: boolean;
}

const SingleAuthor = (props: Props) => {
  const { imgSrc, name, color, searchTheme } = props;

  return (
    <AuthorBlock>
      <AuthorContainer>
        {searchTheme && (
          <IconDiv>
            <PlusIcon
              width={56}
              height={56}
              style={{ fill: theme.colors.white }}
            />
          </IconDiv>
        )}
        <Image
          src={imgSrc}
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          objectPosition="center center"
        />
      </AuthorContainer>
      <AuthorName color={color}>{name}</AuthorName>
    </AuthorBlock>
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
