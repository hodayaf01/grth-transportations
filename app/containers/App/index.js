/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import TrasportationListPage from 'containers/TrasportationListPage/Loadable';
import AddTrasportaionPage from 'containers/AddTrasportaionPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import 'style.scss';

export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/transportaionList">Trasportaion List</Link>
      <Link to="/addTrasportaion">Add Trasportaion</Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/transportaionList"
          component={TrasportationListPage}
        />
        <Route exact path="/addTrasportaion" component={AddTrasportaionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
