import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const handler = ({ target: { value } }) => {
    setValue(value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handler, reset];
};
export default useInput;
