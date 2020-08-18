import Head from 'next/head';
import Router from 'next/router';
import { openNav, closeNav } from '../functions/kyc';
import { useEffect } from 'react';

function Sidebar() {
    
    useEffect(() => {
        $(document).ready(function () {
          $(window).scroll(function () { // check if scroll event happened
              if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
                  $(".navbar").css("background-color", "#fafafa"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
              } else {
                  $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
              }
          });
      });
  
      $(".btnlogin").click(function () {
          $(".conMainBody").css("filter", "blur(50px)");
      });
  
      $(".pSignup").click(function () {
          x = 1;
          $("#exampleModal").modal('hide');
      });
  
      $('#exampleModal').on('hidden.bs.modal', function () {
          if (x === 1) {
              $(".conMainBody").css("filter", "blur(50px)");
          }
          else {
              $(".conMainBody").css("filter", "blur(0px)");
          }
  
      });

    if(location.pathname === '/individual') {
        $('.how-dropdown .how-link').attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C;');
        $('.individual').attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C;');
        $('.home-link').removeClass('btnhome');
    }

    if(location.pathname === '/work') {
        $('.how-dropdown .how-link').attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C;');
        $('.work').attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C;');
        $('.home-link').removeClass('btnhome');
    }
  
      // Nav-link click
  
  
      $('#exampleModal1').on('hidden.bs.modal', function () {
          $(".conMainBody").css("filter", "blur(0px)");
  
      });
  
      $('#exampleModal1').on('shown.bs.modal', function (e) {
          $("#exampleModal").modal('hide');
          $(".conMainBody").css("filter", "blur(50px)");
      });
  
      $('#exampleModal').on('shown.bs.modal', function (e) {
          document.getElementById("mySidenav").style.width = "0";
          $("#exampleModal1").modal('hide');
      });
  
      $('#contactModal').on('shown.bs.modal', function (e) {
          $(".conMainBody").css("filter", "blur(50px)");
      });
  
      $('#contactModal').on('hidden.bs.modal', function (e) {
          $(".conMainBody").css("filter", "blur(0px)");
      });
  
      $('.txtotp-1').keyup(function() {
          $('.txtotp-2').focus();
      });
  
      $('.txtotp-2').keyup(function() {
          $('.txtotp-3').focus();
      });
  
      $('.txtotp-3').keyup(function() {
          $('.txtotp-4').focus();
      });
  
      $('.txtotp-4').keyup(function() {
          $('.txtotp-5').focus();
      });
  
      $('.signupSubmit').click(function() {
          $('.signup-form').addClass('hide');
          $('.otpform').removeClass('hide');
      });
  
      $('.otpSubmit').click(function() {
          if(!$('.txtotp-1').val() || !$('.txtotp-2').val() || !$('.txtotp-3').val()  || !$('.txtotp-4').val() || !$('.txtotp-5').val()) {
              $('.errorDiv').removeClass('hide');
              return false;
          }
      });
      }, []);
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>×</a>
            <a href="#" data-toggle="modal" data-target="#exampleModal">LOG IN</a>
            <a href="index.html">HOME</a>
            <li className="sidebarNav collapsed active" data-toggle="collapse" data-target="#products">
                <a href="#">HOW DOES SEEDBOX WORK <span className="arrow"></span></a>
            </li>
            <ul className="sub-menu collapse sidebarNav-dropdown" id="products">
                <li><a className="" onClick={() => Router.push("/individual")}>FOR INDIVIDUAL</a></li>
                <li><a className="" onClick={() => Router.push("/work")}>AT WORK</a></li>
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