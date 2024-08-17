import { Container, Row, Col } from "react-bootstrap";
import "./services.css";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdComputer } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import ServiceCard from "./ServiceCard";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

export default function Services(){
    return(
        <section id="services">
            <Container fluid className="services">
                <Container className="services-content">
                    <h1 className="services-heading">
                        OUR SERVICES
                    </h1>
                    <Row style={{ paddingTop: 50 }}>
                        <Col md={4} className="service-card">
                            <ServiceCard icon={<LiaCertificateSolid/>} title="CERTIFICATES" border={true} link="/certificates"/>
                        </Col>
                        <Col md={4} className="service-card">
                            <ServiceCard icon={<FaUserGraduate/>} title="INTERNSHIPS" border={true}/>
                        </Col>
                        <Col md={4} className="service-card">
                            <ServiceCard icon={<MdComputer/>} title="FREELANCE" border={false}/>
                        </Col>
                        <Col md={4} className="service-card" style={{ marginTop: 30 }}>
                            <ServiceCard icon={<MdWorkOutline/>} title="CAREERS" border={true}/>
                        </Col>
                        <Col md={4} className="service-card" style={{ marginTop: 30 }}>
                            <ServiceCard icon={<CgFileDocument/>} title="Resume" border={true} link="/resume"/>
                        </Col>
                        <Col md={4} className="service-card" style={{ marginTop: 30 }}>
                            <ServiceCard icon={<LiaChalkboardTeacherSolid/>} title="Training and Events" border={false} link="/training"/>
                        </Col>                
                    </Row>
                </Container>
            </Container>
        </section>
    )
}