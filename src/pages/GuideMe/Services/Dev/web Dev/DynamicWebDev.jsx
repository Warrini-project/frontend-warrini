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
];

export default function DynamicWebDev() {
    const { skill } = useParams();
    var timelineData;
    if(skill === "frontend development"){
        timelineData = frontend;
    }
    else if(skill === "backend development"){
        timelineData = backend;
    }

    return (
        <div className="container">
            <ConnectedNavar />
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
                            {item.subtitle && 
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            }
                            {item.description && <p>{item.description}</p>}
                            <ul style={{ marginTop: "10px" }}>
                                {Array.isArray(item.content) ? (
                                    item.content.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))
                                ) : (
                                    Object.entries(item.content).map(([section, contentList], idx) => (
                                        <div key={idx}>
                                            <h4>{section}</h4>
                                            <ul>
                                                {contentList.map((contentItem, idx2) => (
                                                    <li key={idx2}>{contentItem}</li>
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
        </div>
    );
}