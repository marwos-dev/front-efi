import React, { useContext } from "react"
import SignInSide from "./components/Auth/Login"
import { BrowserRouter, Switch } from "react-router-dom"
import PrivateRoute from "./components/Routes/PrivateRoute"
import PublicRoute from "./components/Routes/PublicRoute"
import Layout from "./components/Layout"
import { AuthContext } from "./Context/AuthContext"

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
  )
}

export default App
