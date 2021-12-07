import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="background">
      <div>
        <Form className="d-flex ">
          <FormControl
            type="search"
            placeholder="Search"
            className="md-2 w-50"
            aria-label="Search"
          />
          <Button
            style={{ marginLeft: "5px", fontSize: "20px" }}
            variant="outline-warning "
          >
            Search
          </Button>
        </Form>
        <div>
          <Button>ECE</Button>
          <Button>CSE</Button>
          <Button>BBA</Button>
          <Button>Diploma</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
