import "./App.css";
import Header from "./Components/Content/Header/Header";
import Test from "./Components/Content/Header/Test";
import Headline from "./Components/Content/Headline/Headline";
import HighlightSection from "./Components/Content/HighlightSection/HighlightSection";
import ProductSection from "./Components/Content/ProductSection/ProductSection";
import SliderSection from "./Components/Content/SliderSection/SliderSection";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App relative">
      <NavBar />
      {/* <Header /> */}
      <Test />
      <ProductSection />
      <Headline />
      <SliderSection />
      <HighlightSection />
    </div>
  );
}

export default App;
