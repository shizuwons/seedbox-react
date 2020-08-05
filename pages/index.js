import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';
import { 
  closeNav, openNav, addHyphen, 
  addHyphenPagibig, moreLess 
} from '../functions/kyc';
import { personalValidation, addressValidation, professionalValidation, pepValidation, csaValidation, uploadValidation, settlementValidation } from '../functions/validators';
import { useEffect } from 'react';
import KycForm from './kycForm';

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
      if($(this).val().length > 0) {
        console.log($(this).val());
        $(this).css("border-color", "green");
      } else {
        $(this).removeAttr('style');
      }
    });

    $("#txtTin").keyup(function (event) {
      addHyphen(this);
    });

    // $("input:checkbox").prop("checked", false); // All checkbox in fatca will be uncheck so the default value will be no.
    // $(".checkOther").prop("checked", true); // All checkbox that are in no section will be check.
    // $(".checkOther:checked").attr("style", "--b: gray;"); // All checkbox that are in no section will be grayed.
  
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

    // Mobile number, only numbers
    $("#Mobile").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
     }
    });

    // Personal Info select fields
    $('.country-code').on("select2:selecting", function(e) { 
        let value = $('.country-code').val();

        if(value != "0" || value != null) {
          $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        }
    });

    $('.civil-status').on("select2:selecting", function(e) { 
      let value = $('.civil-status').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });
  
    $('.gender').on("select2:selecting", function(e) { 
      let value = $('.gender').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.month').on("select2:selecting", function(e) { 
      let value = $('.month').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.day').on("select2:selecting", function(e) { 
      let value = $('.day').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.year').on("select2:selecting", function(e) { 
      let value = $('.year').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.birthplace').on("select2:selecting", function(e) { 
      let value = $('.birthplace').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.citizenship').on("select2:selecting", function(e) { 
      let value = $('.citizenship').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    // Address Info select fields
    $('.current').on("select2:selecting", function(e) { 
      let value = $('.current').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.present').on("select2:selecting", function(e) { 
      let value = $('.present').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    // Professional details select fields
    $('.nature-work').on("select2:selecting", function(e) { 
      let value = $('.nature-work').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.nature-business').on("select2:selecting", function(e) { 
      let value = $('.nature-business').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.source-funds').on("select2:selecting", function(e) { 
      let value = $('.source-funds').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.source-funds').on("select2:selecting", function(e) { 
      let value = $('.source-funds').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.net-worth').on("select2:selecting", function(e) { 
      let value = $('.net-worth').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.gross-income').on("select2:selecting", function(e) { 
      let value = $('.gross-income').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });
    
    $('.dos').on("select2:selecting", function(e) { 
      let value = $('.dos').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    // CSA
    $('.investment').on("select2:selecting", function(e) { 
      let value = $('.investment').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.investing').on("select2:selecting", function(e) { 
      let value = $('.investing').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.for-investment').on("select2:selecting", function(e) { 
      let value = $('.for-investment').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.investor').on("select2:selecting", function(e) { 
      let value = $('.investor').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.invested').on("select2:selecting", function(e) { 
      let value = $('.invested').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.liquidity').on("select2:selecting", function(e) { 
      let value = $('.liquidity').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    // PEP select fields
    $('.government').on("select2:selecting", function(e) { 
      let value = $('.government').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });
    
    $('.relative').on("select2:selecting", function(e) { 
      let value = $('.relative').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });
    
    // Upload documents select fields
    $('.id-type').on("select2:selected", function(e) { 
      let value = $('.id-type').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      } 
    });

    $('.expirymonth').on("select2:selecting", function(e) { 
      let value = $('.expirymonth').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.expiryday').on("select2:selecting", function(e) { 
      let value = $('.expiryday').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    $('.expiryyear').on("select2:selecting", function(e) { 
      let value = $('.expiryyear').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    // Settlement select fields
    $('.bank-name').on("select2:selecting", function(e) { 
      let value = $('.bank-name').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
      }
    });

    // Disable expiry date on non-expiring ID
    $(".id-type").on("change", function () { 
      let value = $('.id-type').val();
      
      if(value === "SSS" || value === "UMID" || value === "GSIS" || value === "TIN" || value === "HDMF" || value === "PHIC" || value === "VOTER") {
        $('.expirymonth').select2({
          disabled: true
        });
        $('.expiryyear').select2({
          disabled: true
        });
        $('.expiryday').select2({
          disabled: true
        });
      } else {
        $('.expirymonth').select2({
          disabled: false
        });
        $('.expiryyear').select2({
          disabled: false
        });
        $('.expiryday').select2({
          disabled: false
        });
      }
    });

    // Bank name same as first name and last name
    $('.txtFirst').keyup(function() {
      $('.txtAccountname').val($('.txtFirst').val() + " " + $('.txtLast').val());
    });

    $('.txtLast').keyup(function() {
      $('.txtAccountname').val($('.txtFirst').val() + " " + $('.txtLast').val());
    });

    // Function that will prevent the no checkbox uncheck rather it will change the color into green.
    $(".checkOther").on("click", function (e) {
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
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: 75vh !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Address Information");
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
        $(".pMore").text("Personal Information");
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
        let validated = personalValidation();

        if(!validated) {
          return false;
        }
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: 75vh !important;"
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
        $(".pMore").text("Address Information");
        $(".divWhite").css("top", "125px");
        $("#txtAccountname").val($("#txtfullname").val());
        $(".colmid").css({ height: $(".conContent").height() + "px" });
      } else if (step === 1) {
        let validated = addressValidation();

        if(!validated) {
          return false;
        }
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Professional Details");
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
          $(".present").val($('.current').val()).change();
        } else if ($(this).is(":not(:checked)")) {
          $(".txtPermaAdd1").val("");
          $(".txtPermaAdd2").val("");
          $(".txtPermaCity").val("");
          $(".txtPermaProvince").val("");
          $(".present").val("").change();
        }
        $(".divWhite").css("top", "195px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        step = 2;
      } else if (step === 2) {
        let validated = professionalValidation();

        if(!validated) {
          return false;
        }
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
        let validated = csaValidation();

        if(!validated) {
          return false;
        }
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
        let validated = pepValidation();

        if(!validated) {
          return false;
        }
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
        let validated = uploadValidation();

        if(!validated) {
          return false;
        }
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
      } else if(step === 7) {
        let validated = settlementValidation();

        if(!validated) {
          return false;
        }
      }
    });
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
            <KycForm></KycForm>
          </div>
        </div>
      </Default>
  )
}
