import { FC } from "react";
import { TailSpin } from "react-loader-spinner";

const Loader: FC = () => {
  return <TailSpin color="#00BFFF" height={50} width={50} />;
};

export default Loader;
