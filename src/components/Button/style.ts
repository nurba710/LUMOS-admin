import styled from "styled-components";

export const ButtonStyle = styled.button<{
  background?: string;
  color?: string;
  backgroundHover?: string;
  width?: string;
  height?: string;
  transitionDurationHover?: string;
}>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: 9.2px;
  background: ${({background}) => background};
  border: none;
  color: ${({color}) => color};
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${({backgroundHover}) => backgroundHover};
    transition-duration: ${({transitionDurationHover}) => transitionDurationHover};
  }
`;

