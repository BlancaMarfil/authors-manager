import styled from "styled-components";
import Button from "../components/UI/button";
import RegistrationBlock from "../components/registrationBlock";
import { useState } from "react";
import RegistrationForm from "../components/registrationForm";
import BackIcon from "../public/icons/arrow_back.svg";
import { RegistrationType } from "../types/types";
import theme from "../styles/theme";

import { useQuery, gql } from "@apollo/client";

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

const GET_DATA = gql`
  query {
    users {
      userId
      email
    }
  }
`;

const Registration = () => {
  const [registrationType, setRegistrationType] = useState<RegistrationType>();

  const { loading, error, data } = useQuery(GET_DATA);

  console.log("DATA", data);

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
