import styled from "styled-components";
import { RegistrationType } from "../types/types";

const StyledBox = styled.div<{ origin?: RegistrationType }>`
  margin-top: ${({ theme }) => theme.dimensions.base4};
  padding: ${({ theme }) => theme.dimensions.base4}
    ${({ theme }) => theme.dimensions.base3};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base3};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.limeGreen};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 66vw;
    margin: auto;
    margin-top: ${({ theme }) => theme.dimensions.base13};
    padding: ${({ theme }) => theme.dimensions.base6}
      ${({ theme }) => theme.dimensions.base5};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: ${(props) => props.origin === "login" ? "38vw" : "56vw"};
    margin: auto;
    margin-top: ${({ theme }) => theme.dimensions.base13};
    padding: ${({ theme }) => theme.dimensions.base6}
      ${({ theme }) => theme.dimensions.base5};
  }
`;

interface Props {
  children: JSX.Element[];
  origin: RegistrationType;
}

const RegistrationBox = (props: Props) => {
  const { origin, children } = props;

  return <StyledBox origin={origin}>{children}</StyledBox>;
};

export default RegistrationBox;
