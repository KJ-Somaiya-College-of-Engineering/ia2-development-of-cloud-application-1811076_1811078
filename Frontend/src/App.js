import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import Profile from "./pages/Profile/Profile";
import Notes from "./pages/Notes/NotesPage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import useToken from "./utils/useToken";

import './App.css';
function App() {
  const { token, setToken } = useToken();

  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={_ => 
            (
              <Redirect to={{pathname: token?'/notes':'/login'}}/>
            )}/>
            <Route path="/login" render={_ => 
            (
              token ? <Redirect to={{pathname: '/'}}/> : <Login setToken={setToken}/>
            )}/>
            <Route path="/register" render={_ => 
            (
              token ? <Redirect to={{pathname: '/'}}/> : <Register setToken={setToken}/>
            )}/>
            <Route path="/notes" exact render={_ => 
            (
              token ? <Notes/> : <Redirect to={{pathname: '/login'}}/>
            )}/>
            {/* <Route path="/profile">
              <Profile/> 
            </Route> */}
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
