import { Container } from "react-bootstrap";
import Navar from "../../comman/Navbar/Navbar";
import "./freelance.css"

export default function Freelance(){
    return(
        <div>
            <Navar/>
            <Container style={{textAlign: "center", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h1>Welcome To Warrini.tn Freelance Section</h1>
                <h4>Empowering Freelancers, Connecting Projects</h4>
                <br/>
                <h4>Join our vibrant community and unlock your potential today</h4>
                <br/>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"3rem"}}>
                    <button className="freelancer-btn">Find Jobs</button>
                    <button className="client-btn">Post a Job</button>
                </div>
            </Container>
        </div>
    );
}