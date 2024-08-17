import Navar from "../../comman/Navbar/Navbar";
import TrainingCard from "./TrainingCard";
import "./training.css";
import { Row, Col, Container } from "react-bootstrap";
import desc from "../../../assets/trainingandevents.png"
import train1 from "../../../assets/train1.jpg"

export default function Training(){
    return(
        <div>
            <Navar/>
            <Container fluid className="introduction">
                <Row>
                    <Col md={6} xs={12} className="desc">
                        <h1>Training and events</h1>
                        <h5>Explore our upcoming training and events for opportunities to expand your skills and network with industry professionals.</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={desc} className="imageDesc"/>
                    </Col>
                </Row>
            </Container>
            <div className="trainsContainer" style={{ marginTop: 50 }}>
                <TrainingCard url="" name="Introduction to AI" image={train1} description="🚀 Plongez dans le monde de la magie de l'IA avec nous ce lundi à 20h ! 🤖 Rejoignez notre deuxième atelier avec notre incroyable mentor Imen Masmoudi pour une exploration exaltante des idées et de l'innovation." price="FREE" date="10/03/2024" place="Faculty Of Sciences Of Sfax"/>
                <TrainingCard url="" name="Introduction to AI" image={train1} description="🚀 Plongez dans le monde de la magie de l'IA avec nous ce lundi à 20h ! 🤖 Rejoignez notre deuxième atelier avec notre incroyable mentor Imen Masmoudi pour une exploration exaltante des idées et de l'innovation." price="FREE" date="10/03/2024" place="Faculty Of Sciences Of Sfax"/>
            </div>
        </div>
    );
}