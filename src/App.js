import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FAQ from "./components/faq";
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
