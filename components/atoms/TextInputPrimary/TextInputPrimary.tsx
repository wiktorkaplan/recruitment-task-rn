import React from "react";
import { Primary } from "./TextInputPrimary.styles";
import { TextInputProps } from "../../../types/main";

const TextInputPrimary: React.FC<TextInputProps> = ({
  placeholder,
  additionalStyles,
  onChange,
  value,
}) => (
  <Primary
    multiline
    numberOfLines={6}
    placeholder={placeholder}
    onChangeText={onChange}
    value={value}
    style={{ textAlignVertical: "top", ...additionalStyles }}
  />
);

export default TextInputPrimary;
