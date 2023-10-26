import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productores from "./pages/Productores";

/*import Navbar from "./components/Navbar";
import Empleados from "./pages/Empleados";
import Planilla from "./pages/Planilla";*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Productores" element={<Productores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
