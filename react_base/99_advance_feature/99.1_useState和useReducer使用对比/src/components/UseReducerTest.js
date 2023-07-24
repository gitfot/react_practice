import {useReducer} from "react";

const ACTIONS = {
    INCREMENT: 'increament',
    DECREMENT: 'decreament'
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch]  = useReducer(reducer, {count: 256});
    const increase = () => {dispatch({type: ACTIONS.INCREMENT})};
    const decrease = () => {dispatch({type: ACTIONS.DECREMENT})};

    return <div>
        <button onClick={increase}> + </button>
        <span className="number">{state.count}</span>
        <button onClick={decrease}> - </button>
    </div>
}

export default Counter;