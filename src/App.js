import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FAQ from "./components/faq";
import WhyApply from "./components/whyapply";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WhyApply />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
