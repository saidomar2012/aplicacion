import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productores from "./pages/productores";
import Empleados from "./pages/Empleados";

function App() {
  return (
    
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
          <Routes>
            <Route path="/productores" element={<Productores />} />
            <Route path="/Empleados" element={<Empleados />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
