import { useEffect, useState } from "react";
import Navar from "../../comman/Navbar/Navbar";
import { connect, useDispatch, useSelector } from "react-redux";
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
import certif5 from "../../../assets/certificates/http_course.jpg";
import {
  clearAllFilters,
  initializeDomainFilter
} from "../../../services/filter/filterSlice";

const Certificates = ({ isAuthenticated, user }) => {
  const dispatch = useDispatch();
  
  // Redux state
  const selectedDomain = useSelector((state) => state.filter.selectedDomain);
  const checkedDomains = useSelector((state) => state.filter.checkedDomains);
  const selectedSkill = useSelector((state) => state.filter.selectedSkill);
  
  // Local states
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [domainSearchText, setDomainSearchText] = useState("");
  const [levelSearchText, setLevelSearchText] = useState("");

  // Domains and levels
  const domains = [
    "Artificial Intelligence", "Machine Learning", "Data Science", "Cybersecurity",
    "Software Development", "Web Development", "Mobile Development", "Database Management",
    "Networking", "Computer Graphics", "Human-Computer Interaction", "Cloud Computing",
    "Robotics", "Natural Language Processing", "Augmented Reality and Virtual Reality"
  ];
  
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const certifs = [
    { 
      id: 1, 
      domain_name: "Mobile Development", 
      url: "https://www.udemy.com/course/flutter-the-guide-to-build-android-ios-and-web-apps/", 
      image: certif1, 
      name: "Complete Flutter Guide 2023: Build Android, IOS and Web apps", 
      description: "The Complete Flutter SDK, Flutter Framework & Dart guide to develop fast, production-grade apps for Android, IOS and Web.", 
      platform: "Udemy", 
      platformIcon: <SiUdemy/>, 
      price: "9,99 $US", 
      rate: "4.6", 
      level: "Beginner" 
    },
    { 
      id: 2, 
      domain_name: "Artificial Intelligence", 
      url: "https://www.coursera.org/professional-certificates/ai-engineer", 
      image: certif2, 
      name: "IBM AI Engineering Professional Certificate", 
      description: "Start your career as an AI Engineer. Learn to provide business insights from big data using machine learning and deep learning techniques.", 
      platform: "Coursera", 
      platformIcon: <SiCoursera/>, 
      price: "9,99 $US", 
      rate: "4.5", 
      level: "Beginner" 
    },
    { 
      id: 3, 
      domain_name: "Cloud Computing", 
      url: "https://www.edx.org/learn/cloud-computing/ibm-introduction-to-cloud-computing", 
      image: certif3, 
      name: "IBM: Introduction to Cloud Computing", 
      description: "Jumpstart your cloud expertise and explore offerings of AWS, Google, and IBM; delve into IaaS, PaaS, SaaS models, and cloud security.", 
      platform: "Edx", 
      platformIcon: <SiEdx/>, 
      price: "Free", 
      rate: "4.6", 
      level: "Beginner" 
    },
    { 
      id: 4, 
      domain_name: "Machine Learning", 
      url: "https://www.udemy.com/course/data-science-supervised-machine-learning-in-python/", 
      image: certif4, 
      name: "Data Science: Supervised Machine Learning in Python", 
      description: "Full Guide to Implementing Classic Machine Learning Algorithms in Python and with Scikit-Learn", 
      platform: "Udemy", 
      platformIcon: <SiUdemy/>, 
      price: "29,99 $US", 
      rate: "4.6", 
      level: "Intermediate" 
    },
    { 
      id: 5, 
      domain_name: "Networking", 
      url: "https://www.udemy.com/course/getting-started-with-http/", 
      image: certif5, 
      name: "Getting started with HTTP", 
      description: "Complete guide to understanding HTTP protocol and web communications", 
      platform: "Udemy", 
      platformIcon: <SiUdemy/>, 
      price: "13,99 $US", 
      rate: "4.3", 
      level: "Beginner" 
    }
  ];

  /*// Initialize checkbox state on component mount if selectedDomain exists
  useEffect(() => {
    if (selectedDomain && !checkedDomains[selectedDomain]) {
      dispatch(initializeDomainFilter(selectedDomain));
    }
  }, [selectedDomain, dispatch]);*/
  useEffect(() => {
    if(selectedSkill)
      setSearchText(selectedSkill);
  }, [selectedSkill])

  // Filter domains based on search
  const filteredDomains = domains.filter(domain =>
    domain.toLowerCase().includes(domainSearchText.toLowerCase())
  );

  // Filter levels based on search
  const filteredLevels = levels.filter(level =>
    level.toLowerCase().includes(levelSearchText.toLowerCase())
  );

  // Handle domain checkbox changes
  const handleDomainChange = (domain) => {
    if (checkedDomains[domain]) {
      dispatch(clearAllFilters());
    } else {
      dispatch(initializeDomainFilter(domain));
    }
  };

  // Handle level checkbox changes
  const handleLevelChange = (level) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedLevels([]);
    setSearchText("");
    setDomainSearchText("");
    setLevelSearchText("");
    dispatch(clearAllFilters());
  };

  // Filter certificates based on all criteria
  const filteredCertifs = certifs.filter(certif =>
    (!selectedDomain || certif.domain_name === selectedDomain) &&
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
          <input
            type="text"
            placeholder="Find a domain"
            className="domain-input"
            value={domainSearchText}
            onChange={(e) => setDomainSearchText(e.target.value)}
          />
          <div className="choices">
            {filteredDomains.map((domain) => (
              <div key={domain} className="domain-choose">
                <input
                  type="checkbox"
                  checked={checkedDomains[domain] || false}
                  onChange={() => handleDomainChange(domain)}
                  id={domain}
                />
                <label htmlFor={domain}>{domain}</label>
              </div>
            ))}
          </div>

          <hr className="certif-hr" />

          <h4 className="filter-title">Levels</h4>
          <input
            type="text"
            placeholder="Find a level"
            className="domain-input"
            value={levelSearchText}
            onChange={(e) => setLevelSearchText(e.target.value)}
          />
          <div className="levels">
            {filteredLevels.map((level) => (
              <div key={level} className="level-choose">
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level)}
                  onChange={() => handleLevelChange(level)}
                  id={level}
                />
                <label htmlFor={level}>{level}</label>
              </div>
            ))}
          </div>
        </Col>

        <Col md={9}>
          <Row className="search-container">
            <Col md={11}>
              <input
                type="text"
                placeholder="Search"
                className="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col md={1}>
              <button className="search-btn">
                <CiSearch className="search-btn-icon" /> Search
              </button>
            </Col>
          </Row>
          <Row className="certif-list justify-content-center" style={{ gap: 50 }}>
            {filteredCertifs.length == 0 ?
              <h1 style={{ textAlign: "center" }}>No Certificates Found</h1> :
              filteredCertifs.map((certif) => (
                <Col xxs={12} xs={12} sm={6} md={5} lg={5} xl={3} key={certif.id}>
                  <CertifCard
                    url={certif.url}
                    name={certif.name}
                    image={certif.image}
                    description={certif.description}
                    platform={certif.platform}
                    price={certif.price}
                    platformIcon={certif.platformIcon}
                    rate={certif.rate}
                    level={certif.level}
                  />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </div>
  );
};

Certificates.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const ConnectedCertificates = connect(mapStateToProps)(Certificates);
export default ConnectedCertificates;