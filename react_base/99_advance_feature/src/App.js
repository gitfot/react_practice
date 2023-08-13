import useCount from "./store/useStore";

const App = () => {
    function Controls() {
        const inc = useCount(state => state.inc)
        return <button onClick={inc}>one up</button>
    }

    function Counter() {
        const count = useCount(state => state.count)
        return <h1>{count}</h1>
    }

    return (
        <div className="App">
            <Counter/>
            <Controls/>
        </div>
    );
}

export default App;
