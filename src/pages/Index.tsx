import About from "../components/About";
import Features from "../components/Features";
import Product from "../components/Product";
import Whatsapp from "../components/Whatsapp";
import LandingPage from "./LandingPage";

function Index() {
  return (
    <>
      <LandingPage />
      <Product template="product" />
      <Features />
      <Product template="howWorks" />
      <About />
      <Whatsapp />
    </>
  );
}

export default Index;
