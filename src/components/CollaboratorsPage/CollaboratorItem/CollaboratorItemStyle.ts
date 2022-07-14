import styled from "styled-components";
import {ItemWrapperType, ItemAvatarType} from "./CollaboratorItemType";

export const ItemWrapper = styled.div<ItemWrapperType>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border: 2px solid blue;
  border-radius: 10px;
  width: ${props => props.width || '400px'};
  height: ${props => props.height || '600px'};
  margin-bottom: 45px;
`;

export const ItemAvatar = styled.div<ItemAvatarType>`
  width: ${props => props.width || '400px'};
  height: ${props => props.height || '400px'};
  background: ${props => props.background};
  padding: 5px;
`

export const Title = styled.p`
  color: black;
  font-size: 24px;
`

export const Info = styled.p`
  color: black;
  font-size: 16px;
`
export const Button = styled.button`
  background: dodgerblue;
  color: white;
  padding: 5px;
  border-radius: 10px;
`