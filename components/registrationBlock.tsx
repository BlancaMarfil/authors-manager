import styled from "styled-components";
import RegistrationBox from "./registrationBox";

const Title = styled.h1`
  margin-top: ${({ theme }) => theme.dimensions.base8};
  ${({ theme }) => theme.fontTypes.h1}
`;

const RegistrationBlock = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      <Title>Find your next great book</Title>
      <RegistrationBox>{children}</RegistrationBox>
    </>
  );
};

export default RegistrationBlock;
