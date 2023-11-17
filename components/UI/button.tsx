import styled, { css } from "styled-components";

const primaryStyles = css`
  background: ${({ theme }) => theme.colors.sunsetRed};
  color: white;
  &:hover {
    opacity: 0.7;
  }
`;

const secondaryStyles = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.sunsetRed};
  border: 1px solid ${({ theme }) => theme.colors.sunsetRed};
  &:hover {
    border-width: 2px;
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
  padding: ${({ theme }) => theme.dimensions.base} 0;
  border-radius: ${({ theme }) => theme.dimensions.base3};
  cursor: pointer;
  border: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.dimensions.base3};
  font-weight: 400;

  ${(props) => getStyles(props)}
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
