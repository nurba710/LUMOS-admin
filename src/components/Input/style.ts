import styled from 'styled-components'


export const InputStyle = styled.input<{
  width?: string;
  color?: string;
  margin?: string;
  height?: string;
  fontSize?: string;
  background?: string;
  placeholderColor?: string;
  borderBottom?: string;
}>`

  width: ${({width}) => width};
  height: ${({height}) => height};
  color: ${({color}) => color};
  padding: 10px 5px;
  font-family: inherit;
  margin: ${({margin}) => margin};
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: ${({borderBottom}) => borderBottom};
  font-size: ${({fontSize}) => fontSize};
  background: ${({background}) => background};
  transition: box-shadow 0.15s ease-in-out;

  &:focus {
    border-bottom: ${({borderBottom}) => borderBottom};
    box-shadow: 0 1px cadetblue;
  }

  &::placeholder {
    color: ${({placeholderColor}) => placeholderColor};
  }
`