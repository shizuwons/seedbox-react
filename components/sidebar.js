import Head from 'next/head';
import Router from 'next/router';
import { openNav, closeNav, isEmail } from '../functions/kyc';
import { useEffect } from 'react';
import { registerValidation, contactUsValidation, loginValidation } from '../functions/validators';

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
    // $('.dropdown-toggle').click(function() {
    //     $(this).addClass('navlinkActive');
    //     $('nav-link').not(this)
    // });

    // $('.navigate').click(function(e) {
    //     if($(this).hasClass('signup')) {
    //         $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: white !important;');
    //     } else {
    //         $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C !important;');
    //     }

    //     //e.stopPropagation();
    // });

    $('.how-seedbox').click(function() {
        $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C !important;');
        $('.btncontact').removeAttr('style');
        $('.btnlogin').removeAttr('style');
        $('.learn-more').removeAttr('style');
        $('.signup').removeAttr('style');
    });
    
    $('.learn-more').click(function() {
        $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C !important;');
        $('.btncontact').removeAttr('style');
        $('.btnlogin').removeAttr('style');
        $('.how-seedbox').removeAttr('style');
        $('.signup').removeAttr('style');
    });

    $('.btncontact').click(function() {
        $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C !important;');
        $('.learn-more').removeAttr('style');
        $('.btnlogin').removeAttr('style');
        $('.how-seedbox').removeAttr('style');
        $('.signup').removeAttr('style');
    });

    $('.btnlogin').click(function() {
        $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C !important;');
        $('.learn-more').removeAttr('style');
        $('.btncontact').removeAttr('style');
        $('.how-seedbox').removeAttr('style');
        $('.signup').removeAttr('style');
    });

    $('.signup').click(function() {
        $(this).attr('style', 'font-family: "Proxima Extrabold" !important; color: white !important;');
        $('.learn-more').removeAttr('style');
        $('.btncontact').removeAttr('style');
        $('.how-seedbox').removeAttr('style');
        $('.btnlogin').removeAttr('style');
    });
    
  
    $(document).click(function() {
        $('.dropdown-toggle').removeAttr('style');
    });

      $('#exampleModal1').on('hidden.bs.modal', function () {
          $(".conMainBody").css("filter", "blur(0px)");
          $('.signup').removeAttr('style');
          $('.btnlogin').attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C !important;');
      });
  
      $('#exampleModal1').on('shown.bs.modal', function (e) {
          $("#exampleModal").modal('hide');
          $(".conMainBody").css("filter", "blur(50px)");
          $('.signup').attr('style', 'font-family: "Proxima Extrabold" !important; color: white !important;');

      });
  
      $('#exampleModal').on('shown.bs.modal', function (e) {
          document.getElementById("mySidenav").style.width = "0";
          $(".conMainBody").css("filter", "blur(50px)");
          $("#exampleModal1").modal('hide');
      });

      $('#exampleModal').on('hidden.bs.modal', function (e) {
        $(".conMainBody").css("filter", "blur(0px)");
        $('.btnlogin').removeAttr('style');
    });
  
      $('#contactModal').on('shown.bs.modal', function (e) {
          $(".conMainBody").css("filter", "blur(50px)");
      });
  
      $('#contactModal').on('hidden.bs.modal', function (e) {
          $(".conMainBody").css("filter", "blur(0px)");
          $('.btncontact').removeAttr('style');
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

      $('.txtotp-5').keyup(function() {
        $('.txtotp-6').focus();
    });
  
      $('.signupSubmit').click(function() {
        let validated = registerValidation();
         if(validated) {
            $('.pError').each(function() {
                $(this).addClass('hide');
            });
            let password = $(".password").val();
            let confirm = $(".confirmpassword").val();
            let email = $('.email').val();
            let validEmail = false;
            let validPassword = false;

            if(!isEmail(email)) {
                $('.pErrorEmail').text('This is not a valid email.');
                $('.pErrorEmail').removeClass('hide');
            } else {
                $('.pErrorEmail').addClass('hide');
                $('.pErrorEmail').text('This field is required.');
                validEmail = true;
            }

            if(password !== confirm) {
                $('.pErrorConfirm').text('The passwords do not match.');
                $('.pErrorConfirm').removeClass('hide');
            } else {
                $('.pErrorConfirm').addClass('hide');
                $('.pErrorConfirm').text('This field is required.');
                validPassword = true;
            }

            if(validPassword && validEmail) {
                $('.signup-form').addClass('hide');
                $('.otpform').removeClass('hide');
            }
         } else {
             return false;
         }
      });

      $('.contactSubmit').click(function() {
        let validated = contactUsValidation();
         if(validated) {
            $('.pError').each(function() {
                $(this).addClass('hide');
            });
            let email = $('.contactemail').val();
            let validEmail = false;

            if(!isEmail(email)) {
                $('.pErrorCEmail').text('This is not a valid email.');
                $('.pErrorCEmail').removeClass('hide');
            } else {
                $('.pErrorCEmail').addClass('hide');
                $('.pErrorCEmail').text('This field is required.');
                validEmail = true;
            }

            if(validEmail) {
                alert('Your message has been sent!');
            }
         } else {
             return false;
         }
      });

      $('.loginSubmit').click(function() {
        let validated = loginValidation();
         if(validated) {
            $('.pError').each(function() {
                $(this).addClass('hide');
            });
            let email = $('.loginemail').val();
            let validEmail = false;

            if(!isEmail(email)) {
                $('.pErrorLEmail').text('This is not a valid email.');
                $('.pErrorLEmail').removeClass('hide');
            } else {
                $('.pErrorLEmail').addClass('hide');
                $('.pErrorLEmail').text('This field is required.');
                validEmail = true;
            }

            if(validEmail) {
               // alert('Your message has been sent!');
            }
         } else {
             return false;
         }
      });
  
      $('.otpSubmit').click(function() {
          if(!$('.txtotp-1').val() || !$('.txtotp-2').val() || !$('.txtotp-3').val()  || !$('.txtotp-4').val() || !$('.txtotp-5').val() || !$('.txtotp-6').val()) {
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