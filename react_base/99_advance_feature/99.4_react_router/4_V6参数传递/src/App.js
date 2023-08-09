import {Navigate, useRoutes} from 'react-router-dom'
import Message from "./components/Message";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Menu from "./components/Menu";

const App = () => {
    return  useRoutes([
        {
            path:"/",
            element:<Menu/>
        },
        {
            path:"/home",
            element:<Home/>,
        },
        {
            path:"/message",
            element:<Message/>,
            children:[
                {
                    path:"detail",
                    element:<Detail/>
                }
            ]
        }
    ])
}

export default App;
