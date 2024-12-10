import { ChangeEventHandler, useState } from "react";
import TextInputUI from "./TextInputUI";

const TextInput = () => {
  const [value, setValue] = useState("Good day, how are you?");

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return <TextInputUI value={value} onChange={onChange} />;
};

export default TextInput;
