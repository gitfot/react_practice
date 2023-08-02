// 根据业务设置默认数据
const defaultState = {
    inputValue: "",
    list: [],
};
/**
 *
 * state 整个 store 的数据，修改前的 store
 * action 传递过来的 action
 */
export default (state = defaultState, action) => {
    if (action.type === "change_input_value") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;
};
// Tip: reducer 可以接受 state，但是绝不能修改 state
