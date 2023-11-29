import styled from "styled-components";
import Button from "../UI/Button";

const ButtonDiv = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base};
  margin-left: ${({ theme }) => theme.dimensions.base2};
`;

const StyledButton = styled.div`
  padding: ${({ theme }) => theme.dimensions.base05}
    ${({ theme }) => theme.dimensions.base3};
`;

interface Props {
  onClick: () => void;
}
const LoadMoreButton = ({ onClick }: Props) => {
  return (
    <ButtonDiv>
      <Button buttonStyle="secondary" onClick={onClick}>
        <StyledButton>Load More</StyledButton>
      </Button>
    </ButtonDiv>
  );
};

export default LoadMoreButton;
