import Head from 'next/head'
import Router from 'next/router';
import Default from '../../layouts/default';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export default function Individual() {
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
                            <img src="Image/seedbox.gif" className="img-fluid mx-auto d-flex" />
                        </div>
                        <div className="col-lg-6">
                            <p className="pHow">How it works</p>
                            <div className="box form-inline how-individual" style={{marginTop: '25px'}}>
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
                            <div style={{ textAlign: 'center'}}>
                                <input type="button" className="btnLearnmore signupbuttom" value="SIGN UP NOW"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-body" style={{border: '0px', margin: '0 auto'}}>
                        <img src="Image/leaf.png" className="img-fluid mx-auto d-flex imgLeaf" style={{width: '80px'}} />
                        <p className="pLogin">Log In</p>
                        <input type="text" className="txtEmail" placeholder="email" />
                        <input type="password" className="txtEmail txtPassword" placeholder="password" style={{marginTop: '20px'}} />
                        <div className="row align-items-center" style={{marginTop: '15px'}}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <p className="pForgot" style={{ textAlign: "center" }}>Forgot password?</p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div style={{ textAlign: "center" }}>
                                <input type="button" defaultValue="SUBMIT" className="btnSubmit" />
                            </div>
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
                        <p className="pDont">Dont have an account?</p>
                        <p className="pSignup" data-toggle="modal" data-target="#exampleModal1" data-backdrop="false" data-keyboard="false">SIGN UP</p>
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
                            <input type="text" className="txtEmail" placeholder="full name" />
                            <input type="text" className="txtEmail" placeholder="email" style={{marginTop: '20px'}} />
                            <input type="text" className="txtEmail" placeholder="contact number" style={{marginTop: '20px'}} />
                            <input type="password" className="txtEmail" placeholder="password" style={{marginTop: '20px'}} />
                            <input type="password" className="txtEmail" placeholder="confirm password" style={{marginTop: '20px'}} />
                            <div className="row">
                            <div className="col-lg-12 text-center" style={{marginTop: "30px"}}>
                                <input type="button" defaultValue="SUBMIT" className="btnSubmit signupSubmit mx-auto" />
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
                            {/* <button className="btnFacebook"><img src="Image/facebook.png" style={{width: '20px', marginRight: '5px'}} />Signup with Facebook</button>
                            <button className="btnGoogle"><img src="Image/google.png" style={{width: '20px', marginRight: '5px'}} />Signup
                            with Google</button> */}
                            <p className="pDont">Already have an account?</p>
                            <p className="pSignup" data-toggle="modal" data-target="#exampleModal">LOG IN</p>
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
                            <div className="col-lg-12 text-center errorDiv hide" style={{marginTop: "30px"}}>
                                <div className="pError errorMessage">Fill up missing fields.</div>
                            </div>
                            <div className="col-lg-12 text-center" style={{marginTop: "30px"}}>
                                {/* <input type="button" defaultValue="SUBMIT" className="btnSubmit otpSubmit mx-auto"/> */}
                                <button className="btnSubmit otplink mx-auto">
                                    <a href="/kyc" className=" otpSubmit">SUBMIT</a>
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
                        <input type="text" className="txtEmail" placeholder="name *" />
                        <input type="text" className="txtEmail" placeholder="email *" style={{marginTop: '20px'}} />
                        <input type="text" className="txtEmail" placeholder="company name" style={{marginTop: '20px'}} />
                        <textarea placeholder="message" />
                        <p className="pGuide">* - required fields</p>
                        <div className="row" style={{marginTop: '-20px'}}>
                        <div className="col-lg-12 text-center" style={{margin: '0 auto'}}>
                            <input type="button" defaultValue="SUBMIT" className="btnSubmit1 float-right"/>
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