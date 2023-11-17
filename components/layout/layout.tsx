import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
  width: 80%;
  margin: auto;
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