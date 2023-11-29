import styled from "styled-components";
import BlockContainer from "./BlockContainer";
import BlockHeader from "./BlockHeader";
import ColoredBlockContainer from "./ColoredBlockContainer";
import theme from "../styles/theme";
import CoverContainer from "./CoverContainer";
import Button from "./UI/Button";
import useIsMobile from "../hooks/useIsMobile";
import Image from "next/image";
import { useRouter } from "next/router";

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
  top: string;
  leftweb: string;
  lefttablet: string;
  leftmobile: string;
  zindex: number;
}

const BookContainer = styled.div<StyledProps>`
  position: absolute;
  width: 133px;
  aspect-ratio: 1/1.5;
  top: ${({ top }) => top};
  left: ${({ leftmobile }) => leftmobile};
  z-index: ${({ zindex }) => zindex};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 160px;
    left: ${({ lefttablet }) => lefttablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    left: ${({ leftweb }) => leftweb};
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
  const imgArr = [
    "http://books.google.com/books/publisher/content?id=LxidEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73eHd1RtgoVNuma-j_ow5Ry7A6EnIaXIJXMs_2j-VE69VB6ax1rAZ2vFRhPwoF5UFtdVBEOX6RAsHxgi4ODabiVqt1xNVZa89I_W_WCkY0VzYKzXw5LIBkBaOtF8sz0l1TKlD-q&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=-1l1DwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71L5Novh0PaTr_G0VjmOuPPOk_qA0cUUxjAelEvGtKaGXySdX_3yddaj9h3bVD7L2-6SaahlHjcyhAfeAd3TXcG6ysmdj2j1wtKC6NTDStfCF4KRRYC0bNF1QJrgQAFCORCLiLE&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=pOqfEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70Tk0SdE8S5gnVm_55_PNEqy0yU3g4aTc_3s97rNIro9L-kpDQenJ6aDYtFvOhO8Pttnm-AC2dbDlTgOgzBmIDSH-qdFBEWGG3C184-gxKSIr8H1ZlFljevVhVo9oo0Oxl39CXR&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=ZhsqEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73cn0m1QhXoT4CWK-PCIeWetfJFg1WH_c9yXZOLCDuzzdXj24-lS8KJGR7S8Dy-n33ZqR0ShFVLpb1Re2r1OZEmVnFo76x4b4BPl9vpOVDesnJboU9GjCGzzeiXMHvJsKj21nFB&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=uoWAEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70RwmbKLnJ083ri4UHQYhSTMjBx2pN7Pua3j7IBYSYFNiiAfj8mEr2pt1Md4OmRmaLXLf1jWobG6-JlnK-MNVNPYGwp37My4CegHkrdsZNUR9m_ddP5uHwF-wgSD-Z7wlhRkE4d&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=_g_QDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71Le8NURXftSRFd8I2p2-bNzazl8q5ihv_N9kaVkXI8WFOnHThUq_G4H-g5un5OdTIJeMNSqocJSdBi2nFD_quyOh13GV6RPDNom_3clo0p7NsLkwq69lgCsd0SJAHuHkZg_3cx&source=gbs_api",
  ];

  const topArr = ["64px", "128px", "0px", "96px", "24px", "56px"];
  const leftArrWeb = ["7vw", "16vw", "26vw", "35vw", "44vw", "54vw"];
  const leftArrTablet = ["1vw", "9vw", "18vw", "27vw", "37vw", "45vw"];
  const leftArrMobile = ["3vw", "12vw", "21vw", "30vw", "40vw", "48vw"];
  // const zIndexArr = [3, 5, 0, 1, 2, 4];
  const zIndexArr = [0, 3, 2, 1, 0, 2];

  const handleOnExplore = () => {
    router.push("/search");
  };

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
                top={topArr[i]}
                leftweb={leftArrWeb[i]}
                lefttablet={leftArrTablet[i]}
                leftmobile={leftArrMobile[i]}
                zindex={zIndexArr[i]}
              >
                <BookCover>
                  <Image
                    src={img}
                    alt="Explore"
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
    </BlockContainer>
  );
};

export default DiscoverBooksBlock;
