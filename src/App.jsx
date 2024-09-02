import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import My from "./pages/my/My";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my" element={<My />} />
    </Routes>
  );
};

export default App;
