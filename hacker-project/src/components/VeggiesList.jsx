import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "../App.css";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { plantNamesList } from "../contants";

const VeggiesList = () => {
  const [selectedVeggie, setSelectedVeggie] = useState("");

  const plantNames = useSelector((state) => state.plants.plantNames);

  // const plantNames = plantNamesList;
  console.log(plantNames);
  return (
    <Container className="mx-3">
      <ListGroup>
        {plantNames.map((plant, index) => (
          <ListGroupItem
            key={`app-${index + 1}`}
            action
            className="custom-hover"
            variant={selectedVeggie === plant ? "success" : "outline-success"}
            onClick={() => setSelectedVeggie(plant)}
          >
            {plant}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default VeggiesList;
