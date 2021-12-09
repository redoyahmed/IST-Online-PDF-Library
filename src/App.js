import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import CseBook from "./Component/Books/CseBook/CseBook";
import BbaBook from "./Component/Books/BbaBook/BbaBook";
import EceBook from "./Component/Books/EceBook/EceBook";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route exact path="books/eceBooks" element={<EceBook></EceBook>} />
          <Route exact path="books/cseBooks" element={<CseBook></CseBook>} />
          <Route exact path="books/bbaBooks" element={<BbaBook></BbaBook>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
