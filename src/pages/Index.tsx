import {
  About,
  Canvas,
  Features,
  Landing,
  Navbar,
  Product,
  Whatsapp,
} from "../components";

function Index() {
  return (
    <div className="max-w-screen">
      <Navbar />
      <Landing />
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
