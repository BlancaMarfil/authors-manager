import Link from "next/link";
import Image from "next/image";
import Menu from "../../public/icons/menu.svg";
import Logout from "../../public/icons/logout.svg";
import styled from "styled-components";
import { MouseEvent, useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useIsMobile from "../../hooks/useIsMobile";
import theme from "../../styles/theme";

// ------------------------ NAV LINK WEB------------------------
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
// -----------------------------------------------

// ------------------------ WEB ------------------------
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

interface MenuProps {
  onClickLogout: () => void;
}

const WebMenu = ({ onClickLogout }: MenuProps) => {
  return (
    <StyledNav>
      <StyledLeftNav>
        <div style={{ marginTop: "-2px" }}>
          <Image
            src="/icons/AuthorsManagerLogo.svg"
            alt="AuthorsManagerLogo"
            width={32}
            height={32}
          />
        </div>
        <NavLink href="/" title="Home" />
        <NavLink href="/authors" title="Authors" />
        <NavLink href="/books" title="Books" />
      </StyledLeftNav>
      <NavLink href="/" title="Log Out" onClick={() => onClickLogout()} />
    </StyledNav>
  );
};
// ------------------------------------------------

// ------------------------ MOBILE ------------------------
const StyledMobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface MobileMenuProps {
  onClickMenu: () => void;
  onClickLogout: () => void;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { onClickMenu, onClickLogout } = props;

  return (
    <>
      <StyledMobileNav>
        <Menu
          width={32}
          height={32}
          style={{ fill: theme.colors.white }}
          onClick={() => onClickMenu()}
        />
        <Logout
          width={32}
          height={32}
          style={{ fill: theme.colors.white }}
          onClick={() => onClickLogout()}
        />
      </StyledMobileNav>
    </>
  );
};
// ------------------------------------------------

// ------------------------ NAV LINK MOBILE ------------------------
const MobileLinkDiv = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.oceanBlue};
  display: flex;
  align-items: center;
`;

const MobileLink = styled.a`
  padding: ${({ theme }) => theme.dimensions.base2}
    ${({ theme }) => theme.dimensions.base3};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.oceanBlue};
`;

const NavLinkMobile = (props: NavLinkProps) => {
  const { href, title } = props;

  return (
    <Link href={href}>
      <MobileLinkDiv>
        <MobileLink>{title}</MobileLink>
      </MobileLinkDiv>
    </Link>
  );
};

// ------------------------------------------------

// ------------------------ MAIN ------------------------
const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.dimensions.base8};
  padding: 18px ${({ theme }) => theme.dimensions.base3};
  background-color: ${({ theme }) => theme.colors.oceanBlue};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 18px ${({ theme }) => theme.dimensions.base5};
  }
`;

const MobileContent = styled.div<{ menuvisible?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  z-index: 1;
  max-height: ${({ menuvisible }) => (menuvisible === "true" ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Header = () => {
  const authCtx = useContext(AuthContext);
  const { isMobile } = useIsMobile();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Container>
        {isMobile ? (
          <MobileMenu
            onClickMenu={() => setMenuVisible(!menuVisible)}
            onClickLogout={authCtx.onLogout}
          />
        ) : (
          <WebMenu onClickLogout={authCtx.onLogout} />
        )}
      </Container>
      <MobileContent menuvisible={menuVisible.toString()}>
        <NavLinkMobile href="/" title="Home" />
        <NavLinkMobile href="/authors" title="Authors" />
        <NavLinkMobile href="/books" title="Books" />
      </MobileContent>
    </>
  );
};

export default Header;
