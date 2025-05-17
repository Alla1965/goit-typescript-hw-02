import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={style.loaderWrapper}>
      <ClipLoader size={50} color="#4caf50" />
    </div>
  );
};

export default Loader;

