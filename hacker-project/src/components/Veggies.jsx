import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { veggieObjects } from "../storage.js";

const Veggies = () => {
  return (
    <Col>
      <ListGroup>
        {veggieObjects.map((veggie) => (
          <ListGroupItem key={veggie.id}>{veggie.name}</ListGroupItem>
        ))}
      </ListGroup>
    </Col>
  );
};

export default Veggies;
