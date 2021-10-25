import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './views/Posts'
import Login from './views/Login'
import { useAuth0 } from "@auth0/auth0-react";

export default function RouterApp() {
    const { isAuthenticated } = useAuth0();
    return (
        <>
        { isAuthenticated ?
            <Router>
                <Switch>
                    <Route path="/">
                        <Posts />
                    </Route>
                </Switch>
            </Router>
            :
            <Router>
                <Switch>
                <Route path="/">
                    <Login />
                </Route>
                </Switch>
            </Router>
        }
        </>
    );
}