import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Regionselect from "./Regionselect";
import Community from "./Community";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Dashboard />}> </Route>
        <Route exact path="https://www.ecovader.biz/regionselect" element={<Regionselect />}> </Route>
        <Route exact path="https://www.ecovader.biz/community" element={<Community />}> </Route>
    </Routes>
  );
}

export default App;