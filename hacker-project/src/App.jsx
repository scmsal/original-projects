import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Veggies from "./components/Veggies";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100 m-0 p-0 ">
      <Header />
      <main className="flex-grow-1 pt-5">
        <Container>
          <Veggies />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
