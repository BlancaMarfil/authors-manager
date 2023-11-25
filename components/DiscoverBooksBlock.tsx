import styled from "styled-components";
import BlockContainer from "./BlockContainer";
import BlockHeader from "./BlockHeader";
import ColoredBlockContainer from "./ColoredBlockContainer";
import theme from "../styles/theme";
import CoverContainer from "./CoverContainer";
import Button from "./UI/Button";
import useIsMobile from "../hooks/useIsMobile";

const BlockContent = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 408px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 480px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.fourK}) {
    height: 300px;
  }
`;

interface StyledProps {
  width: string;
  top: string;
  leftWeb: string;
  leftTablet: string;
  leftMobile;
}

const BookContainer = styled.div<StyledProps>`
  position: absolute;
  width: 130px;
  top: ${({ top }) => top};
  left: ${({ leftMobile }) => leftMobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 160px;
    left: ${({ leftTablet }) => leftTablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    left: ${({ leftWeb }) => leftWeb};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.fourK}) {
    top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  padding: 0px 20vw;
`;

const DiscoverBooksBlock = () => {
  const { isMobile } = useIsMobile();
  const imgArr = [
    "https://books.google.com/books/content?id=JMd1zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=ScxnAgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71eXf3Tx4ySZRLcO0e6wQJzm1pXOx9nvQigqz3rYkf1sfmbjGvkyznuK89-wKxw6ePD_88TkDFT5_wzWIt-K3jRVCsXfeZBjra6LNVGe-gtIEWdc1dJDbfv4hpKG47zmOIJsUF7&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=be-ZAAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE710ABNVJIY9GDX3myvKuUNJIGHZjJKmeUD57mQlmUZwFLKSdUh0BzKzmuJ7l9xpTnjoCmmebO0fz3iSc8R-C0kLXKXwTYLFsIB3moW3Y4rVRE33gN7I0uy_0ogCBx49lrI7W8WQ&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=_ZWdBAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72kFH4ckIWfINnAW3lYvKrcPgMPZISbKEmztCiw9NKItHwgJ68m_BNK0aU5eRqXdMXc3OIQ34IbdAMt5DXxumQzeP2IP2IJFo-AUlh7GX5kksix3aseC2JcdTj_UfHhj2ZSlg97&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=KAE_CgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70tOT5K022qjDQ8niOPvKLl2bVoTJVhgQiwRtVGYphVDBj3dZFo_EbWyU_hLBEuzY9wzVhnqbqYnzpasgtVWTbNC_KO3-4rbFmYPtKzLgBKxYwScptTCOwamS5gQ8gyzm2Qt9kT&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=fotsBgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70bgGbzv0mKVZsi5JSk9poIXq0SgslrOsKIIO7ssYP6-iGAh-44-RFEFalI8laH_du0Nvue0EMe-ptTJ7xpQgqtLn1-2k2Q4Yzo4397hdid5Yzg6I5KF7xa98QPtwY0vJCnOyC0&source=gbs_api",
  ];

  const topArr = ["64px", "128px", "0px", "96px", "24px", "56px"];
  const leftArrWeb = ["7vw", "16vw", "26vw", "35vw", "44vw", "54vw"];
  const leftArrTablet = ["1vw", "9vw", "18vw", "27vw", "37vw", "45vw"];
  const leftArrMobile = ["3vw", "12vw", "21vw", "30vw", "40vw", "48vw"];

  const bookWidth = isMobile ? "130px" : "160px";
  const bookHeight = isMobile ? "200px" : "250px";

  return (
    <BlockContainer>
      <BlockHeader title={"Discover your next book"} />

      <ColoredBlockContainer
        color={theme.colors.limeGreen}
        mobileColor={theme.colors.limeGreen}
      >
        <BlockContent>
          <div>
            {imgArr.map((img, i) => (
              <BookContainer
                width={bookWidth}
                top={topArr[i]}
                leftWeb={leftArrWeb[i]}
                leftTablet={leftArrTablet[i]}
                leftMobile={leftArrMobile[i]}
              >
                <CoverContainer key={i} imgSrc={img} />
              </BookContainer>
            ))}
          </div>
        </BlockContent>
        <ButtonContainer>
          <Button>
            <ButtonDiv>Explore</ButtonDiv>
          </Button>
        </ButtonContainer>
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default DiscoverBooksBlock;
