import styled from "styled-components";
import BlockContainer from "./BlockContainer";
import BlockHeader from "./BlockHeader";
import ColoredBlockContainer from "./ColoredBlockContainer";
import theme from "../styles/theme";
import Image from "next/image";
import Button from "./UI/Button";

const BlockContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.dimensions.base}
    ${({ theme }) => theme.dimensions.base2};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-wrap: no-wrap;
    padding: 0 ${({ theme }) => theme.dimensions.base3};
  }
`;

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

const AuthorPicDiv = styled.div`
  width: ${({ theme }) => theme.dimensions.base17};
  height: ${({ theme }) => theme.dimensions.base17};
  border-radius: 50%;
  overflow: hidden;
`;

const AuthorName = styled.p`
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

interface Props {
  isMobile: boolean;
}

const AuthorsBlock = ({ isMobile }: Props) => {
  const imgArray = [
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
  ];
  return (
    <BlockContainer>
      <BlockHeader
        title={"Your Authors"}
        rightElement={!isMobile && "View all"}
      />

      <ColoredBlockContainer
        color={theme.colors.oceanBlue}
        mobileColor={theme.colors.oceanBlue}
      >
        <BlockContent>
          {imgArray.map(
            (img, i) =>
              ((!isMobile && i !== 5) || isMobile) && (
                <AuthorBlock>
                  <AuthorPicDiv>
                    <Image
                      src={img}
                      width={500}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </AuthorPicDiv>
                  <AuthorName>J. K. Rowling</AuthorName>
                </AuthorBlock>
              )
          )}
        </BlockContent>
        {isMobile && <Button>See all</Button>}
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default AuthorsBlock;
