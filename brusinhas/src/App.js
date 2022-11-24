import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Signup from "./screens/Signup/Signup";

function App() {
  return (
    <div id="app">
      <div id="app-content">
        <Header id="header" />
        <Signup />
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
