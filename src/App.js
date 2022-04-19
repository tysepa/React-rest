import FooterBlock from "./components/footer-and-nav-template/FooterBlock";
import NavBar from "./components/footer-and-nav-template/NavBar";
import Login from "./components/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
        </Routes>
        <FooterBlock />
      </div>
    </BrowserRouter>
  );
}

export default App;
