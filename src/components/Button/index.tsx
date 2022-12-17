import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} hidden={!disabled}>{title}</ButtonContainer>;
};

export default Button;
