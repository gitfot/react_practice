import React,{useState} from 'react'
import {Link, Outlet, useNavigate, useParams} from 'react-router-dom'

export default function Message() {

    const [message] = useState([
        {id:"001",title:"消息1",content:"窗前明月光"},
        {id:"002",title:"消息2",content:"疑是地上霜"}
    ])

    const navigate = useNavigate();

    function handleReturnHome() {
        navigate('/'); //返回根目录
        // navigate('/home'); //跳转到主页
        // navigate(-1); //返回上一级
    }

    return (
        <div>
            <ul>
                {
                    message.map(msgObj => {
                        return (
                            <li key={msgObj.id}>
                                {/* 1. 使用路径参数传递，对应在Detail组件需要通过 useParams获取*/}
                                {/*<Link to={`detail/${msgObj.id}/${msgObj.title}/${msgObj.content}`}>{msgObj.title}</Link>*/}

                                {/* 2. 使用查询参数，对应在Detail组件需要通过 useSearchParams获取*/}
                                <Link to={`detail?id=${msgObj.id}&title=${msgObj.title}&content=${msgObj.content}`}>{msgObj.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={handleReturnHome}>返回菜单选项</button>
            <hr />
            <Outlet/>
        </div>
    )
}
