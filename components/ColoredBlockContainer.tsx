import styled from "styled-components";

interface StyledProps {
  color?: string;
  mobilecolor?: string;
}

const ColoredBlock = styled.div<StyledProps>`
  margin: 0 -${({ theme }) => theme.dimensions.base2};
  padding: ${({ theme }) => theme.dimensions.base4};
  background-color: ${({ mobilecolor }) => mobilecolor};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0;
    padding: ${({ theme }) => theme.dimensions.base4};
    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    border-radius: ${({ theme }) => theme.dimensions.base3};
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  }
`;

interface Props {
  color: string;
  mobileColor?: string;
  children: JSX.Element | JSX.Element[];
}

const ColoredBlockContainer = (props: Props) => {
  const { color, mobileColor, children } = props;

  return (
    <ColoredBlock color={color} mobilecolor={mobileColor}>
      {children}
    </ColoredBlock>
  );
};

export default ColoredBlockContainer;
