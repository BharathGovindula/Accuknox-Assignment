// src/components/Navbar.js

import React from 'react';

function Navbar({ setSearchTerm, openOffcanvas }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"  style={{padding:"0"}}>
            <div className="container-fluid" style={{backgroundColor:"lightgrey",margin:"0"}}>
                <a className="navbar-brand" href="/"><h5 style={{marginTop:"5px"}}>Dashboard</h5></a>
           
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Widgets"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </li>
                    </ul>
                    <button 
                        style={{color:"grey",backgroundColor:"white",boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1",border:"none"}}
                        className="btn btn-primary ms-2" 
                        type="button"
                        onClick={openOffcanvas}
                    >
                        + Add Widget
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
