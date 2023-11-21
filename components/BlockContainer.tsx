import styled from "styled-components";

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

interface Props {
  children: JSX.Element[];
}

const BlockContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default BlockContainer;
