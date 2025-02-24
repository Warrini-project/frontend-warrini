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
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        re_password: "",
        phone: "",
        domain_studies: "",
        level_studies: "",
        facultyId: 1,
        want_notified: true
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { first_name, last_name, username, email, password, re_password, phone, domain_studies, level_studies, facultyId, want_notified } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (first_name.length === 0 || email.length === 0 || password.length === 0 || re_password.length === 0 || last_name.length === 0 || username.length === 0 || phone.length === 0 || domain_studies.length === 0 || level_studies === 0) {
            toast.error('Please Fill All Fields');
            return;
        }
        if (password === re_password) {
            signup(first_name, last_name, username, email, phone, password, domain_studies, level_studies, facultyId, want_notified);
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
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px" }}>
                                <input
                                    placeholder="First Name"
                                    id="floatingInputCustom"
                                    type="text"
                                    name="first_name"
                                    value={first_name}
                                    onChange={onChange} />
                                <input
                                    placeholder="Last Name"
                                    id="floatingInputCustom"
                                    type="text"
                                    name="last_name"
                                    value={last_name}
                                    onChange={onChange} />
                            </div>
                            <input
                                placeholder="Username"
                                id="floatingInputCustom"
                                type="text"
                                name="username"
                                value={username}
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
                            <input
                                placeholder="Phone Number"
                                id="floatingInputCustom"
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={onChange} />
                            <input
                                placeholder="Domain Studies"
                                id="floatingInputCustom"
                                type="text"
                                name="domain_studies"
                                value={domain_studies}
                                onChange={onChange} />
                            <input
                                placeholder="Level Studies"
                                id="floatingInputCustom"
                                type="text"
                                name="level_studies"
                                value={level_studies}
                                onChange={onChange} />
                            <button className="login-btn" type="submit">Sign Up</button>
                        </form>
                        <p className="mt-4">
                            Already have an account? <Link className="link" to="/login">Sign In</Link>
                        </p>
                        {
                        /*  
                            <hr />
                            <div className="social-btns">
                                <button className="google-btn social-btn"><FcGoogle className="social-icon" /> Continue with Google</button>
                                <button className="facebook-btn social-btn"><FaFacebook className="social-icon" /> Continue with Facebook</button>
                                <button className="linkedin-btn social-btn"><FaLinkedinIn className="social-icon" /> Continue with LinkedIn</button>
                            </div>
                        */
                        }
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
