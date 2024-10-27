import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdOutlinePriceChange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CertifCard(props) {
  return (
    <Link to={props.url} target='blank' className='cardLink'>
        <Card style={{ width: '18rem' }} className='certifCard'>
            <Card.Img className='cardImg' variant="top" src={props.image} />
            <Card.Body>
                <Card.Title className='cardTitle'>{props.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='caracts'>{props.platformIcon} {props.platform}</ListGroup.Item>
                <ListGroup.Item className='caracts'><MdOutlinePriceChange/> {props.price}</ListGroup.Item>
                <ListGroup.Item className='caracts'>{props.rate} <FaStar className='certifRate'/><FaStar className='certifRate'/><FaStar className='certifRate'/><FaStar className='certifRate'/><FaStarHalfAlt className='certifRate'/> / {props.level}</ListGroup.Item>
            </ListGroup>
        </Card>
    </Link>
  );
}

CertifCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    platformIcon: PropTypes
};