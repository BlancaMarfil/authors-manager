import styled from "styled-components";
import RegistrationBox from "./RegistrationBox";
import { RegistrationType } from "../../types/types";

const Title = styled.h1`
  margin-top: ${({ theme }) => theme.dimensions.base4};
  fontsize: ${({ theme }) => theme.dimensions.base3};
  lineheight: ${({ theme }) => theme.dimensions.base3};
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: ${({ theme }) => theme.dimensions.base8};
    ${({ theme }) => theme.fontTypes.h1}
  }
`;

interface Props {
  children: JSX.Element[];
  origin?: RegistrationType;
}

const RegistrationBlock = (props: Props) => {
  const { origin = "login", children } = props;

  return (
    <>
      <Title>Find your next great book</Title>
      <RegistrationBox origin={origin}>{children}</RegistrationBox>
    </>
  );
};

export default RegistrationBlock;
