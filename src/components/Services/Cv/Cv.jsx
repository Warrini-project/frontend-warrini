import Navar from "../../comman/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Row, Col, Container } from "react-bootstrap";
import cv from "../../../assets/cv.png";
import "./cv.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { generateResume } from "./resumeService";

const Cv = ({ isAuthenticated, user }) => {
    const [profileImage, setProfileImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        profession: "",
        address: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        summary: "",
        educations: [{ degree: "", institution: "", duration: "" }],
        languages: [""],
        experiences: [{ name: "", place: "", duration: "", tasks: [""] }],
        skills: [""],
        certifications: [""],
    });

    // Handle input change for simple fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle dynamic fields for array-type data
    const handleArrayChange = (e, index, field) => {
        const updatedArray = [...formData[field]];
        updatedArray[index] = e.target.value;
        setFormData({ ...formData, [field]: updatedArray });
    };

    // Handle nested fields in arrays (for educations, experiences)
    const handleNestedArrayChange = (e, index, subField, field) => {
        const updatedArray = [...formData[field]];
        updatedArray[index][subField] = e.target.value;
        setFormData({ ...formData, [field]: updatedArray });
    };

    const handleAddField = (field, newEntry) => {
        setFormData({ ...formData, [field]: [...formData[field], newEntry] });
    };

    const handleRemoveField = (field, index) => {
        const updatedArray = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: updatedArray });
    };

    // Handle adding and removing tasks within an experience
    const handleAddTask = (experienceIndex) => {
        const updatedExperiences = [...formData.experiences];
        updatedExperiences[experienceIndex].tasks.push("");
        setFormData({ ...formData, experiences: updatedExperiences });
    };

    const handleTaskChange = (e, experienceIndex, taskIndex) => {
        const updatedExperiences = [...formData.experiences];
        updatedExperiences[experienceIndex].tasks[taskIndex] = e.target.value;
        setFormData({ ...formData, experiences: updatedExperiences });
    };

    const handleRemoveTask = (experienceIndex, taskIndex) => {
        const updatedExperiences = [...formData.experiences];
        updatedExperiences[experienceIndex].tasks = updatedExperiences[experienceIndex].tasks.filter((_, i) => i !== taskIndex);
        setFormData({ ...formData, experiences: updatedExperiences });
    };

    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const templateIndex = 5;
        try {
            const response = await generateResume(formData, templateIndex, profileImage);
            
            // Create a URL for the blob and open it in a new window/tab
            const url = window.URL.createObjectURL(response);
            window.open(url, '_blank');
            //console.log("Resume generated successfully:", data);
        } catch (error) {
            console.error("Error generating resume:", error);
        }
        finally{
            setIsLoading(false);
        }
    };

    return (
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
                <form onSubmit={handleSubmit}>
                    <h4>Personal Information</h4>
                    <input type="text" name="name" placeholder="Your Full Name*" value={formData.name} onChange={handleInputChange} required />
                    <input type="text" name="profession" placeholder="Your Profession*" value={formData.profession} onChange={handleInputChange} required />
                    <input type="text" name="phone" placeholder="Your Phone Number*" value={formData.phone} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Your Email*" value={formData.email} onChange={handleInputChange} required />
                    <input type="text" name="linkedin" placeholder="Your LinkedIn" value={formData.linkedin} onChange={handleInputChange} />
                    <input type="text" name="github" placeholder="Your Github" value={formData.github} onChange={handleInputChange} />
                    <input type="text" name="address" placeholder="Your Full Address*" value={formData.address} onChange={handleInputChange} required />
                    
                    <h4>Professional Summary</h4>
                    <textarea name="summary" rows="7" placeholder="Brief summary of career goals or objective statement*" value={formData.summary} onChange={handleInputChange} required></textarea>

                    <h4>Education</h4>
                    {formData.educations.map((education, index) => (
                        <div key={index}>
                            <input style={{ marginBottom: "10px" }} type="text" placeholder="Degree*" value={education.degree} onChange={(e) => handleNestedArrayChange(e, index, "degree", "educations")} required />
                            <input style={{ marginBottom: "10px" }} type="text" placeholder="Institution*" value={education.institution} onChange={(e) => handleNestedArrayChange(e, index, "institution", "educations")} required />
                            <input type="text" placeholder="Duration*" value={education.duration} onChange={(e) => handleNestedArrayChange(e, index, "duration", "educations")} required />
                            {index > 0 && <button style={{ marginTop: "10px" }} type="button" className="rm-btn" onClick={() => handleRemoveField("educations", index)}>Remove</button>}
                        </div>
                    ))}
                    <button className="add-btn" type="button" onClick={() => handleAddField("educations", { degree: "", institution: "", duration: "" })}>Add Education</button>

                    <h4>Experiences</h4>
                    {formData.experiences.map((experience, expIndex) => (
                        <div key={expIndex}>
                            <input style={{ marginBottom: "10px" }} type="text" placeholder="Job Title*" value={experience.name} onChange={(e) => handleNestedArrayChange(e, expIndex, "name", "experiences")} required />
                            <input style={{ marginBottom: "10px" }} type="text" placeholder="Company/Organization*" value={experience.place} onChange={(e) => handleNestedArrayChange(e, expIndex, "place", "experiences")} required />
                            <input style={{ marginBottom: "10px" }} type="text" placeholder="Duration*" value={experience.duration} onChange={(e) => handleNestedArrayChange(e, expIndex, "duration", "experiences")} required />

                            <h5>Experience Tasks</h5>
                            {experience.tasks.map((task, taskIndex) => (
                                <div key={taskIndex}>
                                    <input style={{ marginBottom: "10px" }} type="text" placeholder="Task Description" value={task} onChange={(e) => handleTaskChange(e, expIndex, taskIndex)} />
                                    {taskIndex > 0 && <button style={{ marginBottom: "10px" }} type="button" className="rm-btn" onClick={() => handleRemoveTask(expIndex, taskIndex)}>Remove Task</button>}
                                </div>
                            ))}
                            <button type="button" className="add-btn" onClick={() => handleAddTask(expIndex)}>Add Task</button>

                            {expIndex > 0 && <button type="button" className="rm-btn" onClick={() => handleRemoveField("experiences", expIndex)}>Remove Experience</button>}
                        </div>
                    ))}
                    <button className="add-btn" type="button" onClick={() => handleAddField("experiences", { name: "", place: "", duration: "", tasks: [""] })}>Add Experience</button>

                    <h4>Skills</h4>
                    <div>
                        {formData.skills.map((skill, index) => (
                            <div key={index}>
                                <input style={{ marginBottom: "10px" }} type="text" placeholder="Skill*" value={skill} onChange={(e) => handleArrayChange(e, index, "skills")} />
                                {index > 0 && <button type="button" className="rm-btn" onClick={() => handleRemoveField("skills", index)}>Remove</button>}
                            </div>
                        ))}
                    </div>
                    <button className="add-btn" type="button" onClick={() => handleAddField("skills", "")}>Add Skill</button>

                    <h4>Certifications</h4>
                    {formData.certifications.map((certification, index) => (
                        <div key={index}>
                            <input type="text" placeholder="Certification*" value={certification} onChange={(e) => handleArrayChange(e, index, "certifications")} />
                            {index > 0 && <button style={{ marginTop: "10px" }} className="rm-btn" type="button" onClick={() => handleRemoveField("certifications", index)}>Remove</button>}
                        </div>
                    ))}
                    <button className="add-btn" type="button" onClick={() => handleAddField("certifications", "")}>Add Certification</button>

                    <h4>Languages</h4>
                    {formData.languages.map((language, index) => (
                        <div key={index}>
                            <input type="text" placeholder="Language*" value={language} onChange={(e) => handleArrayChange(e, index, "languages")} />
                            {index > 0 && <button style={{ marginTop: "10px" }} className="rm-btn" type="button" onClick={() => handleRemoveField("languages", index)}>Remove</button>}
                        </div>
                    ))}
                    <button type="button" className="add-btn" onClick={() => handleAddField("languages", "")}>Add Language</button>

                    <h4>Profile Picture</h4>
                    <input type="file" accept="image/*" onChange={handleImageChange} />

                    <button type="submit" className={`send-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>{!isLoading && 'Send Resume'}</button>
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

const ConnectedCv = connect(mapStateToProps)(Cv);

export default ConnectedCv;