import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
import Clipboard from './Clipboard'

function Router() {
  return (
    <div>
      <Navbar/>
       <BrowserRouter>
        <Switch>
          <Route path='/:clipid' component={Clipboard} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default Router;
