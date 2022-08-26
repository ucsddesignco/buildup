import About from "./pages/About";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
