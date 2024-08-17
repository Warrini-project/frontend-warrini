import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../services/actions/auth";
import PropTypes from 'prop-types';
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Signup = ({ signup, isAuthenticated }) => {
    const navigate = useNavigate();
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        re_password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { name, email, password, re_password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || password.length === 0 || re_password.length === 0) {
            toast.error('Please Fill All Fields');
            return;
        }
        if (password === re_password) {
            signup(email, name, password);
            setAccountCreated(true);
        } else {
            toast.error('Passwords do not match');
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (accountCreated) {
            localStorage.setItem('accountCreated', 'true');
            navigate("/login");
        }
    }, [accountCreated, navigate]);

    useEffect(() => {
        return () => {
            toast.dismiss();
        };
    }, []);

    return (
        <>
            <Row className="login-page">
                <Col md={5}>
                    <Container className="login-container">
                        <h1>WARRINI.TN</h1>
                        <form onSubmit={e => onSubmit(e)} className="login-form">
                            <input
                                placeholder="Full Name"
                                id="floatingInputCustom"
                                type="text"
                                name="name"
                                value={name}
                                onChange={onChange} />
                            <input
                                placeholder="Email address"
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange} />
                            <div className="password-container">
                                <input
                                    id="floatingPasswordCustom"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChange} />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="password-container">
                                <input
                                    id="floatingPasswordCustom"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="re_password"
                                    placeholder="Confirm Password"
                                    value={re_password}
                                    onChange={onChange} />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <button className="login-btn" type="submit">Sign Up</button>
                        </form>
                        <p className="mt-4">
                            Already have an account? <Link className="link" to="/login">Sign In</Link>
                        </p>
                        <hr />
                        <div className="social-btns">
                            <button className="google-btn social-btn"><FcGoogle className="social-icon" /> Continue with Google</button>
                            <button className="facebook-btn social-btn"><FaFacebook className="social-icon" /> Continue with Facebook</button>
                            <button className="linkedin-btn social-btn"><FaLinkedinIn className="social-icon" /> Continue with LinkedIn</button>
                        </div>
                    </Container>
                </Col>
                <Col md={7} className="login-background">

                </Col>
            </Row>
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

Signup.propTypes = {
    signup: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { signup })(Signup);