import React from 'react';
import {
    Block,
    Column,
    FooterStyle,
    Row,
    TextP,
    HeadLines,
    Ul,
    ListLinks,
    SocialLink,
    FooterLinks,
} from './style'

const Footer = () => {
    return (
        <FooterStyle>
            <Block>
                <Row>
                    <Column>
                        <HeadLines>company</HeadLines>
                        <FooterLinks>
                            <ListLinks>about us</ListLinks>
                            <ListLinks>our service</ListLinks>
                            <ListLinks>privacy policy</ListLinks>
                            <ListLinks>affiliate program</ListLinks>
                        </FooterLinks>
                    </Column>
                    <Column>
                        <HeadLines>get help</HeadLines>
                        <FooterLinks>
                            <ListLinks>FAQ</ListLinks>
                            <ListLinks>shipping</ListLinks>
                            <ListLinks>returns</ListLinks>
                            <ListLinks>order status</ListLinks>
                            <ListLinks>payment options</ListLinks>
                        </FooterLinks>
                    </Column>
                    <Column>
                        <HeadLines>online shop</HeadLines>
                        <FooterLinks>
                            <ListLinks>watch</ListLinks>
                            <ListLinks>bag</ListLinks>
                            <ListLinks>shoes</ListLinks>
                            <ListLinks>dress</ListLinks>
                        </FooterLinks>
                    </Column>
                    <Column>
                        <HeadLines>follow us</HeadLines>
                        <SocialLink>
                            <ListLinks>1</ListLinks>
                        </SocialLink>
                    </Column>
                </Row>
            </Block>
            <TextP>govnocoders 2022</TextP>
        </FooterStyle>
    );
};

export default Footer;
