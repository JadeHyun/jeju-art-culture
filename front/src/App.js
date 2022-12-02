import Routers from "./pages/Routers";
import NavBar from "./components/NavBar";
import "./app.css";
import "./font.css";
import Camera from "./components/Camera";

function App() {
  return (
    <div className="App">
      <Routers />
      <NavBar></NavBar>
      {/* <Camera /> */}
    </div>
  );
}

export default App;
