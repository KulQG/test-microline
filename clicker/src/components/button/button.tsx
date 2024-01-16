import { FC } from "react";
import css from "./button.module.css";

interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  text?: string;
}

const Button: FC<IButton> = ({ onClick, disabled, text = "Click me!" }) => {
  return (
    <button
      disabled={disabled}
      className={css.btn}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
