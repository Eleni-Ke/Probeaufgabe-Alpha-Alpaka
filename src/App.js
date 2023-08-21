import "./App.css";
import Footer from "./Components/Content/Footer/Footer";
import Header from "./Components/Content/Header/Header";
import Headline from "./Components/Content/Headline/Headline";
import HighlightSection from "./Components/Content/HighlightSection/HighlightSection";
import IconTitleSection from "./Components/Content/IconTitleSection/IconTitleSection";
import ProductSection from "./Components/Content/ProductSection/ProductSection";
import SliderSection from "./Components/Content/SliderSection/SliderSection";
import MegamenuBlog from "./Components/NavBar/MegamenuBlog";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App relative">
      <NavBar />
      <MegamenuBlog />
      <Header />
      <ProductSection />
      <Headline />
      <SliderSection />
      <HighlightSection />
      <IconTitleSection />
      <Footer />
    </div>
  );
}

export default App;
