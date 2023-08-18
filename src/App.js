import "./App.css";
import Header from "./Components/Content/Header/Header";
import Test from "./Components/Content/Header/Test";
import Headline from "./Components/Content/Headline/Headline";
import ProductSection from "./Components/Content/ProductSection/ProductSection";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header /> */}
      <Test />
      <ProductSection />
      <Headline />
    </div>
  );
}

export default App;
