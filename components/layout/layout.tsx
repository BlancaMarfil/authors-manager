import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Parent = styled.div`
  position: relative;
`

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base2};
  min-height: 100vh;
  width: 100%;
  margin: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0 ${({ theme }) => theme.dimensions.base2}
      ${({ theme }) => theme.dimensions.base6};
    width: 80%;
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
