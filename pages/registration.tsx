import styled from "styled-components";
import Button from "../components/UI/button";
import Router from "next/router";
import RegistrationBox from "../components/registrationBox";

const Title = styled.h1`
  margin-top: ${({ theme }) => theme.dimensions.base8};
  font-weight: bold;
  font-size: ${({ theme }) => theme.dimensions.base8};
  line-height: ${({ theme }) => theme.dimensions.base3};
`;

const Registration = () => {
  const onClickLogin = () => {
    Router.push("/login");
  };

  const onClickSingup = () => {
    Router.push("/signup");
  };

  return (
    <>
      <Title>Find your next great book</Title>
      <RegistrationBox>
        <Button title="Login" onClick={onClickLogin} />
        <Button title="Sign Up" onClick={onClickSingup} />
      </RegistrationBox>
    </>
  );
};

export default Registration;
