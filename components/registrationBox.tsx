import styled from "styled-components";

const StyledBox = styled.div`
  width: 32vw;
  margin: auto;
  margin-top: ${({ theme }) => theme.dimensions.base13};
  padding: ${({ theme }) => theme.dimensions.base6}
    ${({ theme }) => theme.dimensions.base5};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base3};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.limeGreen};
`;

const RegistrationBox = ({ children }: { children: JSX.Element[] }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default RegistrationBox;
