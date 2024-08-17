import Navar from "../../comman/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Row, Col, Container } from "react-bootstrap";
import cv from "../../../assets/cv.png";
import "./cv.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Cv = ({ isAuthenticated, user }) => {
    const [startDate, setStartDate] = useState(new Date());
    // State variables to manage technical and soft skills
    const [technicalSkills, setTechnicalSkills] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);

    // Function to handle adding a skill to the list
    const handleAddSkill = (event, skills, setSkills) => {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            const skill = event.target.value.trim();
            setSkills([...skills, skill]);
            event.target.value = ''; // Clear input field after adding skill
        }
    };
    return(
        <div>
            <Navar isAuthenticated={isAuthenticated} user={user}/>
            <Container className="cv-section">
                <Row>
                    <Col md={6}>
                        <img src={cv} alt="cv-img" className="img-fluid"/>
                    </Col>
                    <Col md={6} xs={12} className="cv-text">
                        <h1 className="cv-title">CV Assistance</h1>
                        <h5 className="cv-description">Get the support you need to create a winning CV with our CV Assistance service. Fill out our form with your details, and our team will reach out to gather additional information to craft a tailored resume that highlights your strengths and accomplishments. Let us help you showcase your skills and experiences effectively, opening doors to new career opportunities.</h5>
                        <a href="#forum" className="cv-btn">Create Your Resume</a>
                    </Col>
                </Row>
            </Container>
            <Container id="forum" className="forum">
                <form>
                    <h4>Personal Informations</h4>
                    <input type="text" name="name" placeholder="Your Full Name*" required/>
                    <input type="email" name="email" placeholder="Your Email*" required/>
                    <input type="text" name="address" placeholder="Your Full Address*" required/>
                    <h4>Professional Summary</h4>
                    <textarea name="message" rows="7" placeholder="Brief summary of career goals or objective statement*" required></textarea>
                    <h4>Education</h4>
                    <input type="text" name="name" placeholder="Degree*" required/>
                    <input type="text" name="institutionName" placeholder="Name of Institution*" required/>
                    <DatePicker title="Year of graduation" value="Year of graduation" name="Year of graduation" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h4>Skills</h4>
                    <div>
                        <input 
                            type="text"
                            placeholder="Technical Skills*"
                            onKeyUp={(event) => handleAddSkill(event, technicalSkills, setTechnicalSkills)}
                        />
                        <div>
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="skill">{skill}</div>
                            ))}
                        </div>
                    </div>
                    {/* Input field for Soft Skills */}
                    <div>
                        <input 
                            type="text"
                            placeholder="Soft Skills*"
                            onKeyUp={(event) => handleAddSkill(event, softSkills, setSoftSkills)}
                        />
                        <div>
                            {softSkills.map((skill, index) => (
                                <div key={index} className="skill">{skill}</div>
                            ))}
                        </div>
                    </div>
                    <h4>Certifications</h4>
                    <div className="certifs">
                        <input type="text" placeholder="Name of certification" name="CertifName" required/>
                        <input type="text" placeholder="Issuing Organization" name="Organization" required/>
                    </div>
                    <DatePicker title="Date Earned" value="Date Earned" name="Date Earned" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h4>Projects</h4>
                    <div className="project1">
                        <input type="text" placeholder="Title of project 1" name="projectTitle" required/>
                        <input type="text" placeholder="Description" name="Description" required/>
                        <input type="text" placeholder="Link (optional)" name="Link"/>
                    </div>
                    <div className="project2">
                        <input type="text" placeholder="Title of project 2" name="projectTitle" required/>
                        <input type="text" placeholder="Description" name="Description" required/>
                        <input type="text" placeholder="Link (optional)" name="Link"/>
                    </div>
                    <h4>Additional Informations</h4>
                    <input type="text" placeholder="Languages spoken" name="languages" required/>
                    <h4>Resume/Cover Letter (Optional)</h4>
                    <input type="file" name="file"/>
                    <h4>Comments/Additional Notes (Optional)</h4>
                    <textarea name="message" rows="7" placeholder="Any additional information or specific requests"></textarea>
                    <button type="submit" className="contact-btn">Send Message</button>
                </form>
            </Container>
        </div>
    );
}

Cv.propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
});

export default connect(mapStateToProps)(Cv);