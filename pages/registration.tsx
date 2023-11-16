import styled from "styled-components";

const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
  line-height: 24px;
`;

const Registration = () => {
  return (
    <>
      <Title>Find your next great book</Title>
      <button>Login</button>
      <button>Signup</button>
    </>
  );
};

export default Registration;
