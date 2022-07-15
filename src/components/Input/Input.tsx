import React from "react";
import {InputStyle} from "./style";

export interface InputProps {
  width?: string;
  color?: string;
  height?: string;
  fontSize?: string;
  background?: string;
  placeholder: string;
  type: 'text' | 'password' | 'radio' | 'checkbox' | 'number';
  placeholderColor?: string;
  borderBottom?: string;
}


const Input: React.FC<InputProps> = ({
                                       width = '200px',
                                       height = '35px',
                                       type,
                                       placeholder,
                                       fontSize = '15px',
                                       color = 'Blue',
                                       background = 'white',
                                       borderBottom='1px solid cornflowerblue',
                                       placeholderColor = 'cornflowerblue'
                                     }) => {
  return (
  <InputStyle type={type} borderBottom={borderBottom} placeholderColor={placeholderColor} placeholder={placeholder} width={width} background={background} height={height}
              fontSize={fontSize}
              color={color}>
  </InputStyle>
  );
};

export default Input;