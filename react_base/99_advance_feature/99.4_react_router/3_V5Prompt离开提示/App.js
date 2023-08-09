import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import MyForm from "./components/MyForm";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route path="/form">
                    <MyForm/>
                </Route>
            </Switch>
        </div>

    );
}

export default App;
