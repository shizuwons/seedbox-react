import Head from 'next/head';
import Router from 'next/router';
import { openNav, closeNav } from '../functions/kyc';

function Sidebar() {
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>×</a>
            <a href="#" data-toggle="modal" data-target="#exampleModal">LOG IN</a>
            <a href="index.html">HOME</a>
            <li className="sidebarNav collapsed active" data-toggle="collapse" data-target="#products">
                <a href="#">HOW DOES SEEDBOX WORK <span className="arrow"></span></a>
            </li>
            <ul className="sub-menu collapse sidebarNav-dropdown" id="products">
                <li><a className="" href="#">FOR INDIVIDUAL</a></li>
                <li><a className="" href="#">AT WORK</a></li>
                <li><a className="" href="#">PERA</a></li>
                <li><a className="" href="#">ADVISORY</a></li>
            </ul>
            <a href="#">PRODUCTS</a>
            <li className="sidebarNav collapsed active" data-toggle="collapse" data-target="#learnmore">
                <a href="#">LEARN MORE <span className="arrow"></span></a>
            </li>
            <ul className="sub-menu collapse sidebarNav-dropdown" id="learnmore">
                <li><a className="" href="#">BLOGS</a></li>
            </ul>
            <a href="#" data-toggle="modal" data-target="#contactModal">CONTACT</a>
            <a href="#" data-toggle="modal" data-target="#exampleModal1">SIGN UP</a>
        </div>
    );
}

export default Sidebar;