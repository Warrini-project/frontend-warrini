import Navar from "../../../../../components/comman/Navbar/Navbar"
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import frontend from "../../../../../assets/guide_me/development/web development/frontend.jpg";
import backend from "../../../../../assets/guide_me/development/web development/backend.jpg";
import desc from "../../../../../assets/guide_me/development/web development/webDevDescription.png";
import { v4 as uuidv4 } from 'uuid';

export default function WebDev(){
    const development = [
        {
          title: "Front end Web Development",
          image: frontend,
          redirectUrl: "frontend development",
          description: "Learn to build responsive, visually appealing web interfaces using HTML, CSS, JavaScript, and popular frameworks like React. Master the essentials of layout, styling, and interactivity to create dynamic user experiences.",
        },
        {
            title: "Back end Web Development",
            redirectUrl: "backend development",
            image: backend,
            description: "Develop the server-side logic for web applications using languages like Python and Node.js. Manage databases, build APIs, and ensure your web applications are secure, scalable, and efficient."
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
                        <h1>WEB DEVELOPMENT</h1>
                        <h5 style={{textAlign: "justify"}}>Equips participants with skills in designing, building, and maintaining websites and web applications, covering frontend and backend development, databases, and deployment.</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={desc} />
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: "3.5rem", marginBottom: "3.5rem"}}>
                <Carousel responsive={responsive}>
                    {development.map((item)=>(
                        <Link to={`/guide-me/development/web-development/${item.redirectUrl}`} key={uuidv4()} style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '25rem', height: '28rem' }} className="trainCard">
                                <Card.Img variant="top" src={item.image} style={{ height: '15rem', objectFit: 'fill' }} />
                                <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Card.Title style={{textAlign: "center", fontSize:"25px", paddingTop: "10px"}}>{item.title}</Card.Title>
                                    <Card.Text style={{ paddingRight: 10, paddingLeft: 10, textAlign: "justify" }}>
                                        {item.description} 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </Carousel>
            </Container>
        </div>    
    );
}