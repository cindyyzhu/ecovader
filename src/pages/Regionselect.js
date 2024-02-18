import "./Regionselect.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function DashboardBg() {
  return <style>{'body {background-color: #BBE3D4; }' } </style>
}

function HeaderBg() {
    return <style>{'header {background-color: #0B3B36; }' } </style>
}

function EcovaderLogo() {
  return <img src="https://i.imgur.com/IXuOuum.png" width={250} height={250} alt="ecovader logo" />;
}

function Bgleaf() {
    return <img src="https://i.imgur.com/HHTZdTZ.png" width={200} height={100} alt="leaf background" />;
}

function Regionselect() {
  return (
    <div className = "Region Select">
      <DashboardBg />
      <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', textDecoration: 'none', fontStyle: 'normal', textTransform: 'none' }}>
            Welcome to <i>ecovader!</i>
      </h1>       
       <br />
        <HeaderBg />
        <Bgleaf />
       <br />
    </header>
        <h1 style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
          Regions near you...
        </h1>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button style={{ width: '210px', backgroundColor: '#EF83AD', border: 'none', padding: '10px', color: 'white' }}>
            <a href="/community" style={{ textDecoration: 'none', color: 'inherit'}}>
                 Toronto, ON
             </a>
          </button>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button style={{ width: '210px', backgroundColor: '#EF83AD', border: 'none', padding: '10px', color: 'white' }}>
            <a href="/community"  style={{ textDecoration: 'none', color: 'inherit'}}>Vaughan, ON</a>
        </button>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style = {{width: '210px',  backgroundColor: '#EF83AD', border: 'none', padding: '10px', color: 'white'}}>
            <a href="/community" style={{ textDecoration: 'none', color: 'inherit'}}>Missisauga, ON</a>
        </button>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h2 className="text-4xl font-bold text-white">
            Don't see your region? 
        </h2>
        <br />
        <h2 style={{ color: '#EF83AD', marginLeft: '10px' }}> <i style={{ color: '#EF83AD' }}>Locate on map.</i></h2>
        </div>
    </div>
  );
}

export default Regionselect;