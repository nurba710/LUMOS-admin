import React from 'react';
import {ERoutePath} from "../../common/consts/routes.const";
import {Link} from "react-router-dom";
import {
    Content,
    Container,
    AboutSubTitle,
    AboutTitle,
    AboutLocationTitle,
    AboutPageTitle,
    AboutDescription
} from "./style";

const HomePage = () => {

    return (
        <>
            <Container>
                <Content>
                    <AboutTitle> О компании</AboutTitle>
                    <AboutPageTitle>Мы занимаемся разработкой 5 лет.</AboutPageTitle>
                    <AboutDescription>
                        Идея создания нашей команды возникла на почве желания помочь усовершенствовать бизнес-процессы
                        наших текущих и потенциальных клиентов.
                        Наблюдая за работой персонала во многих компаниях самой различной направленности, невольно
                        приходят мысли такого плана:
                        «Вот эту работу можно сделать не за 3 часа, а за 15 минут. А здесь нужно действовать совершенно
                        по-другому. А в данном случае необходимо научить людей работать иначе».
                        Проблемой было всегда время — хотелось помочь всем и сразу, но иногда помогать нужно было,
                        прежде всего себе. И тогда было решено собрать команду единомышленников,
                        порядочных людей, которым нравится их деятельность и которые хотят работать, прежде всего на
                        результат, не жертвуя качеством. Воплощением этих мыслей стала компания с названием IT Spec.
                        Компания IT Spec начала свою работу в 2014 году и на сегодняшний день нашими основными
                        направлениями являются:
                    </AboutDescription>
                    <Link to={ERoutePath.ABOUT_PAGE}> подробнее...</Link>
                </Content>
                <Content>
                    <AboutSubTitle>Наши проекты</AboutSubTitle>
                    <Link to={ERoutePath.OUR_PROJECTS}> Все наши проекты </Link>
                </Content>
                <Content>
                    <AboutSubTitle>Наша команда</AboutSubTitle>
                    <Link to={ERoutePath.OUR_TEAM}> Наша команда </Link>
                </Content>
                <Content>
                    <AboutSubTitle>IT события</AboutSubTitle>
                    <Link to={ERoutePath.IT_DEV_PAGE}> событии... </Link>
                </Content>
                <Content>
                    <AboutSubTitle>Контакты</AboutSubTitle>
                    <AboutLocationTitle>МЕСТО РАСПОЛОЖЕНИЯ</AboutLocationTitle>
                    <AboutDescription>4 мкр</AboutDescription>
                    <AboutDescription>хата руса</AboutDescription>
                    <Link to={ERoutePath.CONTACT_PAGE}> Форма обратной связи </Link>
                </Content>
            </Container>
        </>
    );
};

export default HomePage;
