import { useState } from "react";
import Navar from "../../comman/Navbar/Navbar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import "./certificates.css";
import { CiSearch } from "react-icons/ci";
import CertifCard from "./CertifCard";
import { SiUdemy, SiCoursera, SiEdx } from "react-icons/si";
import certif1 from "../../../assets/certif1.jpg";
import certif2 from "../../../assets/certif2.jpeg";
import certif3 from "../../../assets/certif3l.jpeg";
import certif4 from "../../../assets/certif4.jpg";

const Certificates = ({ isAuthenticated, user }) => {
    const domains = [
        "Artificial Intelligence", "Machine Learning", "Data Science", "Cybersecurity",
        "Software Development", "Web Development", "Mobile Development", "Database Management",
        "Networking", "Computer Graphics", "Human-Computer Interaction", "Cloud Computing",
        "Robotics", "Natural Language Processing", "Augmented Reality and Virtual Reality"
    ];
    const levels = ["Beginner", "Intermediate", "Advanced"];

    const [selectedDomains, setSelectedDomains] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [searchText, setSearchText] = useState("");

    const certifs = [
        { id: 1, domain_name: "Mobile Development", url: "https://www.udemy.com/course/flutter-the-guide-to-build-android-ios-and-web-apps/", image: certif1, name: "Complete Flutter Guide 2023: Build Android, IOS and Web apps", description: "The Complete Flutter SDK, Flutter Framework & Dart guide to develop fast, production-grade apps for Android, IOS and Web.", platform: "Udemy", platformIcon: <SiUdemy/>, price: "9,99 $US", rate: "4.6", level: "Beginner" },
        { id: 2, domain_name: "Artificial Intelligence", url: "https://www.coursera.org/professional-certificates/ai-engineer", image: certif2, name: "IBM AI Engineering Certificat Professionnel", description: "Lancez votre carrière en tant qu'ingénieur en IA. Apprenez à fournir des informations commerciales à partir de big data en utilisant des techniques d'apprentissage automatique et d'apprentissage profond.", platform: "Coursera", platformIcon: <SiCoursera/>, price: "9,99 $US", rate: "4.5", level: "Beginner" },
        { id: 3, domain_name: "Cloud Computing", url: "https://www.edx.org/learn/cloud-computing/ibm-introduction-to-cloud-computing?index=product&queryID=efe87443ef211f100ed8cd73566a9e4d&position=1&results_level=first-level-results&term=cloud+computing&objectID=course-7a1a677e-be4c-4e1d-9630-2d60323db911&campaign=Introduction+to+Cloud+Computing&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch", image: certif3, name: "IBM: Introduction to Cloud Computing", description: "Jumpstart your cloud expertise and explore offerings of AWS, Google, and IBM; delve into IaaS, PaaS, SaaS models, and cloud security. Experience IBM Cloud app deployment. Perfect for executives, students, and budding professionals.", platform: "Edx", platformIcon: <SiEdx/>, price: "Free", rate: "4.6", level: "Beginner" },
        { id: 4, domain_name: "Machine Learning", url: "https://www.udemy.com/course/data-science-supervised-machine-learning-in-python/", image: certif4, name: "Data Science: Supervised Machine Learning in Python", description: "Full Guide to Implementing Classic Machine Learning Algorithms in Python and with Scikit-Learn", platform: "Udemy", platformIcon: <SiUdemy/>, price: "29,99 $US", rate: "4.6", level: "Intermediate" },
    ];

    const handleDomainChange = (domain) => {
        setSelectedDomains(prevSelected => 
            prevSelected.includes(domain) ? prevSelected.filter(d => d !== domain) : [...prevSelected, domain]
        );
    };

    const handleLevelChange = (level) => {
        setSelectedLevels(prevSelected => 
            prevSelected.includes(level) ? prevSelected.filter(l => l !== level) : [...prevSelected, level]
        );
    };

    const handleClearFilters = () => {
        setSelectedDomains([]);
        setSelectedLevels([]);
        setSearchText("");
    };

    const filteredCertifs = certifs.filter(certif => 
        (selectedDomains.length === 0 || selectedDomains.includes(certif.domain_name)) &&
        (selectedLevels.length === 0 || selectedLevels.includes(certif.level)) &&
        (searchText === "" || certif.name.toLowerCase().includes(searchText.toLowerCase()))
    );

    return (
        <div className="certification">
            <Navar isAuthenticated={isAuthenticated} user={user} />
            <Row className="certification-body">
                <Col md={3}>
                    <h4 className="filter-title">Filter</h4>
                    <button className="clear-btn" onClick={handleClearFilters}>Clear all</button>
                    <hr className="certif-hr" />
                    
                    <h4 className="filter-title">Domains</h4>
                    <input type="text" placeholder="Find a domain" className="domain-input" />
                    <div className="choices">
                        {domains.map(domain => (
                            <div key={domain} className="domain-choose">
                                <input type="checkbox" checked={selectedDomains.includes(domain)} onChange={() => handleDomainChange(domain)} id={domain} />
                                <label htmlFor={domain}>{domain}</label>
                            </div>
                        ))}
                    </div>

                    <hr className="certif-hr" />
                    
                    <h4 className="filter-title">Levels</h4>
                    <input type="text" placeholder="Find a level" className="domain-input" />
                    <div className="levels">
                        {levels.map(level => (
                            <div key={level} className="level-choose">
                                <input type="checkbox" checked={selectedLevels.includes(level)} onChange={() => handleLevelChange(level)} id={level} />
                                <label htmlFor={level}>{level}</label>
                            </div>
                        ))}
                    </div>
                </Col>

                <Col md={9}>
                    <Row className="search-container">
                        <Col md={11}>
                            <input type="text" placeholder="Search" className="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        </Col>
                        <Col md={1}>
                            <button className="search-btn"><CiSearch className="search-btn-icon" /> Search</button>
                        </Col>
                    </Row>
                    <Row className="certif-list justify-content-center" style={{ gap: 50 }}>
                        {filteredCertifs.map(certif => (
                            <Col xxs={12} xs={12} sm={6} md={5} lg={5} xl={3} key={certif.id}>
                                <CertifCard
                                    url={certif.url}
                                    name={certif.name}
                                    image={certif.image}
                                    description={certif.description}
                                    platform={certif.platform}
                                    price={certif.price}
                                    rate={certif.rate}
                                    level={certif.level}
                                    platformIcon={certif.platformIcon}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

Certificates.propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
});

const ConnectedCertif = connect(mapStateToProps)(Certificates);
export default ConnectedCertif;