import styled from "styled-components";

const SecondaryButton = styled.button`
  padding-top: ${({ theme }) => theme.dimensions.base2};
  padding-bottom: ${({ theme }) => theme.dimensions.base2};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.dimensions.base3};
  border: 2px solid ${({ theme }) => theme.colors.sunsetRed};
  color: ${({ theme }) => theme.colors.sunsetRed};
  font-size: ${({ theme }) => theme.dimensions.base3};
  font-weight: 400;
  cursor: pointer;
`;

const PrimaryButton = styled(SecondaryButton)`
  background: ${({ theme }) => theme.colors.sunsetRed};
  color: white;
`;

enum ButtonType {
  primary,
  secondary,
  terciary,
}

interface Props {
  title: string;
  onClick: () => void;
  type?: ButtonType;
}

const Button = (props: Props) => {
  const { title, onClick, type = ButtonType.primary } = props;

  const getButtonType = (type: ButtonType) => {
    switch (type) {
      case ButtonType.primary:
      default:
        return PrimaryButton;
      case ButtonType.secondary:
        return SecondaryButton;
    }
  };

  const ButtonComponent = getButtonType(type);

  return <ButtonComponent onClick={onClick}>{title}</ButtonComponent>;
};

export default Button;
