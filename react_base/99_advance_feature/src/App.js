import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";
import Hello from "./components/Hello";
import MyForm from "./components/MyForm";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/form">
                    <MyForm/>
                </Route>
            </Switch>
        </div>

    );
}

export default App;
