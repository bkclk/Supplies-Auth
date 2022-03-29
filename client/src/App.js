import GlobalStyle from "./theme/GlobalStyle";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import SupplyList from "./components/SupplyList";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="supplies" element={<SupplyList />} />
              <Route path="basket" element={<Basket />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
