import React from 'react';
import {Block, Column, FooterStyle, Row, TextP, HeadLines, Ul, ListLinks, SocialLink} from './style'

const Footer = () => {
    return (
        <FooterStyle>
            <Block>
                <Row>
                    <Column>
                        <HeadLines>company</HeadLines>
                        <Ul>
                            <li><ListLinks>about us</ListLinks></li>
                            <li><ListLinks>our service</ListLinks></li>
                            <li><ListLinks>privacy policy</ListLinks></li>
                            <li><ListLinks>affiliate program</ListLinks></li>
                        </Ul>
                    </Column>
                    <Column>
                        <HeadLines>get help</HeadLines>
                        <Ul>
                            <li><ListLinks>FAQ</ListLinks></li>
                            <li><ListLinks>shipping</ListLinks></li>
                            <li><ListLinks>returns</ListLinks></li>
                            <li><ListLinks>order status</ListLinks></li>
                            <li><ListLinks>payment options</ListLinks></li>
                        </Ul>
                    </Column>
                    <Column>
                        <HeadLines>online shop</HeadLines>
                        <Ul>
                            <li><ListLinks>watch</ListLinks></li>
                            <li><ListLinks>bag</ListLinks></li>
                            <li><ListLinks>shoes</ListLinks></li>
                            <li><ListLinks>dress</ListLinks></li>
                        </Ul>
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
