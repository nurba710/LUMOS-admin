import styled from 'styled-components';

export const TextareaStyle = styled.textarea<{
  width?: string;
  height?: string;
  background?: string;


}>`

  width: ${({width}) => width};
  height: ${({height}) => height};
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background: ${({background}) => background};
  font-size: 16px;
  resize: none;
  overflow: hidden;
  outline: none;
  border: none;
  
  
`