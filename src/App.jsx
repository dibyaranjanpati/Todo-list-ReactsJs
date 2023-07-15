import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import About from "./Components/About";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div
      className="d-flex flex-column bg-info"
      style={{ height: "100%", minHeight: "100vh", width: "100vw" }}
    >
      <Header title={"My Todo List"} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/about"
          element={
            <>
              <About />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
