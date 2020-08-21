import Head from 'next/head'
import Router from 'next/router';
import Default from '../../layouts/default';
import { 
  closeNav, openNav, moreLess
} from '../../functions/kyc';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Personal from './personal';
import Address from './address';
import Professional from './professional';
import Csa from './csa';
import Pep from './pep';
import Fatca from './fatca';
import Upload from './upload';
import Settlement from './settlement';

export default function Summary() {
    useEffect(() => {
        $(window)
        .resize(function () {
          if ($(window).width() < 500) {
            //$(".pMore").text("Personal Information");
            $(".colStep").removeClass("colmid");
            $(".rowStep").addClass("colmid");
          } else {
            //$(".pMore").text("Personal Information");
            $(".colStep").addClass("colmid");
            $(".rowStep").removeClass("colmid");
          }
        })
        .resize();
    
        moreLess(70);
    
        $(".select2").select2({
          width: "element",
          minimumResultsForSearch: -1,
        });

        let height = $(".conContent").height() + 24;
        $(".colmid").css({ height: height + "px" });

        $('.btnSubmit').attr('disabled','disabled');


        $("input[name='agree']").click(function() {
            if($(this).is(':checked')) {
                $('.btnSubmit').removeAttr('disabled');
            } else {
                $('.btnSubmit').attr('disabled','disabled');
            }
        })

    }, []);

    return(
        <Default>
            <Head>
            <link 
                href="Css/index.css"
                rel="stylesheet"
                type="text/css"
                />
            </Head>
            <Sidebar></Sidebar>
            <div className="container-fluid" style={{backgroundColor: '#fafafa'}}>
                <Navbar></Navbar>
                <div className="row bar-fixed">
                    <div className="col-lg-6 col-md-6" style={{borderRadius: '25px'}}>
                        <div className="row rowHide" style={{display: 'none'}}>
                            <div className="col-lg-12">
                            <p className="pMore1">Please double check your information.</p>
                            </div>
                        </div>
                        <div className="row rowStep" style={{position: 'relative'}}>
                            <div className="divWhite divWhiteSummary">
                            <div className="divWhiteGreen">
                            </div>
                            </div>
                            <div className="col-lg-12 colMore">
                            <p className="pMore" style={{paddingRight: '85px'}}>Please double check your information.</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle" style={{zIndex: 9999}}>
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9 colStepText">
                            <p className="pSteps">Personal Info &gt; </p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">Address Info &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">Professional Details &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">CSA &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">PEP Declaration &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine hrLast" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">FATCA &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine hrLast" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">Upload Documents &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps">Settlement Info &gt;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container con conContent summaryMobile" style={{backgroundColor: 'white', width: '63%', borderRadius: '25px', boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', WebkitBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', MozBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', height: 'auto'}}>
                    <div className="row align-items-center" style={{height: '100%'}}>
                        <div className="col-lg-4 col-md-4 colStep colmid" style={{borderRadius: '25px'}}>
                            <div className="row rowHide" style={{display: 'none'}}>
                                <div className="col-lg-12">
                                <p className="pMore1">Please double check your information.</p>
                                </div>
                            </div>
                            <div className="row rowStep mobile-step" style={{position: 'relative'}}>
                                <div className="divWhite">
                                <div className="divWhiteGreen">
                                </div>
                                </div>
                                <div className="col-lg-12 colMore">
                                <p className="pMore">More Information</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle" style={{zIndex: 9999}}>
                                    </div>
                                    <hr className="hrLine" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9 colStepText">
                                <p className="pSteps">Personal Info &gt; </p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                    <hr className="hrLine" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">Address Info &gt;</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                    <hr className="hrLine" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">Professional Details &gt;</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                    <hr className="hrLine" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">CSA &gt;</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                    <hr className="hrLine" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">PEP Declaration &gt;</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                    <hr className="hrLine hrLast" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">FATCA &gt;</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                    <hr className="hrLine hrLast" />
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">Upload Documents &gt;</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                                <div className="divCircle" style={{position: 'relative'}}>
                                    <div className="circle">
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                                <p className="pSteps">Settlement Info &gt;</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 colForm" style={{margin: '0 auto'}}>
                            <Personal></Personal>
                            <Address></Address>
                            <Professional></Professional>
                            <Csa></Csa>
                            <Pep></Pep>
                            <Fatca></Fatca>
                            <Upload></Upload>
                            <Settlement></Settlement>
                            <div className="row agreeTerms" style={{ width: "80%", margin: "20px auto" }}>
                                <div className="col-1">
                                    <label className="checkbox bounce">
                                    <input type="checkbox" className="checkOther" name="agree"/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6" />
                                    </svg>
                                    </label>
                                </div>
                                <div className="col-11">
                                    <p className="pExpiry">I agree to the terms of conditions and Data Privacy Policy</p>
                                </div>
                            </div>
                            <div className="row submitSummary" style={{ marginRight: "30px", marginBottom: "20px" }}>
                                <div className="col-lg-12">
                                    <input type="button" className="btnNext btnProceed btnSubmit" defaultValue="Submit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    );
}