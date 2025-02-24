import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaNetworkWired, FaHtml5, FaCss3, FaReact, FaGitAlt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import { MdWork, MdDisplaySettings } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import ConnectedNavar from "../../../../../components/comman/Navbar/Navbar";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoRocketOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import PropTypes from 'prop-types';
import skillsDetails from './DetaileSkillViewList';
import { useDispatch } from 'react-redux';
import { setSelectedSkill } from '../../../../../services/filter/filterSlice';
import ReactPlayer from 'react-player';

const frontend = [
    {
        title: "Network Essentials",
        icon: <FaNetworkWired />,
        content: ["HTTP", "DNS", "Hosting", "Browsers"],
    },
    {
        title: "HTML",
        subtitle: "HyperText Markup Language",
        icon: <FaHtml5 />,
        content: ["Basics of HTML", "Forms and Validations", "Semantic tags", "Accessibility"],
    },
    {
        title: "CSS",
        subtitle: "Cascading Style Sheets",
        icon: <FaCss3 />,
        content: ["Learn Basics", "Layouts", "Flex and Grid", "Responsive Design"],
    },
    {
        title: "CSS Frameworks",
        icon: <FaCss3 />,
        content: ["Tailwind CSS", "Bootstrap", "Foundation", "Skeleton"],
    },
    {
        title: "Tailwind CSS",
        icon: <SiTailwindcss />,
        content: ["Layout", "Flexbox", "Grid", "Alignment"],
    },
    {
        title: "JavaScript",
        icon: <IoLogoJavascript />,
        content: ["Basics", "Operators", "Loops", "Function", "Array", "DOM"],
    },
    {
        title: "JavaScript Frameworks",
        icon: <IoLogoJavascript />,
        content: ["React", "Next", "Angular", "Vue", "jQuery"],
    },
    {
        title: "React Basics",
        icon: <FaReact />,
        content: ["Components", "Props & State", "Hooks", "Projects"],
    },
    {
        title: "VCS Hosting",
        icon: <FaGitAlt />,
        content: ["Git", "GitHub", "GitLab"],
    },
    {
        title: "Projects",
        icon: <MdWork />,
        description: "At this point, you should be able to build a complete frontend application including:",
        content: [
            "Structuring your webpages with HTML",
            "Styling your webpages with CSS",
            "Adding interactivity to your webpages with JavaScript",
            "Using the DOM API to manipulate your webpages",
            "Using the Fetch API to make HTTP requests",
            "Understanding promises and using async/await syntax",
            "Version controlling your code with Git",
            "Pushing your code to GitHub",
        ],
    },
];

const backend = [
    {
        title: "Backend Frameworks",
        content: ["Node JS", "Django", "Laravel", "Spring Boot"],
        icon: <MdDisplaySettings />,
    },
    {
        title: "Node JS",
        content: ["Introduction", "Node.js Assert module", "Node.js Buffers", "Node.js Console"],
        icon: <FaNodeJs />,
    },
    {
        title: "Database",
        content: {
            "Relational Database": ["MySQL", "PostgreSQL", "Microsoft SQL Server", "Oracle Database"],
            "Non-Relational Database": ["Mongo DB", "Apache Cassandra", "Couch DB", "Redis"],
        },
        icon: <FaDatabase />,
    },
    {
        title: "API development",
        content: ["REST", "SOAP", "GraphQL", "Websockets"],
        icon: <CiSettings />,
    },
    {
        title: "Security",
        content: {
            "Authentication": ["JWT", "OAUTH", "Token Auth"],
            "API Security": ["HTTPS", "CORS", "SSL/TSL"],
        },
        icon: <FaDatabase />,
    },
    {
        title: "Deployment",
        content:{
            "Technologies": ["Containerization", "Virtualization", "CI/CD"],
            "Deployment Platform": ["AWS", "Microsoft Azure", "IBM Cloud", "Firebase"]
        },
        icon: <IoRocketOutline/>
    }
];

export default function DynamicWebDev() {
    const { skill } = useParams();
    const [selectedSkill, setSelectedSkill] = useState(null);

    // Determine which data to show based on skill parameter
    let timelineData = skill === "frontend development" ? frontend : backend;

    // Fetch the skill details by matching the selected skill name
    const handleSkillClick = (skillName) => {
        const skillDetail = skillsDetails.find((detail) => detail.name === skillName);
        setSelectedSkill(skillDetail || null);
    };

    return (
        <div className="container">
            <ConnectedNavar />
            {selectedSkill ? (
                <DetailedSkillView content={selectedSkill} onBack={() => setSelectedSkill(null)} />
            ) : (
                <Container style={{ marginTop: 100 }}>
                    <VerticalTimeline lineColor="#37C6F4">
                        {timelineData.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#fff', color: '#000', border: "2px solid #37C6F4" }}
                                contentArrowStyle={{ borderRight: '7px solid  #37C6F4' }}
                                iconStyle={{ background: '#37C6F4', color: '#fff' }}
                                icon={item.icon}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                {item.subtitle && <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>}
                                {item.description && <p>{item.description}</p>}
                                <ul style={{ marginTop: "10px" }}>
                                    {Array.isArray(item.content) ? (
                                        item.content.map((point, idx) => (
                                            <li
                                                onMouseEnter={(e) => (e.target.style.color = "#37C6F4")} onMouseLeave={(e) => (e.target.style.color = "black")} 
                                                key={idx}
                                                style={{ cursor: "pointer", marginTop: 5 }}
                                                onClick={() => handleSkillClick(point)}
                                            >
                                                {point}
                                            </li>
                                        ))
                                    ) : (
                                        Object.entries(item.content).map(([section, contentList], idx) => (
                                            <div key={idx}>
                                                <h4>{section}</h4>
                                                <ul>
                                                    {contentList.map((contentItem, idx2) => (
                                                        <li key={idx2} style={{ cursor: "pointer" }} onClick={() => handleSkillClick(contentItem)}>
                                                            {contentItem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))
                                    )}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </Container>
            )}
        </div>
    );
}

function DetailedSkillView({ content, onBack }) {
    const dispatch = useDispatch();
    const handleSkillClick = (skill) => {
        dispatch(setSelectedSkill(skill));
    };
    return (
        <Container style={{ marginTop: 100 }}>
            <button onClick={onBack} style={{ marginBottom: "20px", border: "none", backgroundColor: "white" }} onMouseEnter={(e) => (e.target.style.textDecoration = "underline")} onMouseLeave={(e) => (e.target.style.textDecoration = "none")}>
                <IoArrowBack /> Back to Roadmap
            </button>
            <h1>{content.name}</h1>
            <h3>Overview</h3>
            <p>{content.overview}</p>
            <h3>Articles</h3>
            <ul>
                {content.articles?.map((article, index) => (
                    <li key={index}><a style={{ textDecoration: "none", color: "#37C6F4" }} href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></li>
                ))}
            </ul>
            <h3>Video</h3>
            
            <ReactPlayer style={{ marginBottom: "20px", marginTop: "20px" }} url={content.videos[0].url} width="100%" height="700px" controls/>
            {
                /*<ul>    
                    {content.videos?.map((video, index) => (
                        <li key={index}><a style={{ textDecoration: "none", color: "#37C6F4" }} href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a></li>
                    ))}
                </ul>*/
            }
            <h3>Certificates</h3>
            <ul>
                {content.certificates?.map((certificate, index) => (
                    <li key={index}><Link onClick={() => handleSkillClick(content.name)} style={{ textDecoration: "none", color: "#37C6F4" }} to="/certificates">{certificate.title}</Link></li>
                ))}
            </ul>
        </Container>
    );
}

DetailedSkillView.propTypes = {
    content: PropTypes.object,
    onBack: PropTypes.func
}