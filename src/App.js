import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Regionselect from "./pages/Regionselect";
import Community from "./pages/Community";
import Identifier from "./pages/Identifier";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Dashboard />}> </Route>
        <Route exact path="/regionselect" element={<Regionselect />}> </Route>
        <Route exact path="/community" element={<Community />}> </Route>
        <Route exact path="/identifier" element={<Identifier />}> </Route>
    </Routes>
  );
}

export default App;