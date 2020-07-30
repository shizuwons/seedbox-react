import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';
import { 
  closeNav, openNav, functionPersonal, 
  functionAddress, functionProfessional, 
  functionCsa, functionPep, functionFatca, 
  functionUpload, functionSettlement, addHyphen, 
  addHyphenPagibig, moreLess 
} from '../functions/kyc';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {

    $(window)
    .resize(function () {
      if ($(window).width() < 500) {
        $(".pMore").text("Personal Information");
        $(".colStep").removeClass("colmid");
        $(".rowStep").addClass("colmid");
      } else {
        $(".pMore").text("More Information");
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

    $(".txtusername").keyup(function (event) {
      $(this).css("border-color", "green");
    });

    $("#txtTin").keyup(function (event) {
      addHyphen(this);
    });

    $("input:checkbox").prop("checked", false); // All checkbox in fatca will be uncheck so the default value will be no.
    $(".checkNo").prop("checked", true); // All checkbox that are in no section will be check.
    $(".checkNo:checked").attr("style", "--b: gray;"); // All checkbox that are in no section will be grayed.
  
    // Function that will copy the current address to permanent address
    $("#cbx").change(function (event) {
      if (this.checked) {
        $(".txtPermaAdd1").val($(".txtCurrentAdd1").val());
        $(".txtPermaAdd2").val($(".txtCurrentAdd2").val());
        $(".txtPermaCity").val($(".txtCurrentCity").val());
        $(".txtPermaProvince").val($(".txtCurrentProvince").val());
      } else {
        $(".txtPermaAdd1").val("");
        $(".txtPermaAdd2").val("");
        $(".txtPermaCity").val("");
        $(".txtPermaProvince").val("");
      }
    });

    let text = '';
    // Automatic text format based on what id type the user choose
    $("#txtIdNumber").keyup(function (event) {
      if ($("#IdType").val() === "GSIS ID") {
        $("#txtIdNumber").attr("maxlength", "11");
      }
      if ($("#IdType").val() === "TIN ID") {
        $("#txtIdNumber").attr("maxlength", "15");
        addHyphen(this);
      }
      if ($("#IdType").val() === "Pag-Ibig ID") {
        $("#txtIdNumber").attr("maxlength", "14");
        addHyphenPagibig(this);
      }
      if ($("#IdType").val() === "PRC ID") {
        $("#txtIdNumber").attr("maxlength", "7");
      }
      if ($("#IdType").val() === "OFW e-Card") {
        $("#txtIdNumber").attr("maxlength", "13");
      }
      if ($("#IdType").val() === "Philhealth") {
        $("#txtIdNumber").attr("maxlength", "14");
        text = $("#txtIdNumber");
        if (text.val().length === 2) {
          text.val($text.val() + "-");
        } else if (text.val().length === 12) {
          text.val($text.val() + "-");
        }
      }
      if ($("#IdType").val() === "Driver license") {
        $("#txtIdNumber").attr("maxlength", "13");
        text = $("#txtIdNumber");
        if (text.val().length === 3) {
          text.val(text.val() + "-");
        } else if (text.val().length === 5) {
          text.val(text.val() + "-");
        }
      }
      if ($("#IdType").val() === "Passport") {
        $("#txtIdNumber").attr("maxlength", "12");
      }
      if ($("#IdType").val() === "SSS ID") {
        $("#txtIdNumber").attr("maxlength", "13");
        text = $("#txtIdNumber");
        if (text.val().length === 2) {
          text.val(text.val() + "-");
        } else if (text.val().length === 10) {
          text.val(text.val() + "-");
        }
      }
    });

    // Evertime the user change the id type the id number will be null
    $("#IdType").change(function (event) {
      $("#txtIdNumber").val("");
    });

    // If the user click the checkbox the other one will be uncheck.
    $('input[type="checkbox"]').click(function () {
      $(this)
        .parents()
        .eq(2)
        .find('input[type="checkbox"]')
        .not(this)
        .prop("checked", false);
    });

    // Function that will prevent the no checkbox uncheck rather it will change the color into green.
    $(".checkNo").on("click", function (e) {
      var checkbox = $(this);
      if (checkbox.is(":checked")) {
      } else {
        $(this, "input:checked").attr("style", "--b: #13C95C;");
        e.preventDefault();
        return false;
      }
    });

    // Click function for back button
    $(".btnBack").click(function () {
      if (step === 7) {
        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".pMore").text("Upload Documents");
        $(".divSettlement").css("display", "none");
        $(".divSettlement").removeClass("animate__fadeOut");
        $(".divSettlement").addClass("animate__animated  animate__fadeOut");
        $(".divUpload").css("display", "block");
        $(".divUpload").removeClass("animate__fadeOut");
        $(".divUpload").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "470px");
        step = 6;
      } else if (step === 6) {
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("FATCA");
        $(".divUpload").css("display", "none");
        $(".divUpload").removeClass("animate__fadeOut");
        $(".divUpload").addClass("animate__animated  animate__fadeOut");
        $(".divUpload").addClass("animate__animated  animate__fadeOut");
        $(".divFatca").css("display", "block");
        $(".divFatca").removeClass("animate__fadeOut");
        $(".divFatca").addClass("animate__animated  animate__fadeIn");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".divWhite").css("top", "400px");
        step = 5;
      } else if (step === 5) {
        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".pMore").text("PEP Declaration");
        $(".divFatca").css("display", "none");
        $(".divFatca").removeClass("animate__fadeOut");
        $(".divFatca").addClass("animate__animated  animate__fadeOut");
        $(".divPep").css("display", "block");
        $(".divPep").removeClass("animate__fadeOut");
        $(".divPep").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "330px");
        step = 4;
      } else if (step === 4) {
        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".pMore").text("CSA");
        $(".divPep").css("display", "none");
        $(".divPep").removeClass("animate__fadeOut");
        $(".divPep").addClass("animate__animated  animate__fadeOut");
        $(".divCsa").css("display", "block");
        $(".divCsa").removeClass("animate__fadeOut");
        $(".divCsa").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "260px");
        step = 3;
      } else if (step === 3) {
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Professional Details");
        $(".divCsa").css("display", "none");
        $(".divCsa").removeClass("animate__fadeOut");
        $(".divCsa").addClass("animate__animated  animate__fadeOut");
        $(".divCsa").addClass("animate__animated  animate__fadeOut");
        $(".divAdrress1").css("display", "block");
        $(".divAdrress1").removeClass("animate__fadeOut");
        $(".divAdrress1").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "190px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        step = 2;
      } else if (step === 2) {
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Personal Information");
        $(".divAdrress1").css("display", "none");
        $(".divAdrress1").removeClass("animate__fadeOut");
        $(".divAdrress1").addClass("animate__animated  animate__fadeOut");
        $(".divAdrress1").addClass("animate__animated  animate__fadeOut");
        $(".divAdrress").css("display", "block");
        $(".divAdrress").removeClass("animate__fadeOut");
        $(".divAdrress").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "125px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        step = 1;
      } else if (step === 1) {
        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".divAdrress").css("display", "none");
        $(".divAdrress").removeClass("animate__fadeOut");
        $(".divAdrress").addClass("animate__animated  animate__fadeOut");
        $(".divAdrress").addClass("animate__animated  animate__fadeOut");
        $(".divInfo").css("display", "block");
        $(".divInfo").removeClass("animate__fadeOut");
        $(".divInfo").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "58px");
        step = 0;
      }
    });

    // Click function for next button
    $(".btnProceed").click(function () {
      if (step === 0) {
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pErrorAge").css("display", "none");
        $(".divAdrress").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divAdrress").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divInfo").css("display", "none");
        $(".divInfo").addClass("animate__animated  animate__fadeOut");
        $(".divAdrress").css("display", "block");
        $(".divAdrress").addClass("animate__animated  animate__fadeIn");
        step = 1;
        $(".divWhite").css("top", "125px");
        $("#txtAccountname").val($("#txtfullname").val());
        $(".colmid").css({ height: $(".conContent").height() + "px" });
      } else if (step === 1) {
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Address Information");
        $(".divAdrress1").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divAdrress1").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divAdrress").css("display", "none");
        $(".divAdrress").addClass("animate__animated  animate__fadeOut");
        $(".divAdrress1").css("display", "block");
        $(".divAdrress1").addClass("animate__animated  animate__fadeIn");
        if ($("#cbx").is(":checked")) {
          $(".txtPermaAdd1").val($(".txtCurrentAdd1").val());
          $(".txtPermaAdd2").val($(".txtCurrentAdd2").val());
          $(".txtPermaCity").val($(".txtCurrentCity").val());
          $(".txtPermaProvince").val($(".txtCurrentProvince").val());
        } else if ($(this).is(":not(:checked)")) {
          $(".txtPermaAdd1").val("");
          $(".txtPermaAdd2").val("");
          $(".txtPermaCity").val("");
          $(".txtPermaProvince").val("");
        }
        $(".divWhite").css("top", "195px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        step = 2;
      } else if (step === 2) {
        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });

        $(".pMore").text("CSA");
        $(".divCsa").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divCsa").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divAdrress1").css("display", "none");
        $(".divAdrress1").addClass("animate__animated  animate__fadeOut");
        $(".divCsa").css("display", "block");
        $(".divCsa").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "265px");

        step = 3;
      } else if (step === 3) {
        $(".pMore").text("PEP Declaration");
        $(".divPep").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divCsa").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divCsa").css("display", "none");
        $(".divCsa").addClass("animate__animated  animate__fadeOut");
        $(".divPep").css("display", "block");
        $(".divPep").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "335px");
        step = 4;
      } else if (step === 4) {
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("FATCA");
        $(".divFatca").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divFatca").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divPep").css("display", "none");
        $(".divPep").addClass("animate__animated  animate__fadeOut");
        $(".divFatca").css("display", "block");
        $(".divFatca").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "400px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        step = 5;
      } else if (step === 5) {
        $(".pMore").text("Upload Documents");
        $(".divUpload").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divUpload").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divFatca").css("display", "none");
        $(".divFatca").addClass("animate__animated  animate__fadeOut");
        $(".divUpload").css("display", "block");
        $(".divUpload").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "470px");
        step = 6;
      } else if (step === 6) {

        $(".pMore").text("Settlement Information");
        $(".divSettlement").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divSettlement").removeClass(
          "animate__animated  animate__fadeOut animate__fadeIn"
        );
        $(".divUpload").css("display", "none");
        $(".divUpload").addClass("animate__animated  animate__fadeOut");
        $(".divSettlement").css("display", "block");
        $(".divSettlement").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "540px");
        step = 7;
      }
    });

    $(":input").cSelect();
  }, []);
  
  return (
    <Default>
      <Head>
        <script>
          {`
            let step = 0;
          `}
        </script>
      </Head>
        <div id="mySidenav" className="sidenav">
          <a href="#" className="closebtn" onClick={closeNav}>×</a>
          <a href="index.html">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PRODUCTS</a>
          <a href="#" data-toggle="modal" data-target="#exampleModal">LOG-IN</a>
          <a href="#" data-toggle="modal" data-target="#contactModal">CONTACT</a>
        </div>
        <div className="container-fluid" style={{backgroundColor: '#fafafa'}}>
          <div className="container con" style={{padding: '20px 15px'}}>
            <span style={{fontSize: '30px', cursor: 'pointer', position: 'absolute', zIndex: 1111111, color: '#13C95C', display: 'none'}} onClick={openNav} className="span">☰</span>
            <nav className="navbar navbar-expand-md">
              <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse">
                <span className="navbar-toggler-icon" />
              </button>
              <nav className="navbar-brand" href="">
                <a href=""><img src="Image/logo-removebg-preview.png" className="img-fluid imgLogo" style={{width: '150px'}} /></a>
              </nav>
              <div className="collapse navbar-collapse" id="collapse">
                <div className="col2 ml-auto">
                  <ul className="nav navbar-nav">
                    <li><a className="nav-link btnpackages" href="index.html">HOME</a></li>
                    <li><a className="nav-link btncontact" href="contact.html">ABOUT</a></li>
                    <li><a className="nav-link btncontact" href="contact.html">PRODUCTS</a></li>
                    <li><a className="nav-link btncontact" href="contact.html">LOG-IN</a></li>
                    <li><a className="nav-link btncontact" href="contact.html">CONTACT</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="container con conContent" style={{backgroundColor: 'white', width: '100%', borderRadius: '25px', boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', WebkitBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', MozBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', height: '82vh'}}>
            <div className="row align-items-center" style={{height: '100%'}}>
              <div className="col-lg-4 col-md-4 colText" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <img src="Image/006-money.png" className="img-fluid imgIcon mx-auto d-flex" style={{width: '70px'}} />
                <p className="pTitle text-center" style={{marginTop: '10px'}}>Invest With a <br />Margin of Safety
                </p>
                <label className="pSubtitle mx-auto d-flex text-center">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed
                  varius commodo neque in egestas. Aenean suscipit eros sed odio bibendum, at lobortis risus
                  sollicitudin. In id dapibus ligula.</label>
              </div>
              <div className="col-lg-3 col-md-3 colStep colmid">
                <div className="row rowHide" style={{display: 'none'}}>
                  <div className="col-lg-12">
                    <p className="pMore1">More Information</p>
                  </div>
                </div>
                <div className="row rowStep" style={{position: 'relative'}}>
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
                    <p className="pSteps" onClick={functionPersonal}>Personal Info &gt; </p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                      <hr className="hrLine" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionAddress}>Address Information &gt;</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                      <hr className="hrLine" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionProfessional}>Professional Details &gt;</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                      <hr className="hrLine" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionCsa}>CSA &gt;</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                      <hr className="hrLine" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionPep}>PEP Declaration &gt;</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                      <hr className="hrLine hrLast" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionFatca}>FATCA &gt;</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                      <hr className="hrLine hrLast" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionUpload}>Upload Documents &gt;</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
                    <div className="divCircle" style={{position: 'relative'}}>
                      <div className="circle">
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
                    <p className="pSteps" onClick={functionSettlement}>Settlement Information &gt;</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 colForm" style={{margin: '0 auto'}}>
                <div className="divInfo divForm">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <form>
                        <input required type="text" className="txtusername" style={{marginTop: '-10px'}} />
                        <label alt="Last Name" placeholder="Last Name" />
                      </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <form>
                        <input required type="text" className="txtusername" style={{marginTop: '-10px'}} />
                        <label alt="First Name" placeholder="First Name" />
                      </form>
                    </div>
                  </div>
                  <p className="pGuide" style={{display: 'none'}}>Name must be comma-separated e.g "Juan, Santos, De la
                    Cruz"</p>
                  <form>
                    <input required type="text" className="txtusername" style={{marginTop: '-10px'}} />
                    <label alt="Mothers Maiden Name" placeholder="Mothers Maiden Name" />
                  </form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="selectdiv" style={{marginTop: '0px'}}>
                        <select autoComplete="off" className="select2" defaultValue={63}>
                          <option data-countrycode="PH" value={63}>Philippines (+63)</option>
                          <option value disabled>Country Code
                          </option>
                          <option data-countrycode="DZ" value={213}>Algeria (+213)</option>
                          <option data-countrycode="AD" value={376}>Andorra (+376)</option>
                          <option data-countrycode="AO" value={244}>Angola (+244)</option>
                          <option data-countrycode="AI" value={1264}>Anguilla (+1264)</option>
                          <option data-countrycode="AG" value={1268}>Antigua &amp; Barbuda (+1268)
                          </option>
                          <option data-countrycode="AR" value={54}>Argentina (+54)</option>
                          <option data-countrycode="AM" value={374}>Armenia (+374)</option>
                          <option data-countrycode="AW" value={297}>Aruba (+297)</option>
                          <option data-countrycode="AU" value={61}>Australia (+61)</option>
                          <option data-countrycode="AT" value={43}>Austria (+43)</option>
                          <option data-countrycode="AZ" value={994}>Azerbaijan (+994)</option>
                          <option data-countrycode="BS" value={1242}>Bahamas (+1242)</option>
                          <option data-countrycode="BH" value={973}>Bahrain (+973)</option>
                          <option data-countrycode="BD" value={880}>Bangladesh (+880)</option>
                          <option data-countrycode="BB" value={1246}>Barbados (+1246)</option>
                          <option data-countrycode="BY" value={375}>Belarus (+375)</option>
                          <option data-countrycode="BE" value={32}>Belgium (+32)</option>
                          <option data-countrycode="BZ" value={501}>Belize (+501)</option>
                          <option data-countrycode="BJ" value={229}>Benin (+229)</option>
                          <option data-countrycode="BM" value={1441}>Bermuda (+1441)</option>
                          <option data-countrycode="BT" value={975}>Bhutan (+975)</option>
                          <option data-countrycode="BO" value={591}>Bolivia (+591)</option>
                          <option data-countrycode="BA" value={387}>Bosnia Herzegovina (+387)</option>
                          <option data-countrycode="BW" value={267}>Botswana (+267)</option>
                          <option data-countrycode="BR" value={55}>Brazil (+55)</option>
                          <option data-countrycode="BN" value={673}>Brunei (+673)</option>
                          <option data-countrycode="BG" value={359}>Bulgaria (+359)</option>
                          <option data-countrycode="BF" value={226}>Burkina Faso (+226)</option>
                          <option data-countrycode="BI" value={257}>Burundi (+257)</option>
                          <option data-countrycode="KH" value={855}>Cambodia (+855)</option>
                          <option data-countrycode="CM" value={237}>Cameroon (+237)</option>
                          <option data-countrycode="CA" value={1}>Canada (+1)</option>
                          <option data-countrycode="CV" value={238}>Cape Verde Islands (+238)</option>
                          <option data-countrycode="KY" value={1345}>Cayman Islands (+1345)</option>
                          <option data-countrycode="CF" value={236}>Central African Republic (+236)
                          </option>
                          <option data-countrycode="CL" value={56}>Chile (+56)</option>
                          <option data-countrycode="CN" value={86}>China (+86)</option>
                          <option data-countrycode="CO" value={57}>Colombia (+57)</option>
                          <option data-countrycode="KM" value={269}>Comoros (+269)</option>
                          <option data-countrycode="CG" value={242}>Congo (+242)</option>
                          <option data-countrycode="CK" value={682}>Cook Islands (+682)</option>
                          <option data-countrycode="CR" value={506}>Costa Rica (+506)</option>
                          <option data-countrycode="HR" value={385}>Croatia (+385)</option>
                          <option data-countrycode="CU" value={53}>Cuba (+53)</option>
                          <option data-countrycode="CY" value={90392}>Cyprus North (+90392)</option>
                          <option data-countrycode="CY" value={357}>Cyprus South (+357)</option>
                          <option data-countrycode="CZ" value={42}>Czech Republic (+42)</option>
                          <option data-countrycode="DK" value={45}>Denmark (+45)</option>
                          <option data-countrycode="DJ" value={253}>Djibouti (+253)</option>
                          <option data-countrycode="DM" value={1809}>Dominica (+1809)</option>
                          <option data-countrycode="DO" value={1809}>Dominican Republic (+1809)</option>
                          <option data-countrycode="EC" value={593}>Ecuador (+593)</option>
                          <option data-countrycode="EG" value={20}>Egypt (+20)</option>
                          <option data-countrycode="SV" value={503}>El Salvador (+503)</option>
                          <option data-countrycode="GQ" value={240}>Equatorial Guinea (+240)</option>
                          <option data-countrycode="ER" value={291}>Eritrea (+291)</option>
                          <option data-countrycode="EE" value={372}>Estonia (+372)</option>
                          <option data-countrycode="ET" value={251}>Ethiopia (+251)</option>
                          <option data-countrycode="FK" value={500}>Falkland Islands (+500)</option>
                          <option data-countrycode="FO" value={298}>Faroe Islands (+298)</option>
                          <option data-countrycode="FJ" value={679}>Fiji (+679)</option>
                          <option data-countrycode="FI" value={358}>Finland (+358)</option>
                          <option data-countrycode="FR" value={33}>France (+33)</option>
                          <option data-countrycode="GF" value={594}>French Guiana (+594)</option>
                          <option data-countrycode="PF" value={689}>French Polynesia (+689)</option>
                          <option data-countrycode="GA" value={241}>Gabon (+241)</option>
                          <option data-countrycode="GM" value={220}>Gambia (+220)</option>
                          <option data-countrycode="GE" value={7880}>Georgia (+7880)</option>
                          <option data-countrycode="DE" value={49}>Germany (+49)</option>
                          <option data-countrycode="GH" value={233}>Ghana (+233)</option>
                          <option data-countrycode="GI" value={350}>Gibraltar (+350)</option>
                          <option data-countrycode="GR" value={30}>Greece (+30)</option>
                          <option data-countrycode="GL" value={299}>Greenland (+299)</option>
                          <option data-countrycode="GD" value={1473}>Grenada (+1473)</option>
                          <option data-countrycode="GP" value={590}>Guadeloupe (+590)</option>
                          <option data-countrycode="GU" value={671}>Guam (+671)</option>
                          <option data-countrycode="GT" value={502}>Guatemala (+502)</option>
                          <option data-countrycode="GN" value={224}>Guinea (+224)</option>
                          <option data-countrycode="GW" value={245}>Guinea - Bissau (+245)</option>
                          <option data-countrycode="GY" value={592}>Guyana (+592)</option>
                          <option data-countrycode="HT" value={509}>Haiti (+509)</option>
                          <option data-countrycode="HN" value={504}>Honduras (+504)</option>
                          <option data-countrycode="HK" value={852}>Hong Kong (+852)</option>
                          <option data-countrycode="HU" value={36}>Hungary (+36)</option>
                          <option data-countrycode="IS" value={354}>Iceland (+354)</option>
                          <option data-countrycode="IN" value={91}>India (+91)</option>
                          <option data-countrycode="ID" value={62}>Indonesia (+62)</option>
                          <option data-countrycode="IR" value={98}>Iran (+98)</option>
                          <option data-countrycode="IQ" value={964}>Iraq (+964)</option>
                          <option data-countrycode="IE" value={353}>Ireland (+353)</option>
                          <option data-countrycode="IL" value={972}>Israel (+972)</option>
                          <option data-countrycode="IT" value={39}>Italy (+39)</option>
                          <option data-countrycode="JM" value={1876}>Jamaica (+1876)</option>
                          <option data-countrycode="JP" value={81}>Japan (+81)</option>
                          <option data-countrycode="JO" value={962}>Jordan (+962)</option>
                          <option data-countrycode="KZ" value={7}>Kazakhstan (+7)</option>
                          <option data-countrycode="KE" value={254}>Kenya (+254)</option>
                          <option data-countrycode="KI" value={686}>Kiribati (+686)</option>
                          <option data-countrycode="KP" value={850}>Korea North (+850)</option>
                          <option data-countrycode="KR" value={82}>Korea South (+82)</option>
                          <option data-countrycode="KW" value={965}>Kuwait (+965)</option>
                          <option data-countrycode="KG" value={996}>Kyrgyzstan (+996)</option>
                          <option data-countrycode="LA" value={856}>Laos (+856)</option>
                          <option data-countrycode="LV" value={371}>Latvia (+371)</option>
                          <option data-countrycode="LB" value={961}>Lebanon (+961)</option>
                          <option data-countrycode="LS" value={266}>Lesotho (+266)</option>
                          <option data-countrycode="LR" value={231}>Liberia (+231)</option>
                          <option data-countrycode="LY" value={218}>Libya (+218)</option>
                          <option data-countrycode="LI" value={417}>Liechtenstein (+417)</option>
                          <option data-countrycode="LT" value={370}>Lithuania (+370)</option>
                          <option data-countrycode="LU" value={352}>Luxembourg (+352)</option>
                          <option data-countrycode="MO" value={853}>Macao (+853)</option>
                          <option data-countrycode="MK" value={389}>Macedonia (+389)</option>
                          <option data-countrycode="MG" value={261}>Madagascar (+261)</option>
                          <option data-countrycode="MW" value={265}>Malawi (+265)</option>
                          <option data-countrycode="MY" value={60}>Malaysia (+60)</option>
                          <option data-countrycode="MV" value={960}>Maldives (+960)</option>
                          <option data-countrycode="ML" value={223}>Mali (+223)</option>
                          <option data-countrycode="MT" value={356}>Malta (+356)</option>
                          <option data-countrycode="MH" value={692}>Marshall Islands (+692)</option>
                          <option data-countrycode="MQ" value={596}>Martinique (+596)</option>
                          <option data-countrycode="MR" value={222}>Mauritania (+222)</option>
                          <option data-countrycode="YT" value={269}>Mayotte (+269)</option>
                          <option data-countrycode="MX" value={52}>Mexico (+52)</option>
                          <option data-countrycode="FM" value={691}>Micronesia (+691)</option>
                          <option data-countrycode="MD" value={373}>Moldova (+373)</option>
                          <option data-countrycode="MC" value={377}>Monaco (+377)</option>
                          <option data-countrycode="MN" value={976}>Mongolia (+976)</option>
                          <option data-countrycode="MS" value={1664}>Montserrat (+1664)</option>
                          <option data-countrycode="MA" value={212}>Morocco (+212)</option>
                          <option data-countrycode="MZ" value={258}>Mozambique (+258)</option>
                          <option data-countrycode="MN" value={95}>Myanmar (+95)</option>
                          <option data-countrycode="NA" value={264}>Namibia (+264)</option>
                          <option data-countrycode="NR" value={674}>Nauru (+674)</option>
                          <option data-countrycode="NP" value={977}>Nepal (+977)</option>
                          <option data-countrycode="NL" value={31}>Netherlands (+31)</option>
                          <option data-countrycode="NC" value={687}>New Caledonia (+687)</option>
                          <option data-countrycode="NZ" value={64}>New Zealand (+64)</option>
                          <option data-countrycode="NI" value={505}>Nicaragua (+505)</option>
                          <option data-countrycode="NE" value={227}>Niger (+227)</option>
                          <option data-countrycode="NG" value={234}>Nigeria (+234)</option>
                          <option data-countrycode="NU" value={683}>Niue (+683)</option>
                          <option data-countrycode="NF" value={672}>Norfolk Islands (+672)</option>
                          <option data-countrycode="NP" value={670}>Northern Marianas (+670)</option>
                          <option data-countrycode="NO" value={47}>Norway (+47)</option>
                          <option data-countrycode="OM" value={968}>Oman (+968)</option>
                          <option data-countrycode="PW" value={680}>Palau (+680)</option>
                          <option data-countrycode="PA" value={507}>Panama (+507)</option>
                          <option data-countrycode="PG" value={675}>Papua New Guinea (+675)</option>
                          <option data-countrycode="PY" value={595}>Paraguay (+595)</option>
                          <option data-countrycode="PE" value={51}>Peru (+51)</option>
                          <option data-countrycode="PH" value={63}>Philippines (+63)</option>
                          <option data-countrycode="PL" value={48}>Poland (+48)</option>
                          <option data-countrycode="PT" value={351}>Portugal (+351)</option>
                          <option data-countrycode="PR" value={1787}>Puerto Rico (+1787)</option>
                          <option data-countrycode="QA" value={974}>Qatar (+974)</option>
                          <option data-countrycode="RE" value={262}>Reunion (+262)</option>
                          <option data-countrycode="RO" value={40}>Romania (+40)</option>
                          <option data-countrycode="RU" value={7}>Russia (+7)</option>
                          <option data-countrycode="RW" value={250}>Rwanda (+250)</option>
                          <option data-countrycode="SM" value={378}>San Marino (+378)</option>
                          <option data-countrycode="ST" value={239}>Sao Tome &amp; Principe (+239)
                          </option>
                          <option data-countrycode="SA" value={966}>Saudi Arabia (+966)</option>
                          <option data-countrycode="SN" value={221}>Senegal (+221)</option>
                          <option data-countrycode="CS" value={381}>Serbia (+381)</option>
                          <option data-countrycode="SC" value={248}>Seychelles (+248)</option>
                          <option data-countrycode="SL" value={232}>Sierra Leone (+232)</option>
                          <option data-countrycode="SG" value={65}>Singapore (+65)</option>
                          <option data-countrycode="SK" value={421}>Slovak Republic (+421)</option>
                          <option data-countrycode="SI" value={386}>Slovenia (+386)</option>
                          <option data-countrycode="SB" value={677}>Solomon Islands (+677)</option>
                          <option data-countrycode="SO" value={252}>Somalia (+252)</option>
                          <option data-countrycode="ZA" value={27}>South Africa (+27)</option>
                          <option data-countrycode="ES" value={34}>Spain (+34)</option>
                          <option data-countrycode="LK" value={94}>Sri Lanka (+94)</option>
                          <option data-countrycode="SH" value={290}>St. Helena (+290)</option>
                          <option data-countrycode="KN" value={1869}>St. Kitts (+1869)</option>
                          <option data-countrycode="SC" value={1758}>St. Lucia (+1758)</option>
                          <option data-countrycode="SD" value={249}>Sudan (+249)</option>
                          <option data-countrycode="SR" value={597}>Suriname (+597)</option>
                          <option data-countrycode="SZ" value={268}>Swaziland (+268)</option>
                          <option data-countrycode="SE" value={46}>Sweden (+46)</option>
                          <option data-countrycode="CH" value={41}>Switzerland (+41)</option>
                          <option data-countrycode="SI" value={963}>Syria (+963)</option>
                          <option data-countrycode="TW" value={886}>Taiwan (+886)</option>
                          <option data-countrycode="TJ" value={7}>Tajikstan (+7)</option>
                          <option data-countrycode="TH" value={66}>Thailand (+66)</option>
                          <option data-countrycode="TG" value={228}>Togo (+228)</option>
                          <option data-countrycode="TO" value={676}>Tonga (+676)</option>
                          <option data-countrycode="TT" value={1868}>Trinidad &amp; Tobago (+1868)
                          </option>
                          <option data-countrycode="TN" value={216}>Tunisia (+216)</option>
                          <option data-countrycode="TR" value={90}>Turkey (+90)</option>
                          <option data-countrycode="TM" value={7}>Turkmenistan (+7)</option>
                          <option data-countrycode="TM" value={993}>Turkmenistan (+993)</option>
                          <option data-countrycode="TC" value={1649}>Turks &amp; Caicos Islands (+1649)
                          </option>
                          <option data-countrycode="TV" value={688}>Tuvalu (+688)</option>
                          <option data-countrycode="UG" value={256}>Uganda (+256)</option>
                          {/* <option data-countryCode="GB" value="44">UK (+44)</option> */}
                          <option data-countrycode="UA" value={380}>Ukraine (+380)</option>
                          <option data-countrycode="AE" value={971}>United Arab Emirates (+971)</option>
                          <option data-countrycode="UY" value={598}>Uruguay (+598)</option>
                          {/* <option data-countryCode="US" value="1">USA (+1)</option> */}
                          <option data-countrycode="UZ" value={7}>Uzbekistan (+7)</option>
                          <option data-countrycode="VU" value={678}>Vanuatu (+678)</option>
                          <option data-countrycode="VA" value={379}>Vatican City (+379)</option>
                          <option data-countrycode="VE" value={58}>Venezuela (+58)</option>
                          <option data-countrycode="VN" value={84}>Vietnam (+84)</option>
                          <option data-countrycode="VG" value={84}>Virgin Islands - British (+1284)
                          </option>
                          <option data-countrycode="VI" value={84}>Virgin Islands - US (+1340)</option>
                          <option data-countrycode="WF" value={681}>Wallis &amp; Futuna (+681)</option>
                          <option data-countrycode="YE" value={969}>Yemen (North)(+969)</option>
                          <option data-countrycode="YE" value={967}>Yemen (South)(+967)</option>
                          <option data-countrycode="ZM" value={260}>Zambia (+260)</option>
                          <option data-countrycode="ZW" value={263}>Zimbabwe (+263)</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <input required type="text" className="txtusername txtEmail" />
                        <label alt="Mobile Number" placeholder="Mobile Number" />
                      </form>
                    </div>
                  </div>
                  <form>
                    <input required type="text" className="txtusername txtEmail" />
                    <label alt="E-mail" placeholder="E-mail" />
                  </form>
                  {/*

                           <p class="pError pErrorEmail error" style="margin-top:-10px;">Error! Please put a valid email.
                        </p>
                     */}
                  <p className="pError pErrorEmail success">Your email in valid.</p>
                  <div className="row" style={{marginTop: '-5px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="selectdiv" style={{marginTop: '0px'}}>
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Civil Status
                          </option>
                          <option>Single</option>
                          <option>Married</option>
                          <option>Divorced/Separated</option>
                          <option>Widowed</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="selectdiv" style={{marginTop: '0px'}}>
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 align-self-center">
                      <p className="pExpiry" style={{marginLeft: '10px'}}>Birthdate</p>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <div className="selectdiv" style={{marginTop: '0px'}}>
                            <select autoComplete="off" className="select2 " id="selectMM" defaultValue="default">
                              <option value="default" disabled>MM
                              </option>
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                              <option>05</option>
                              <option>06</option>
                              <option>07</option>
                              <option>08</option>
                              <option>09</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <div className="selectdiv" style={{marginTop: '0px'}}>
                            <select autoComplete="off" className="select2" id="selectDD" defaultValue="default">
                              <option value="default" disabled>DD
                              </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>8</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                              <option>13</option>
                              <option>15</option>
                              <option>16</option>
                              <option>17</option>
                              <option>18</option>
                              <option>19</option>
                              <option>20</option>
                              <option>21</option>
                              <option>22</option>
                              <option>23</option>
                              <option>24</option>
                              <option>25</option>
                              <option>26</option>
                              <option>27</option>
                              <option>28</option>
                              <option>29</option>
                              <option>30</option>
                              <option>31</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <div className="selectdiv" style={{marginTop: '0px'}}>
                            <select autoComplete="off" className="select2" id="selectYY" defaultValue="default">
                              <option value="default" disabled>YY
                              </option>
                              <option>1920</option>
                              <option>1921</option>
                              <option>1922</option>
                              <option>1923</option>
                              <option>1924</option>
                              <option>1925</option>
                              <option>1926</option>
                              <option>1927</option>
                              <option>1928</option>
                              <option>1929</option>
                              <option>1940</option>
                              <option>1931</option>
                              <option>1932</option>
                              <option>1933</option>
                              <option>1934</option>
                              <option>1935</option>
                              <option>1936</option>
                              <option>1937</option>
                              <option>1938</option>
                              <option>1939</option>
                              <option>1940</option>
                              <option>1941</option>
                              <option>1942</option>
                              <option>1943</option>
                              <option>1944</option>
                              <option>1945</option>
                              <option>1946</option>
                              <option>1947</option>
                              <option>1948</option>
                              <option>1949</option>
                              <option>1950</option>
                              <option>1951</option>
                              <option>1952</option>
                              <option>1953</option>
                              <option>1954</option>
                              <option>1955</option>
                              <option>1956</option>
                              <option>1957</option>
                              <option>1958</option>
                              <option>1959</option>
                              <option>1960</option>
                              <option>1961</option>
                              <option>1962</option>
                              <option>1963</option>
                              <option>1964</option>
                              <option>1965</option>
                              <option>1966</option>
                              <option>1967</option>
                              <option>1968</option>
                              <option>1969</option>
                              <option>1970</option>
                              <option>1971</option>
                              <option>1972</option>
                              <option>1973</option>
                              <option>1974</option>
                              <option>1975</option>
                              <option>1976</option>
                              <option>1977</option>
                              <option>1978</option>
                              <option>1979</option>
                              <option>1980</option>
                              <option>1981</option>
                              <option>1982</option>
                              <option>1983</option>
                              <option>1984</option>
                              <option>1985</option>
                              <option>1986</option>
                              <option>1987</option>
                              <option>1988</option>
                              <option>1989</option>
                              <option>1990</option>
                              <option>1991</option>
                              <option>1992</option>
                              <option>1993</option>
                              <option>1994</option>
                              <option>1995</option>
                              <option>1996</option>
                              <option>1997</option>
                              <option>1998</option>
                              <option>1999</option>
                              <option>2000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12" style={{marginTop: '15px'}}>
                    <p className="pGuide" style={{marginLeft: '-5px'}}>You must be at least 18 years old to sign-up</p>
                  </div>
                  <div className="row" style={{marginTop: '-10px'}}>
                    <div className="col-lg-12">
                      <form style={{marginTop: '5px'}}>
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                          <select autoComplete="off" className="select2" defaultValue="default">
                            <option value="default" disabled>Birthplace
                            </option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '5px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="Citizenship" placeholder="Citizenship" />
                      </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="Referral Agent Code" placeholder="Referral Agent Code" />
                      </form>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '-10px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <form>
                        <input required type="text" className="txtusername" id="txtTin" />
                        <label alt="TIN" placeholder="TIN" />
                      </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div className="form-inline">
                        <form>
                          <input required type="text" className="txtusername" />
                          <label alt="SSS/GSIS" placeholder="SSS/GSIS" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="button" className="btnSubmit btnProceed" defaultValue="Next" style={{marginTop: '-10px'}} />
                    </div>
                  </div>
                </div>
                <div className="divAdrress divForm" style={{display: 'none'}}>
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <p className="pInfoTitle">Current Address</p>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <form>
                        <input required type="text" className="txtusername txtCurrentAdd1" />
                        <label alt="Current Address Line 1" placeholder="Current Address Line 1" />
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <form>
                        <input required type="text" className="txtusername txtCurrentAdd2" />
                        <label alt="Current Address Line 2" placeholder="Current Address Line 2" />
                      </form>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '-2px'}}>
                      <form>
                        <input required type="text" className="txtusername txtCurrentCity" />
                        <label alt="City" placeholder="City" />
                      </form>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '-2px'}}>
                      <form>
                        <input required type="text" className="txtusername txtCurrentProvince" />
                        <label alt="Province/Region" placeholder="Province/Region" />
                      </form>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '-14px'}}>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue={'Philippines'}>
                          <option value>Please select</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">Christmas Island</option>
                          <option value="Cocos Islands">Cocos Islands</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of
                            the</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">Falkland Islands</option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">French Polynesia</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard Island and McDonald Islands">Heard Island and McDonald
                            Islands</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macao">Macao</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">Marshall Islands</option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">Micronesia</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="North Korea">North Korea</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestinian Territory">Palestinian Territory</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">Papua New Guinea</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Romania">Romania</option>
                          <option value="Russian Federation">Russian Federation</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                          <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                            Grenadines</option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">Solomon Islands</option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia">South Georgia</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Timor-Leste">Timor-Leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">United States Minor
                            Outlying Islands</option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City">Vatican City</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands, British">Virgin Islands, British</option>
                          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                          <option value="Wallis and Futuna">Wallis and Futuna</option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p className="pInfoTitle" style={{marginTop: '0px'}}>Permanent Address</p>
                    </div>
                    <div className="col-lg-6">
                      <input className="inp-cbx" id="cbx" type="checkbox" style={{visibility: 'hidden'}} />
                      <label className="cbx" htmlFor="cbx"><span>
                          <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                          </svg></span><span style={{fontFamily: 'Proxima Regular', color: '#404040', fontSize: '0.9rem'}}>Same
                          as
                          current address</span></label>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '15px'}}>
                    <div className="col-lg-12 colAdd">
                      <form>
                        <input required type="text" className="txtusername txtAdd txtPermaAdd1" />
                        <label className="lblAdd" alt="Permanent Address Line 1" placeholder="Address" />
                      </form>
                    </div>
                    <div className="col-lg-12 colAdd">
                      <form>
                        <input required type="text" className="txtusername txtAdd txtPermaAdd2" />
                        <label className="lblAdd" alt="Permanent Address Line 2" placeholder="Address" />
                      </form>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-4px'}}>
                      <form>
                        <input required type="text" className="txtusername txtPermaCity" />
                        <label alt="City" placeholder="City" />
                      </form>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-4px'}}>
                      <form>
                        <input required type="text" className="txtusername txtPermaProvince" />
                        <label alt="Province/Region" placeholder="Province/Region" />
                      </form>
                    </div>
                    <div className="col-lg-12 colAdd" style={{marginTop: '-14px'}}>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue={'Philippines'}>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">Christmas Island</option>
                          <option value="Cocos Islands">Cocos Islands</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of
                            the</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">Falkland Islands</option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">French Polynesia</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard Island and McDonald Islands">Heard Island and McDonald
                            Islands</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macao">Macao</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">Marshall Islands</option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">Micronesia</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="North Korea">North Korea</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestinian Territory">Palestinian Territory</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">Papua New Guinea</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Romania">Romania</option>
                          <option value="Russian Federation">Russian Federation</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                          <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                            Grenadines</option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">Solomon Islands</option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia">South Georgia</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Timor-Leste">Timor-Leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">United States Minor
                            Outlying Islands</option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City">Vatican City</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands, British">Virgin Islands, British</option>
                          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                          <option value="Wallis and Futuna">Wallis and Futuna</option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" style={{marginTop: '10px'}}>
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" style={{marginTop: '10px'}}>
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
                <div className="divAdrress1 divForm" style={{display: 'none'}}>
                  <div className="row" style={{marginTop: '-10px'}}>
                    <div className="col-lg-12">
                      <p className="pInfoTitle" style={{marginTop: '10px'}}>Professional Details</p>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="Business/Employer Name" placeholder="Business/Employer Name" />
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="Office Address" placeholder="Office Address" />
                      </form>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '-4px'}}>
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="City" placeholder="City" />
                      </form>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '-4px'}}>
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="Province/Region" placeholder="Province/Region" />
                      </form>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '-10px'}}>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue={'Philippines'}>
                          <option value>Please select</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Bouvet Island">Bouvet Island</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">British Indian Ocean Territory
                          </option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">Christmas Island</option>
                          <option value="Cocos Islands">Cocos Islands</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of
                            the</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">Falkland Islands</option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">French Polynesia</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Heard Island and McDonald Islands">Heard Island and McDonald
                            Islands</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macao">Macao</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">Marshall Islands</option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">Micronesia</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="North Korea">North Korea</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestinian Territory">Palestinian Territory</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">Papua New Guinea</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Pitcairn">Pitcairn</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Romania">Romania</option>
                          <option value="Russian Federation">Russian Federation</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Helena">Saint Helena</option>
                          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                          <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                            Grenadines</option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">Solomon Islands</option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Georgia">South Georgia</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Timor-Leste">Timor-Leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="United States Minor Outlying Islands">United States Minor
                            Outlying Islands</option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City">Vatican City</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands, British">Virgin Islands, British</option>
                          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                          <option value="Wallis and Futuna">Wallis and Futuna</option>
                          <option value="Western Sahara">Western Sahara</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pInfoTitle" style={{marginTop: '0px'}}>Financial Profile</p>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <div className="selectdiv" style={{marginTop: '10px'}}>
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Source of Funds</option>
                          <option>Salary</option>
                          <option>Remitance</option>
                          <option>
                            Savings</option>
                          <option>Pension</option>
                          <option>Dividends</option>
                          <option>Investments</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '0px'}}>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> Net Worth
                          </option>
                          <option>
                            &lt; 1,000,000 PHP</option>
                          <option>1 - 10 Million</option>
                          <option>10 - 20 Million</option>
                          <option>20 million and above</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> Annual Gross Income
                          </option>
                          <option>
                            &lt; 250,000 PHP</option>
                          <option>250,000 - 500,000 PHP</option>
                          <option>500,000 - 1,000,000 PHP</option>
                          <option>&gt; 1,000,000 PHP</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="selectdiv" style={{marginTop: '10px'}}>
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Nature of Work</option>
                          <option>Private sector employee</option>
                          <option>Goverment employee</option>
                          <option>Self-employed</option>
                          <option>OFW</option>
                          <option>
                            Student</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Nature of Business</option>
                          <option>Agribusiness</option>
                          <option>Construction</option>
                          <option>Education</option>
                          <option>Financial</option>
                          <option>Goverment</option>
                          <option>Information Technology</option>
                          <option>Manufacturing</option>
                          <option>Mining</option>
                          <option>Multi Industry</option>
                          <option>Non Profit Organization</option>
                          <option>Retail</option>
                          <option>Services</option>
                          <option>Trading </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="selectdiv" style={{marginTop: '8px'}}>
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Are you director/officer/shareholder?
                          </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
                <div className="divFatca divForm" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <p className="pInfoTitle" style={{marginTop: '0px'}}>FATCA</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                      <label className="lblYes">Yes</label>
                      <label className="lblYes">No</label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '10px 10px 10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry">Are you a US Citizen?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>no</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry" style={{marginLeft: '10px'}}>US Resident?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry" style={{marginLeft: '10px'}}>US resident alien?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry">Do you have current US telephone number?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry">Were you born in the US?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry">Do you have current US residence address?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry">Do you have current US mailing address? (Including US P.O.)</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry pClamp pClamp1 text">Have you issued a standing instruction to transfer
                        funds to an
                        account maintained in the US?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry pClamp text">Have you issued a power of Attorney or granted signatory
                        authority to
                        a person with US address?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                    <div className="col-lg-8">
                      <p className="pExpiry pClamp text">Do you have “in care of” address or
                        “hold
                        mail” address that is the sole address for an account (whether such
                        address
                        in the US or outside the US)?</p>
                    </div>
                    <div className="col-lg-4">
                      <label className="checkbox bounce">
                        <input type="checkbox" />
                        <svg viewBox="0 0 21 21">
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" />
                        <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                          <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: 10}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
                <div className="divCsa divForm" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Client
                        Suitability
                        Assessment</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> What is the purpose of your investment?
                          </option>
                          <option>Growth</option>
                          <option>Investment</option>
                          <option>Income</option>
                          <option>Portfolio</option>
                          <option>Speculation</option>
                          <option>Savings</option>
                          <option>Others</option>
                        </select>
                      </div>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> How long are you investing for?</option>
                          <option>Up to two years</option>
                          <option>3-5 Years</option>
                          <option>5-7 Years</option>
                          <option>7 years and up</option>
                        </select>
                      </div>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> For this investment, you are?
                          </option>
                          <option>"Willing to accept low to no risk for general stability ofyour
                            money"
                          </option>
                          <option>"Willing to accept moderate risk in return for some growth
                            opportunity"
                          </option>
                          <option>"Willing to accept high risk for potentially higher return"</option>
                        </select>
                      </div>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> How knowledgeable are you as an
                            investor?
                          </option>
                          <option>I am a new or novice investor</option>
                          <option>I have some knowledge about investing</option>
                          <option>I am generally knowledgeable about investing</option>
                          <option>I am very knowledgeable about investing</option>
                        </select>
                      </div>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> Which of the following have you invested
                            in?
                          </option>
                          <option>Cash and deposit products (e.g. time deposit, SDA)</option>
                          <option>Government securities or corporate fixed-income securities</option>
                          <option>Stocks</option>
                          <option>Mutual funds or UITFs</option>
                          <option>Insurance products (including variable unit linked products and
                            pre-need)</option>
                          <option>Offshore funds (including ETFs, REITs)</option>
                          <option>Structured financial products</option>
                          <option>Commodities</option>
                          <option>Real estate</option>
                        </select>
                      </div>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled> Do you have regular liquidity
                            requirement?
                          </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
                <div className="divPep divForm" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>PEP Declaration
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Have you worked in a government agency or
                            institution?
                          </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                      <div className="selectdiv">
                        <select autoComplete="off" className="select2" defaultValue="default">
                          <option value="default" disabled>Do you have any relative who is/was
                            elected a
                            government official or is/was an appointed official up to second degree
                            of
                            consanguinity or affinity?
                          </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
                <div className="divSettlement divForm" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Settlement
                        Information</p>
                    </div>
                    <div className="col-lg-12">
                      <form>
                        <input required type="text" className="txtusername txtSettle" />
                        <label alt="Bank Name" placeholder="Bank Name" />
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <form>
                        <input required type="text" className="txtusername" id="txtAccountname" />
                        <label alt="Account Name" placeholder="Account Name" />
                      </form>
                    </div>
                    <div className="col-lg-12 ">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="Account Number" placeholder="Account Number" />
                      </form>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
                <div className="divUpload divForm" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                      <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Upload Documents</p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <div className="selectdiv" style={{marginTop: '0px'}}>
                        <select autoComplete="off" className="select2" id="IdType" defaultValue="default">
                          <option value="default" disabled>ID Type
                          </option>
                          <option>SSS ID</option>
                          <option>GSIS ID</option>
                          <option>TIN ID</option>
                          <option>Pag-Ibig ID</option>
                          <option>Driver license</option>
                          <option>Philhealth</option>
                          <option>PRC ID</option>
                          <option>Postal ID</option>
                          <option>Voter's ID</option>
                          <option>Passport</option>
                          <option>Alien Certificate of Residency ID</option>
                          <option>OFW e-Card</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                      <form>
                        <input required type="text" className="txtusername" id="txtIdNumber" />
                        <label alt="ID Number" placeholder="ID Number" />
                      </form>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 align-self-center">
                      <p className="pExpiry">Expiry date</p>
                    </div>
                    <div className=" col-lg-3 col-md-3 col-sm-4 col-4">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="MM" placeholder="MM" />
                      </form>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="DD" placeholder="DD" />
                      </form>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                      <form>
                        <input required type="text" className="txtusername" />
                        <label alt="YY" placeholder="YY" />
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img src="Image/upload.png" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img src="Image/signature.png" className="img-fluid" />
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnBack" defaultValue="Back" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <input type="button" className="btnNext btnProceed" defaultValue="Next" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
  )
}
