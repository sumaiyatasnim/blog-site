import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Topbar></Topbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">
            <Write></Write>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          {/* <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route> */}

          {/* <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route> */}
        </Switch>
      </Router>
      {/* <Home></Home> */}
      {/* <Single></Single> */}
      {/* <Write></Write> */}
      {/* <Settings></Settings> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
