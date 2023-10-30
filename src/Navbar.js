import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
  const [isUserDetailsCorrect, setisUserDetailsCorrect] = useState(true);
  const navigate = useNavigate();
  const loginUser = () => {
      if (isUserDetailsCorrect) {
        navigate("/");
      }
  };

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand"> <img src = "https://www.royalenfield.com/content/dam/royal-enfield/usa/logos/logo.svg" width = "120px" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Employees">Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ProductDetails">ProductDetails</Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = '/Form'>Login</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
};

export default Navbar;