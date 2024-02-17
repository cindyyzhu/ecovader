import "./Regionselect.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function DashboardBg() {
  return <style>{'body {background-color: #BBE3D4; }' } </style>
}

function HeaderBg() {
    return <style>{'header {background-color: #BBE3D4; }' } </style>
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={250} height={250} alt="ecovader logo" />;
}

function Bgleaf() {
    return <img src="https://i.imgur.com/yxYIv6f.png" width={200} height={100} alt="leaf background" />;
}

function Regionselect() {
  return (
    <div className = "Region Select">
      <DashboardBg />
      <header className = "flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl text-gray-900 font-bold no-underline not-italic normal-case">Welcome to <i>ecovader!</i></h1>
        <br />
        <HeaderBg />
        <Bgleaf />
        <Bgleaf />
    </header>
        <h1 className="text-4xl font-bold text-white">Your personal invasive species toolkit.
        </h1>
        <br />
        <br />
        <button>
            <a href="http://localhost:3001/community">Toronto, ON</a>
        </button>
        <br />
        <br />
        <button>
            <a href="http://localhost:3001/community">Vaughan, ON</a>
        </button>
        <br />
        <br />
        <button>
            <a href="http://localhost:3001/community">Missisauga, ON</a>
        </button>
        <br />
        <br />
        <h2 className="text-4xl font-bold text-white">
            Don't see your region? <i>Locate on map.</i>
        </h2>
      
    </div>
  );
}

export default Regionselect;