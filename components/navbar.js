import Head from 'next/head';
import Router from 'next/router';
import { openNav, closeNav } from '../functions/kyc';
import { useEffect, useState } from 'react';

function Navbar() {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    setLoggedin(localStorage.getItem('logged_in'));

    $(document).ready(function() {
      if(localStorage.getItem('logged_in')) {
        $('.logout').text(localStorage.getItem('sessionEmail'));
      }
    });
  }, []);
    return (
        <div className="container con" style={{padding: '20px 15px'}}>
        <span style={{fontSize: '30px', cursor: 'pointer', position: 'absolute', zIndex: 1111111, color: '#13C95C', display: 'none'}} onClick={openNav} className="span">☰</span>
        <nav className="navbar navbar-expand-md">
          <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="navbar-brand" href="">
            <a href="/" onClick={() => Router.push("/")}><img src="Image/Seedbox-Logo-updated.png" className="img-fluid imgLogo" style={{width: '200px'}}/></a>
          </nav>
          <div className="collapse navbar-collapse" id="collapse">
            <div className="col2 ml-auto">
              <ul className="nav navbar-nav">
              <li><a className="nav-link home-link btnhome" href="/" style={{fontFamily: 'Proxima Bold'}}>HOME</a></li>
              <li className="dropdown how-dropdown">
                  <a className="nav-link how-seedbox how-link dropdown-toggle" data-toggle="dropdown" href="#">HOW DOES SEEDBOX WORK </a>
                  <ul className="dropdown-menu dropdownBox animate slideIn">
                      <li><a className="dropdownItem individual" onClick={() => Router.push("/individual")}>FOR INDIVIDUAL</a></li>
                      <li><a className="dropdownItem work" onClick={() => Router.push("/work")}>AT WORK</a></li>
                      <li><a className="dropdownItem" href="#">PERA</a></li>
                      <li><a className="dropdownItem" href="#">ADVISORY</a></li>
                  </ul>
              </li>
              <li><a className="nav-link products" href="contact.html">PRODUCTS</a></li>
              <li className="dropdown">
                <a className="nav-link learn-more dropdown-toggle" data-toggle="dropdown" href="#">LEARN MORE </a>
                <ul className="dropdown-menu dropdownBox animate slideIn">
                    <li><a className="dropdownItem" href="#">BLOGS</a></li>
                    <li><a className="dropdownItem" href="#">ABOUT US</a></li>
                </ul>
              </li>
              <li><a className="nav-link navigate btncontact" href="contact.html" data-toggle="modal" data-target="#contactModal">CONTACT US</a></li>
              {!loggedin && (
                <li><a className="nav-link navigate btnlogin" href="contact.html" data-toggle="modal" data-target="#exampleModal">LOG IN</a>
                </li>                
              )}
              <li className="dropdown">
                {!loggedin && (
                  <div className="signup-button">
                    <a className="nav-link signup" href="contact.html" data-toggle="modal" data-target="#exampleModal1">SIGN UP</a>
                  </div>
                )}
                {loggedin && (
                <div className="signup-button">
                  {/* <a className="nav-link logout" href="#">LOG OUT</a> */}
                  <a className="nav-link logout dropdown-toggle" data-toggle="dropdown" href="#">Email</a>
                  <ul className="dropdown-menu dropdownBox animate slideIn">
                      <li><a className="dropdownItem" href="/kyc">KYC FORM</a></li>
                      <li><a className="dropdownItem logout-button" href="#">LOG OUT</a></li>
                  </ul>
                </div>               
                )}
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;