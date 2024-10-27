import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";
import { Component, createRef } from "react";
import emailjs from "@emailjs/browser";

class Contact extends Component{
    constructor(){
        super();
        this.form = createRef();
    }
    sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this.form.current,
            "YOUR_USER_ID"
        ).then(
            (result)=>{
                console.log(result.text);
            },
            (error)=>{
                console.log(error.text);
            }
        );
        e.target.reset();
    }
    render(){
        const isSmallScreen = window.innerWidth < 576;
        return(
            <section id="contact" style={{ marginBottom: isSmallScreen ? 50: 0 }}>
                <Container fluid className="contact">
                    <Container className="contact-content">
                        <Row style={{ paddingTop: 100 }}>
                            <Col md={6}>
                                <h1>CONTACT US</h1>
                                <br/>
                                <form ref={this.form} onSubmit={this.sendEmail} action="">
                                    <input type="text" name="name" placeholder="Your Full Name" required/>
                                    <input type="email" name="email" placeholder="Your Email" required/>
                                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                                    <button type="submit" className="contact-btn">Send Message</button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        );
    }
}
export default Contact