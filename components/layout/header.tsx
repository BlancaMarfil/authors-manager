import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { MouseEvent, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.dimensions.base3};
  line-height: ${({ theme }) => theme.dimensions.base3};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: any;
}

const NavLink = (props: NavLinkProps) => {
  const { href, title, onClick } = props;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <Link href={href}>
      <StyledLink onClick={onClick && handleClick}>{title}</StyledLink>
    </Link>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.dimensions.base8};
  padding: ${({ theme }) => theme.dimensions.base2}
    ${({ theme }) => theme.dimensions.base5};
  background-color: ${({ theme }) => theme.colors.oceanBlue};
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeftNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base5};
`;

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Container>
      <StyledNav>
        <StyledLeftNav>
          <Image
            src="/icons/AuthorsManagerLogo.svg"
            alt="AuthorsManagerLogo"
            width={32}
            height={32}
          />
          <NavLink href="/" title="Home" />
          <NavLink href="/authors" title="Authors" />
          <NavLink href="/books" title="Books" />
        </StyledLeftNav>
        <NavLink href="/" title="Log Out" onClick={() => authCtx.onLogout()} />
      </StyledNav>
    </Container>
  );
};

export default Header;
