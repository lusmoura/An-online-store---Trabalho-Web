import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./screens/Signup";
// import Login from "./screens/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Signup />
        <Footer />
      </div>
    </div>
  );
}

export default App;
