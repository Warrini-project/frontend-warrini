import Navar from "../../../../components/comman/Navbar/Navbar"
import { Container, Row, Col } from "react-bootstrap";
import desc from "../../../../assets/trainingandevents.png";
import webDev from "../../../../assets/webdev.png";
import gameDev from "../../../../assets/gameDev.png";
import mobileDev from "../../../../assets/mobileDev.jpg";
import softDev from "../../../../assets/softDev.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export default function Dev(){
    const development = [
        {
          title: "Web Development",
          image: webDev,
          description: "Equips participants with skills in designing, building, and maintaining websites and web applications, covering frontend and backend development, databases, and deployment.",
          level: "40",
          url: "web development",
        },
        {
            title: "Mobile Development",
            image: mobileDev,
            description: "Equips participants with skills in designing, building, and deploying mobile applications for platforms such as iOS and Android. Topics include UI design, app development frameworks, data management, and app store deployment.",
            level: "10",
            url: "mobile development",
        },
        {
            title: "Software Development",
            image: softDev,
            description: "Equips participants with skills in programming, software architecture, version control, testing, and deployment. Topics cover programming languages, methodologies, and industry tools.",
            level: "80",
            url: "software development",
        },
        {
            title: "Game Development",
            image: gameDev,
            description: "Equips participants with skills in designing, developing, and publishing video games. Topics include game design, engines, graphics programming, mechanics, and platform publishing.",
            level: "30",
            url: "game development"
        },
        /*{
            title: "Blockchain Development",
            image: blockchainDev,
            description: "Equips participants with skills in developing dApps and smart contracts on platforms like Ethereum. Topics cover blockchain fundamentals, smart contracts, DeFi, and security.",
            level: "40"
        },*/ 
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
                        <h1>DEVELOPMENT</h1>
                        <h5 style={{textAlign: "justify"}}>A comprehensive development program covers crucial skills for thriving in the digital landscape. Participants learn website and application design, both frontend and backend development, database management, and deployment strategies, preparing them for modern projects.</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={desc} />
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: "3.5rem", marginBottom: "3.5rem"}}>
                <Carousel responsive={responsive}>
                    {development.map((item, index)=>(
                        <Link to={`/guide-me/development/${item.url}`} key={index} style={{ textDecoration: 'none' }}>
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