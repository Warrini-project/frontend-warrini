import SoftwareDev from "../../../assets/careers/Software-Developer.png";
import DataScientist from "../../../assets/careers/data-scientist.jpg";
import WebDeveloper from "../../../assets/careers/web-developer.jpg";
import Dba from "../../../assets/careers/DBA.jpg";
import DevopsEngineer from "../../../assets/careers/devops-engineer.png";
import UiUxDesigner from "../../../assets/careers/UiUxDesigner.png";
import Cybersecurity from "../../../assets/careers/Cyber-Security-Analyst.jpg";
import SystemsAnalyst from "../../../assets/careers/Systems_Analyst.jpg";

const careers_list = [
    {
      title: "Software Developer",
      description: "Software Developers create applications and systems software, coding, debugging, testing, and maintaining software.",
      image: SoftwareDev,
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Proficiency in programming languages like Java, Python, C++, etc.",
        "Understanding of software development methodologies",
        "Experience with version control systems like Git"
      ],
      salary: {
        "United States": "$80,000 - $120,000",
        "United Kingdom": "£40,000 - £70,000",
        "Germany": "€50,000 - €80,000",
        "India": "₹600,000 - ₹1,500,000",
        "Canada": "CAD 60,000 - CAD 90,000",
        "Australia": "AUD 70,000 - AUD 100,000",
        "Tunisia": "TND 15,000 - TND 30,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Computer Science, Software Engineering, or a related field",
        "Internships or junior developer positions for practical experience",
        "Continuing education and certifications in specific technologies or methodologies"
      ],
      jobOutlook: {
        growthRate: "High",
        industryApplications: ["Technology", "Finance", "Healthcare", "Entertainment"]
      }
    },
    {
      title: "Data Scientist",
      description: "Data Scientists analyze complex data sets to provide insights, utilizing statistical analysis, machine learning, and data visualization.",
      image: DataScientist,
      requirements: [
        "Bachelor's or Master's degree in Data Science, Statistics, Computer Science, or related field",
        "Strong knowledge of programming languages like Python, R, SQL",
        "Experience with data visualization tools like Tableau or Power BI",
        "Understanding of machine learning techniques and algorithms"
      ],
      salary: {
        "United States": "$95,000 - $140,000",
        "United Kingdom": "£50,000 - £85,000",
        "Germany": "€55,000 - €90,000",
        "India": "₹800,000 - ₹2,000,000",
        "Canada": "CAD 70,000 - CAD 100,000",
        "Australia": "AUD 85,000 - AUD 120,000",
        "Tunisia": "TND 18,000 - TND 35,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Data Science, Statistics, Computer Science, or related field",
        "Master's or Ph.D. for advanced roles",
        "Certifications in data science, machine learning, or related fields",
        "Practical experience through internships, projects, or competitions like Kaggle"
      ],
      jobOutlook: {
        growthRate: "Very High",
        industryApplications: ["Healthcare", "Finance", "Marketing", "Technology"]
      }
    },
    {
      title: "Web Developer",
      description: "Web Developers design, build, and maintain websites, focusing on front-end, back-end, or full-stack development.",
      image: WebDeveloper,
      requirements: [
        "Proficiency in HTML, CSS, JavaScript, and frameworks like React or Angular",
        "Understanding of responsive design principles",
        "Experience with back-end technologies like Node.js, Django, or Ruby on Rails",
        "Knowledge of database management and version control systems"
      ],
      salary: {
        "United States": "$60,000 - $90,000",
        "United Kingdom": "£30,000 - £55,000",
        "Germany": "€40,000 - €70,000",
        "India": "₹500,000 - ₹1,200,000",
        "Canada": "CAD 55,000 - CAD 80,000",
        "Australia": "AUD 65,000 - AUD 90,000",
        "Tunisia": "TND 12,000 - TND 25,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Computer Science, Web Development, or related field",
        "Certifications in web development technologies",
        "Building a strong portfolio through personal or freelance projects",
        "Staying updated with the latest web technologies and trends"
      ],
      jobOutlook: {
        growthRate: "High",
        industryApplications: ["E-commerce", "Media", "Education", "Technology"]
      }
    },
    {
      title: "Systems Analyst",
      description: "Systems Analysts evaluate, design, and implement IT systems to solve business problems, ensuring efficiency and effectiveness.",
      image: SystemsAnalyst,
      requirements: [
        "Bachelor's degree in Information Technology, Computer Science, or related field",
        "Strong analytical and problem-solving skills",
        "Understanding of systems architecture and software development processes",
        "Experience with project management and business analysis"
      ],
      salary: {
        "United States": "$70,000 - $100,000",
        "United Kingdom": "£35,000 - £60,000",
        "Germany": "€45,000 - €75,000",
        "India": "₹600,000 - ₹1,500,000",
        "Canada": "CAD 60,000 - CAD 85,000",
        "Australia": "AUD 70,000 - AUD 95,000",
        "Tunisia": "TND 14,000 - TND 28,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Information Technology, Computer Science, or related field",
        "Certifications in business analysis or project management",
        "Experience with specific industries or business processes",
        "Continuous learning in emerging technologies"
      ],
      jobOutlook: {
        growthRate: "Moderate",
        industryApplications: ["Finance", "Healthcare", "Government", "Technology"]
      }
    },
    {
      title: "Database Administrator (DBA)",
      description: "Database Administrators manage, backup, and ensure the security of databases, optimizing performance and troubleshooting issues.",
      image: Dba,
      requirements: [
        "Bachelor's degree in Computer Science, Information Technology, or related field",
        "Proficiency in database management systems like MySQL, Oracle, SQL Server",
        "Experience with database security, backup, and recovery procedures",
        "Strong analytical and problem-solving skills"
      ],
      salary: {
        "United States": "$75,000 - $110,000",
        "United Kingdom": "£40,000 - £70,000",
        "Germany": "€50,000 - €85,000",
        "India": "₹700,000 - ₹1,800,000",
        "Canada": "CAD 65,000 - CAD 90,000",
        "Australia": "AUD 75,000 - AUD 105,000",
        "Tunisia": "TND 16,000 - TND 32,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Computer Science, Information Technology, or related field",
        "Certifications in specific database management systems",
        "Hands-on experience with database administration tasks",
        "Continuous learning in database optimization and security"
      ],
      jobOutlook: {
        growthRate: "Moderate",
        industryApplications: ["Finance", "Healthcare", "Retail", "Government"]
      }
    },
    {
      title: "DevOps Engineer",
      description: "DevOps Engineers bridge the gap between development and operations, automating processes, and improving deployment workflows.",
      image: DevopsEngineer,
      requirements: [
        "Bachelor's degree in Computer Science, Information Technology, or related field",
        "Experience with automation tools like Jenkins, Docker, Kubernetes",
        "Proficiency in scripting languages like Bash, Python, or Ruby",
        "Understanding of CI/CD pipelines and cloud services like AWS, Azure"
      ],
      salary: {
        "United States": "$95,000 - $135,000",
        "United Kingdom": "£50,000 - £85,000",
        "Germany": "€60,000 - €95,000",
        "India": "₹800,000 - ₹2,200,000",
        "Canada": "CAD 75,000 - CAD 115,000",
        "Australia": "AUD 90,000 - AUD 130,000",
        "Tunisia": "TND 20,000 - TND 38,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Computer Science, Information Technology, or related field",
        "Certifications in DevOps practices and tools",
        "Experience with cloud platforms and infrastructure as code",
        "Practical experience in system administration and software development"
      ],
      jobOutlook: {
        growthRate: "Very High",
        industryApplications: ["Technology", "Finance", "Healthcare", "Retail"]
      }
    },
    {
      title: "UX/UI Designer",
      description: "UX/UI Designers create user-friendly interfaces and ensure a seamless user experience, focusing on aesthetics and usability.",
      image: UiUxDesigner,
      requirements: [
        "Bachelor's degree in Design, Computer Science, or related field",
        "Proficiency in design tools like Adobe XD, Figma, Sketch",
        "Understanding of user-centered design principles",
        "Experience with prototyping, wireframing, and usability testing"
      ],
      salary: {
        "United States": "$70,000 - $105,000",
        "United Kingdom": "£35,000 - £65,000",
        "Germany": "€45,000 - €75,000",
        "India": "₹600,000 - ₹1,500,000",
        "Canada": "CAD 60,000 - CAD 90,000",
        "Australia": "AUD 70,000 - AUD 100,000",
        "Tunisia": "TND 14,000 - TND 28,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Design, Computer Science, or related field",
        "Certifications or courses in UX/UI design",
        "Building a strong portfolio with a variety of design projects",
        "Staying updated with the latest design trends and tools"
      ],
      jobOutlook: {
        growthRate: "High",
        industryApplications: ["Technology", "Media", "E-commerce", "Healthcare"]
      }
    },
    {
      title: "Cybersecurity Analyst",
      description: "Cybersecurity Analysts protect an organization's computer systems and networks from security breaches and cyber attacks.",
      image: Cybersecurity,
      requirements: [
        "Bachelor's degree in Cybersecurity, Computer Science, or related field",
        "Experience with security tools and practices like firewalls, encryption, and intrusion detection",
        "Knowledge of security standards and protocols like ISO 27001, NIST",
        "Strong analytical and problem-solving skills"
      ],
      salary: {
        "United States": "$85,000 - $120,000",
        "United Kingdom": "£45,000 - £75,000",
        "Germany": "€55,000 - €90,000",
        "India": "₹700,000 - ₹1,800,000",
        "Canada": "CAD 70,000 - CAD 95,000",
        "Australia": "AUD 80,000 - AUD 110,000",
        "Tunisia": "TND 18,000 - TND 32,000"
      },
      pathOfStudy: [
        "Bachelor's degree in Cybersecurity, Computer Science, or related field",
        "Certifications like CISSP, CEH, or CompTIA Security+",
        "Hands-on experience with security systems and incident response",
        "Continuous learning in emerging cybersecurity threats and solutions"
      ],
      jobOutlook: {
        growthRate: "Very High",
        industryApplications: ["Finance", "Healthcare", "Government", "Technology"]
      }
    }
  ];  
export default careers_list;