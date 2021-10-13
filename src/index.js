import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AuthContextProvider from "./Context/AuthContext"
/* import {Provider} from "react-redux"
import store from "./store";
import * as serviceWorker from "./serviceWorker";
 */

ReactDOM.render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>,
  document.getElementById("root")
  
 
);

