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
    ${({ theme }) => theme.boxShadows.button};
  }
`;

const terciaryStyles = css`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.dimensions.base} 0;
  &:hover {
    opacity: 0.7;
  }
`;

const primaryRoundStyles = css`
  background: ${({ theme }) => theme.colors.sunsetRed};
  padding: 0;
  border-radius: 50%;
  color: white;
  &:hover {
    opacity: 0.7;
  }
`;

const getStyles = ({ $buttonstyle }: { $buttonstyle?: string }) => {
  if ($buttonstyle === "primary") {
    return primaryStyles;
  } else if ($buttonstyle === "secondary") {
    return secondaryStyles;
  } else if ($buttonstyle === "terciary") {
    return terciaryStyles;
  } else if ($buttonstyle === "round") {
    return primaryRoundStyles;
  } else {
    return primaryStyles;
  }
};

const StyledButton = styled.button<{ $buttonstyle?: string }>`
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
    height: fit-content;
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
      $buttonstyle={buttonStyle}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
