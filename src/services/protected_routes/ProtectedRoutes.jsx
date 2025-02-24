import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Set canRender to true regardless of authentication status
    setCanRender(true);
  }, [isAuthenticated]);

  // Show loading state while checking authentication
  if (!canRender) {
    return null; // or a loading spinner
  }

  // Once we can render, either show the protected content or redirect
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const ConnectedProtectedRoute = connect(mapStateToProps)(ProtectedRoute);

export default ConnectedProtectedRoute;