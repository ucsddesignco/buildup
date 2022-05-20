import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
