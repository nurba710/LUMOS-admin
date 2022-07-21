import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "../components/Layout/Layout";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/AboutPage/AboutPage";
import OurTeam from "../components/OurTeam/OurTeam";
import OutProjects from "../components/OutProjects/OutProjects";
import ItDevPage from "../components/ItDevPage/ItDevPage";
import ContactsPage from "../components/ContactsPage/ContactsPage";
import {ERoutePath} from "../common/consts/routes.const";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={ERoutePath.HOME_PAGE} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={ERoutePath.ABOUT_PAGE} element={<AboutPage/>}/>
                <Route path={ERoutePath.OUR_TEAM} element={<OurTeam/>}/>
                <Route path={ERoutePath.OUR_PROJECTS} element={<OutProjects/>}/>
                <Route path={ERoutePath.IT_DEV_PAGE} element={<ItDevPage/>}/>
                <Route path={ERoutePath.CONTACT_PAGE} element={<ContactsPage/>}/>
                <Route path={ERoutePath.REGISTER} element={<ContactsPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
