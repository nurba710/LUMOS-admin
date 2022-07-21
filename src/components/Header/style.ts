import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {COLORS} from "../../common/consts/colors.const";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${COLORS.SKY_BLUE};
  color: ${COLORS.WHITE};
`

export const HeaderNavigate = styled(NavLink)`
  color: ${COLORS.WHITE};
  text-decoration: none;

  &.is-active {
    color: ${COLORS.BLACK};
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
    color: ${COLORS.ORANGE};
    border-bottom-color: ${COLORS.ORANGE};
  }
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`
