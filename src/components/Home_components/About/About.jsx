import { Col, Container, Row } from "react-bootstrap";
import "./about.css";
import { IoIosArrowForward } from "react-icons/io";

export default function About(){
    return(
        <section id="about">
            <Container fluid className="about">
                <Container className="about-content">
                    <Row>
                        <Col md={3}></Col>
                        <Col md={9} className="about-text">
                            <p className="about-body wow animate__bounceIn" data-wow-delay="0.5s">
                                At <span className="title">Warrini.tn</span>, 
                                <br/>
                                we are on a mission to empower students and professionals with the tools they need to navigate their educational and career journeys.
                                <br/>
                                Our platform is designed to provide valuable resources, guidance, and opportunities to help you succeed in the ever-evolving world of education and professions.
                            </p>
                            <a className="about-btn" href="#">Explore<IoIosArrowForward/></a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}