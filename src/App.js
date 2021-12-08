import Books from "./Component/Books/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/books" element={<Books></Books>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
