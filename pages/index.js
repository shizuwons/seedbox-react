import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';
import { openNav, closeNav } from '../functions/kyc';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import axios from 'axios';

export default function Home() {
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
                <Sidebar></Sidebar>
                <div className="container-fluid h-100" style={{backgroundColor: '#fafafa'}}>
                <Navbar></Navbar>
                <div className="container con h-100 conMainBody" style={{padding: '20px 15px', backgroundColor: '#fafafa'}}>
                    <div className="row align-items-center" style={{height: '80vh'}}>
                    <div className="col-lg-6">
                        <img src="Image/seedbox-Final.gif" className="img-fluid mx-auto d-flex" />
                    </div>
                    <div className="col-lg-6 text-center conContent">
                        <p className="pTitle">Investing </p>
                        <p className="pTitle" style={{marginTop: '-40px'}}>simplified</p>
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
                            <p className="pBox">Sign Up</p>
                            </div>
                            <div className="divIcon" style={{padding: '10px 20px'}}>
                            <img src="Image/goal.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
                            <p className="pBox">Know your goals</p>
                            </div>
                        </div>
                        <div className="divIcon2 form-inline align-items-center">
                            <div className="divIcon divIcon3 align-items-center" style={{padding: '10px 20px'}}>
                            <img src=" Image/planner.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
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
                        <p className="pTitle" style={{marginTop: '-40px'}}>at Work</p>
                        <p className="pSubtitle">Bring the benefits of Seedbox to your workplace. 
                        Seedbox at Work can partner with your office to set up an easy investment 
                        plan via payroll deduction. We can also offer financial literacy seminars 
                        for your group. Interested? Email us at support@seedbox.ph to find out more.</p>
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
                        <p className="pLogin loginCaption">Log In</p>
                        <div className="loginForm">
                            <input type="text" className="txtEmail loginemail" placeholder="email" />
                            <p className="pErrorLEmail pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <input type="password" className="txtEmail txtPassword loginpassword" placeholder="password" style={{marginTop: '20px'}} />
                            <p className="pErrorLPassword pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <div className="row align-items-center" style={{marginTop: '15px'}}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div style={{ textAlign: "center" }}>
                                    <input type="button" defaultValue="SUBMIT" className="btnSubmit loginSubmit" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <p className="pForgot forgotTrigger" style={{ textAlign: "center" }}>Forgot password?</p>
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
                            {/* <button className="btnFacebook"><img src="Image/facebook.png" style={{width: '20px', marginRight: '5px'}} />Log-in with Facebook</button>
                            <button className="btnGoogle"><img src="Image/google.png" style={{width: '20px', marginRight: '5px'}} />Log-in
                            with Google</button> */}
                            <p className="pDont">Don't have an account?</p>
                            <p className="pSignup" data-toggle="modal" data-target="#exampleModal1" data-backdrop="false" data-keyboard="false">SIGN UP</p>
                        </div>
                        <div className="forgotPasswordForm hide">
                            <input type="text" className="txtEmail forgotemail" placeholder="email" />
                            <p className="pErrorFEmail pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <div className="row align-items-center" style={{marginTop: '15px'}}>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div style={{ textAlign: "center" }}>
                                        <input type="button" defaultValue="SUBMIT" className="btnSubmit forgotSubmit" style={{marginTop: '30px', marginBottom: '35px'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body" style={{border: '0px', margin: '0 auto'}}>
                        <img src="Image/leaf.png" className="img-fluid mx-auto d-flex" style={{width: '80px'}} />
                        <p className="pLogin">Sign Up</p>
                        <div className="signup-form">
                            <form className="registerForm">
                            <input type="text" className="txtEmail name" name="name" placeholder="full name" />
                            <p className="pErrorName pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <input type="text" className="txtEmail email" name="email" placeholder="email" style={{marginTop: '20px'}} />
                            <p className="pErrorEmail pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <input type="text" className="txtEmail contact" name="contact" placeholder="contact number (eg. 63-912...)" style={{marginTop: '20px'}} />
                            <p className="pErrorContact pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <input type="password" className="txtEmail password" name="password" placeholder="password" style={{marginTop: '20px'}} />
                            <p className="pErrorPassword pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            <input type="password" className="txtEmail confirmpassword" name="confirmpassword" placeholder="confirm password" style={{marginTop: '20px'}} />
                            <p className="pErrorConfirm pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                            {/* <p className="pErrorPassword hide" style={{ fontSize: '0.9rem', color: 'red'}}>The passwords do not match.</p> */}
                            <div className="row">
                            <div className="col-lg-12 text-center" style={{marginTop: "30px"}}>
                                <input type="button" defaultValue="SUBMIT" className="btnSubmit signupSubmit mx-auto" />
                            </div>
                            </div>
                            </form>
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
                            {/* <button className="btnFacebook"><img src="Image/facebook.png" style={{width: '20px', marginRight: '5px'}} />Signup with Facebook</button>
                            <button className="btnGoogle"><img src="Image/google.png" style={{width: '20px', marginRight: '5px'}} />Signup
                            with Google</button> */}
                            <p className="pDont">Already have an account?</p>
                            <p className="pSignup loginlink">LOG IN</p>
                            <p className="pDont" style={{ fontSize: '12px' }}>By registering or signing in, you agree to our <br/>TERMS &amp; CONDITIONS  PRIVACY POLICIES</p>
                        </div>
                        <div className="otpform row hide">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="pLogin otp-caption" style={{ marginBottom: "20px" }}>
                                    We have sent an OTP to your email.
                                </div>
                            </div>
                            <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                                <input type="text" className="txtotp txtotp-1" maxLength="1"/>
                            </div>
                            <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                                <input type="text" className="txtotp txtotp-2" maxLength="1"/>
                            </div>
                            <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                                <input type="text" className="txtotp txtotp-3" maxLength="1"/>
                            </div>
                            <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                                <input type="text" className="txtotp txtotp-4" maxLength="1"/>
                            </div>
                            <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                                <input type="text" className="txtotp txtotp-5" maxLength="1"/>
                            </div>
                            <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                                <input type="text" className="txtotp txtotp-6" maxLength="1"/>
                            </div>
                            <div className="col-lg-12 text-center errorDiv hide" style={{marginTop: "30px"}}>
                                <div className="pError errorMessage">Fill up missing fields.</div>
                            </div>
                            <div className="col-lg-12 text-center" style={{marginTop: "30px"}}>
                                {/* <input type="button" defaultValue="SUBMIT" className="btnSubmit otpSubmit mx-auto"/> */}
                                <button className="btnSubmit otplink mx-auto">
                                    <a href="#" className=" otpSubmit">SUBMIT</a>
                                </button>
                            </div>
                            <div className="col-lg-12 text-center" style={{marginTop: "30px"}}>
                                {/* <input type="button" defaultValue="SUBMIT" className="btnSubmit otpSubmit mx-auto"/> */}
                                <button className="btnSubmit mx-auto">
                                    <a href="#" className=" resendOtp">RESEND OTP</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="contactModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body" style={{border: '0px', margin: '0 auto'}}>
                        <p className="pLogin">Contact Us</p>
                        <input type="text" className="txtEmail contactname" name="contactname" placeholder="name *" />
                        <p className="pErrorCName pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                        <input type="text" className="txtEmail contactemail" name="contactemail" placeholder="email *" style={{marginTop: '20px'}} />
                        <p className="pErrorCEmail pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                        <input type="text" className="txtEmail contactcompany" name="contactcompany" placeholder="company name" style={{marginTop: '20px'}} />
                        <textarea placeholder="message *" className="txtAreaMessage message" name="message"/>
                        <p className="pErrorMessage pError hide" style={{ fontSize: '0.9rem', color: 'red'}}>This field is required.</p>
                        <p className="pGuide">* - required fields</p>
                        <div className="row" style={{marginTop: '-20px'}}>
                        <div className="col-lg-12 text-center" style={{margin: '0 auto'}}>
                            <input type="button" defaultValue="SUBMIT" className="btnSubmit contactSubmit" style={{marginTop: '10px'}}/>
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