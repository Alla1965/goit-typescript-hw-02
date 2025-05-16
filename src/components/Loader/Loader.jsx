import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css";
const Loader = () => {
 return (
    <div className={style.loaderWrapper}>
      <ClipLoader size={50} color="#4caf50" />
    </div>
  );
};

export default Loader;
