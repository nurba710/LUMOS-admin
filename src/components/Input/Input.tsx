import React from "react";
import {InputStyle} from "./style";

export interface InputProps {
    width?: string;
    color?: string;
    margin?: string;
    height?: string;
    fontSize?: string;
    background?: string;
    placeholder: string;
    type?: 'text' | 'password' | 'radio' | 'checkbox' | 'number';
    placeholderColor?: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    borderBottom?: string;
    value: string;
    name?: string;
    id?: string;
    label?: string;
}

const Input: React.FC<InputProps> = ({
                                         width = '200px',
                                         height = '35px',
                                         margin = '2-px',
                                         value,
                                         label,
                                         id,
                                         name,
                                         onChange,
                                         type = "text",
                                         placeholder,
                                         fontSize = '15px',
                                         color = 'Blue',
                                         background = 'white',
                                         borderBottom = '1px solid cornflowerblue',
                                         placeholderColor = 'cornflowerblue'
                                     }) => {
    return (
        <>
            <label id={id}>{label}</label>
            <InputStyle
                value={value} name={name} onChange={onChange} type={type} margin={margin} borderBottom={borderBottom}
                placeholderColor={placeholderColor}
                placeholder={placeholder}
                width={width} background={background} height={height}
                fontSize={fontSize}
                color={color}>
            </InputStyle>
        </>
    );
};

export default Input;
