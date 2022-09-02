import About from "./pages/About";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Showcase from "./pages/Showcase";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      {" "}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
