import Login from './pages/login'
import Home from './pages/home'
import {Route, HashRouter} from 'react-router-dom'
function App() {
  return (

      <HashRouter basename='/'>
        <div clasName="App">
            <Route exact path="/tih/login" component={Login}/>
            <Route exact path="/tih/home" component={Home}/>
        </div>
      </HashRouter>
  );
}

export default App;
