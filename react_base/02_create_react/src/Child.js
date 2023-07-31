import React from 'react';
// Child组件
const Child = React.memo(({ fun }) => {
    console.log("Child组件执行了一次");
    fun(); // 调用父组件传入的函数

    return <div></div>;
});

export default Child;