import React, { useContext } from "react"
import SignInSide from "./components/Auth/Login"
import Logout from "./components/Auth/Logout"
import { BrowserRouter, Switch } from "react-router-dom"
import PrivateRoute from "./components/Routes/PrivateRoute"
import PublicRoute from "./components/Routes/PublicRoute"
import Layout from "./components/Layout"
import { AuthContext } from "./Context/AuthContext"
import DashBoard from "./components/DashBoard/DashBoard"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  list: state.list,
})

function App() {
  const [state, setState] = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PublicRoute exact path="/login" component={SignInSide} />
          <PublicRoute exact path="/logout" component={Logout} />
          <PublicRoute
            exact
            path="/dashboard"
            component={DashBoard}
            values={this}
          />

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

export default connect(mapStateToProps)(App)
