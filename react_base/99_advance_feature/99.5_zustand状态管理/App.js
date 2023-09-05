import {useBookStore} from "./store/useBookStore";


const App = () => {

    const amount = useBookStore(state => state.amount)
    const updateAmount = useBookStore(state => state.updateAmount)

    return (
        <div>

            <h1> Books: {amount} </h1>

            <button
                onClick={ () => updateAmount(10) }
            > Update Amount </button>

        </div>
    )
}
export default App
