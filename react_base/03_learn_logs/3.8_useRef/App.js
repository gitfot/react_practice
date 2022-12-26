import './App.css'
import {useRef, useState} from "../../01_hello_react/script/react.development";

let temp;

const App = () => {
    /*
    *   获取原生的DOM对象
    *       1.可以使用传统的document来对DOM进行操作
    *       2.直接从React处获取DOM对象
    *           步骤：
    *               1.创建一个存储DOM对象的容器
    *                   - 使用 useRef() 钩子函数
    *                       钩子函数的注意事项：
    *                           ① React中的钩子函数只能用于函数组件或自定义钩子
    *                           ② 钩子函数只能直接在函数组件中调用
    *               2.将容器设置为想要获取DOM对象元素的ref属性
    *                   <h1 ref={xxx}>....</h1>
    *                   - React会自动将当前元素的DOM对象，设置为容器current属性
    *
    *   useRef()
    *       - 返回的就是一个普通的JS对象
    *       - {current:undefined}
    *       - 所以我们直接创建一个js对象，也可以代替useRef()
    *       - 区别：
    *           我们创建的对象，组件每次重新渲染都会创建一个新对象
    *           useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象
    *
    *       - 当你需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()
    *
    * */

    const h1Ref = useRef(); // const h1Ref = {current:null};
    const [count, setCount] = useState(1);

    const clickHandler = () => {

        const header = document.getElementById('header');
        // header.innerHTML = 'test';
        h1Ref.current.innerText = 'test';

    }

    const updateCountHandler = () => {
        setCount( pre => pre + 1);
    }

    return <div className={'app'}>
        <h1 id="header" ref={h1Ref}>我是标题1</h1>
        <button onClick={clickHandler}> b1</button>
        <button onClick={updateCountHandler}> b2</button>
    </div>


}