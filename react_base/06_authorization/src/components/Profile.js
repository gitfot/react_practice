import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const auth = useSelector(state => state.auth);
    return (
        <div>
            <h2>登录账户</h2>
            <p>username：{auth.user.username}</p>
            <p>email:{auth.user.email}</p>
        </div>
    );
};

export default Profile;
