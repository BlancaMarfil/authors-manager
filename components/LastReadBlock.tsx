import styled from "styled-components";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";
import Button from "./UI/Button";
import PlusIcon from "../public/icons/plus.svg";
import theme from "../styles/theme";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base3};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ theme }) => theme.dimensions.base7};
    gap: ${({ theme }) => theme.dimensions.base3};
  }
`;

const StyledTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBlockTitle = styled.h2`
  font-size: ${({ theme }) => theme.dimensions.base4};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${({ theme }) => theme.fontTypes.h2}
  }
`;

const AddButton = styled.div`
  padding: 0px ${({ theme }) => theme.dimensions.base4};
`;

const PlusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.sunsetRed};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.sunsetRed};
`;

const LimeBlock = styled.div`
  padding: ${({ theme }) => theme.dimensions.base2};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base3};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: ${({ theme }) => theme.dimensions.base4};
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.dimensions.base6};
    background-color: ${({ theme }) => theme.colors.limeGreen};
    border: 1px solid ${({ theme }) => theme.colors.limeGreen};
    border-radius: ${({ theme }) => theme.dimensions.base3};
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  }
`;

const InfoBlock = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base};
`;

const BookSeries = styled.p`
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray};
  font-style: italic;
`;

const BookTitle = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base4};
  line-height: ${({ theme }) => theme.dimensions.base4};
  font-weight: 600;
`;

const BookAuthor = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base3};
  line-height: ${({ theme }) => theme.dimensions.base3};
  font-weight: 400;
`;

const BookDescription = styled.p`
  margin-top: ${({ theme }) => theme.dimensions.base};
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.gray};
`;

const LastReadBlock = () => {
  const { isMobile } = useIsMobile();

  const descLength = isMobile ? 500 : 700;
  const bookDesc =
    "Two enemies. One wedding. And a seaside mystery decades in the making.Lilian doesn't remember anything about her life before the day Maggie Muir found her on her front porch-a toddler, abandoned and alone. And maybe that's okay. She has a beautiful life at Muir Farm, including an adopted family she adores and a successful career as a lawyer. But she also has a secret . . . one that raises just as many questions about her future as it does her unknown past.And, of course, it would be private investigator Wilder Monroe, her brother's best friend and the bane of her existence, who sniffs out her secret before anyone else.Wilder has spent the past three years trying to close the one case his father couldn't-the mystery of Maggie Muir's long-lost granddaughter. But the decades-long search has become more tangled than ever. It's become more personal, too. Not only are the Muirs the closest thing to family he has left, but if he can solve this mystery, maybe he'll keep himself from drowning in the one he can't . . . the truth about his father's death.In the midst of secrets and swirling questions, Maggie asks a favor of both Lilian and Wilder: put aside their bickering and work together to plan her summer wedding. It's a big ask, made all the more difficult when danger comes calling at Muir Farm. But if the two enemies can stand each other long enough to pull off the event of the year, they just might solve a mystery in the process.And the biggest discovery of all? That sometimes the one your heart longs for is the last person you ever would've expected.Wedding at Sea is the breathtaking finale in bestselling, award-winning author Melissa Tagg's Muir Harbor series.";
  const shortDesc = bookDesc.slice(0, descLength) + "...";

  return (
    <Container>
      <StyledTitleDiv>
        <StyledBlockTitle>Last Read</StyledBlockTitle>
        {isMobile ? (
          <PlusDiv>
            <PlusIcon
              width={28}
              height={28}
              style={{ fill: theme.colors.white }}
            />
          </PlusDiv>
        ) : (
          <Button buttonStyle={"secondary"}>
            <AddButton>Add</AddButton>
          </Button>
        )}
      </StyledTitleDiv>

      <LimeBlock>
        <div style={{ flex: 1 }}>
          <Image
            src="https://books.google.com/books/content?id=JMd1zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="Last Read Cover"
            width={isMobile ? 135 : 225}
            height={isMobile ? 208 : 347}
          />
        </div>
        <InfoBlock>
          <BookSeries>Muir Harbour #3</BookSeries>
          <BookTitle>Wedding at Sea</BookTitle>
          <BookAuthor>Melissa Tagg</BookAuthor>
          <BookDescription>{shortDesc}</BookDescription>
        </InfoBlock>
      </LimeBlock>
    </Container>
  );
};

export default LastReadBlock;
