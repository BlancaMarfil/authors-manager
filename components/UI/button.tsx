import styled, { css } from "styled-components";

const primaryStyles = css`
  padding: ${({ theme }) => theme.dimensions.base} 0;
  background: ${({ theme }) => theme.colors.sunsetRed};
  color: white;
  &:hover {
    opacity: 0.7;
  }
`;

const secondaryStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.sunsetRed};
  border: 1px solid ${({ theme }) => theme.colors.sunsetRed};
  &:hover {
    background-color: ${({ theme }) => theme.colors.veryLightGray};
  }
`;

const getStyles = ({ buttonStyle }: { buttonStyle?: string }) => {
  if (buttonStyle === "primary") {
    return primaryStyles;
  } else if (buttonStyle === "secondary") {
    return secondaryStyles;
  } else {
    return primaryStyles;
  }
};

const StyledButton = styled.button<{ buttonStyle?: string }>`
  border-radius: ${({ theme }) => theme.dimensions.base3};
  cursor: pointer;
  border: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.dimensions.base3};
  font-weight: 400;
  ${(props) => getStyles(props)};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: revert;
  }
`;

interface Props {
  children: string | JSX.Element;
  buttonStyle?: string;
  onClick?: () => void;
  buttonType?: "button" | "reset" | "submit" | undefined;
}

const Button = (props: Props) => {
  const { children, onClick, buttonStyle, buttonType } = props;

  return (
    <StyledButton
      type={buttonType || "button"}
      onClick={onClick}
      buttonStyle={buttonStyle}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
