import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CiCalendarDate } from "react-icons/ci";
import { MdPlace } from "react-icons/md";

export default function TrainingCard(props) {
  return (
    <Link to={props.url} target='blank' className='cardLink'>
        <Card style={{ width: '18rem' }} className='certifCard'>
            <Card.Img className='cardImg' variant="top" src={props.image} />
            <Card.Body style={{height: 60}}>
                <Card.Title className='cardTitle'>{props.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='caracts'><CiCalendarDate/> {props.date}</ListGroup.Item>
                <ListGroup.Item className='caracts'><MdOutlinePriceChange/> {props.price}</ListGroup.Item>
                <ListGroup.Item className='caracts'><MdPlace/> {props.place}</ListGroup.Item>
            </ListGroup>
        </Card>
    </Link>
  );
}

TrainingCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
};