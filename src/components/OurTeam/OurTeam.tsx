import React from 'react';
import {Card, CardDescription, CardImg, CardUserName, Flex} from "./style";

const users = [
    {
        img: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg',
        name: 'Рустам',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg',
        name: 'Руслан',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg',
        name: 'Кирилл',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st2.depositphotos.com/1001599/9554/v/600/depositphotos_95542674-stock-illustration-contemptuous-man-sticking-out-his.jpg',
        name: 'Уктам',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095005-stock-illustration-profile-icon-male-avatar.jpg',
        name: 'Нурба',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st2.depositphotos.com/2419757/5782/v/600/depositphotos_57821863-stock-illustration-man-working-with-laptop.jpg',
        name: 'Урмат',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st2.depositphotos.com/1001599/6963/v/450/depositphotos_69639723-stock-illustration-man-with-the-magnifying-glass.jpg',
        name: 'Азамат',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st3.depositphotos.com/1007566/19517/v/600/depositphotos_195177576-stock-illustration-young-man-in-the-classroom.jpg',
        name: 'Нурэлес',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59094739-stock-illustration-profile-icon-male-avatar.jpg',
        name: 'Фарух',
        description: 'FrontEnd разработчик ',
    },
    {
        img: 'https://static8.depositphotos.com/1003938/1067/v/600/depositphotos_10672113-stock-illustration-funny-cartoon-genius.jpg',
        name: 'Марат',
        description: 'Designer ',
    },
];

const OurTeam = () => {
    return (
        <Flex>
            {users.map((item) => (
                <Card>
                    <CardImg src={item.img}/>
                    <CardUserName>{item.name}</CardUserName>
                    <CardDescription>{item.description}</CardDescription>
                </Card>
            ))}
        </Flex>
    );
};

export default OurTeam;
