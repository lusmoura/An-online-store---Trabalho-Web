import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";

function App() {
  return (
    <div id="app">
      <div id="app-content">
        <Header id="header" />
        <Home />
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
