import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../comman/Navbar/Navbar";
import desc from "../../../assets/Careers.png";
import Card from 'react-bootstrap/Card';
import careers_list from "./careers._list";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

export default function Careers(){
    return(
        <>
            <Navbar/>
            <Container fluid className="introduction">
                <Row>
                    <Col md={6} xs={12} className="desc">
                        <h1>Careers</h1>
                        <h5>Are you interested in a career in tech, but are not sure which job is best for you, or how to start preparing for it? We have you covered!</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={desc} className="imageDesc"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ marginTop: 30, display: "flex", flexDirection: "row", gap: 50, paddingLeft: "2.5rem", marginBottom: "2rem", flexWrap: "wrap", justifyContent: "space-around" }}>
                {careers_list.map(item =>(
                <Card key={uuidv4()} style={{ width: '18rem', border: "1px solid #37C6F4", borderRadius: "20px", padding: "10px" }}>
                    <Card.Img variant="top" src={item.image} style={{ objectFit: "fill", marginBottom: "5px", borderRadius: "10px", height: "220px" }}/>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "20px", textAlign: "center", marginBottom: "10px" }}>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body style={{ textAlign: "center" }}>
                        {/*<Card.Link href="#" style={{ textDecoration: "none", color: "#37C6F4" }}>View Details</Card.Link>*/}
                        <Link to={`/careers/${item.title}`} style={{ textDecoration: "none", color: "#37C6F4" }}>View Details</Link>
                    </Card.Body>
                </Card>
                ))}
            </Container>
        </>
    );
}