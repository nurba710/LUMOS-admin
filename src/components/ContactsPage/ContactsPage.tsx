import React from 'react';
import {Content, FormContact, FormFeedBack, HStyle, SpanStyle, PStyle, HStyle2} from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {Formik} from "formik";
import {COLORS} from "../../common/consts/colors.const";
import {contactPageInitialValues, contactPageValidationsSchema} from "../../common/consts/formikContactPage.const";

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
                    <Formik initialValues={contactPageInitialValues}
                            validateOnBlur
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                            validationSchema={contactPageValidationsSchema}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              isValid,
                              handleSubmit,
                              dirty,
                          }) => {
                            const {name: nameValue, email: emailValue, message: messageValue} = values
                            const {name: nameTouched, email: emailTouched, message: messageTouched} = touched
                            const {name: nameErrors, email: emailErrors, message: messageErrors} = errors
                            return (
                                <div className="form">
                                    <Input
                                        margin='15px 0'
                                        width='350px'
                                        placeholder="Введите имя"
                                        type={'text'}
                                        name={'name'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={nameValue}
                                    />
                                    {nameTouched && nameErrors && <p className={'error'}>{nameErrors}</p>}

                                    <Input
                                        margin='15px 0'
                                        width='350px'
                                        placeholder="Введите email"
                                        type={'email'}
                                        name={'email'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={emailValue}
                                    />
                                    {emailTouched && emailErrors && <p className={'error'}>{emailErrors}</p>}

                                    <Input
                                        margin='15px 0'
                                        width='350px'
                                        placeholder="Ваше сообщение"
                                        type={'text'}
                                        name={'message'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={messageValue}
                                    />
                                    {messageTouched && messageErrors && <p className={'error'}>{messageErrors}</p>}

                                    <Button
                                        name="ПРЕДСТАВЛЯТЬ НА РАССМОТРЕНИЕ"
                                        margin='15px 0'
                                        backgroundHover={COLORS.ORANGE}
                                        width='350px'
                                        disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                        type={'submit'}
                                    />
                                </div>)
                        }}
                    </Formik>
                </FormFeedBack>
            </Content>
        </>
    );
};

export default ContactsPage;
