import styled from "styled-components";
import BlockContainer from "../containers/BlockContainer";
import BlockHeader from "./BlockHeader";
import ColoredBlockContainer from "../containers/ColoredBlockContainer";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const StyledBlockContainer = styled(BlockContainer)`
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: ${({ theme }) => theme.dimensions.base3};
  }
`;

const BlockContent = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 350px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 450px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 480px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.fourK}) {
    height: 300px;
  }
`;

interface StyledProps {
  $top: string;
  $leftweb: string;
  $lefttablet: string;
  $leftmobile: string;
  $zindex: number;
}

const BookContainer = styled.div<StyledProps>`
  position: absolute;
  width: 133px;
  aspect-ratio: 1/1.5;
  top: ${({ $top }) => $top};
  left: ${({ $leftmobile }) => $leftmobile};
  z-index: ${({ $zindex }) => $zindex};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 160px;
    left: ${({ $lefttablet }) => $lefttablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    left: ${({ $leftweb }) => $leftweb};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.fourK}) {
    top: 0;
  }
`;

const BookCover = styled.div`
  width: 133px;
  aspect-ratio: 1/1.5;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 190px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  padding: 0px 12vw;
`;

const DiscoverBooksBlock = () => {
  const router = useRouter();
  const imgArr = Array.from(
    { length: 6 },
    (_, i) => `/images/discover${i + 1}.jpg`
  );

  const topArr = ["64px", "128px", "0px", "96px", "24px", "56px"];
  const leftArrWeb = ["7vw", "16vw", "26vw", "35vw", "44vw", "54vw"];
  const leftArrTablet = ["9vw", "17vw", "28vw", "38vw", "47vw", "58vw"];
  const leftArrMobile = ["3vw", "12vw", "21vw", "30vw", "40vw", "48vw"];
  const zIndexArr = [0, 3, 2, 1, 0, 2];

  const handleOnExplore = () => {
    router.push("/search");
  };

  return (
    <StyledBlockContainer>
      <BlockHeader title={"Discover your next book"} />

      <ColoredBlockContainer
        color={theme.colors.limeGreen}
        mobileColor={theme.colors.limeGreen}
      >
        <BlockContent>
          <div>
            {imgArr.map((img, i) => (
              <BookContainer
                key={i}
                $top={topArr[i]}
                $leftweb={leftArrWeb[i]}
                $lefttablet={leftArrTablet[i]}
                $leftmobile={leftArrMobile[i]}
                $zindex={zIndexArr[i]}
              >
                <BookCover>
                  <Image
                    src={img}
                    alt="explore"
                    layout="fill"
                    objectFit="cover"
                  />
                </BookCover>
              </BookContainer>
            ))}
          </div>
        </BlockContent>
        <ButtonContainer>
          <Button onClick={handleOnExplore}>
            <ButtonDiv>Explore</ButtonDiv>
          </Button>
        </ButtonContainer>
      </ColoredBlockContainer>
    </StyledBlockContainer>
  );
};

export default DiscoverBooksBlock;
