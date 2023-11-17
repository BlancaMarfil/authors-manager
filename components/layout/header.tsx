import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.dimensions.base3};
  line-height: ${({ theme }) => theme.dimensions.base3};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = (props: NavLinkProps) => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <StyledLink>{title}</StyledLink>
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

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base5};
`;

const Header = () => {
  return (
    <Container>
      <StyledNav>
        <Image
          src="/icons/AuthorsManagerLogo.svg"
          alt="AuthorsManagerLogo"
          width={32}
          height={32}
        />
        <NavLink href="/" title="Home" />
        <NavLink href="/authors" title="Authors" />
        <NavLink href="/books" title="Books" />
      </StyledNav>
    </Container>
  );
};

export default Header;
