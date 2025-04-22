import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VeggiesList from "./components/VeggiesList";
import { Row } from "react-bootstrap";
import QueryForm from "./components/QueryForm";
import DisplayGroup from "./components/DisplayGroup";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 pt-5">
        <Row>
          <VeggiesList />
          <QueryForm />
          <DisplayGroup />
        </Row>
      </main>
      <Footer />
    </div>
  );
}

export default App;
