import { useState } from "react";

// 限制輸入數字 hooks
const useInputNumber = (defaultVal = ""): [string, (val: string) => void] => {
  const [numVal, setNumVal] = useState(defaultVal);

  const handleChange = (val: string) => {
    val = val.replace(/[^\d]/g, "");
    setNumVal(val);
  };

  return [numVal, handleChange];
};

export default useInputNumber;
