import styled, { css } from "styled-components";
import Image from "next/image";
import CustomImage from "../UI/CustomImage";
import theme from "../../styles/theme";
import useIsMobile from "../../hooks/useIsMobile";

const BookCover = styled.div`
  flex: 1;
  position: relative;
  width: 135px;
  height: 208px;
  border-radius: ${({ theme }) => theme.dimensions.base};
  margin: auto;
  margin-bottom: ${({ theme }) => theme.dimensions.base4};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 100%;
    height: 22vw;
    border-radius: ${({ theme }) => theme.dimensions.base3};
    margin-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.fourK}) {
    width: 100%;
    height: 10vw;
    border-radius: ${({ theme }) => theme.dimensions.base};
    margin-top: 0;
  }
`;

interface Props {
  imgSrc: string;
}

const CoverContainer = (props: Props) => {
  const { imgSrc } = props;

  return (
    <BookCover>
      <CustomImage imgSrc={imgSrc || ""} alt="Last Read Cover" />
    </BookCover>
  );
};

export default CoverContainer;
