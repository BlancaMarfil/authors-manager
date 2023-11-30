import styled, { css } from "styled-components";
import Button from "./UI/Button";

const linedStyle = css`
  padding-bottom: ${({ theme }) => theme.dimensions.base};
  border-bottom: 1px solid;
`;

const StyledTitleDiv = styled.div<{ $lined: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ $lined }) => $lined === "true" && linedStyle}
`;

const StyledBlockTitle = styled.h2`
  font-size: ${({ theme }) => theme.dimensions.base4};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${({ theme }) => theme.fontTypes.h2}
  }
`;

const StyledButton = styled.div`
  padding: 0px ${({ theme }) => theme.dimensions.base4};
`;

interface Props {
  title: string;
  lined?: boolean;
  rightElement?: string | JSX.Element;
  onPressed?: () => void;
}

const BlockHeader = (props: Props) => {
  const { title, lined = false, rightElement, onPressed } = props;

  const component =
    rightElement && typeof rightElement === "string" ? (
      <Button buttonStyle={"secondary"} onClick={onPressed}>
        <StyledButton>{rightElement}</StyledButton>
      </Button>
    ) : (
      rightElement
    );

  return (
    <StyledTitleDiv $lined={lined.toString()}>
      <StyledBlockTitle>{title}</StyledBlockTitle>
      {component}
    </StyledTitleDiv>
  );
};

export default BlockHeader;
