import { useState } from "react";

// 限制輸入數字 hooks
const useInputNumber = (defaultVal = ""): [string, (val: string) => void] => {
  const [numVal, setNumVal] = useState(defaultVal);

  const handleChange = (val: string) => {
    val = val.replace(/[^-+\d]/g, ""); //電話號碼正規表達式
    setNumVal(val);
  };

  return [numVal, handleChange];
};

export default useInputNumber;
