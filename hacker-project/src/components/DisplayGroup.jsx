import { ListGroup, Card } from "react-bootstrap";
//import/access state with edibleparts. See Card title

const DisplayGroup = () => {
  //get filtered results for matching edible parts.
  return (
    <Card className="p-3 rounded">
      <Card.Body>
        <Card.Title as="div">
          <strong>Selected Parts will go here</strong>
          <ListGroup></ListGroup>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default DisplayGroup;

<Card className="p-3 my-3 rounded">
  <Link to={`/product/${product.id}`}>
    {product.image && (
      <Card.Img variant="top" src={product.image} width={100} height={300} />
    )}
  </Link>
  <Card.Body>
    <Link to={`/product/${product.id}`}>
      <Card.Title as="div">
        <strong>{product.title}</strong>
      </Card.Title>
    </Link>
    <Card.Text as="h3">${product.price}</Card.Text>
  </Card.Body>
</Card>;
