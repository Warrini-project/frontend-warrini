import cloudImage from "../../../../assets/guide_me/infrastructure_and_operations/cloud-computing.png";
import securityImage from "../../../../assets/guide_me/infrastructure_and_operations/Networking & Security.png";
import devopsImage from "../../../../assets/guide_me/infrastructure_and_operations/devops (1).jpg";
import systemsAdminImage from "../../../../assets/guide_me/infrastructure_and_operations/system-administration.jpg";
import ConnectedNavar from "../../../../components/comman/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import description from "../../../../assets/guide_me/infrastructure_and_operations/infra_description.png";

export default function InfraAndOperationsFields(){
    const InfraAndOperations = [
        {
            title: "Cloud Computing",
            description: "Learn to deploy and manage applications on cloud platforms using IaaS, PaaS, and SaaS.",
            level: "50",
            redirectUrl: "cloud-computing",
            image: cloudImage
        },
        {
            title: "DevOps",
            description: "Automate the software delivery process and enhance collaboration between development and operations.",
            level: "50",
            redirectUrl: "devops",
            image: devopsImage
        },
        {
            title: "Networking & Security",
            description: "Design and maintain secure networks using the latest security protocols and best practices.",
            level: "50",
            redirectUrl: "networking-and-security",
            image: securityImage
        },
        {
            title: "Systems Administration",
            description: "Configure, maintain, and troubleshoot IT systems and operating environments.",
            level: "50",
            redirectUrl: "systems-administration",
            image: systemsAdminImage
        },
    ];    
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3, slidesToSlide: 2 },
        desktop: { breakpoint: { max: 1024, min: 800 }, items: 2 },
        tablet: { breakpoint: { max: 800, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    return(
        <div>
            <ConnectedNavar />
            <Container fluid className="introduction">
                <Row>
                    <Col md={6} className="desc">
                        <h1>Infrastructure and Operations</h1>
                        <h5 style={{ textAlign: "justify" }}>Elevate skills in Infrastructure and Operations. From cloud computing to cybersecurity, our concise courses optimize IT environments. Explore latest trends, master tools for efficiency and security.</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={description} alt="Infra description" />
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                <Carousel responsive={responsive}>
                    {InfraAndOperations.map((item) => (
                        <Link to={`/guide-me/infrastructure-and-operations/${item.redirectUrl}`} key={uuidv4()} style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '25rem', height: '24rem' }} className="trainCard">
                                <Card.Img variant="top" src={item.image} style={{ height: '15rem', objectFit: 'fill' }} />
                                <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Card.Title style={{ textAlign: "center", fontSize: "25px", paddingTop: "10px" }}>{item.title}</Card.Title>
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