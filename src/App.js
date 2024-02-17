import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Dashboard />}> </Route>
    </Routes>
  );
}

export default App;
