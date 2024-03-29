import "./Dashboard.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function DashboardBg() {
  return <style>{'body {background-color: #BBE3D4; }' } </style>
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={500} height={420} alt="ecovader logo" />;
}

function InputComponent() {
  // Declare state variables to hold input values
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Input field with an onChange event */}
      <input
        style={{
          width: '60%',
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
        placeholder="Enter your email address to continue: "
      />
    </div>
  );
}

function HeaderBg() {
    return <style>{'header {background-color: #236D5E; }' } </style>
}

function Dashboard() {
  return (
    <div className = "Dashboard">
      <DashboardBg />
      <HeaderBg />
      <header className = "flex flex-col gap-4 justify-center items-center">
        <br />
        <EcovaderLogo />
        <h1 className="text-9xl font-bold text-white stroke-black">
          Together We Thrive: <i>Community-Led Solutions to Invasive Species!</i>
        </h1>
        <br />
        </header>
        <br />
        <br />
        <button style={{ width: '260px', backgroundColor: '#EF83AD', border: 'none', padding: '10px', color: 'white'}}>
          <a href="/regionselect" style={{ textDecoration: 'none', color: 'inherit' }}>Continue to Web!</a>
        </button>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style={{ width: '260px', backgroundColor: '#EF83AD', border: 'none', padding: '10px', color: 'white' }}>
          <a href="https://www.ecovader-mobile.biz" style={{ textDecoration: 'none', color: 'inherit' }}>See mobile version?</a>
        </button>
        </div>
        <br />
      
    </div>
  );
}

export default withAuthenticationRequired(Dashboard);