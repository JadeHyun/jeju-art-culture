import Routers from "./pages/Routers";
import NavBar from "./components/NavBar";
import "./app.css";
import "./font.css";

function App() {
  return (
    <div className="App">
      <Routers />
      <NavBar></NavBar>
    </div>
  );
}

export default App;
