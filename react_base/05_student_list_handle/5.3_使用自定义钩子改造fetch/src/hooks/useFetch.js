import {useCallback, useState} from "react";

/**
 * 自定义钩子函数
 * @param request
 * @param callback
 * @returns {{fetchData: ((function(*): Promise<void>)|*), data: *[], loading: boolean, error: unknown}}
 */
export default function useFetch(request, callback) {

    const [data, setData] = useState([]); // 存放从远程api获取的数据
    const [loading, setLoading] = useState(false); // 是否正确加载提示,false表示没有加载数据，true表示加载
    const [error, setError] = useState(null); // 错误信息

    const fetchData = useCallback(async (body) => {
        try{
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost:1337/api'+request.url, {
                method:request.method || 'get',
                headers:{
                    "Content-type":"application/json"
                },
                body: body? JSON.stringify({data:body}): null,
            });

            if(response.ok){
                const resData = await response.json();
                setData(resData.data);
                //执行回调函数
                callback && callback();
            }else{
                throw new Error('数据加载失败！');
            }
        }catch (e){
            console.log(e)
            setError(e);
        }finally {
            setLoading(false);
        }
    },[])

    // 设置返回值
    return {
        loading,
        error,
        data,
        fetchData
    };
}
