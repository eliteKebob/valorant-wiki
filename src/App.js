import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weapons, Maps, Agents, Landing, Skins, Error } from "./pages";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
