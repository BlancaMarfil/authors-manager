import styled, { css } from "styled-components";
import { useState } from "react";
import Image from "next/image";
import Loader from "./Loader";
import theme from "../../styles/theme";

const StyledImage = styled(Image)`
  opacity: 0;
  transition: opacity 1s ease-in-out 1s;

  &.loaded {
    opacity: 1;
  }
`;

interface Props {
  imgSrc: string;
  alt: string;
}

const CustomImage = (props: Props) => {
  const { imgSrc, alt } = props;

  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className={isImageLoaded ? "loaded" : ""}
      onLoad={handleImageLoad}
    />
  );
};

export default CustomImage;
