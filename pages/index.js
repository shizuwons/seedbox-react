import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';
import { openNav, closeNav } from '../functions/kyc';
import { useEffect } from 'react';

export default function Home() {
    
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
    
        })
    
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
    }, []);
    
    return (
        <Default>
            <Head>
                <link 
                    href="Css/home.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <script>{`
                    let x;
                `}</script>
            </Head>
            <div>
                <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                <a href="#" data-toggle="modal" data-target="#exampleModal">LOG-IN</a>
                <a href="index.html">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">BLOGS</a>
                <a href="#">PRODUCTS</a>
                <a href="#" data-toggle="modal" data-target="#contactModal">CONTACT</a>
                <a href="#" data-toggle="modal" data-target="#exampleModal1">SIGN-UP</a>
                </div>
                <div className="container-fluid h-100" style={{backgroundColor: '#fafafa'}}>
                <div className="container con" style={{padding: '25px 15px'}}>
                    <span style={{fontSize: '30px', cursor: 'pointer', position: 'absolute', zIndex: 1111111, color: '#13C95C', display: 'none'}} onClick={openNav} className="span">☰</span>
                    <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <nav className="navbar-brand" href="#">
                        <a href="#"><img src="Image/logo-removebg-preview.png" className="img-fluid imglogo" style={{width: '150px'}} /></a>
                    </nav>
                    <div className="collapse navbar-collapse" id="collapse">
                        <div className="col2 ml-auto">
                        <ul className="nav navbar-nav">
                            <li><a className="nav-link btnlogin" href="contact.html" data-toggle="modal" data-target="#exampleModal">LOG-IN</a>
                            </li>
                            <li><a className="nav-link btnhome" href="package.html" style={{fontFamily: 'Proxima Bold'}}>HOME</a></li>
                            <li><a className="nav-link btncontact" href="contact.html">ABOUT</a></li>
                            <li><a className="nav-link btncontact" href="contact.html">BLOGS</a></li>
                            <li><a className="nav-link btncontact" href="contact.html">PRODUCTS</a></li>
                            <li><a className="nav-link btncontact" href="contact.html" data-toggle="modal" data-target="#contactModal">CONTACT US</a></li>
                            <li><a className="nav-link btncontact" href="contact.html" data-toggle="modal" data-target="#exampleModal1">SIGN-UP</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className="container con h-100 conMainBody" style={{padding: '20px 15px', backgroundColor: '#fafafa'}}>
                    <div className="row align-items-center" style={{height: '80vh'}}>
                    <div className="col-lg-6">
                        <img src="Image/gif1.gif" className="img-fluid mx-auto d-flex" />
                    </div>
                    <div className="col-lg-6 text-center conContent">
                        <p className="pTitle">Investing,</p>
                        <p className="pTitle" style={{marginTop: '-40px'}}>simplified.</p>
                        <p className="pSubtitle">Seedbox Philippines is a service that lets you invest in funds online,</p>
                        <p className="pSubtitle">whether on your phone or through your desktop. Sign up once and you’re good to
                        go.</p>
                        <input type="button" className="btnLearnmore" defaultValue="LEARN MORE" />
                    </div>
                    </div>
                </div>
                <div className="container con conBody">
                    <div className="row">
                    <div className="col-lg-12">
                        <p className="pHow">How it works</p>
                        <div className="box form-inline" style={{marginTop: '25px'}}>
                        <div className="divIcon1 form-inline">
                            <div className="divIcon" style={{padding: '10px 20px'}}>
                            <img src="Image/sign-up.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
                            <p className="pBox">Sign-up</p>
                            </div>
                            <div className="divIcon" style={{padding: '10px 20px'}}>
                            <img src="Image/goal.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
                            <p className="pBox">Know your goals</p>
                            </div>
                        </div>
                        <div className="divIcon2 form-inline align-items-center">
                            <div className="divIcon divIcon3 align-items-center" style={{padding: '10px 20px'}}>
                            <img src=" Image/planner.svg" style={{width: '80px'}} className="img-fluid mx-auto d-flex imgIcon" />
                            <p className="pBox">Use the goal planner</p>
                            </div>
                            <div className="divIcon divIcon4" style={{padding: '10px 20px', display: 'inline-block'}}>
                            <img src=" Image/invest.png" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon imgInvest" />
                            <p className="pBox">Invest</p>
                            </div>
                        </div>
                        <div className="divIcon3">
                            <div className="divIconlast divIcon5" style={{padding: '10px 20px'}}>
                            <img src="Image/habit.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgLast" />
                            <p className="pBox">Build the habit</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row align-items-center row1" style={{marginTop: '150px', paddingBottom: '100px'}}>
                    <div className="col-lg-6 text-center">
                        <p className="pTitle">Seedbox</p>
                        <p className="pTitle" style={{marginTop: '-40px'}}>at work.</p>
                        <p className="pSubtitle">Bring the benefits of Seedbox to your workplace. Seedbox at Work can partner
                        with your office to set up an easy investment plan via payroll deduction. We can also offer
                        financial literacy seminars for your group.</p>
                    </div>
                    <div className="col-lg-6 colImage">
                        <img src="Image/gif2.gif" className="img-fluid mx-auto d-flex" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body" style={{border: '0px', margin: '0 auto'}}>
                        <img src="Image/leaf.png" className="img-fluid mx-auto d-flex imgLeaf" style={{width: '80px'}} />
                        <p className="pLogin">Log-in</p>
                        <input type="text" className="txtEmail" placeholder="e-mail" />
                        <input type="password" className="txtEmail txtPassword" placeholder="password" style={{marginTop: '20px'}} />
                        <div className="row align-items-center" style={{marginTop: '15px'}}>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="pForgot">Forgot password?</p>
                        </div>
                        <div className="col-lg-6co-md-6 col-sm-6 col-6">
                            <input type="button" defaultValue="SUBMIT" className="btnSubmit" />
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <hr />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="pOr">or</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <hr style={{marginLeft: '-20%'}} />
                        </div>
                        </div>
                        <button className="btnFacebook"><img src="Image/facebook.png" style={{width: '20px', marginRight: '5px'}} />Log-in with Facebook</button>
                        <button className="btnGoogle"><img src="Image/google.png" style={{width: '20px', marginRight: '5px'}} />Log-in
                        with Google</button>
                        <p className="pDont">Dont have an account?</p>
                        <p className="pSignup" data-toggle="modal" data-target="#exampleModal1" data-backdrop="false" data-keyboard="false">Sign-up</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body" style={{border: '0px', margin: '0 auto'}}>
                        <img src="Image/leaf.png" className="img-fluid mx-auto d-flex" style={{width: '80px'}} />
                        <p className="pLogin">Sign-up</p>
                        <input type="text" className="txtEmail" placeholder="full name" />
                        <input type="text" className="txtEmail" placeholder="e-mail" style={{marginTop: '20px'}} />
                        <input type="text" className="txtEmail" placeholder="contact number" style={{marginTop: '20px'}} />
                        <input type="password" className="txtEmail" placeholder="password" style={{marginTop: '20px'}} />
                        <input type="password" className="txtEmail" placeholder="confirm password" style={{marginTop: '20px'}} />
                        <div className="row">
                        <div className="col-lg-12 text-center" style={{margin: '0 auto'}}>
                            <input type="button" defaultValue="SUBMIT" className="btnSubmit1 mx-auto d-flex" />
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <hr />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="pOr">or</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <hr style={{marginLeft: '-20%'}} />
                        </div>
                        </div>
                        <button className="btnFacebook"><img src="Image/facebook.png" style={{width: '20px', marginRight: '5px'}} />Signup with Facebook</button>
                        <button className="btnGoogle"><img src="Image/google.png" style={{width: '20px', marginRight: '5px'}} />Signup
                        with Google</button>
                        <p className="pDont">Already have an account?</p>
                        <p className="pSignup" data-toggle="modal" data-target="#exampleModal">log-in</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="contactModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body" style={{border: '0px', margin: '0 auto'}}>
                        <p className="pLogin">Contact Us</p>
                        <input type="text" className="txtEmail" placeholder="name *" />
                        <input type="text" className="txtEmail" placeholder="e-mail *" style={{marginTop: '20px'}} />
                        <input type="text" className="txtEmail" placeholder="company name" style={{marginTop: '20px'}} />
                        <textarea defaultValue={"message\n                    "} />
                        <p className="pGuide">* - required fields</p>
                        <div className="row" style={{marginTop: '-20px'}}>
                        <div className="col-lg-12 text-center" style={{margin: '0 auto'}}>
                            <input type="button" defaultValue="SUBMIT" className="btnSubmit1 float-right" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Default>
    );
}