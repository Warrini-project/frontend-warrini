import { useParams } from "react-router-dom";
import ConnectedNavar from "../../../../../components/comman/Navbar/Navbar";
import { FaCogs, FaDocker, FaCodeBranch, FaCloud, FaChartLine, FaServer, FaCode, FaDesktop, FaDatabase, FaArrowsAlt, FaMemory, FaLinux, FaTasks, FaLaptopCode, FaBug, FaMicrochip, FaClock, FaExchangeAlt, FaBolt,  } from "react-icons/fa";
import { MdDisplaySettings } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function DynamicSoftwareDev(){
    const desktopDevelopment = [
        {
            title: "Programming Languages",
            content: ["C#", "Java", "Python", "C++"],
            icon: <FaCode />,
        },
        {
            title: "Development Tools",
            content: ["Visual Studio", "Eclipse", "IntelliJ IDEA", "PyCharm"],
            icon: <MdDisplaySettings />,
        },
        {
            title: "UI Frameworks",
            content: {
                "C#": ["Windows Forms", "WPF (Windows Presentation Foundation)", "UWP (Universal Windows Platform)"],
                "Java": ["JavaFX", "Swing", "AWT"],
                "Python": ["Tkinter", "PyQt", "Kivy"],
                "C++": ["Qt", "GTK+", "wxWidgets"],
            },
            icon: <FaDesktop />,
        },
        {
            title: "Database Integration",
            content: ["SQLite", "MySQL", "PostgreSQL", "SQL Server"],
            icon: <FaDatabase />,
        },
        {
            title: "Cross-Platform Development",
            content: ["Electron", "Qt", "JavaFX (Java)", "Kivy (Python)"],
            icon: <FaArrowsAlt />,
        },
        {
            title: "Application Deployment",
            content: ["Packaging (MSI, EXE)", "Installers (Inno Setup, WiX)", "Code Signing"],
            icon: <IoRocketOutline />,
        },
    ];
    const systemsProgramming = [
        {
            title: "Low-Level Programming Languages",
            content: ["C", "C++", "Rust", "Go"],
            icon: <FaCode />,
        },
        {
            title: "Memory Management",
            content: ["Pointers and References", "Manual Memory Allocation (malloc/free)", "Garbage Collection (Go)"],
            icon: <FaMemory />,
        },
        {
            title: "Concurrency and Parallelism",
            content: ["Multithreading", "Async Programming", "Locks and Semaphores", "Atomic Operations"],
            icon: <FaTasks />,
        },
        {
            title: "Operating Systems Concepts",
            content: ["Processes and Threads", "File Systems", "System Calls", "Signals"],
            icon: <FaLaptopCode />,
        },
        {
            title: "Linux Development",
            content: ["POSIX APIs", "Linux System Programming", "Makefiles", "Shell Scripting"],
            icon: <FaLinux />,
        },
        {
            title: "Debugging and Performance Optimization",
            content: ["GDB (GNU Debugger)", "Valgrind", "Profiling Tools", "Memory Leaks Detection"],
            icon: <FaBug />,
        },
    ];
    const embeddedDevelopment = [
        {
            title: "Embedded Programming Languages",
            content: ["C", "C++", "Assembly", "Rust"],
            icon: <FaCode />,
        },
        {
            title: "Microcontrollers and Microprocessors",
            content: ["ARM", "AVR", "PIC", "Raspberry Pi"],
            icon: <FaMicrochip />,
        },
        {
            title: "Real-Time Operating Systems (RTOS)",
            content: ["FreeRTOS", "VxWorks", "Micrium", "ChibiOS"],
            icon: <FaClock />,
        },
        {
            title: "Peripherals and Communication Protocols",
            content: ["I2C", "SPI", "UART", "GPIO"],
            icon: <FaExchangeAlt />,
        },
        {
            title: "Debugging and Testing Tools",
            content: ["JTAG", "GDB", "Oscilloscope", "Logic Analyzers"],
            icon: <FaBug />,
        },
        {
            title: "Power Management and Optimization",
            content: ["Low-Power Modes", "Energy Harvesting", "Battery Management"],
            icon: <FaBolt />,
        },
    ];
    const devOpsAutomation = [
        {
            title: "Programming Languages for Scripting",
            content: ["Python", "Bash", "PowerShell", "Ruby"],
            icon: <FaCode />,
        },
        {
            title: "CI/CD Tools",
            content: ["Jenkins", "GitLab CI", "CircleCI", "GitHub Actions"],
            icon: <FaCogs />,
        },
        {
            title: "Containerization & Virtualization",
            content: ["Docker", "Kubernetes", "VirtualBox", "Vagrant"],
            icon: <FaDocker />,
        },
        {
            title: "Infrastructure as Code",
            content: ["Terraform", "Ansible", "Chef", "Puppet"],
            icon: <FaCodeBranch />,
        },
        {
            title: "Monitoring and Logging",
            content: ["Prometheus", "Grafana", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Nagios"],
            icon: <FaChartLine />,
        },
        {
            title: "Cloud Platforms",
            content: ["AWS", "Google Cloud", "Microsoft Azure", "IBM Cloud"],
            icon: <FaCloud />,
        },
    ];
    const cloudNativeDevelopment = [
        {
            title: "Microservices Architecture",
            content: ["Service-Oriented Architecture", "API Gateway", "Service Mesh (Istio)", "Serverless Functions"],
            icon: <FaServer />,
        },
        {
            title: "Programming Languages",
            content: ["Go", "Python", "Node.js", "Java"],
            icon: <FaCode />,
        },
        {
            title: "Containerization and Orchestration",
            content: ["Docker", "Kubernetes", "Helm Charts", "K8s Operators"],
            icon: <FaDocker />,
        },
        {
            title: "CI/CD Pipelines",
            content: ["Jenkins", "Spinnaker", "Argo CD", "Tekton"],
            icon: <FaCogs />,
        },
        {
            title: "Cloud Providers",
            content: ["AWS (Lambda, EC2)", "Google Cloud (App Engine, Cloud Run)", "Azure (AKS, Functions)"],
            icon: <FaCloud />,
        },
        {
            title: "Monitoring and Scaling",
            content: ["Prometheus", "Kubernetes HPA (Horizontal Pod Autoscaler)", "ELK Stack", "CloudWatch"],
            icon: <FaChartLine />,
        },
    ];
    const { skill } = useParams();
    var timelineData;
    if(skill == "desktop-application-development")
        timelineData = desktopDevelopment;
    else if(skill == "systems-programming")
        timelineData = systemsProgramming;
    else if(skill == "embedded-systems-development")
        timelineData = embeddedDevelopment;
    else if(skill == "devops-and-automation")
        timelineData = devOpsAutomation;
    else if(skill == "cloud-native-software-development")
        timelineData = cloudNativeDevelopment;

    return(
        <div className="container">
            <ConnectedNavar/>
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