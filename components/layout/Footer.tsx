import styled from "styled-components";
import InstagramLogo from "../../public/icons/instagram.svg";
import FacebookLogo from "../../public/icons/facebook.svg";
import XTwitterLogo from "../../public/icons/x-twitter.svg";
import theme from "../../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.dimensions.base8};
  padding: ${({ theme }) => theme.dimensions.base2}
    ${({ theme }) => theme.dimensions.base4};
  background-color: ${({ theme }) => theme.colors.oceanBlue};
`;

const StyledMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.dimensions.base2};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base2};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: ${({ theme }) => theme.dimensions.base3};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <StyledMessage>
        {currentYear} Blanca Marfil. All rights reserved.
      </StyledMessage>

      <LogoContainer>
        <InstagramLogo
          width={28}
          height={28}
          style={{ fill: theme.colors.white }}
        />
        <FacebookLogo
          width={28}
          height={28}
          style={{ fill: theme.colors.oceanBlue }}
        />
        <XTwitterLogo
          width={28}
          height={28}
          style={{ fill: theme.colors.white }}
        />
      </LogoContainer>
    </Container>
  );
};

export default Footer;
