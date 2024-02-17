import "./Dashboard.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function DashboardBg() {
  return <style>{'body {background-color: #BBE3D4; }' } </style>
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={250} height={250} alt="ecovader logo" />;
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
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your email to log-in:"
      />
    </div>
  );
}

function Dashboard() {
  return (
    <div className = "Dashboard">
      <DashboardBg />
      <header className = "flex flex-col gap-4 justify-center items-center">
        <h1 className="text-9xl font-bold text-white stroke-black">Welcome to <i>ecovader!</i></h1>
        <br />
        <EcovaderLogo />
        <h3 className="text-4xl font-bold text-white">Your personal invasive species toolkit.
        </h3>
        <br />
        <button>
          <a href="/regionselect">Region Select</a>
        </button>
        <br />
        <button>
          <a href="/community">Community</a>
        </button>
      </header>
    </div>
  );
}

export default Dashboard;