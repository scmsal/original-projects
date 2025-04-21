import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { veggieObjects } from "../storage.js";
import "../App.css";

const VeggiesList = () => {
  return (
    <Container className="mx-3 w-25">
      <ListGroup>
        {veggieObjects.map((veggie) => (
          <ListGroupItem key={veggie.id} action className="custom-hover">
            {veggie.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default VeggiesList;
