import About from "../components/About";
import Features from "../components/Features";
import Product from "../components/Product";
import Whatsapp from "../components/Whatsapp";
import LandingPage from "../components/LandingPage";
import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";

function Index() {
  return (
    <div className="max-w-screen">
      <Navbar />
      <LandingPage />
      <Canvas />
      <Product template="product" />
      <Canvas />
      <Features />
      <Canvas />
      <Product template="howWorks" />
      <Canvas />
      <About />
      <Whatsapp />
    </div>
  );
}

export default Index;
