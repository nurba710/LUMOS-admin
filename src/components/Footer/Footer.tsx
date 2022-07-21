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
    FooterListLinks
} from './style'

const Footer = () => {
    return (
        <FooterStyle>
            <Block>
                <Row>
                    <Column>
                        <HeadLines>company</HeadLines>
                        <FooterLinks>
                            <FooterListLinks><ListLinks>about us</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>our service</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>privacy policy</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>affiliate program</ListLinks></FooterListLinks>
                        </FooterLinks>
                    </Column>
                    <Column>
                        <HeadLines>get help</HeadLines>
                        <FooterLinks>
                            <FooterListLinks><ListLinks>FAQ</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>shipping</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>returns</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>order status</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>payment options</ListLinks></FooterListLinks>
                        </FooterLinks>
                    </Column>
                    <Column>
                        <HeadLines>online shop</HeadLines>
                        <FooterLinks>
                            <FooterListLinks><ListLinks>watch</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>bag</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>shoes</ListLinks></FooterListLinks>
                            <FooterListLinks><ListLinks>dress</ListLinks></FooterListLinks>
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
