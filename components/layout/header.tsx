import Link from "next/link";
import Image from "next/image";
import MenuIcon from "../../public/icons/menu.svg";
import LogoutIcon from "../../public/icons/logout.svg";
import styled from "styled-components";
import { MouseEvent, useContext, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useIsMobile from "../../hooks/useIsMobile";
import theme from "../../styles/theme";
import useClickOutside from "../../hooks/useClickOutside";

// ------------------------ NAV LINK ------------------------
const StyledLink = styled.a`
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.oceanBlue};
  padding: 12px ${({ theme }) => theme.dimensions.base2};
  border-top: 1px solid ${({ theme }) => theme.colors.oceanBlue};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.dimensions.base3};
    line-height: ${({ theme }) => theme.dimensions.base3};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    padding: 0;
    border: 0;
  }
`;

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const { href, title, onClick } = props;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick();
  };

  return (
    <Link href={href}>
      <StyledLink onClick={onClick && handleClick}>{title}</StyledLink>
    </Link>
  );
};

// ------------------------ NAV LINK GROUP ------------------------
const NavLinkGroup = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <NavLink href="/" title="Home" onClick={onClick} />
      <NavLink href="/authors" title="Authors" onClick={onClick} />
      <NavLink href="/books" title="Books" onClick={onClick} />
      <NavLink href="/search" title="Search" onClick={onClick} />
    </>
  );
};

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
        <Link href={"/"} style={{ marginTop: "-2px" }}>
          <StyledLink>
            <Image
              src="/icons/AuthorsManagerLogo.svg"
              alt="AuthorsManagerLogo"
              width={32}
              height={32}
            />
          </StyledLink>
        </Link>
        <NavLinkGroup />
      </StyledLeftNav>
      <NavLink href="/" title="Log Out" onClick={() => onClickLogout()} />
    </StyledNav>
  );
};

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
        <MenuIcon
          width={32}
          height={32}
          style={{ fill: theme.colors.white }}
          onClick={() => onClickMenu()}
        />
        <LogoutIcon
          width={32}
          height={32}
          style={{ fill: theme.colors.white }}
          onClick={() => onClickLogout()}
        />
      </StyledMobileNav>
    </>
  );
};

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

const MobileContent = styled.div<{ $menuvisible?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  z-index: 1;
  max-height: ${({ $menuvisible }) => ($menuvisible === "true" ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Header = () => {
  const authCtx = useContext(AuthContext);
  const { isMobile } = useIsMobile();
  const [menuVisible, setMenuVisible] = useState(false);

  const wrapperRef = useRef();
  useClickOutside(wrapperRef, () => {
    setMenuVisible(false);
  });

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
      <>
        <MobileContent $menuvisible={menuVisible.toString()} ref={wrapperRef}>
          <NavLinkGroup onClick={() => setMenuVisible(false)} />
        </MobileContent>
      </>
    </>
  );
};

export default Header;
