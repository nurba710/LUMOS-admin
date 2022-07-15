import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #689CD2;
  color: #fff;
`

export const HeaderNavigate = styled(NavLink)`
  color: #fff;
  text-decoration: none;

  &.is-active {
    color: black;
  }
`

export const HeaderLogo = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 130px;
`

export const HeaderItem = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  margin-left: 5px;
  cursor: pointer;
  margin-right: 30px;
  border-bottom: 3px solid transparent;
  transition: color .3s linear;

  :hover {
    color: #ff9900;
    border-bottom-color: #ff9900;
  }
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`

