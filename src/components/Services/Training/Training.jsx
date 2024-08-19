import Navar from "../../comman/Navbar/Navbar";
import TrainingCard from "./TrainingCard";
import "./training.css";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import desc from "../../../assets/trainingandevents.png";
import { useEffect, useState } from "react";
import { getDomains, getEvents } from "../../../services/actions/training_and_events/training_and_events";

export default function Training(){
    const [events, setEvents] = useState([]);
    const [domains, setDomains] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    useEffect(()=>{
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        }
        fetchEvents();
    }, [])

    useEffect(() =>{
        const fetchDomains = async () => {
            const data = await getDomains();
            setDomains(data);
        }
        fetchDomains();
    },[])

    // Filter events based on the selected domain
    const filteredEvents = events.filter(event => {
        const matchesDomain = selectedDomain ? event.domain_name === selectedDomain : true;
        const matchesPrice = selectedPrice ? (selectedPrice === "Free" ? event.price === 0 : event.price > 0) : true;
        return matchesDomain && matchesPrice;
    });

    const prices = ["Free", "Paid"]

    // Filter events based on the price
    /*const filterPrice = selectedPrice
        ? events.filter(event => selectedPrice == "Free" ? event.price == 0 : event.price > 0)
        : events;*/

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

            <Container fluid style={{ marginTop: 30 }} className="filters">
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title={selectedDomain || "Domain"} // Show selected domain or prompt
                    onSelect={(domain) => setSelectedDomain(domain)} // Set the selected domain
                    className="dropdown-button"
                >
                    <Dropdown.Item key="all" onSelect={() => setSelectedDomain(null)}>All Domains</Dropdown.Item>
                    {domains.map((domain, index) => (
                        <Dropdown.Item key={index} eventKey={domain.name}>{domain.name}</Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title={selectedPrice || "Price"}
                    onSelect={(price) => setSelectedPrice(price)}
                    className="dropdown-button"
                >
                    <Dropdown.Item key="all" onSelect={() => selectedPrice(null)}>All Prices</Dropdown.Item>
                    {prices.map((price, index) => (
                        <Dropdown.Item key={index} eventKey={price}>{price}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </Container>

            <div className="trainsContainer" style={{ marginTop: 30 }}>
                {
                    filteredEvents.map((event, index) => (
                        <TrainingCard
                            key={index}   
                            url={event.link} 
                            name={event.name}
                            image={event.image} 
                            description={event.description} 
                            price={event.price === 0 ? "FREE" : `${event.price} DT`} 
                            date={event.date.slice(0, 10)}
                            place={event.location}
                        />
                    ))
                }
            </div>
        </div>
    );
}
