import { useState } from "react";
import { connect } from "react-redux";
import { verify } from "../../services/actions/auth";
import PropTypes from 'prop-types';
import { Col, Container, Row } from "react-bootstrap";
import "./style.css" 
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Activate = ({ verify }) => {
    const navigate = useNavigate();
    const { uid, token } = useParams();
    const [verified, setVerified] = useState(false);

    function verify_account(){
        verify(uid, token);
        setVerified(true);
    }

    if(verified){
        navigate("/login")
        return null
    }

    return(
        <Row className="login-page">
            <Col md={5}>
                <Container className="login-container">
                    <h1 className="activate-text">WARRINI.TN</h1>
                    <h5>Click the button to activate your account</h5>
                    <button className="login-btn activate-btn" onClick={verify_account}>Verify</button>
                </Container>
            </Col>
            <Col md={7} className="login-background">

            </Col>
        </Row>
    );
}


Activate.propTypes = {
    verify: PropTypes.func,
};

export default connect(null, { verify })(Activate);