import React, { useContext } from "react"
import logo from './logo.svg';
import './App.css';
import SignInSide from './components/Auth/Login/Login.jsx'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/Routes/PrivateRoute"
import PublicRoute from "./components/Routes/PublicRoutes"
import Layout from "./components/Layout/Layout.jsx"
import { AuthContext } from "./Context/ContextAuthProvider.jsx"


function App() {
  const [state, setState] = useContext(AuthContext)

  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <PublicRoute exact path="/login" component={SignInSide} />
  
        {/* <PrivateRoute
          values={state}
          exact
          path="/admin"
          component={TableAdviced}
          to="/login"
        /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
