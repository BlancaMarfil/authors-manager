import styled from "styled-components";
import Image from "next/image";

const BookCover = styled.div<{ height: string }>`
  flex: 1;
  position: relative;
  width: 100%;
  height: ${({ height }) => height};
  border-radius: ${({ theme }) => theme.dimensions.base3};
  overflow: hidden;
`;

interface Props {
  imgSrc: string;
  height: string;
}

const CoverContainer = (props: Props) => {
  const { imgSrc, height } = props;

  return (
    <BookCover height={height}>
      <Image
        src={imgSrc}
        alt="Last Read Cover"
        layout="fill"
        objectFit="cover"
      />
    </BookCover>
  );
};

export default CoverContainer;
