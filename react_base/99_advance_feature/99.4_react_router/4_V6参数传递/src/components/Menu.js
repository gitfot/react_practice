import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">主页</Link>
                </li>
                <li>
                    <Link to="/message">消息列表</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
