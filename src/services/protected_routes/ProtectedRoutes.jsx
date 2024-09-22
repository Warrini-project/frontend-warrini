import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated, children }) => {
    const location = useLocation();
    
    return isAuthenticated ? (
        children
    ) : (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
};

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const ConnectedProtectedRoute = connect(mapStateToProps)(ProtectedRoute);

export default ConnectedProtectedRoute;