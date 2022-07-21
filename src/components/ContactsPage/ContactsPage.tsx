import React from 'react';
import {Content, FormContact, FormFeedBack, HStyle, SpanStyle, PStyle, HStyle2} from "./style";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {Formik} from "formik";
import * as yup from "yup";
import {COLORS} from "../../common/consts/colors.const";

const ContactsPage = () => {

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        email: yup.string().email('Введите верный E-mail').required('Обязательно'),
        message: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    })

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
                    <Formik initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                            validateOnBlur
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                            validationSchema={validationsSchema}
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
                          }) => (
                            <div className="form">
                                <Input
                                    margin='15px 0'
                                    width='350px'
                                    placeholder="Введите имя"
                                    type={'text'}
                                    name={'name'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}

                                <Input
                                    margin='15px 0'
                                    width='350px'
                                    placeholder="Введите email"
                                    type={'email'}
                                    name={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

                                <Input
                                    margin='15px 0'
                                    width='350px'
                                    placeholder="Ваше сообщение"
                                    type={'text'}
                                    name={'message'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                                {touched.message && errors.message && <p className={'error'}>{errors.message}</p>}

                                <Button
                                    name="ПРЕДСТАВЛЯТЬ НА РАССМОТРЕНИЕ"
                                    margin='15px 0'
                                    backgroundHover={COLORS.orange}
                                    width='350px'
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}
                                />

                            </div>)}

                    </Formik>
                </FormFeedBack>
            </Content>
        </>
    );
};

export default ContactsPage;
