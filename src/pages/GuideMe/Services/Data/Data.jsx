import { Container, Row, Col } from "react-bootstrap";
import Navar from "../../../../components/comman/Navbar/Navbar";
import data from "../../../../assets/data-and-analytics.png";
import dataScience from "../../../../assets/data-science.jpg";
import artificialIntelligence from "../../../../assets/artificial-intelligence.jpg";
import machineLearning from "../../../../assets/Machine-Learning.jpg";
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
          level: "40"
        },
        {
            title: "Aritificial Intelligence",
            image: artificialIntelligence,
            description: "Unveils the realm of artificial intelligence, equipping individuals with the knowledge to build intelligent systems, understand neural networks, and harness the potential of AI for innovation and problem-solving.",
            level: "80"
        },
        {
            title: "Machine Learning",
            image: machineLearning,
            description: "Immerses participants in the world of machine learning, enabling them to develop predictive models, understand algorithms, and leverage data to solve real-world problems effectively.",
            level: "10"
        },
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
                        <Link to="/guide-me/development/web-development" key={index} style={{ textDecoration: 'none' }}>
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