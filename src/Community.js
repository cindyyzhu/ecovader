import "./Community.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

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
        placeholder="Search for a topic or subject!"
      />

      {/* Display the current input value */}
      <p>You typed: {inputValue}</p>
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

function Regionselect() {
  return (
    <div className = "Dashboard">
      <DashboardBg />
      <header className = "flex flex-col gap-4 justify-center items-center">
        <h1 className="text-9xl font-bold text-white stroke-black">Community Forum</h1>
        <br />
        <InputComponent />
        <h3 className="text-4xl font-bold text-white">Your personal invasive species toolkit.
        </h3>
        <br />
        <button>
            <a>Start Searching</a>
        </button>
      </header>
    </div>
  );
}

export default Regionselect;