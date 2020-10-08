import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import React  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import TrasportationListPage from 'containers/TrasportationListPage/Loadable';
import AddTrasportaionPage from 'containers/AddTrasportaionPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import 'style.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

export function App() {

  return (
    <div>
      <Link to="/">Home</Link><br/>
      <Link to="/transportaionList"> Trasportaion List </Link><br/>
      <Link to="/addTrasportaion"> Add Trasportaion</Link><br/> 
      <Link to="/Login"> Login</Link><br/> 

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/transportaionList"
          component={TrasportationListPage}
        />
        <Route exact path="/addTrasportaion" component={AddTrasportaionPage} />
        <Route exact path="/Login" component={LoginPage} />
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
