import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthor from '../views/AddAuthor';
import Home from '../views/Home';
import Authors from '../views/Authors';
import SingleAuthor from '../views/SingleAuthor';
import NotFound from '../views/NotFound';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (burrito) => (user
    ? (<Component {...burrito} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: burrito.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
export default function Routes({ user, authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={Home} />
          <Route
          exact path='/not-found'
          component={NotFound} />
        <PrivateRoute
          exact path='/authors'
          user={user}
          component={() => <Authors
          authors={authors}
          setAuthors={setAuthors} />}
        />
        <PrivateRoute
        user={user}
          path='/authors/:firebaseKey'
          component={SingleAuthor}
        />
        <PrivateRoute
        user={user}
        path='/add-author'
        component={() => <AddAuthor
          authors={authors} setAuthors={setAuthors} />}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
  user: PropTypes.any
};
