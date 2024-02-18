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

function ArrowUp() {
    return <img src="https://i.imgur.com/kBmbPUk.png" width={100} height={50} alt="arrow up" />;
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={350} height={350} alt="ecovader logo" />;
}

function HeaderBg() {
    return <style>{'header {background-color: #236D5E; }' } </style>
}

function Identifier() {
  return (
    <div className = "Identifier">
      <DashboardBg />
      <HeaderBg />
      <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        <br/>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', textDecoration: 'none', fontStyle: 'normal', textTransform: 'none' }}>
            Invasive Species Identifier
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <EcovaderLogo />
        </div>
        </header>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style={{ width: '500px', backgroundColor: '#EF83AD', border: 'none', padding: '20px', color: 'white' }}>
            <a href="https://images.google.com/" style={{ textDecoration: 'none', color: 'inherit'}}>Invasive Species Identifier</a>
        </button>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
            <h1><i>Top Searches</i></h1>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
            <ArrowUp />
         <h1 style={{ marginLeft: '10px' }}>How to remove Garlic Mustard</h1>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
            <ArrowUp />
        <h1 style={{ marginLeft: '10px' }}>Pictures of Common Invasive Plants</h1>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
          <ArrowUp />
         <h1 style={{ marginLeft: '10px' }}>Pictures of Common Invasive Animals</h1>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px' }}>
             <ArrowUp />
         <h1 style={{ marginLeft: '10px' }}>Asian Long Horned Beetle</h1>
        </div>
        <br />
    </div>
  );
}

export default withAuthenticationRequired(Identifier);