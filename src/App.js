import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Hero from "./components/hero";
import WhyApply from "./components/whyapply";
import About from "./components/about";
import Overview from './components/overview';
import Themes from './components/themes';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
      <Overview />
      <Themes />
      <WhyApply />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
