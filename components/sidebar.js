import Head from 'next/head';
import Router from 'next/router';
import { openNav, closeNav, isEmail, isMobileNumber } from '../functions/kyc';
import { useEffect, useState } from 'react';
import { registerValidation, contactUsValidation, loginValidation } from '../functions/validators';
import axios from 'axios';
import Cookie from 'js-cookie';

function Sidebar() {
    const [loggedin, setLoggedin] = useState(false);    
    useEffect(() => {
        setLoggedin(localStorage.getItem('logged_in'));

        $(document).ready(function () {
          $(window).scroll(function () { // check if scroll event happened
              if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
                  $(".navbar").css("background-color", "#fafafa"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
              } else {
                  $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
              }
          });
      });

      Cookie.remove('otp1');
      Cookie.remove('otp2');
      Cookie.remove('otp3');
      Cookie.remove('otp4');
      Cookie.remove('otp5');
      Cookie.remove('otp6');
  
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

    if(location.pathname === '/kyc') {
        $('.logout').siblings('.dropdown-menu li a').attr('style', 'font-family: "Proxima Extrabold" !important; color: #13C95C;');
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
      });
  
      $('#termsModalHome').on('shown.bs.modal', function (e) {
        $(".conMainBody").css("filter", "blur(50px)");
    });

    $('#termsModalHome').on('hidden.bs.modal', function (e) {
        $(".conMainBody").css("filter", "blur(0px)");
    });

    $('#privacyModalHome').on('shown.bs.modal', function (e) {
        $(".conMainBody").css("filter", "blur(50px)");
    });

    $('#privacyModalHome').on('hidden.bs.modal', function (e) {
        $(".conMainBody").css("filter", "blur(0px)");
    });

      $('.txtotp-1').on('input keypress', function(event) {   
        if (event.type == "keypress" && (event.shiftKey || event.which <= 47 || event.which >= 58))
        return false; 

        if (event.currentTarget.value.length >= 1)
        Cookie.set('otp1', $(this).val());
        $('.txtotp-2').focus();
      });

      $('.txtotp-2').on('input keypress', function(event) {   
        if (event.type == "keypress" && (event.shiftKey || event.which <= 47 || event.which >= 58))
        return false; 

        if (event.currentTarget.value.length >= 1)
        Cookie.set('otp2', $(this).val());
        $('.txtotp-3').focus();
      });

      $('.txtotp-3').on('input keypress', function(event) {   
        if (event.type == "keypress" && (event.shiftKey || event.which <= 47 || event.which >= 58))
        return false; 

        if (event.currentTarget.value.length >= 1)
        Cookie.set('otp3', $(this).val());
        $('.txtotp-4').focus();
      });

      $('.txtotp-4').on('input keypress', function(event) {   
        if (event.type == "keypress" && (event.shiftKey || event.which <= 47 || event.which >= 58))
        return false; 

        if (event.currentTarget.value.length >= 1)
        Cookie.set('otp4', $(this).val());
        $('.txtotp-5').focus();
      });

      $('.txtotp-5').on('input keypress', function(event) {   
        if (event.type == "keypress" && (event.shiftKey || event.which <= 47 || event.which >= 58))
        return false; 

        if (event.currentTarget.value.length >= 1)
        Cookie.set('otp5', $(this).val());
        $('.txtotp-6').focus();
      });

      $('.txtotp-6').on('input keypress', function(event) {   
        if (event.type == "keypress" && (event.shiftKey || event.which <= 47 || event.which >= 58))
        return false; 

        if (event.currentTarget.value.length >= 1)
        Cookie.set('otp6', $(this).val());
      });
  
    //   $('.txtotp-2').keypress(function() {
    //       $('.txtotp-3').focus();
    //   });
  
    //   $('.txtotp-3').keypress(function() {
    //       $('.txtotp-4').focus();
    //   });
  
    //   $('.txtotp-4').keypress(function() {
    //       $('.txtotp-5').focus();
    //   });

    //   $('.txtotp-5').keypress(function() {
    //     $('.txtotp-6').focus();
    // });
  
      $('.signupSubmit').click(function() {
        let validated = registerValidation();
         if(validated) {
            $('.pError').each(function() {
                $(this).addClass('hide');
            });
            let fullName = $(".name").val();
            let firstName =  fullName.split(' ').slice(0, -1).join(' ');
            let lastName = fullName.split(' ').slice(-1).join(' ');
            let contactNumber = $(".contact").val();
            let password = $(".password").val();
            let confirm = $(".confirmpassword").val();
            let email = $('.email').val();
            let validEmail = false;
            let validPassword = false;
            let validMobile = false;
            let validName = false;

            // if(firstName)
            if(firstName === '' || lastName === '') {
                $('.pErrorName').text('Please enter your full name.');
                $('.pErrorName').removeClass('hide');
            } else {
                validName = true;
            }

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

            if(!isMobileNumber(contactNumber)) {
                $('.pErrorContact').text('Invalid mobile number.');
                $('.pErrorContact').removeClass('hide');
            } else {
                $('.pErrorConfirm').addClass('hide');
                $('.pErrorConfirm').text('This field is required.');
                validMobile = true;
            }

            if(validPassword && validEmail && validMobile && validName) {
                axios.post('https://dev.seedbox.ph/core/lite/v1/register', 
                {
                    personal_information: {
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        mobile_phone_number: contactNumber,
                        password: password
                    }
                })
                .then(response => {
                    console.log(response.data);
                    if(response.data.code === 13) {
                        $('.pErrorEmail').text('This email address is already registered.');
                        $('.pErrorEmail').removeClass('hide');
                    } else if(response.data.code === 0) {
                        $('.signup-form').addClass('hide');
                        $('.otpform').removeClass('hide');
                        
                        Cookie.set('registerPassword', $(".password").val(), {expires: 0.042})
                        localStorage.setItem('registerToken', response.data.user.token);
                        localStorage.setItem('trx', response.data.data.trx_id);
                        localStorage.setItem('stan', response.data.data.stan);
                        localStorage.setItem('registerEmail', response.data.user.email);
                    }
                }).catch(err => {
                    console.log(err);
                });
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
               let email = $('.loginemail').val();
               let password = $('.loginpassword').val();

               axios.post('https://dev.seedbox.ph/core/lite/v1/login', {
                   email_address: email,
                   password: password
               }).then(response => {
                   if(response.data.code === 1) {
                       localStorage.setItem('logged_in', true);
                       localStorage.setItem('loginToken', response.data.token);
                       localStorage.setItem('sessionEmail', response.data.user_email);
                       localStorage.setItem('userStatus', response.data.user_status);

                       Cookie.set('loginPassword', $('.loginpassword').val());
                       location.reload();
                   } else if(response.data.code === 0) {
                        $('.pErrorLPassword').text('Incorrect user account or password.');
                        $('.pErrorLPassword').removeClass('hide');
                   }
               }).catch(err => {
                   $('.pErrorLPassword').text('Incorrect user account or password.');
                   $('.pErrorLPassword').removeClass('hide');
               });
            }
         } else {
             return false;
         }
      });

      
        $(document).ready(function() {
            $('.logout-button').click(function() {
                let token = localStorage.getItem('loginToken');
                axios.post('https://dev.seedbox.ph/core/lite/v1/logout', {
                    headers: {
                        'x-token': token
                    }
                }).then(response => {
                    console.log(response);
                    localStorage.removeItem('logged_in');
                    localStorage.removeItem('sessionEmail');
                    localStorage.removeItem('loginToken');
                    localStorage.removeItem('userStatus');
                    location.reload();
                }).catch(err => {
                    console.log(err);
                });
            });

            $('.showOtp').click(function() {
                let email = localStorage.getItem('sessionEmail');
                let token = localStorage.getItem('loginToken');
                axios.get('https://dev.seedbox.ph/core/lite/v1/generate_otp', 
                {
                    params: {
                      email: email,
                    },
                    headers: {
                      'x-token': token,
                    }
              }
                ).then(response => {
                    console.log(response);
                    localStorage.setItem('stan', response.data.data.stan);
                    localStorage.setItem('trx', response.data.data.trx_id);
                }).catch(err => {
                    console.log(err);
                });
              $('.signup-form').addClass('hide');
              $('.otpform').removeClass('hide');
              $("#exampleModal1").modal('show');
            })

            // if(localStorage.getItem('logged_in')) {
            //     $('.logout')
            // }
        });
  
      // OTP
      $('.otplink').click(function() {
        let otp1 = Cookie.get('otp1');
        let otp2 = Cookie.get('otp2');
        let otp3 = Cookie.get('otp3');
        let otp4 = Cookie.get('otp4');
        let otp5 = Cookie.get('otp5');
        let otp6 = Cookie.get('otp6');
          if(otp1.length <= 0 || otp2.length <= 0 || otp3.length <= 0 || otp4.length <= 0 || otp5.length <= 0 || otp6.length <= 0 ) {
              $('.errorDiv').text('Fill up missing fields.');
              $('.errorDiv').removeClass('hide');
              return false;
          } else {
              let otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
              let token = "";
              let email = "";

              let loggedIn = false;

              if(localStorage.getItem('logged_in') || localStorage.getItem('logged_in') !== null) {
                  loggedIn = true;
              }
    
              if(loggedIn) {
                  token = localStorage.getItem('loginToken');
                  email = localStorage.getItem('sessionEmail');
              } else {
                  email = localStorage.getItem('registerEmail');
                  token = localStorage.getItem('registerToken');
              }
              let trx = localStorage.getItem('trx');
              let stan = localStorage.getItem('stan');

              axios.post('https://dev.seedbox.ph/core/lite/v1/verify_otp', 
              {
                  email: email,
                  otp_code: otp,
                  stan: stan,
                  trx_id: trx
              },
              {
                headers: {
                    'x-token': token
                }
              }
              ).then(response => {
                console.log(response.data);
                if(response.data.code === 0) {
                    // localStorage.setItem('logged_in', true);
                    let loggedIn = false;

                    if(localStorage.getItem('logged_in') || localStorage.getItem('logged_in') !== null) {
                        loggedIn = true;
                    }

                    if(!loggedIn) {
                        let registerPassword = Cookie.get('registerPassword');
                        let registerEmail = localStorage.getItem('registerEmail');
                        localStorage.removeItem('trx');
                        localStorage.removeItem('stan');
                        localStorage.removeItem('registerEmail');
                        localStorage.removeItem('registerToken');

                        alert('Your account is now registered.');

                        login(registerEmail, registerPassword);
                    } else {
                        let loginPassword = Cookie.get('loginPassword');
                        let loginEmail = localStorage.getItem('sessionEmail');
                        alert('Your account is now verified.');
                        login(loginEmail, loginPassword);
                    }

                    //location.reload();
                    // if (localStorage.getItem('logged_in') === '1') {
                    //     window.location.href = '/kyc';
                    // }
                }
              }).catch(err => {
                  console.log(err);
                  if(err.response.data.code === 0) {
                    $('.errorDiv').text('Invalid/Expired OTP Code');
                    $('.errorDiv').removeClass('hide');
                  }
              });
          }
      });

      $('.resendOtp').click(function () {
          let email = localStorage.getItem('registerEmail');
          let token = "";

          let loggedIn = false;

          if(localStorage.getItem('logged_in') || localStorage.getItem('logged_in') !== null) {
              loggedIn = true;
          }

          if(loggedIn) {
              token = localStorage.getItem('loginToken');
          } else {
              token = localStorage.getItem('registerToken');
          }
          axios.get('https://dev.seedbox.ph/core/lite/v1/generate_otp', 
          {
              params: {
                email: email,
              },
              headers: {
                'x-token': token,
              }
        }
          ).then(response => {
              console.log(response);
              localStorage.setItem('stan', response.data.data.stan);
              localStorage.setItem('trx', response.data.data.trx_id);
          }).catch(err => {
              console.log(err);
          });
      });

      $('.loginlink').click(function() {
        $('#exampleModal1').modal('hide');
        $('#exampleModal').modal('show');
      });

      // clicking forgot password will go to email form
      $('.forgotTrigger').click(function() {
          $('.loginForm').addClass('hide');
          $('.forgotPasswordForm').removeClass('hide');
      });

      // clicking submit email will go to otp page
      $('.forgotSubmit').click(function() {
        $('.forgotPasswordForm').addClass('hide');
        $('.otpformlogin').removeClass('hide');
      });

      // submitting otp will go to new password form
      $('.otpSubmit2').click(function() {
        $('.otpformlogin').addClass('hide');
        $('.changePasswordForm').removeClass('hide');
      });

      $('.termsmodal').click(function() {
        $('#exampleModal1').modal('hide');
        $('#termsModalHome').modal('show');
      });

      $('.privacymodal').click(function() {
        $('#exampleModal1').modal('hide');
        $('#privacyModalHome').modal('show');
      });

      $('.termsAgree').click(function() {
        $('#termsModalHome').modal('hide');
        $('#exampleModal1').modal('show');
      });

      $('.privacyAgree').click(function() {
        $('#privacyModalHome').modal('hide');
        $('#exampleModal1').modal('show');
      });

      function login(user, pass) {
        axios.post('https://dev.seedbox.ph/core/lite/v1/login', {
            email_address: user,
            password: pass
        }).then(response => {
            console.log(response);
            if(response.data.code === 1) {
                localStorage.setItem('logged_in', true);
                localStorage.setItem('loginToken', response.data.token);
                localStorage.setItem('sessionEmail', response.data.user_email);
                localStorage.setItem('userStatus', response.data.user_status);

                Cookie.remove('loginPassword');
                Cookie.remove('registerPassword');
                window.location = '/kyc';
            } else if(response.data.code === 0) {
                console.log('error');
            }
        }).catch(err => {
            console.log(err);
        });
      }
      }, []);
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>×</a>
            {!loggedin && (
                <a href="#" data-toggle="modal" data-target="#exampleModal">LOG IN</a>
            )}

            {loggedin && (
                <a href="#" className="logout-button">LOG OUT</a>
            )}
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
                <li><a className="" href="#">ABOUT US</a></li>
                <li><a className="" href="#">FAQS</a></li>
            </ul>
            <a href="#" data-toggle="modal" data-target="#contactModal">CONTACT</a>
            {!loggedin && (
                <a href="#" data-toggle="modal" data-target="#exampleModal1">SIGN UP</a>
            )}
            {loggedin && (
                <a href="/kyc">KYC FORM</a>
            )}
        </div>
    );
}

export default Sidebar;