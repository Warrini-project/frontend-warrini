import { Container, Row, Col } from "react-bootstrap";
import Navar from "../../../../components/comman/Navbar/Navbar";
import data from "../../../../assets/guide_me/data/data-and-analytics.png";
import dataScience from "../../../../assets/guide_me/data/data-science.jpg";
import artificialIntelligence from "../../../../assets/guide_me/data/artificial-intelligence.jpg";
import machineLearning from "../../../../assets/guide_me/data/Machine-Learning.jpg";
import dataEngineeringImage from "../../../../assets/guide_me/data/data-engineering.png";
import dataAnalyticsImage from "../../../../assets/guide_me/data/data-analytics.png";
import BIImage from "../../../../assets/guide_me/data/business-intelligence.jpg";

import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Data(){
    const dataTopics = [
        {
          title: "Data Science",
          image: dataScience,
          description: "Empowers learners with the expertise to analyze complex datasets, extract valuable insights, and drive data-driven decisions through statistical techniques and machine learning algorithms.",
          level: "40",
          redirectUrl: "data-science",
        },
        {
            title: "Aritificial Intelligence",
            image: artificialIntelligence,
            description: "Unveils the realm of artificial intelligence, equipping individuals with the knowledge to build intelligent systems, understand neural networks, and harness the potential of AI for innovation and problem-solving.",
            level: "80",
            redirectUrl: "artificial-intelligence",
        },
        {
            title: "Machine Learning",
            image: machineLearning,
            description: "Immerses participants in the world of machine learning, enabling them to develop predictive models, understand algorithms, and leverage data to solve real-world problems effectively.",
            level: "10",
            redirectUrl: "machine-learning",
        },
        {
            title: "Data Engineering",
            image: dataEngineeringImage,
            description: "Provides the skills to design, build, and maintain scalable data pipelines, enabling the efficient processing and management of vast amounts of data across various systems.",
            level: "10",
            redirectUrl: "data-engineering"
        },
        {
            title: "Data Analytics",
            image: dataAnalyticsImage,
            description: "Teaches learners how to interpret data trends, optimize business processes, and apply statistical methods to uncover actionable insights that enhance organizational performance.",
            level: "10",
            redirectUrl: "data-analytics"
        },
        {
            title: "Business Intelligence (BI)",
            image: BIImage,
            description: "Prepares learners to transform raw data into actionable insights through visualization, reporting, and dashboard creation, helping businesses make informed strategic decisions.",
            level: "10",
            redirectUrl: "business-intelligence"
        },
        /*{
            title: "Data Governance & Ethics",
            image: dataGovernanceImage,
            description: "Equips learners with the knowledge to ensure responsible data handling, emphasizing privacy, security, and ethical considerations in the use and sharing of data.",
            level: "10"
        }*/
    ];
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
        slidesToSlide: 2,
        },
        desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 2,
        },
        tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    }; 
    return(
        <div>
            <Navar/>
            <Container fluid className="introduction">
                <Row>
                    <Col md={6} className="desc">
                        <h1>Data And Analytics</h1>
                        <h5 style={{textAlign: "justify"}}>Explore the Data and Analytics section, where you'll delve into essential skills like data analysis, visualization, and machine learning. Gain hands-on experience and unlock insights to drive informed decisions in today's data-driven world.</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={data}/>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: "3.5rem", marginBottom: "3.5rem"}}>
                <Carousel responsive={responsive}>
                    {dataTopics.map((item, index)=>(
                        <Link to={`/guide-me/data-and-analytics/${item.redirectUrl}`} key={index} style={{ textDecoration: 'none' }}>
                        <Card style={{ width: '25rem', height: '30rem' }} className="trainCard">
                            <Card.Img variant="top" src={item.image} style={{ height: '15rem', objectFit: 'fill' }} />
                            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <Card.Title style={{textAlign: "center", fontSize:"25px", paddingTop: "10px"}}>{item.title}</Card.Title>
                                <Card.Text style={{ paddingRight: 10, paddingLeft: 10, textAlign: "justify" }}>
                                    {item.description} 
                                </Card.Text>
                                <ProgressBar variant="success" now={item.level} label={`${item.level}%`} />
                            </Card.Body>
                        </Card>
                        </Link>
                    ))}
                </Carousel>
            </Container>
        </div>
    );
}