import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {logout} from "../store/reducer/authSlice";

/**
 * 一个钩子函数
 * 作用是登录时加一个定时器，到期调用logout进行退出
 */
const useAutoLogout = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        //设置一个定时器
        const timer = setTimeout(() => {
            dispatch(logout());
        }, auth.expirationTime)
        //返回一个清理函数给外部手动卸载
        return () => {
            clearTimeout(timer)
        }
    }, [auth])
}

export default useAutoLogout;

// export default function useTimer(callback, delay) {
//     const timer = useRef()
//
//     useEffect(() => {
//         timer.current = setTimeout(callback, delay)
//         return () => {
//             clearTimeout(timer.current)
//         }
//     }, [callback, delay])
// }
