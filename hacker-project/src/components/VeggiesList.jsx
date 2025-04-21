import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { veggieObjects } from "../storage.js";
import "../App.css";
import { useState } from "react";

const VeggiesList = () => {
  const [selectedVeggie, setSelectedVeggie] = useState("");

  return (
    <Container className="mx-3 w-25">
      <ListGroup>
        {veggieObjects.map((veggie) => (
          <ListGroupItem
            key={veggie.id}
            action
            className="custom-hover"
            variant={
              selectedVeggie === veggie.name ? "success" : "outline-success"
            }
            onClick={() => setSelectedVeggie(veggie.name)}
          >
            {veggie.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default VeggiesList;
