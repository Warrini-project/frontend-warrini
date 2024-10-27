import { FaCamera, FaCogs, FaServer, FaStream, FaChartPie, FaCoins, FaTable, FaBroom, FaCalculator, FaCode, FaDatabase, FaRobot, FaChartBar, FaTools, FaCloud, FaProjectDiagram, FaBrain, FaCommentDots, FaChartLine, FaCloudUploadAlt, FaLaptopCode } from "react-icons/fa";
import ConnectedNavar from "../../../../components/comman/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { useParams } from "react-router-dom";

export default function DynamicData(){
    const dataScience = [
        {
            title: "Foundation in Mathematics & Statistics",
            content: ["Linear Algebra", "Probability & Statistics", "Calculus"],
            icon: <FaCalculator />,
        },
        {
            title: "Programming Languages",
            content: ["Python (NumPy, Pandas)", "R"],
            icon: <FaCode />,
        },
        {
            title: "Data Manipulation & Exploration",
            content: ["Data Wrangling", "Exploratory Data Analysis"],
            icon: <FaDatabase />,
        },
        {
            title: "Machine Learning Algorithms",
            content: ["Supervised Learning", "Unsupervised Learning", "Ensemble Methods"],
            icon: <FaRobot />,
        },
        {
            title: "Data Visualization",
            content: ["Matplotlib", "Seaborn", "Tableau", "Power BI"],
            icon: <FaChartBar />,
        },
        {
            title: "Tools & Libraries",
            content: ["Jupyter Notebooks", "Scikit-learn", "Git"],
            icon: <FaTools />,
        },
        {
            title: "Big Data & Cloud Platforms",
            content: ["Hadoop", "Spark", "AWS (S3, SageMaker)"],
            icon: <FaCloud />,
        },
        {
            title: "Projects & Case Studies",
            content: ["Real-world datasets (Kaggle)", "Capstone projects (predictive analytics)"],
            icon: <FaProjectDiagram />,
        },
    ];
    const machineLearning = [
        {
            title: "Mathematics Foundations",
            content: ["Linear Algebra", "Probability Theory", "Calculus"],
            icon: <FaCalculator />,
        },
        {
            title: "Programming Skills",
            content: ["Python (TensorFlow, Scikit-learn)", "R"],
            icon: <FaCode />,
        },
        {
            title: "Supervised Learning",
            content: ["Linear & Logistic Regression", "Decision Trees", "SVM"],
            icon: <FaBrain />,
        },
        {
            title: "Unsupervised Learning",
            content: ["K-means Clustering", "PCA", "Dimensionality Reduction"],
            icon: <FaProjectDiagram />,
        },
        {
            title: "Natural Language Processing (NLP)",
            content: ["Text Preprocessing", "Word Embeddings", "BERT"],
            icon: <FaCommentDots />,
        },
        {
            title: "Model Evaluation & Tuning",
            content: ["Cross-validation", "Grid Search", "ROC-AUC"],
            icon: <FaChartLine />,
        },
        {
            title: "Deployment & Production",
            content: ["Flask", "AWS SageMaker"],
            icon: <FaCloudUploadAlt />,
        },
        {
            title: "Hands-on Projects",
            content: ["Image Classification", "Time Series Forecasting"],
            icon: <FaLaptopCode />,
        },
    ];   
    const dataEngineering = [
        {
            title: "Programming & Scripting Languages",
            content: ["Python", "SQL", "Java", "Scala"],
            icon: <FaCode />,
        },
        {
            title: "Databases & Data Warehousing",
            content: ["MySQL", "PostgreSQL", "MongoDB", "Redshift"],
            icon: <FaDatabase />,
        },
        {
            title: "ETL (Extract, Transform, Load)",
            content: ["Apache Nifi", "Talend", "Kafka"],
            icon: <FaCogs />,
        },
        {
            title: "Big Data Technologies",
            content: ["Hadoop", "Spark", "HDFS"],
            icon: <FaServer />,
        },
        {
            title: "Data Pipelines & Orchestration",
            content: ["Airflow", "Luigi", "Apache Beam"],
            icon: <FaStream />,
        },
        {
            title: "Cloud & Infrastructure",
            content: ["AWS (S3, Glue)", "Google Cloud (BigQuery, Dataflow)"],
            icon: <FaCloud />,
        },
        {
            title: "Monitoring & Performance Optimization",
            content: ["Prometheus", "Grafana", "Query Optimization"],
            icon: <FaChartLine />,
        },
        {
            title: "Real-World Projects",
            content: ["Building ETL pipelines", "Stream processing applications"],
            icon: <FaLaptopCode />,
        },
    ];
    const businessIntelligence = [
        {
            title: "Data Fundamentals",
            content: ["Data Warehousing", "OLAP vs OLTP"],
            icon: <FaDatabase />,
        },
        {
            title: "BI Tools & Platforms",
            content: ["Tableau", "Power BI", "Looker", "QlikView"],
            icon: <FaChartPie />,
        },
        {
            title: "Data Visualization Techniques",
            content: ["Dashboards", "Charts & Graphs", "Storytelling with Data"],
            icon: <FaChartBar />,
        },
        {
            title: "Database Skills",
            content: ["SQL", "NoSQL (MongoDB)"],
            icon: <FaServer />,
        },
        {
            title: "Business Metrics & KPIs",
            content: ["ROI", "Churn Rate", "Customer Lifetime Value"],
            icon: <FaCoins />,
        },
        {
            title: "Reporting Automation",
            content: ["Python Scripts", "SQL Automation"],
            icon: <FaRobot />,
        },
        {
            title: "Cloud BI & Big Data",
            content: ["Google Data Studio", "AWS QuickSight"],
            icon: <FaCloud />,
        },
        {
            title: "Real-World Projects",
            content: ["End-to-end dashboards", "Executive reports"],
            icon: <FaLaptopCode />,
        },
    ];
    const dataAnalytics = [
        {
            title: "Mathematics & Statistics",
            content: ["Descriptive Statistics", "Inferential Statistics"],
            icon: <FaCalculator />,
        },
        {
            title: "Excel for Data Analysis",
            content: ["VLOOKUP", "Pivot Tables", "Data Visualization"],
            icon: <FaTable />,
        },
        {
            title: "SQL & Databases",
            content: ["Advanced SQL Queries", "Database Design"],
            icon: <FaDatabase />,
        },
        {
            title: "Programming for Analytics",
            content: ["Python (Pandas, NumPy)", "R"],
            icon: <FaCode />,
        },
        {
            title: "Data Visualization",
            content: ["Matplotlib", "Seaborn", "Tableau"],
            icon: <FaChartBar />,
        },
        {
            title: "Data Wrangling & Cleaning",
            content: ["Preprocessing", "Normalization", "Feature Scaling"],
            icon: <FaBroom />,
        },
        {
            title: "Advanced Analytics Techniques",
            content: ["Regression Analysis", "Time Series Analysis"],
            icon: <FaChartLine />,
        },
        {
            title: "Projects",
            content: ["Customer behavior analysis", "Market trend analysis"],
            icon: <FaLaptopCode />,
        },
    ];
    const artificialIntelligence = [
        {
            title: "Mathematics Foundations",
            content: ["Linear Algebra", "Probability Theory", "Optimization Techniques"],
            icon: <FaCalculator />,
        },
        {
            title: "Programming Languages",
            content: ["Python (TensorFlow, PyTorch)", "R"],
            icon: <FaCode />,
        },
        {
            title: "Machine Learning Algorithms",
            content: ["Supervised Learning", "Reinforcement Learning"],
            icon: <FaRobot />,
        },
        {
            title: "Neural Networks & Deep Learning",
            content: ["CNNs", "RNNs", "GANs"],
            icon: <FaBrain />,
        },
        {
            title: "Natural Language Processing (NLP)",
            content: ["Text Classification", "NER", "Machine Translation"],
            icon: <FaCommentDots />,
        },
        {
            title: "Computer Vision",
            content: ["Image Recognition", "Object Detection", "Transfer Learning"],
            icon: <FaCamera />,
        },
        {
            title: "AI Deployment",
            content: ["Flask", "TensorFlow Serving", "AWS AI"],
            icon: <FaCloudUploadAlt />,
        },
        {
            title: "Real-World Projects",
            content: ["Chatbot creation", "Recommendation Engines"],
            icon: <FaLaptopCode />,
        },
    ];
    const { skill } = useParams();
    var timelineData;
    if(skill == "machine-learning")
        timelineData = machineLearning;
    else if(skill == "data-science")
        timelineData = dataScience;
    else if(skill == "data-analytics")
        timelineData = dataAnalytics;
    else if(skill == "artificial-intelligence")
        timelineData = artificialIntelligence;
    else if(skill == "business-intelligence")
        timelineData = businessIntelligence;
    else if(skill == "data-engineering")
        timelineData = dataEngineering;
    else{
        return(
            <div className="Container">
                <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
            </div>
        );
    }
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