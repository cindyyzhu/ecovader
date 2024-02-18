import "./Community.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";



function InputComponent() {
  // Declare state variables to hold input values
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', width: '80%' }}>
      <input
        style={{
          width: '200%',
          height: '80%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '10px',
          border: '0.5px solid #0B3B36',
          boxShadow: '0px 0px 10px 0px #0B3B36',
          boxSizing: 'border-box',
          textAlign: 'left',
        }}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for species and discussions: "
      />
    </div>
  );
}

function DashboardBg() {
  return <style>{'body {background-color: #BBE3D4; }' } </style>
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={250} height={250} alt="ecovader logo" />;
}

function Bgleaf() {
    return <img src="https://i.imgur.com/JDRvyYe.jpg" width={200} height={100} alt="leaf background" />;
}

function FoundSpecies() {
  return <img src="https://i.imgur.com/YAxYD0F.jpg" width={800} height={400} alt="found species" />;
}

function FoundSpecies2() {
  return <img src="https://i.imgur.com/GAUDnqh.jpg" width={800} height={400} alt="found species" />;
}

function FoundSpecies3() {
  return <img src="https://i.imgur.com/wxb2SbD.png" width={800} height={400} alt="found species" />;
}

function HeaderBg() {
    return <style>{'header {background-color: #0B3B36; }' } </style>
}

function FooterBg() {
    return <style>{'footer {background-color: #0B3B36; }' } </style>
}

function AddPost(){
  return<img src="https://i.imgur.com/zU9gJd4.png" width={190} height={100} alt="add post" />;
}


function Community() {
  return (
    <div className = "Community">
      <DashboardBg />
      <HeaderBg />
      <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        <br/>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', textDecoration: 'none', fontStyle: 'normal', textTransform: 'none' }}>
          Community Forum
        </h1>
        <br/>
        </header>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <InputComponent />
        <br />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FoundSpecies />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FoundSpecies2 />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FoundSpecies3 />
        </div>
        <br />
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FooterBg />
        <AddPost />
        </div>

        <br />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style={{ width: '300px', backgroundColor: '#EF83AD', border: 'none', padding: '10px', color: 'white' }}>
            <a href="/Identifier" style={{ textDecoration: 'none', color: 'inherit'}}>Invasive Species Identifier</a>
        </button>
        </div>
        <br />
      
    </div>
  );
}

export default withAuthenticationRequired(Community);