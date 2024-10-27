import { FaCloud, FaServer, FaMicrochip, FaDatabase, FaNetworkWired, FaDocker, FaCogs, FaCodeBranch, FaTools, FaCode, FaChartLine, FaRobot, FaShieldAlt, FaLock, FaUserShield, FaBug, FaGavel, FaDesktop, FaUndoAlt, FaUsersCog } from 'react-icons/fa';
import ConnectedNavar from '../../../../components/comman/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export default function DynamicInfrastructure(){
    const cloudComputing = [
        {
            title: "Cloud Platforms",
            content: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "IBM Cloud"],
            icon: <FaCloud />,
        },
        {
            title: "Cloud Services",
            content: ["IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "SaaS (Software as a Service)"],
            icon: <FaServer />,
        },
        {
            title: "Compute Services",
            content: ["AWS EC2", "Azure Virtual Machines", "Google Compute Engine"],
            icon: <FaMicrochip />,
        },
        {
            title: "Storage & Databases",
            content: ["AWS S3", "Azure Blob Storage", "Google Cloud Storage", "AWS RDS", "Azure SQL Database"],
            icon: <FaDatabase />,
        },
        {
            title: "Networking",
            content: ["Virtual Private Cloud (VPC)", "Load Balancers", "DNS", "Cloud VPN"],
            icon: <FaNetworkWired />,
        },
        {
            title: "Serverless & Containers",
            content: ["AWS Lambda", "Google Cloud Functions", "Azure Functions", "Kubernetes", "Docker"],
            icon: <FaDocker />,
        },
        {
            title: "Monitoring & Management",
            content: ["CloudWatch", "Azure Monitor", "Google Cloud Operations", "Terraform", "Ansible"],
            icon: <FaCogs />,
        },
    ];
    const devOps = [
        {
            title: "Version Control",
            content: ["Git", "GitHub", "GitLab", "Bitbucket"],
            icon: <FaCodeBranch />,
        },
        {
            title: "CI/CD Tools",
            content: ["Jenkins", "GitLab CI", "Travis CI", "CircleCI"],
            icon: <FaCogs />,
        },
        {
            title: "Configuration Management",
            content: ["Ansible", "Puppet", "Chef", "SaltStack"],
            icon: <FaTools />,
        },
        {
            title: "Infrastructure as Code",
            content: ["Terraform", "AWS CloudFormation", "Azure Resource Manager"],
            icon: <FaCode />,
        },
        {
            title: "Containerization",
            content: ["Docker", "Kubernetes", "Helm", "OpenShift"],
            icon: <FaDocker />,
        },
        {
            title: "Monitoring & Logging",
            content: ["Prometheus", "Grafana", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Datadog"],
            icon: <FaChartLine />,
        },
        {
            title: "Automation",
            content: ["Bash Scripting", "Python Scripting", "CI/CD Pipelines", "Cron Jobs"],
            icon: <FaRobot />,
        },
    ];
    const networkingSecurity = [
        {
            title: "Networking Fundamentals",
            content: ["TCP/IP", "OSI Model", "Subnetting", "Routing & Switching"],
            icon: <FaNetworkWired />,
        },
        {
            title: "Network Security",
            content: ["Firewalls", "VPNs", "Intrusion Detection Systems (IDS)", "Intrusion Prevention Systems (IPS)"],
            icon: <FaShieldAlt />,
        },
        {
            title: "Cloud Networking",
            content: ["AWS VPC", "Azure Virtual Network", "Google VPC"],
            icon: <FaCloud />,
        },
        {
            title: "Security Protocols",
            content: ["SSL/TLS", "HTTPS", "SSH", "IPSec"],
            icon: <FaLock />,
        },
        {
            title: "Identity & Access Management (IAM)",
            content: ["AWS IAM", "Azure Active Directory", "Google Cloud IAM"],
            icon: <FaUserShield />,
        },
        {
            title: "Penetration Testing",
            content: ["Kali Linux", "Metasploit", "OWASP ZAP", "Burp Suite"],
            icon: <FaBug />,
        },
        {
            title: "Compliance & Governance",
            content: ["GDPR", "HIPAA", "ISO/IEC 27001", "NIST"],
            icon: <FaGavel />,
        },
    ];
    const systemsAdministration = [
        {
            title: "Operating Systems",
            content: ["Linux (Ubuntu, CentOS)", "Windows Server", "macOS"],
            icon: <FaDesktop />,
        },
        {
            title: "Scripting & Automation",
            content: ["Bash", "PowerShell", "Python", "Ansible"],
            icon: <FaRobot />,
        },
        {
            title: "Virtualization",
            content: ["VMware", "Hyper-V", "KVM", "VirtualBox"],
            icon: <FaServer />,
        },
        {
            title: "Storage Management",
            content: ["RAID Configurations", "NAS (Network Attached Storage)", "SAN (Storage Area Network)"],
            icon: <FaDatabase />,
        },
        {
            title: "Backup & Recovery",
            content: ["Veeam", "Acronis", "Windows Backup", "Linux Backup Tools"],
            icon: <FaUndoAlt />,
        },
        {
            title: "Monitoring Tools",
            content: ["Nagios", "Zabbix", "SolarWinds", "Prometheus"],
            icon: <FaChartLine />,
        },
        {
            title: "User Management",
            content: ["Active Directory", "LDAP", "Group Policies", "RBAC (Role-Based Access Control)"],
            icon: <FaUsersCog />,
        },
    ];
    const { skill } = useParams();
    var timelineData = skill;
    if(skill == "cloud-computing")
        timelineData = cloudComputing;
    else if(skill == "devops")
        timelineData = devOps;
    else if(skill == "networking-and-security")
        timelineData = networkingSecurity;
    else if(skill == "systems-administration")
        timelineData = systemsAdministration;
    else{
        return(
            <div className='container'>
                <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
            </div>
        );
    }
    return(
        <div className='container'>
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