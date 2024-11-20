import { FC } from "react";
import { ErrorMessageProps } from "../../index";
import style from "./ErrorMessage.module.css";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={style.error}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
