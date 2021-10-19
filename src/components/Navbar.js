import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
         <Link className="navbar-brand" to="/">Field Management</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <Link className="btn btn-outline-light" to="/item/add">Add Items</Link>
      </div>
   </nav>
    );
}

export default Navbar;