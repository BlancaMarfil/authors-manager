import styled from "styled-components";
import Button from "../components/UI/Button";
import RegistrationBlock from "../components/registrationBlock";
import { useState } from "react";
import RegistrationForm from "../components/registrationForm";
import BackIcon from "../public/icons/arrow_back.svg";
import { RegistrationType } from "../types/types";
import theme from "../styles/theme";

const BackContainer = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base4};
  display: flex;
  justify-content: center;
`;

const BackDiv = styled.div<{ origin?: RegistrationType }>`
  display: flex;
  gap: ${({ theme }) => theme.dimensions.base2};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.dimensions.base} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 66vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: ${(props) => (props.origin === "login" ? "38vw" : "56vw")};
  }
`;

const Registration = () => {
  const [registrationType, setRegistrationType] = useState<RegistrationType>();

  return (
    <>
      {!registrationType ? (
        <RegistrationBlock>
          <Button onClick={() => setRegistrationType("login")}>Log in</Button>
          <Button onClick={() => setRegistrationType("signup")}>Sign Up</Button>
        </RegistrationBlock>
      ) : (
        <>
          <RegistrationForm origin={registrationType} />
          <BackContainer>
            <Button
              buttonStyle={"secondary"}
              onClick={() => setRegistrationType(null)}
            >
              <BackDiv origin={registrationType}>
                <BackIcon style={{ fill: theme.colors.sunsetRed }} />
                Back
              </BackDiv>
            </Button>
          </BackContainer>
        </>
      )}
    </>
  );
};

export default Registration;
