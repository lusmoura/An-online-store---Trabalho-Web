import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Item from "./screens/Item/Item";

function App() {
  return (
    <div id="app">
      <div id="app-content">
        <Header id="header" />
        <Item />
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
