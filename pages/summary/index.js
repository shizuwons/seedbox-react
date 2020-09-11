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
import Terms from './terms';
import Privacy from './privacy';
import { personalValidation, addressValidation, professionalValidation, csaValidation, pepValidation, uploadValidation, settlementValidation } from '../../functions/validators';
import { saveToDB } from '../../functions/saveToDB';
import { RedirectIfUnauthenticated } from '../../functions/auth-checker';
import { checkIfTokenValid } from '../../functions/prefillForm';

export default function Summary() {
    useEffect(() => {
        RedirectIfUnauthenticated();

        checkIfTokenValid();

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

        $('input[type="checkbox"]').click(function () {
            $(this)
              .parents()
              .eq(2)
              .find('input[type="checkbox"]')
              .not(this)
              .prop("checked", false);
          });

          $('.idtype').change(function() {
            let value = $('.idtype').val();
            if(value === 'PHU' || value === 'TIN' || value === 'INT' || value === 'NCD' || value === 'SEN' || value === 'SSS') {
              $('.expirymonth').val("default").trigger('change');
              $('.expiryday').val("default").trigger('change');
              $('.expiryyear').val("default").trigger('change');
              $('.expirymonth').prop('disabled', true);
              $('.expiryday').prop('disabled', true);
              $('.expiryyear').prop('disabled', true);
      
              $('.expirymonth').siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
              $('.expiryday').siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
              $('.expiryyear').siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
              $('.expirymonth').siblings(".select-placeholder").css({ opacity: "0" });
              $('.expiryday').siblings(".select-placeholder").css({ opacity: "0" });
              $('.expiryyear').siblings(".select-placeholder").css({ opacity: "0" });
      
              // $('.expirymonth').val(null);
              // $('.expiryday').val(null);
              // $('.expiryyear').val(null);
            } else {
              $('.expirymonth').prop('disabled', false);
              $('.expiryday').prop('disabled', false);
              $('.expiryyear').prop('disabled', false);
            }
          });

        // Scroll on press
        $("#personalStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#personalStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "85px");
        });

        // Check agree terms on click of I Agree in modal
        $('.btnAgree').click(function() {
            if($('.checkAgree').is(':not(:checked)')) {
                $('.checkAgree').click();
            }
        });

        $('#thankYouModal').on('hidden.bs.modal', function (e) {
            window.location = "/";
        });

        $('.btnCloseTy').click(function() {
            $('#thankYouModal').modal('hide');
        });

        $("#addressStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#addressStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "160px");
        });

        $("#professionalStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#professionalStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "228px");
        });

        $("#csaStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#csaStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "297px");
        });

        $("#pepStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#pepStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "365px");
        });

        $("#fatcaStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#fatcaStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "440px");
        });

        $("#uploadStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#uploadStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "505px");
        });

        $("#settlementStep").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#settlementStepScroll").offset().top
            }, 500);

            $(".divWhite").css("top", "575px");
        });

        $('.invested').on("change", function(e) { 
            let value = $('.invested').val();
      
            if(value.length !== 0) {
              $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
              $(this).siblings(".select-placeholder").css({ opacity: "1" });
            } else {
              $(this).siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
              $(this).siblings(".select-placeholder").css({ opacity: "0" });
            }
          });
        
          $(document).ready(function() {
            let tFields = true;
            let sFields = true;
            let investedfield = true;
            $('.btnSubmit').click(function() {
                $('.txtusername').each(function() {
                    if(!$(this).hasClass('sss-gsis') && !$(this).hasClass('agent-code')) {
                        if($(this).val().length <= 0) {
                            alert('Please fill up remaining fields!');
                            tFields = false;
                            return false;
                        } else {
                            tFields = true;
                        }
                    }
                });
    
                $('.select2').each(function() {
                    // If not disabled, go through with the validation of select 2
                    let clName = $(this).parent().find("select.select2").attr('class');
                    let isExpiryField = false;
                    let isDisabledField = false;
                    let expiryField = "";

                    if(clName !== undefined) {
                        if(clName.indexOf("expiryday") > -1) {
                            isExpiryField = true;
                            expiryField = "expiryday";
                            
                            if($('.' + expiryField).is(':not(:disabled)')) {
                                if($('.' + expiryField).val() === "" || $('.' + expiryField).val() === null || $('.' + expiryField).val() === "null") {
                                    alert('Please fill up remaining fields!');
                                    sFields = false;
                                    return false;
                                }
                            }
                        } else if(clName.indexOf("expirymonth") > -1) {
                            isExpiryField = true;
                            expiryField = "expirymonth";
    
                            if($('.' + expiryField).is(':not(:disabled)')) {
                                if($('.' + expiryField).val() === "" || $('.' + expiryField).val() === null || $('.' + expiryField).val() === "null") {
                                    alert('Please fill up remaining fields!');
                                    sFields = false;
                                    return false;
                                }
                            }
                        } else if(clName.indexOf("expiryyear") > -1) {
                            isExpiryField = true;
                            expiryField = "expiryyear";

                            if($('.' + expiryField).is(':not(:disabled)')) {
                                if($('.' + expiryField).val() === "" || $('.' + expiryField).val() === null || $('.' + expiryField).val() === "null") {
                                    alert('Please fill up remaining fields!');
                                    sFields = false;
                                    return false;
                                }
                            }
                        } else {
                            if($(this).parent().find("select.select2").val() === "" || $(this).parent().find("select.select2").val() === null || $(this).parent().find("select.select2").val() === "default") {
                                console.log($(this).parent().find("select.select2").attr('class'));
                                alert('Please fill up remaining fields!');
                                sFields = false;
                                return false;
                            } else {
                                sFields = true;
                            }
                        }
                    } else {
                        if($(this).parent().find("select.select2").val() === "" || $(this).parent().find("select.select2").val() === null) {
                            console.log($(this).parent().find("select.select2").attr('class'));
                            alert('Please fill up remaining fields!');
                            sFields = false;
                            return false;
                        } else {
                            sFields = true;
                        }
                    }
                });
    
                if($('.invested').val() === null) {
                    alert('Please fill up remaining fields!');
                    investedfield = false;
                    return false;
                } else {
                    investedfield = true;
                }
    
                if(tFields && sFields && investedfield) {
                    if($('#imguploadid').get(0).files.length !== 0) {
                        $('#imguploadid').trigger('change');
                    }
            
                    if($('#imguploadsig').get(0).files.length !== 0) {
                        $('#imguploadsig').trigger('change');
                    }
            
                    if($('#imguploadid').get(0).files.length === 0 && $('#imguploadsig').get(0).files.length === 0) {
                        saveToDB();
                    }
                }
            });

            $('.btnSave').click(function() {
                saveToDB('save');
            });
          });

        if($('.txtusername').val().length > 0) {
            $('.txtusername').prop('readonly', true);
            $('.txtusername').addClass('kyc-email');
        }

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
                            <p className="pSteps" id="personalStep">Personal Info &gt; </p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="addressStep">Address Info &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="professionalStep">Professional Details &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="csaStep">CSA &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="pepStep">PEP Declaration &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine hrLast" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="fatcaStep">FATCA &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                                <hr className="hrLine hrLast" />
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="uploadStep">Upload Documents &gt;</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                            <div className="divCircle" style={{position: 'relative'}}>
                                <div className="circle">
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                            <p className="pSteps" id="settlementStep">Settlement Info &gt;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container con conContent summaryMobile" style={{backgroundColor: 'white', width: '63%', borderRadius: '25px', boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', WebkitBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', MozBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', height: 'auto !important'}}>
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
                                    <input type="checkbox" className="checkAgree" name="agree"/>
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6" />
                                    </svg>
                                    </label>
                                </div>
                                <div className="col-11">
                                    <p className="pExpiry">I agree to the Terms and Conditions and Data Privacy Policy</p>
                                </div>
                                <div className="col-12">
                                    <p className="pExpiry termstext" data-toggle="modal" data-target="#termsModal" data-backdrop="false" data-keyboard="false">
                                        Terms and Conditions
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="pExpiry privacytext" data-toggle="modal" data-target="#privacyModal" data-backdrop="false" data-keyboard="false" style={{marginTop: '-10px'}}>
                                        Data Privacy Policy
                                    </p>
                                </div>
                            </div>
                            <div className="row submitSummary" style={{ marginRight: "30px", marginBottom: "20px" }}>
                                <div className="col-lg-12">
                                    <input type="button" className="btnNext btnProceed btnSubmit" defaultValue="Submit"/>
                                    <input type="button" className="btnNext btnProceed btnSave" defaultValue="Save"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="termsModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "80%" }}>
                    <div className="modal-content">
                        <div className="modal-body" style={{border: '0px', margin: '0 auto', width: '100%', padding: '1rem 5rem'}}>
                            <p className="pCaption">Terms and Conditions of Use</p>
                            <div className="pTextbody">
                                <Terms></Terms>
                            </div>
                        </div>
                        <div className="row agreeWrapper" style={{marginBottom: '50px'}}>
                            <div className="col-lg-12">
                                <input type="button" className="btnNext btnProceed btnAgree" defaultValue="I AGREE" data-dismiss="modal"/>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="privacyModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "80%" }}>
                    <div className="modal-content">
                        <div className="modal-body" style={{border: '0px', margin: '0 auto', width: '100%', padding: '1rem 5rem'}}>
                            <p className="pCaption">Data Privacy Policy</p>
                            <div className="pTextbody">
                                <Privacy></Privacy>
                            </div>
                        </div>
                        <div className="row agreeWrapper" style={{marginBottom: '50px'}}>
                            <div className="col-lg-12">
                                <input type="button" className="btnNext btnProceed btnAgree" defaultValue="I AGREE" data-dismiss="modal"/>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="thankYouModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "80%" }}>
                    <div className="modal-content">
                        <div className="modal-body" style={{border: '0px', margin: '0 auto', width: '100%', padding: '1rem 5rem'}}>
                            <p className="pCaption" style={{ fontSize: '1.3rem'}}>Thank you for completing your account information. Your account is now pending and waiting for approval.</p>
                        </div>
                        <div className="row agreeWrapper" style={{marginBottom: '50px'}}>
                            <div className="col-lg-12" style={{ textAlign: 'center' }}>
                                <input type="button" className="btnNext btnProceed btnCloseTy" style={{ float: 'none' }} defaultValue="CLOSE" data-dismiss="modal"/>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    );
}