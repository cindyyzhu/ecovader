import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Regionselect from "./pages/Regionselect";
import Community from "./pages/Community";
import Identifier from "./pages/Identifier";

import { useAuth0 } from "@auth0/auth0-react";  
//import LoginButton from "./components/LoginButton"; 
//import LogoutButton from "./components/LogoutButton"; 
import Profile from "./components/Profile"; 
//import LoginPage from "./pages/LoginPage";

import Loading from './components/Loading';


function App() {
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}> </Route>
        <Route exact path="/regionselect" element={<Regionselect />}> </Route>
        <Route exact path="/community" element={<Community />}> </Route>
        <Route exact path="/identifier" element={<Identifier />}> </Route>
    </Routes>
  );
}

export default App;