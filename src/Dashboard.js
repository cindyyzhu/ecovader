import "./Dashboard.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function DashboardBg() {
  return <style>{'body {background-color: #BBE3D4; }' } </style>
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={250} height={250} alt="ecovader logo" />;
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
            <a href="https://lens.google.com/search">Start Searching</a>
        </button>
        <button>
          <a href="http://localhost:3001/regionselect">Region Select</a>
        </button>
        <button>
          <a href="http://localhost:3001/community">Community</a>
        </button>
      </header>
    </div>
  );
}

export default Dashboard;