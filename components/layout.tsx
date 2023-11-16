import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Header = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces.base8};
  padding-left: ${({ theme }) => theme.spaces.base5};
  background-color: ${({ theme }) => theme.colors.oceanBlue};
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
