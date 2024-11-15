import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom'
import Home from "../Components/Home";
import Dashboard from "../Components/Dashboard";
import Login from '../Components/Login'
import AuthUser from "../Components/AuthUser";



const Auth = () => {

    const { token, logout } = AuthUser()
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item ">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>

                        <li className="nav-item ">
                            <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                        </li>


                    </ul>
                </div>
            </nav>

            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>

                </Routes>
            </div>
        </>

    );
}


export default Auth
