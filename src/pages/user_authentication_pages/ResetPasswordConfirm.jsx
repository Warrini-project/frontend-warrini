import { useState } from "react";
import { connect } from "react-redux";
import { reset_password_confirm } from "../../services/actions/auth";
import PropTypes from 'prop-types';
import { Col, Container, Row } from "react-bootstrap";
import "./style.css" 
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    const navigate = useNavigate();
    const { uid, token } = useParams();
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: "",
        re_new_password: ""
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        if(new_password != re_new_password){
            console.log("Same Passwords");
            return;
        }
        reset_password_confirm(uid,token, new_password);
        setRequestSent(true);
    }

    //Is the user authenticated
    //Redirect them to the home page
    if(requestSent){
        navigate("/login");
        return null
    }

    return(
        <Row className="login-page">
            <Col md={5}>
                <Container className="login-container">
                    <h1>WARRINI.TN</h1>
                    <form onSubmit={e => onSubmit(e)} className="login-form">
                        <input id="floatingPasswordCustom1"
                            type="password"
                            name="new_password"
                            placeholder="New Password"
                            required
                            value={new_password}
                            onChange={onChange}/>
                        <input id="floatingPasswordCustom2"
                            type="password"
                            name="re_new_password"
                            placeholder="Confirm New Password"
                            required
                            value={re_new_password}
                            onChange={onChange}/>
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

ResetPasswordConfirm.propTypes = {
    reset_password_confirm: PropTypes.func,
};

export default connect(mapStateToProps, { reset_password_confirm })(ResetPasswordConfirm);