import styled from "styled-components";
import {ItemAvatarType} from "./CollaboratorItemType";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border: 2px solid blue;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  margin-bottom: 45px;
`;

export const ItemAvatar = styled.div<ItemAvatarType>`
  width: 395px;
  height: 400px;
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