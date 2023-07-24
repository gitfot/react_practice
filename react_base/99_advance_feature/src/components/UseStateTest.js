import {useState} from "react";

const init = () => {
    return 256;
}

const Counter = () => {
    const[count, setCount] = useState(() => init())
    const increase = () => {setCount(count + 1)}
    const decrease = () => {setCount(count - 1)}

    return <div>
        <button onClick={increase}> + </button>
        <span className="number">{count}</span>
        <button onClick={decrease}> - </button>
    </div>
}

export default Counter;