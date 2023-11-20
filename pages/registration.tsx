import styled from "styled-components";
import Button from "../components/UI/button";
import RegistrationBlock from "../components/registrationBlock";
import { useState } from "react";
import RegistrationForm from "../components/registrationForm";
import BackIcon from "../public/icons/arrow_back.svg";
import { RegistrationType } from "../types/types";
import theme from "../styles/theme";
import { useGetAllUsersQuery } from "../graphql/generated";

const BackContainer = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base4};
  display: flex;
  justify-content: center;
`;

const BackDiv = styled.div`
  width: 38vw;
  display: flex;
  gap: ${({ theme }) => theme.dimensions.base2};
  align-items: center;
  justify-content: center;
`;

const Registration = () => {
  const [registrationType, setRegistrationType] = useState<RegistrationType>();

  const { loading, error, data } = useGetAllUsersQuery();

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
              buttonStyle="secondary"
              onClick={() => setRegistrationType(null)}
            >
              <BackDiv>
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
