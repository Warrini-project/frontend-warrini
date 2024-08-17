import Navar from "../../components/comman/Navbar/Navbar";
import video from "../../assets/computer studio background video.mp4";
import { useEffect } from "react";
import "./guide.css";
import developmentImg from "../../assets/development.jpg";
import data from "../../assets/data_and_analytics.jpg";
import infra from "../../assets/infra.jpg";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function GuideMe(){
    const topics=[
        {
            link: "development",
            title: "Development",
            image: developmentImg,
            description: "Welcome to [Service Name], where you master diverse IT development areas. We empower you with skills to thrive in the digital landscape."
        },
        {
            link: "data-and-analytics",
            title: "Data and Analytics",
            image: data,    
            description: "Master data and analytics with concise courses. Explore AI, data science, and machine learning. Gain expertise to extract insights from complex datasets."
        },
        {
            link: "infrastructure-and-operations",
            title: "Infrastructure and Operations",
            image: infra,
            description: "Elevate skills in Infrastructure and Operations. From cloud computing to cybersecurity, our concise courses optimize IT environments. Explore latest trends, master tools for efficiency and security."
        }
    ]
    useEffect(() => {
        // Autoplay the video after the component mounts
        const video = document.getElementById('background-video');
        video.play().catch(error => {
          // Handle autoplay error (e.g., due to browser restrictions)
          console.error('Autoplay failed:', error);
        });
      }, []);
    return(
        <div className="guideMe">
            <Navar className="guideMeNavbar" isGuideMe={true}/>
            <section className="video-section">
                <video id="background-video" loop muted autoPlay>
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="video-overlay">
                    <h1>Welcome to the <span className="name">Guide Me</span> Section!</h1>
                    <p>Embark on a journey of learning and exploration in the dynamic world of computer science.</p>
                </div>
            </section>
            <section className="tree-section">
                <h1>START YOUR JOURNEY</h1>
                <p>Select your skill and start the journey !</p>
                <div className="container devJourney">
                {topics.map((topic,index)=>(
                        <Link to={`/guide-me/${topic.link}`} key={index} style={{textDecoration: 'none'}}>
                            <Card style={{ width: '25rem', height: '30rem' }} className="trainCard">
                              <Card.Img variant="top" src={topic.image} style={{ height: '15rem', objectFit: 'fill' }} />
                              <Card.Body style={{padding: "20px"}}>
                                <Card.Title style={{textAlign: "center", fontSize:"25px", marginTop: "10px"}}>{topic.title}</Card.Title>
                                <Card.Text style={{ padding: 10, textAlign: "justify", paddingBottom: 0 }}>
                                  {topic.description} 
                                </Card.Text>
                              </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}