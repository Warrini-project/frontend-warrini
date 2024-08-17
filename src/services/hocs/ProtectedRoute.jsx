import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { checkAuthenticated } from '../actions/auth';

const ProtectedRoute = ({ component: Component, isAuthenticated, checkAuthenticated, ...rest }) => {
  useEffect(() => {
    checkAuthenticated();
  }, [checkAuthenticated]);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  checkAuthenticated,
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType,
  isAuthenticated: PropTypes.bool,
  checkAuthenticated: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
