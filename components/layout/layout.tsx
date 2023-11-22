import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Parent = styled.div`
  position: relative;
`

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base2};
  min-height: 100vh;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0 ${({ theme }) => theme.dimensions.base2}
      ${({ theme }) => theme.dimensions.base6};
    width: 80%;
    margin: auto;
  }
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <Parent>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Parent>
  );
};

export default Layout;
