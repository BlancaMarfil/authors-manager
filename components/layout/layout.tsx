import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base2};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0 ${({ theme }) => theme.dimensions.base2}
      ${({ theme }) => theme.dimensions.base6};
    width: 80%;
    margin: auto;
  }
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
