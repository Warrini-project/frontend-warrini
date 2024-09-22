import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../services/actions/auth";
import PropTypes from 'prop-types';
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ login, isAuthenticated }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    useEffect(() => {
        if (isAuthenticated) {
            const { from } = location.state || { from: { pathname: "/" } };
            navigate(from.pathname, { replace: true });
        }
    }, [isAuthenticated, navigate, location.state]);

    useEffect(() => {
        const accountCreated = localStorage.getItem('accountCreated');
        if (accountCreated) {
            toast.success("Your account is created successfully!");
            localStorage.removeItem('accountCreated');
        }
    }, []);

    return (
        <>
            <Row className="login-page">
                <Col md={5} xs={12}>
                    <Container className="login-container">
                        <h1>WARRINI.TN</h1>
                        <form onSubmit={e => onSubmit(e)} className="login-form">
                            <input
                                placeholder="Email address"
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={onChange} />
                            <div className="password-container">
                                <input
                                    id="floatingPasswordCustom"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    required
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
                            <button className="login-btn" type="submit">Sign In</button>
                        </form>
                        <p className="mt-4">
                            Dont have an account? <Link className="link" to="/signup">Sign Up</Link>
                        </p>
                        <p>
                            Forgot your Password? <Link className="link" to="/reset-password">Reset Password</Link>
                        </p>
                        <hr />
                        <div className="social-btns">
                            <button className="google-btn social-btn"><FcGoogle className="social-icon" /> Continue with Google</button>
                            <button className="facebook-btn social-btn"><FaFacebook className="social-icon" /> Continue with Facebook</button>
                            <button className="linkedin-btn social-btn"><FaLinkedinIn className="social-icon" /> Continue with Linkedin</button>
                        </div>
                    </Container>
                </Col>
                <Col md={7} xs={0} className="login-background">

                </Col>
            </Row>
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

Login.propTypes = {
    login: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};

const ConnectedLogin = connect(mapStateToProps, { login })(Login);

export default ConnectedLogin;