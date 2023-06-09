import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/sobre"><Sobre/></Route>
                <Route exact path="/contato"><Contato/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes