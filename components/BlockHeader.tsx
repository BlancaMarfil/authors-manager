import styled from "styled-components";
import Button from "./UI/Button";

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

const StyledButton = styled.div`
  padding: 0px ${({ theme }) => theme.dimensions.base4};
`;

interface Props {
  title: string;
  rightElement?: string | JSX.Element;
}

const BlockHeader = (props: Props) => {
  const { title, rightElement } = props;

  const component =
    rightElement && typeof rightElement === "string" ? (
      <Button buttonStyle={"secondary"}>
        <StyledButton>{rightElement}</StyledButton>
      </Button>
    ) : (
      rightElement
    );

  return (
    <StyledTitleDiv>
      <StyledBlockTitle>{title}</StyledBlockTitle>
      {component}
    </StyledTitleDiv>
  );
};

export default BlockHeader;
