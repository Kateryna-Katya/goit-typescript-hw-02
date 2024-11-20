import { FC } from "react";
import { LoadMoreBtnProps } from "../../index";
import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
