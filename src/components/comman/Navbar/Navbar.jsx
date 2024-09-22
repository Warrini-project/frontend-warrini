import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "./navbar.css";
import {
    AiOutlineFundProjectionScreen,
    AiOutlineHome,
    /*AiOutlineUser,
    AiOutlineContacts*/
  } from "react-icons/ai";

import { LiaCertificateSolid, LiaChalkboardTeacherSolid } from "react-icons/lia";
/*import { MdComputer } from "react-icons/md";*/
import { MdWorkOutline } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
//import { FaUserGraduate } from "react-icons/fa";
import { useState } from 'react';
import PropTypes from 'prop-types';
import { PersonCircle } from "react-bootstrap-icons";
import { Dropdown } from 'react-bootstrap';
import { connect } from "react-redux"; 
import { logout } from '../../../services/actions/auth';
import { useNavigate } from "react-router-dom";
import { GiCrossroad } from "react-icons/gi";

const Navar = ({ isAuthenticated, logout, isGuideMe }) => {
    const navigate = useNavigate();
    const [navColor, updateNavColor] = useState(false);
    const [expand, updateExpand] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleServiceClick = (e, path) => {
        if (!isAuthenticated) {
            e.preventDefault();
            navigate("/login");
        } else {
            navigate(path);
        }
    };

    const handleLogout = () => {
        logout();
        setRedirectToLogin(true);
    };

    if (redirectToLogin) {
        navigate("/login");
        return null
    }
    function scrollHandler(){
        if(window.scrollY >= 20){
            updateNavColor(true);
        }
        else{
            updateNavColor(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);
    return(
        <Navbar expanded={expand} fixed="top" expand="md" className={navColor ? isGuideMe ? "sticky1": "sticky": "navbar"}>
                <Container>
                    <Navbar.Brand href="#home">Warrini.tn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={() => {
                        updateExpand(expand ? false : "expanded");
                    }}
                    />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="me-auto my-2 my-lg-0 mx-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <Nav.Link href="/" className={`mx-4 ${isGuideMe ? 'guideMeLink' : ''}`}><AiOutlineHome/> HOME</Nav.Link>
                        {/*<Nav.Link href="/#about" className={`mx-4 ${isGuideMe ? 'guideMeLink' : ''}`}><AiOutlineUser/> ABOUT US</Nav.Link>*/}
                        <NavDropdown title={<><AiOutlineFundProjectionScreen/> SERVICES</>} id="navbarScrollingDropdown" className={`mx-4 ${isGuideMe ? 'guideMeLink' : ''}`}>
                            <NavDropdown.Item href="/certificates"><LiaCertificateSolid /> CERTIFICATES</NavDropdown.Item>
                            {/*<NavDropdown.Item href="#action4"><FaUserGraduate/> INTERNSHIPS</NavDropdown.Item>
                            <NavDropdown.Item href="/freelance"><MdComputer/> FREELANCE</NavDropdown.Item>*/}
                            <NavDropdown.Item href="/careers"><MdWorkOutline/> CAREERS</NavDropdown.Item>
                            <NavDropdown.Item href="/resume"><CgFileDocument/> CV ASSISTANCE</NavDropdown.Item>
                            <NavDropdown.Item href="/training"><LiaChalkboardTeacherSolid/> TRAINING AND EVENTS</NavDropdown.Item>
                        </NavDropdown>
                        {/*<Nav.Link href="/#contact" className={`mx-4 ${isGuideMe ? 'guideMeLink' : ''}`}><AiOutlineContacts/> CONTACT US</Nav.Link>*/}
                        <Nav.Link href='/guide-me' className={`mx-4 ${isGuideMe ? 'guideMeLink' : ''}`}><GiCrossroad/> GUIDE ME</Nav.Link>
                        </Nav>
                        {
                            isAuthenticated ?(
                                <Dropdown className='user-icon'>
                                    <Dropdown.Toggle variant="light" id="user-dropdown" className='user-icon'>
                                        <PersonCircle size={32} className='icon'/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Taher</Dropdown.Item>
                                        {/*<Dropdown.Item href="#profile">Profile</Dropdown.Item>*/}
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>) :
                            (<Form className="d-flex">
                                <Link to="/login"><Button className="btn" variant="outline-success">LOGIN</Button></Link>
                            </Form>)    
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

Navar.propTypes = {
    //user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func,
    isGuideMe: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    //user: state.auth.user,
  });

const ConnectedNavar = connect(mapStateToProps, { logout })(Navar);
export default ConnectedNavar;