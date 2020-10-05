import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import React  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import TrasportationListPage from 'containers/TrasportationListPage/Loadable';
import AddTrasportaionPage from 'containers/AddTrasportaionPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import 'style.scss';

export function App() {

  return (
    <div>
      <Link to="/">Home</Link><br/>
      <Link to="/transportaionList"> Trasportaion List </Link><br/>
      <Link to="/addTrasportaion"> Add Trasportaion</Link><br/> 

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

App.propTypes = {
};

const mapStateToProps = createSelector({
});

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
