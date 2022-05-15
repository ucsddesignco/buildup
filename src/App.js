import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FAQ from "./components/faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
