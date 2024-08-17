import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ServiceCard({ icon, title, border, link }){
    return(
        <Card className={border ? "text-center borderRight" : "text-center"}>
            <Card.Header>{icon}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted"><Link to={link}><Button variant="primary">Explore</Button></Link></Card.Footer>
        </Card>
    )
}

ServiceCard.propTypes = {
    icon: PropTypes.element.isRequired, // Define the validation for the 'icon' prop.
    title: PropTypes.string.isRequired,
    border: PropTypes.bool,
    link: PropTypes.string,
};