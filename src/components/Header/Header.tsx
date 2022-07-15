import React from 'react';
import {HeaderItem, HeaderLogo, HeaderNavigate, HeaderSection, HeaderStyled} from "./style";
import {ERoutePath} from "../../common/consts/routes.const";


const Header = () => {

    const headerLinks = [
        {name: 'О компании', key: ERoutePath.ABOUT_PAGE},
        {name: 'Наши проекты', key: ERoutePath.OUR_PROJECTS},
        {name: 'Наша команда', key: ERoutePath.OUR_TEAM},
        {name: 'IT-события', key: ERoutePath.IT_DEV_PAGE},
        {name: 'Контакты', key: ERoutePath.CONTACT_PAGE},
    ];


    return (
        <HeaderStyled>
            <HeaderLogo>
                <HeaderNavigate to="/">LUMOS</HeaderNavigate>
            </HeaderLogo>
            <HeaderSection>
                {headerLinks.map((item) => (
                    <HeaderNavigate to={`/${item.key}`}>
                        <HeaderItem>{item.name}</HeaderItem>
                    </HeaderNavigate>
                ))}
            </HeaderSection>
            <HeaderSection>
                <HeaderItem>
                    <HeaderNavigate to="/regis">Войти</HeaderNavigate>
                </HeaderItem>
            </HeaderSection>
        </HeaderStyled>
    );
};

export default Header;
