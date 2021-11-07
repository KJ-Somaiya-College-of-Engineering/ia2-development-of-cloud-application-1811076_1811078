import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Notes from "./pages/Notes/NotesPage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import useToken from "./utils/useToken";
import UserProvider from "./context/user.provider";
import './App.css';
function App() {
  const { token, setToken } = useToken();

  return (
    <div>
        <BrowserRouter>
          <Switch>
          <UserProvider>
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
            </UserProvider>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
