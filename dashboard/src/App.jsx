import { BrowserRouter, Route, Routes } from "react-router-dom";
//layout
import LayoutAdmin from "./layouts/LayoutAdmin";
import { LayoutAuth } from "./layouts/LayoutAuth";

//pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// pages admin
import Home from "./pages/admin/Home";
import { Error404 } from "./pages/Error404";
import Productores from "./pages/Productores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="productores" element={<Productores />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
