import { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth'; // Remove load_user import
import PropTypes from 'prop-types';

const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated();
    }, []); // Only call checkAuthenticated

    return (
        <div>
            {props.children}
        </div>
    );
};

Layout.propTypes = {
    checkAuthenticated: PropTypes.func.isRequired, // Ensure it's marked as required
    children: PropTypes.node.isRequired, // Update to PropTypes.node
};

export default connect(null, { checkAuthenticated })(Layout); // Remove load_user from connect
