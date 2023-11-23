import styled from "styled-components";

const Container = styled.div`
  margin: ${({ theme }) => theme.dimensions.base3} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base2};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ theme }) => theme.dimensions.base7};
    margin-bottom: 0;
    gap: ${({ theme }) => theme.dimensions.base3};
  }
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BlockContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default BlockContainer;
