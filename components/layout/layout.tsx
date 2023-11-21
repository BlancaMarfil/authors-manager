import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base2};
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 80%;
    margin: auto;
  }
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
