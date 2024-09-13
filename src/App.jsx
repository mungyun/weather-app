import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import My from "./pages/my/My";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </>
  );
};

export default App;
