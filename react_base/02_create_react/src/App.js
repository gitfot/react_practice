import Child from "./Child";
import React from 'react';

const App = () => {
    const [parentState, setParentState] = React.useState(0);  // 父组件的state
    const [childState, setChildState] = React.useState(0);  // 父组件的state

    // 需要传给子组件的函数
    // const toChildFun = React.useCallback(() => {
    //     console.log("toChildFun开始执行");
    // }, [childState]);

    const toChildFun = () => {
        console.log("toChildFun开始执行");
    };

    return (
        <div>
            <button onClick={() => setParentState((val) => val + 1)}>
                点击改变父组件状态
            </button>
            <button onClick={() => setChildState((val) => val + 1)}>
                点击改变子组件状态
            </button>
            <Child fun={toChildFun}></Child>
        </div>
    );
};

export default App;


