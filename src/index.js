import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AuthContextProvider from "./Context/AuthContext"
import { Provider } from "react-redux"
import store from "./store"
import * as serviceWorker from "./servicesWorker"
import "./index.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>,
  document.getElementById("root")
)
