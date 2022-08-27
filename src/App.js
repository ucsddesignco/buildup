import logo from "./logo.svg";
import "./styles/main.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Landing from "./components/landing";
import WhyApply from "./components/whyapply";
import About from "./components/about";
import Overview from "./components/overview";
import Themes from "./components/themes";
import GirlsRising from "./components/articles/girls_rising";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*
      <Landing />
      <About />
      <Overview />
      <Themes />
      <WhyApply />
      <FAQ />
      <Footer />
      */}
      <GirlsRising />
    </div>
  );
}

export default App;
