import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom'
import Home from "../Components/Home";
import Login from "../Components/Login";

import Registration from "../Components/Registration";



const Guest = () => {
    
  
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration">Registration</Link>
              </li>
              
            </ul>
          </div>
        </nav>
  
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            
          </Routes>
        </div>
      </>
  
    );
  }

export default Guest