import React from 'react';
import {Container, Flex, AboutTitle, SubTitle, ServiceElem, AboutPageImg} from "./style";

const AboutPage = () => {
    return (
        <Container>
            <Flex>
                <AboutPageImg
                    src='https://beltranssat.by/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/top-10.jpg.webp'
                    alt="page"/>
                <AboutTitle>О нас</AboutTitle>
                <SubTitle>
                    Идея создания нашей команды возникла на почве желания помочь усовершенствовать бизнес-процессы наших
                    текущих и потенциальных клиентов.
                    Наблюдая за работой персонала во многих компаниях самой различной направленности, невольно приходят
                    мысли такого плана:
                    «Вот эту работу можно сделать не за 3 часа, а за 15 минут. А здесь нужно действовать совершенно
                    по-другому. А в данном случае необходимо научить людей работать иначе».
                    Проблемой было всегда время — хотелось помочь всем и сразу, но иногда помогать нужно было, прежде
                    всего себе. И тогда было решено собрать команду единомышленников,
                    порядочных людей, которым нравится их деятельность и которые хотят работать, прежде всего на
                    результат, не жертвуя качеством. Воплощением этих мыслей стала компания с названием IT Spec.
                    Компания IT Spec начала свою работу в 2014 году и на сегодняшний день нашими основными направлениями
                    являются:
                </SubTitle>
                <ServiceElem>Внедрение и сопровождение продуктов 1С:Підприємство</ServiceElem>
                <ServiceElem>Анализ и консультирование по автоматизации предприятий</ServiceElem>
                <ServiceElem>Администрирование серверов и рабочих станций</ServiceElem>
                <ServiceElem>Установка систем видеонаблюдения</ServiceElem>
                <ServiceElem>Установка систем идентификации и контроля рабочего времени персонала</ServiceElem>
                <ServiceElem>Внедрение корпоративных порталов Битрикс24</ServiceElem>
                <ServiceElem>GPS контроль транспорта и топлива</ServiceElem>
                <ServiceElem>Разработка веб-сайтов</ServiceElem>
            </Flex>
            <AboutPageImg src='https://sdvv.ru/upload/iblock/de6/de63c45c3ae808039c93fd88c8abfef6.jpg' alt="page"/>
            <Flex>
                <AboutTitle>Наша философия</AboutTitle>
                <SubTitle>Чтобы лучше понять, что мы за люди и как стараемся работать, возможно, лучшим вариантом будет
                    привести такие тезисы, которых мы стараемся придерживаться:</SubTitle>
                <ServiceElem>Нет ничего более постоянного, чем временное — лучше сразу сделать так, как
                    надо.</ServiceElem>
                <ServiceElem>Нет компромиссам — в сложных и нестандартных ситуациях не стоит идти на сделку с совестью.
                    Всегда
                    стоит обдумать все возможные варианты и найти решение.
                </ServiceElem>
                <ServiceElem>Поставь себя на место клиента, представь, что компания, с которой ты работаешь — это твоя
                    компания,
                    и продумай где и как можно применить знания IT технологий.
                </ServiceElem>
                <ServiceElem>Нет ничего более приятного в профессиональной деятельности, чем наблюдать положительный
                    результат
                    работы в компании клиента. Это — первая и самая важная причина работать. Этим мы отличаемся от
                    многих компаний, которые ставят на первое место деньги.
                </ServiceElem>
                <ServiceElem>Каждый новый проект — это стремление сделать еще чуточку лучше, чем в предыдущем. Развитие
                    самих
                    себя и компании в целом — это то, что нам приносит удовольствие.
                </ServiceElem>
                <ServiceElem>Все совершают ошибки, разница только в их частоте — кто-то допускает их больше, кто-то
                    меньше. Мы
                    очень беспокоимся о том, что бы их было минимальное количество, потому в своей работе полагаемся не
                    только на свои знания, но и на знания и опыт наших партнеров или поставщиков.
                </ServiceElem>
            </Flex>
            <AboutPageImg src='https://wdk.com.ua/files/images/m_pic_2.jpeg' alt="page"/>
        </Container>
    );
};

export default AboutPage;
