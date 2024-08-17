import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "./header.css";
import HeaderImage from "../../../assets/enlarge_header.png"
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Header(){
    return(
        <section id="home">
            <Container fluid className="header">
                <Container className="header-content">
                    <Row>
                        <Col md={5} className="header-header">
                            <h1 className="heading wow animate__bounceIn" data-wow-delay="0.5s">
                                Welcome To
                                <strong className="main-name"> Warrini.tn</strong>
                            </h1>
                            <div style={{ textAlign: "left" }}>
                                <Type/>
                            </div>
                            <div style={{ textAlign: "left", paddingTop: 20 }}>
                                <a href="#about" className="scroll" style={{ cursor: "pointer" }}>Elevate your journey <AiOutlineArrowDown/></a>
                            </div>
                        </Col>
                        <Col md={7}>
                            <img src={HeaderImage} alt="home pic" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}