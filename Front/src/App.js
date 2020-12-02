import Login from './pages/login'
import Home from './pages/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (

      <Router basename='/'>
        <div clasName="App">
            <Switch>
            <Route exact path="/tih/login" component={Login}/>
            <Route exact path="/tih/home" component={Home}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
