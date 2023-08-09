import React from 'react'
import {useMatch, useParams, useSearchParams} from 'react-router-dom'
// import { useMatch } from 'react-router-dom'

export default function Detail() {
    // 1、获取路径上的参数
    // const {id,title,content} = useParams();

    // 2、获取查询参数
    const [search,setSearch] = useSearchParams();
    const id = search.get("id");
    const title = search.get("title");
    const content = search.get("content");

    // 3、获取匹配到的路径
    // const {params:{id,title,content}}= useMatch("/home/message/detail/:id/:title/:content");

    return (
        <ul>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}
