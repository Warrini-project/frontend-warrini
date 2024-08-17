import { useState } from "react";
import { connect } from "react-redux";
import { reset_password } from "../../services/actions/auth";
import PropTypes from 'prop-types';
import { Col, Container, Row } from "react-bootstrap";
import "./style.css" 
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ reset_password }) => {
    const navigate = useNavigate()
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
    });

    const { email } = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    }

    if(requestSent){
        navigate("/");
        return null
    }

    return(
        <Row className="login-page">
            <Col md={5}>
                <Container className="login-container">
                    <h1 className="title-reset">WARRINI.TN</h1>
                    <form onSubmit={e => onSubmit(e)} className="login-form">
                        <input className="mb-3" 
                            placeholder="Email address" 
                            id="floatingInputCustom"
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={onChange} />
                        <button className="login-btn reset-btn" type="submit">Reset Password</button>
                    </form>
                </Container>
            </Col>
            <Col md={7} className="login-background">

            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

ResetPassword.propTypes = {
    reset_password: PropTypes.func,
};

export default connect(mapStateToProps, { reset_password })(ResetPassword);