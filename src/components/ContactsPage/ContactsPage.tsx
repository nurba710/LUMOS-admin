import React from 'react';
import {Content, FormContact, FormFeedBack} from "./style";

const ContactsPage = () => {
    return (
        <>
            <Content>
                <FormContact>
                    <h3>МЕСТО РАСПОЛОЖЕНИЯ</h3>
                    <span>4 мкр</span>
                    <p>хата руса</p>

                    <h3>ПОДПИСЫВАЙТЕСЬ НА НАС</h3>
                    <span>ИКОНКИ</span>
                    <p>2022 Политика конфиденциальности</p>
                </FormContact>

                <FormFeedBack>
                    <h2>Форма обратной связи</h2>
                    <input type="text" placeholder="Enter your Name"/>
                    <input type="text" placeholder="Enter a valid email address"/>
                    <input type="text" placeholder="Enter your message"/>
                    <button>ПРЕДСТАВЛЯТЬ НА РАССМОТРЕНИЕ</button>
                </FormFeedBack>
            </Content>
        </>
    );
};

export default ContactsPage;
