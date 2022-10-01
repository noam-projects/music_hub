import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoMatch from './pages/NoMatch';
import HomePage from "./pages/HomePage";
import Player from "./pages/Player";
import Contact from "./pages/Contact";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
