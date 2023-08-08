import React from 'react';
import Hello from "./Hello";
import {Link, NavLink, Route, useRouteMatch} from "react-router-dom";

const About = (props) => {

    const {path} = useRouteMatch();
    const clickHandler = ()=>{

    };
    return (
        <div>
            <button onClick={clickHandler}>点我一下</button>
            <h2>关于我们，其实是师徒4人</h2>
            <ul>
                <li>孙悟空</li>
                <li>猪八戒</li>
                <li>沙和尚</li>
                <li>唐僧</li>
            </ul>
            {/*这里可以使用Link去访问或者可以再浏览器直接输入“http://localhost:3000/about/hello”去触发嵌套路由*/}
            <NavLink to={`${path}/hello`}>访问嵌套的路由</NavLink>
            <Route path={`${path}/hello`}>
                <Hello/>
            </Route>
        </div>
    );
};

export default About;
