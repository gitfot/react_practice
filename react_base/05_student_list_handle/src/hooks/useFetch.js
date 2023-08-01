import {useCallback, useState} from "react";

/*
*   React中的钩子函数只能在函数组件或自定钩子中调用
*       当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子
*
*   自定义钩子其实就是一个普通函数，只是它的名字需要使用use开头
* */
export default function () {

    const [data, setData] = useState([]); // 存放从远程api获取的数据
    const [loading, setLoading] = useState(false); // 是否正确加载提示,false表示没有加载数据，true表示加载
    const [error, setError] = useState(null); // 错误信息

    const fetchData = useCallback(async (url) => {
        try{
            setLoading(true);
            setError(null);
            const response = await fetch(url);
            if(response.ok){
                const resData = await response.json();
                setData(resData.data);
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
