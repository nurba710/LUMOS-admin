import React from 'react';
import {HeaderItem, HeaderLogo, HeaderNavigate, HeaderSection, HeaderStyled} from "./style";
import {ERoutePath} from "../../common/consts/routes.const";
import {headerLinks} from "../../common/consts/header.const";

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderLogo>
                <HeaderNavigate to={ERoutePath.HOME_PAGE}>LUMOS</HeaderNavigate>
            </HeaderLogo>
            <HeaderSection>
                {headerLinks.map((item) => (
                    <HeaderNavigate to={`${ERoutePath.HOME_PAGE}${item.link}`}>
                        <HeaderItem>{item.name}</HeaderItem>
                    </HeaderNavigate>
                ))}
            </HeaderSection>
            <HeaderSection>
                <HeaderItem>
                    <HeaderNavigate to={ERoutePath.REGISTER}>Войти</HeaderNavigate>
                </HeaderItem>
            </HeaderSection>
        </HeaderStyled>
    );
};

export default Header;
