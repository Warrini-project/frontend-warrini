import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../comman/Navbar/Navbar";
import { Container } from "react-bootstrap";
import careers_list from "./careers._list";
import './CareerDetails.css';
import { FaChartLine } from 'react-icons/fa';
import { MdWork } from "react-icons/md";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';

export default function CareerPage() {
    const { title } = useParams();
    const career = careers_list.find(career => career.title === title);

    // Toggle state variables
    const [isRequirementsOpen, setRequirementsOpen] = useState(false);
    const [isSalaryOpen, setSalaryOpen] = useState(false);
    const [isPathOfStudyOpen, setPathOfStudyOpen] = useState(false);

    // State for open/close all
    const [isAllOpen, setAllOpen] = useState(false);

    if (!career) return <h2>Career Not Found</h2>;

    // Function to toggle all sections
    const toggleAll = () => {
        const newState = !isAllOpen;
        setAllOpen(newState);
        setRequirementsOpen(newState);
        setSalaryOpen(newState);
        setPathOfStudyOpen(newState);
    };

    return (
        <>
            <Navbar />
            <Container fluid className="introduction">
                <h2 style={{ fontWeight: "bold", marginBottom: "2rem" }}>{title}</h2>
                <h6>{career.description}</h6>
                <div className="career-details">
                    {/* Average salary section */}
                    <div className="detail-section">
                        <div className="icon-section" style={{ color: "#37C6F4", fontWeight: "bold", fontSize: "30px" }}>
                            TND
                        </div>
                        <div className="info-section">
                            <h4>Average salary (a year)</h4>
                            <div className="salary-range">
                                <p>{career.salary.Tunisia.split(" - ")[0]}</p>
                                <span className="range-bar"></span>
                                <p>{career.salary.Tunisia.split(" - ")[1]}</p>
                            </div>
                            <div className="salary-level">
                                <p>Starter</p>
                                <p>Experienced</p>
                            </div>
                        </div>
                    </div>

                    {/* Industry Applications */}
                    <div className="detail-section">
                        <div className="icon-section">
                            <MdWork className="icon" style={{ fontSize: "45px" }} />
                        </div>
                        <div className="info-section">
                            <h4>Industry Applications</h4>
                            <p>{career.jobOutlook.industryApplications.join(" / ")}</p>
                        </div>
                    </div>

                    {/* Growth Rate */}
                    <div className="detail-section">
                        <div className="icon-section">
                            <FaChartLine className="icon" style={{ fontSize: "40px" }} />
                        </div>
                        <div className="info-section">
                            <h4>Growth Rate</h4>
                            <p>{career.jobOutlook.growthRate}</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="career_informations" style={{ marginTop: "3rem", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Open All / Close All Button */}
                <div className="show-all-section" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                        type="button"
                        onClick={toggleAll}
                        style={{ marginLeft: 'auto', border: "none", backgroundColor: "transparent", color: "#37C6F4", textDecoration: "underline" }}
                    >
                        {isAllOpen ? "Close all" : "Open all"}
                    </button>
                </div>

                <hr style={{ width: '100%' }} />

                {/* Requirements Section */}
                <div className="requirements-section" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "column" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <div>
                            <h2>Requirements</h2>
                            <h6>Explore different requirements to get into this role.</h6>
                        </div>
                        <div onClick={() => setRequirementsOpen(!isRequirementsOpen)} style={{ cursor: "pointer" }}>
                            {isRequirementsOpen ? <IoRemoveOutline className="icon" style={{ fontSize: "50px" }} /> : <IoAddOutline className="icon" style={{ fontSize: "50px" }} />}
                        </div>
                    </div>
                    {isRequirementsOpen && (
                        <ul style={{ listStyleType: 'disc', marginLeft: '20px', width: '100%' }}>
                            {career.requirements.map(requirement => (
                                <li key={uuidv4()}>{requirement}</li>
                            ))}
                        </ul>
                    )}
                    <hr style={{ width: '100%' }} />
                </div>

                {/* Salary Section */}
                <div className="salary-section" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "column" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <div>
                            <h2>Salary</h2>
                            <h6>Average salary (by country)</h6>
                        </div>
                        <div onClick={() => setSalaryOpen(!isSalaryOpen)} style={{ cursor: "pointer" }}>
                            {isSalaryOpen ? <IoRemoveOutline className="icon" style={{ fontSize: "50px" }} /> : <IoAddOutline className="icon" style={{ fontSize: "50px" }} />}
                        </div>
                    </div>
                    {isSalaryOpen && (
                        <ul style={{ listStyleType: 'disc', marginLeft: '20px', width: '100%' }}>
                            {Object.entries(career.salary).map(([country, salary], index) => (
                                <li key={index}>
                                    <strong>{country}:</strong> {salary}
                                </li>
                            ))}
                        </ul>
                    )}
                    <hr style={{ width: '100%' }} />
                </div>

                {/* Path of Study Section */}
                <div className="path-section" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "column" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <div>
                            <h2>Path of Study</h2>
                            <h6>Path you should follow to get into this role.</h6>
                        </div>
                        <div onClick={() => setPathOfStudyOpen(!isPathOfStudyOpen)} style={{ cursor: "pointer" }}>
                            {isPathOfStudyOpen ? <IoRemoveOutline className="icon" style={{ fontSize: "50px" }} /> : <IoAddOutline className="icon" style={{ fontSize: "50px" }} />}
                        </div>
                    </div>
                    {isPathOfStudyOpen && (
                        <ul style={{ listStyleType: 'disc', marginLeft: '20px', width: '100%' }}>
                            {career.pathOfStudy.map(path => (
                                <li key={uuidv4()}>{path}</li>
                            ))}
                        </ul>
                    )}
                    <hr style={{ width: '100%' }} />
                </div>
            </Container>
        </>
    );
}