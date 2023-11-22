import styled, { css } from "styled-components";

const OverlayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const DarkenDiv = styled(OverlayDiv)`
  background-color: black;
  opacity: 0.7;
`;

interface Props {
  children: JSX.Element;
  className?: any;
}

const Overlay = (props: Props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <DarkenDiv />
      <OverlayDiv>{children}</OverlayDiv>
    </div>
  );
};

export default Overlay;
