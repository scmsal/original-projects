import { Container, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import { edibleParts } from "../storage";

const QueryForm = () => {
  const [selectedPart, setSelectedPart] = useState("");

  return (
    <Container className="mx-3 w-25">
      <label className="form-label d-block mb-2" id="ediblePart">
        What part do I want to eat?
      </label>
      <ButtonGroup>
        {edibleParts.map((part, i) => (
          <Button
            key={`edpart-${i}`}
            variant={selectedPart === part ? "success" : "outline-success"}
            onClick={() => setSelectedPart(part)}
          >
            {part}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default QueryForm;
