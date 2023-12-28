import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Head from "./Head/Head";
import Hero from "./Hero/Hero";
import Description from "./Description/Description";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Hero />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
