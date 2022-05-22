import logo from './logo.svg';
import './styles/main.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FAQ from "./components/faq";
import WhyApply from "./components/whyapply";
import About from "./components/about";
import Overview from './components/overview';
import Themes from './components/themes';

function App() {
  return (
    <div className="App">
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
