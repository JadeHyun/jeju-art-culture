import styled from "styled-components";
import "./app.css";

import Modal from "./components/Modal";
import Routers from "./pages/Routers";

function App() {
  return (
    <Container className="App">
      {/* <Routers /> */}
      <Modal />
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
`;
