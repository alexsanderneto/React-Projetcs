import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

//Componentes

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Movies LIB</h2>
      <Outlet />
    </div>
  );
}

export default App;
