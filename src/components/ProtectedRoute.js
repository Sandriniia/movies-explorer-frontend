import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loading from './Loading/Loading';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.isCheckingToken ? (
          <Loading />
        ) : props.isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    </Route>
  );
}

export default ProtectedRoute;
