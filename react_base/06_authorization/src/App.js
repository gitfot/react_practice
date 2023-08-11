import React from 'react';
import {useRoutes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import NeedAuth from "./components/NeedAuth";


const App = () => {

    const elements = useRoutes([
        {
            path:'/',
            element:<HomePage/>
        },
        {
            path:'profile',
            element:<NeedAuth><ProfilePage/></NeedAuth>
        },
        {
            path:'auth-form',
            element:<AuthPage/>
        }
    ])

    return (
        <Layout>
            {elements}
        </Layout>
    );
};

export default App;
