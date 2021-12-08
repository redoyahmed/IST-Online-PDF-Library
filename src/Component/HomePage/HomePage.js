import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="background my-0 py-0">
      <div className="container p-5">
        <Form id="searchBar" className="d-flex py-2 ">
          <FormControl id="inputSearch"
            type="search"
            placeholder="Search Your Book"
            className="md-2 w-40 "
            aria-label="Search"
          />
          <Button
            style={{
              marginLeft: "8px",
              padding: "10px",
              fontSize: "25px",
              width: "150px",
              fontWeight: "bold",
              
            }}
            variant="outline-warning "
          >
            Search
          </Button>
        </Form>
        <div className="row my-5">
          <div className="homeButton d-flex col-md-6 col-md-12">
            <button>ECE</button>
            <button>CSE</button>
            <button>BBA</button>
            <button>Diploma</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
