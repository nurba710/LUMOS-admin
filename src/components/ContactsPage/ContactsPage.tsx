import React from 'react';
import {Content, FormContact, FormFeedBack, HStyle, SpanStyle, PStyle, HStyle2} from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";

const ContactsPage = () => {
    return (
        <>
            <Content>
                <FormContact>
                    <HStyle>МЕСТО РАСПОЛОЖЕНИЯ</HStyle>
                    <SpanStyle>4 мкр</SpanStyle>
                    <PStyle>хата руса</PStyle>

                    <HStyle>ПОДПИСЫВАЙТЕСЬ НА НАС</HStyle>
                    <SpanStyle>ИКОНКИ</SpanStyle>
                    <PStyle>2022 Политика конфиденциальности</PStyle>
                </FormContact>

                <FormFeedBack>
                    <HStyle2>Форма обратной связи</HStyle2>
                    <Input margin='15px 50px' width='350px' value='' onChange={()=> console.log('nynbtybyt')} placeholder="Enter your Name"/>
                    <Input margin='15px 50px' width='350px' value='' onChange={()=> console.log('nynbtybyt')} placeholder="Enter a valid email address"/>
                    <Input margin='15px 50px' width='350px' value='' onChange={()=> console.log('nynbtybyt')} placeholder="Enter your message"/>
                    <Button margin='15px 50px' backgroundHover='#ff9900' width='350px' type='submit' onClick={()=> console.log('3213')} name="ПРЕДСТАВЛЯТЬ НА РАССМОТРЕНИЕ"/>
                </FormFeedBack>
            </Content>
        </>
    );
};

export default ContactsPage;
