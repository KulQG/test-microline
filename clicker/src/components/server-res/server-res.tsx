import { FC } from "react";
import css from "./server-res.module.css";

interface IServerRes {
  response: number;
}

const ServerRes: FC<IServerRes> = ({ response = 0 }) => {
  return (
    <div className={css.wrap}>
      <p className={css.text}>
        На сервере: <span className={css.res}>{response}</span>
      </p>
    </div>
  );
};

export default ServerRes
