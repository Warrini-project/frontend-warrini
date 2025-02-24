import Navar from "../../../../components/comman/Navbar/Navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
/*Web Development assets*/
import web from "../../../../assets/guide_me/development/web development/webDevDescription.png";
import frontend from "../../../../assets/guide_me/development/web development/frontend.jpg";
import backend from "../../../../assets/guide_me/development/web development/backend.jpg";
/*Mobile Development assets*/
import mobile from "../../../../assets/guide_me/development/mobile development/mobiledevdescription.png";
import android from "../../../../assets/guide_me/development/mobile development/androiddev.png";
import ios from "../../../../assets/guide_me/development/mobile development/iosdev.jpg";
import cross from "../../../../assets/guide_me/development/mobile development/Cross-Development-App-Development.jpg";
/*Software Development assets*/
import software from "../../../../assets/guide_me/development/software development/softwaredev.png";
import desktopAppImage from "../../../../assets/guide_me/development/software development/desktop-application.png";
import systemsProgrammingImage from "../../../../assets/guide_me/development/software development/system-programming.jpg";
import embeddedSystemsImage from "../../../../assets/guide_me/development/software development/Embedded Systems Development.jpg";
import devOpsImage from "../../../../assets/guide_me/development/software development/DevOps-Automation.png";
import cloudNativeImage from "../../../../assets/guide_me/development/software development/cloud-development.jpg";

export default function DynamicDevFields(){
    const developmentData = {
        "web development": {
            title: "Web Development",
            description: "Equips participants with skills in designing, building, and maintaining websites and web applications, covering frontend and backend development, databases, and deployment.",
            image: web,  // Example image for description
            fields: [
                {
                    title: "Front end Web Development",
                    image: frontend,
                    redirectUrl: "frontend development",
                    description: "Learn to build responsive, visually appealing web interfaces using HTML, CSS, JavaScript, and popular frameworks like React."
                },
                {
                    title: "Back end Web Development",
                    image: backend,
                    redirectUrl: "backend development",
                    description: "Develop the server-side logic for web applications using languages like Python and Node.js."
                }
            ]
        },
        "mobile development": {
            title: "Mobile Development",
            description: "Learn how to build apps for mobile devices, mastering iOS, Android, or cross-platform frameworks like Flutter and React Native.",
            image: mobile,
            fields: [
                /*{
                    title: "iOS Development",
                    image: ios, // Replace with iOS-related image
                    redirectUrl: "ios development",
                    description: "Learn how to build robust iOS apps using Swift and Objective-C, with guidance on UI, functionality, and app store deployment."
                },*/
                {
                    title: "Android Development",
                    image: android, // Replace with Android-related image
                    redirectUrl: "android development",
                    description: "Build feature-rich Android applications using Kotlin and Java. Understand the Android architecture and app lifecycle."
                },
                /*{
                    title: "Cross-Platform Development",
                    image: cross,
                    redirectUrl: "cross-platform development",
                    description: "Learn how to build one application for many platforms using one code base.",
                }*/
            ]
        },
        "software development": {
            title: "Software Development",
            description: "Equips participants with skills in building software for various platforms, including desktop, embedded systems, cloud, and more, while covering tools, programming languages, and methodologies.",
            image: software,
            fields: [
                {
                    title: "Desktop Application Development",
                    image: desktopAppImage, // Add your image here
                    redirectUrl: "desktop-application-development",
                    description: "Learn to build desktop software for Windows, macOS, and Linux using C#, Java, or Python.",
                },
                {
                    title: "Systems Programming",
                    image: systemsProgrammingImage, // Add your image here
                    redirectUrl: "systems-programming",
                    description: "Develop low-level software like operating systems using C, C++, Rust, or Go.",
                },
                /*{
                    title: "Embedded Systems Development",
                    image: embeddedSystemsImage, // Add your image here
                    redirectUrl: "embedded-systems-development",
                    description: "Write software for microcontrollers and hardware using C and Assembly.",
                },
                {
                    title: "DevOps & Automation",
                    image: devOpsImage, // Add your image here
                    redirectUrl: "devops-and-automation",
                    description: "Automate software pipelines with tools like Jenkins and Docker.",
                },
                {
                    title: "Cloud-Native Software Development",
                    image: cloudNativeImage, // Add your image here
                    redirectUrl: "cloud-native-software-development",
                    description: "Build scalable cloud applications with AWS, Google Cloud, or Azure.",
                }*/
            ]
        },
        // Similarly, add other development fields (software, game, blockchain)
        /*"software-development": {
            title: "Software Development",
            description: "Learn to design, develop, and maintain software applications using various programming languages, methodologies, and tools.",
            image: software,
            fields: [
                {
                    title: "Software Engineering",
                    image: software,  // Replace with software engineering image
                    redirectUrl: "software-engineering",
                    description: "Gain skills in software design, architecture, and the development process for creating scalable applications."
                },
                // Other software development sub-fields
            ]
        },
        "game-development": {
            title: "Game Development",
            description: "Master the skills needed to create interactive games using game engines such as Unity and Unreal Engine.",
            image: game,
            fields: [
                {
                    title: "Game Design",
                    image: game,  // Replace with game design image
                    redirectUrl: "game-design",
                    description: "Learn the art and science behind designing interactive and engaging games."
                }
            ]
        },
        "blockchain-development": {
            title: "Blockchain Development",
            description: "Explore how to develop decentralized applications (dApps) using blockchain technology, including smart contract development.",
            image: blockchain,
            fields: [
                {
                    title: "Smart Contract Development",
                    image: blockchain,  // Replace with smart contract image
                    redirectUrl: "smart-contract-development",
                    description: "Learn to develop and deploy smart contracts on Ethereum using Solidity."
                }
            ]
        }*/
    };
    const { field } = useParams(); // Get dynamic field from URL
    const developmentContent = developmentData[field]; // Load content based on the selected field

    if (!developmentContent) {
        return <div>Page Not Found</div>;
    }

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3, slidesToSlide: 2 },
        desktop: { breakpoint: { max: 1024, min: 800 }, items: 2 },
        tablet: { breakpoint: { max: 800, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div>
            <Navar />
            <Container fluid className="introduction">
                <Row>
                    <Col md={6} className="desc">
                        <h1>{developmentContent.title}</h1>
                        <h5 style={{ textAlign: "justify" }}>{developmentContent.description}</h5>
                    </Col>
                    <Col md={6} className="imgDesc">
                        <img src={developmentContent.image} alt={developmentContent.title} />
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: "3.5rem", marginBottom: "3.5rem" }}>
                <Carousel responsive={responsive}>
                    {developmentContent.fields.map((item) => (
                        <Link to={`/guide-me/development/${field}/${item.redirectUrl}`} key={uuidv4()} style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '25rem', height: '24rem' }} className="trainCard">
                                <Card.Img variant="top" src={item.image} style={{ height: '15rem', objectFit: 'fill' }} />
                                <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <Card.Title style={{ textAlign: "center", fontSize: "25px", paddingTop: "10px" }}>{item.title}</Card.Title>
                                    <Card.Text style={{ paddingRight: 10, paddingLeft: 10, textAlign: "center" }}>
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