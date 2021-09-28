import React from "react";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ values = null, component: Component, ...rest }) => {
  
    return (
    <Route
      {...rest}
      render={(props) => {
        if (values.isAdmin) {
          return <Component {...props} />
        } else {
          return <Redirect to={props.to} />
        }
      }}
    />
  );
};
export default PrivateRoute;
