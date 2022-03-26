import { nanoid } from "nanoid";
import { LoaderContainer } from "./styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <div className="lds-spinner">
        {new Array(12).fill(1).map(() => (
          <div key={nanoid()}></div>
        ))}
      </div>
    </LoaderContainer>
  );
};

export default Loader;
