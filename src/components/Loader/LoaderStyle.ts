import styled, {keyframes} from "styled-components";
import {SpinnerType} from "./LoaderType";


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<SpinnerType>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid cornflowerblue;
  border-right: 2px solid cornflowerblue;
  border-bottom: 2px solid cornflowerblue;
  border-left: 4px solid blue;
  background: transparent;
  margin: 50px auto;
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
  border-radius: 50%;
`;