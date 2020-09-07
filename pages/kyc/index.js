import Head from 'next/head'
import Router from 'next/router';
import Default from '../../layouts/default';
import { 
  closeNav, openNav, addHyphen, 
  addHyphenPagibig, moreLess, isEmail, saveToLocalStorage, readURL, matchStart
} from '../../functions/kyc';
import { personalValidation, addressValidation, professionalValidation, pepValidation, csaValidation, uploadValidation, settlementValidation } from '../../functions/validators';
import { useEffect } from 'react';
import KycForm from './kycForm';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { RedirectIfUnauthenticated } from '../../functions/auth-checker';
import { saveImage, saveToDB } from '../../functions/saveToDB';
import { prefillForm } from '../../functions/prefillForm';

export default function Kyc() {
  useEffect(() => {
    RedirectIfUnauthenticated();

    $(window)
    .resize(function () {
      if ($(window).width() < 500) {
        $(".pMore").text("Personal Information");
        $(".colStep").removeClass("colmid");
        $(".rowStep").addClass("colmid");
      } else {
        $(".pMore").text("Personal Information");
        $(".colStep").addClass("colmid");
        $(".rowStep").removeClass("colmid");
      }
    })
    .resize();

    moreLess(70);

    $(".select2").select2({
      width: "element",
    });

    // on first focus (bubbles up to document), open the menu
    $(document).on('focus', '.select2-selection.select2-selection--single', function (e) {
      $(this).closest(".select2-container").siblings('select:enabled').select2('open');
    });

    // steal focus during close - only capture once and stop propogation
    $('select.select2').on('select2:closing', function (e) {
      $(e.target).data("select2").$selection.one('focus focusin', function (e) {
        e.stopPropagation();
      });
    });

    $(".invested").select2({
      width: "element",
      minimumResultsForSearch: -1,
      placeholder: "Which of the following have you invested in?",
      maximumSelectionLength: 3,
      multiple: true
    });

    $(".txtusername").attr('maxlength', '50');
    $(".currentaddress").attr('maxlength', '150');
    $(".presentaddress").attr('maxlength', '150');
    $(".workaddress").attr('maxlength', '150');

    $(".txtusername").keyup(function (event) {
      if($(this).val().length > 0) {
        $(this).css("border-color", "green");
      } else {
        $(this).removeAttr('style');
      }
    });

    $("input[list]").focus(function() {
      let classname = $(this).attr("class");
      classname = classname.replace('txtusername ', '');
      $('.' + classname).siblings('span').find('b').addClass('datalist-arrow-active');
    });

    $("input[list]").focusout(function() {
      let classname = $(this).attr("class");
      classname = classname.replace('txtusername ', '');
      $('.' + classname).siblings('span').find('b').removeClass('datalist-arrow-active');
    });

    $("#txtTin").keyup(function (event) {
      if($(this).val().length !== 0) {
        addHyphen(this);
      }
    });

    // $("input:checkbox").prop("checked", false); // All checkbox in fatca will be uncheck so the default value will be no.
    // $(".checkOther").prop("checked", true); // All checkbox that are in no section will be check.
    // $(".checkOther:checked").attr("style", "--b: gray;"); // All checkbox that are in no section will be grayed.
  
    // Function that will copy the current address to permanent address
    $("#cbx").click(function (event) {
      console.log($(this).val());
      if(this.checked) {
        let current = $('.current').val();
        let currentcity = $('.currentcity').val();
        let currentregion = $('.currentregion').val();
  
        let currenttext = $('.current option:selected').text();
        let currentcitytext = $('.currentcity option:selected').text();
        let currentregiontext = $('.currentregion option:selected').text();

        if(currentregion !== null) {
          $('.presentregion').empty();

          let selectedOption = new Option(currentregiontext, currentregion, false, false);
          $('.presentregion').append(selectedOption);
        }

        $('.presentcity').empty();

        let selectedOption2 = new Option(currentcitytext, currentcity, false, false);
        $('.presentcity').append(selectedOption2);
      }

      if($('.current').val() !== null) {
        $('.present').val($('.current').val()).trigger('change.select2');
        $('.present').siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $('.present').siblings(".select-placeholder").css({ opacity: "1" });
      }

      if($('.currentcity').val() !== null) {
        $('.presentcity').val($('.currentcity').val()).trigger('change.select2');
        $('.presentcity').siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $('.presentcity').siblings(".select-placeholder").css({ opacity: "1" });
      }

      if($('.currentregion').val() !== null) {
        $('.presentregion').siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $('.presentregion').siblings(".select-placeholder").css({ opacity: "1" });
      } 

      if($(".currentaddress").val() !== "" || $(".currentaddress").val().length > 0) {
        $(".presentaddress").val($(".currentaddress").val());
        $(".presentaddress").css({borderColor: 'green'});
      }
     // $('.presentregion').val($('.currentregion').val()).trigger('change.select2');
      if (!this.checked) {
        $(".presentaddress").val("");
        $(".presentaddress").removeAttr('style');
        $('.present').val(null).trigger('change.select2');
        $('.presentcity').val(null).trigger('change.select2');
        $('.presentregion').val(null).trigger('change.select2');
        $('.present').siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
        $('.present').siblings(".select-placeholder").css({ opacity: "0" });
        $('.presentcity').siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
        $('.presentcity').siblings(".select-placeholder").css({ opacity: "0" });
        $('.presentregion').siblings(".select2-container").find(".selection").find(".select2-selection").removeAttr('style');
        $('.presentregion').siblings(".select-placeholder").css({ opacity: "0" });

        $('.presentregion').empty();
        let defaultValue = {
          ids: '',
          name: 'Province/Region'
        };

        let selectedOption = new Option(defaultValue.name, defaultValue.ids, false, false);
        $('.presentregion').append(selectedOption);

        $('.presentcity').empty();
        let defaultValue2 = {
          ids: '',
          name: 'City'
        };

        let selectedOption2 = new Option(defaultValue2.name, defaultValue2.ids, false, false);
          $('.presentcity').append(selectedOption2);
        }
    });

    let text = '';
    // Automatic text format based on what id type the user choose
    $("#txtIdNumber").keyup(function (event) {
      if ($("#IdType").val() === "GSIS") {
        $("#txtIdNumber").attr("maxlength", "11");
      }
      if ($("#IdType").val() === "TIN") {
        $("#txtIdNumber").attr("maxlength", "15");
        addHyphen(this);
      }
      if ($("#IdType").val() === "Pag-Ibig ID") {
        $("#txtIdNumber").attr("maxlength", "14");
        addHyphenPagibig(this);
      }
      if ($("#IdType").val() === "PRC") {
        $("#txtIdNumber").attr("maxlength", "7");
      }
      if ($("#IdType").val() === "OFW") {
        $("#txtIdNumber").attr("maxlength", "13");
      }
      if ($("#IdType").val() === "PHH") {
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

    // Uploading image
    $('.idimage').click(function(){ 
      $('#imguploadid').trigger('click'); 
    });

    $('.signatureimage').click(function(){ 
      $('#imguploadsig').trigger('click'); 
    });

    $("#imguploadid").change(function(e){
      if(e.originalEvent === undefined) {
        let image = e.target.files[0];
        saveImage(image, 'DocTyp01');
      } else {
        let ext = $(this).val().split('.').pop().toLowerCase();
        console.log(ext);
  
        if(ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'bmp') {
          alert('Please upload accepted file type only.');
          return false;
        }
  
        if(this.files[0].size > 3145728){
          alert("Please upload a file lesser than 3MB.");
          return false;
       };
  
        readURL(this, '.idimage');
      }
    });

    $("#imguploadsig").change(function(e){
      if(e.originalEvent === undefined) {
        let image = e.target.files[0];
        saveImage(image, 'DocTyp03');
      } else {
        let ext = $(this).val().split('.').pop().toLowerCase();
        //console.log(ext);

        if(ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'bmp') {
          alert('Please upload accepted file type only.');
          return false;
        }

        //console.log(this.files[0].size);
        if(this.files[0].size > 3145728){
          alert("Please upload a file lesser than 3MB.");
          return false;
      };

        readURL(this, '.signatureimage');
      }
    });

    // Personal Info select fields
    $('.country-code').on("select2:selecting", function(e) { 
        let value = $('.country-code').val();

        if(value != "0" || value != null) {
          $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
          $(this).siblings(".select-placeholder").css({ opacity: "1" });
        }
    });

    $('.civil-status').on("select2:selecting", function(e) { 
      let value = $('.civil-status').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });
  
    $('.gender').on("select2:selecting", function(e) { 
      let value = $('.gender').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.month').on("select2:selecting", function(e) { 
      let value = $('.month').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.day').on("select2:selecting", function(e) { 
      let value = $('.day').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.year').on("select2:selecting", function(e) { 
      let value = $('.year').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.birthplace').on("select2:selecting", function(e) { 
      let value = $('.birthplace').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.citizenship').on("select2:selecting", function(e) { 
      let value = $('.citizenship').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    // Address Info select fields
    $('.current').on("select2:selecting", function(e) { 
      let value = $('.current').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.currentcity').on("select2:selecting", function(e) { 
      let value = $('.current').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });


    $('.currentregion').on("select2:selecting", function(e) { 
      let value = $('.current').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });


    $('.present').on("select2:selecting", function(e) { 
      let value = $('.present').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.presentregion').on("select2:selecting", function(e) { 
      let value = $('.presentregion').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.presentcity').on("select2:selecting", function(e) { 
      let value = $('.presentcity').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    // Professional details select fields
    $('.nature-work').on("select2:selecting", function(e) { 
      let value = $('.nature-work').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.nature-business').on("select2:selecting", function(e) { 
      let value = $('.nature-business').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.nature-country').on("select2:selecting", function(e) { 
      let value = $('.nature-country').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.workregion').on("select2:selecting", function(e) { 
      let value = $('.workregion').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.workcity').on("select2:selecting", function(e) { 
      let value = $('.workcity').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.source-funds').on("select2:selecting", function(e) { 
      let value = $('.source-funds').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.source-funds').on("select2:selecting", function(e) { 
      let value = $('.source-funds').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.net-worth').on("select2:selecting", function(e) { 
      let value = $('.net-worth').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.gross-income').on("select2:selecting", function(e) { 
      let value = $('.gross-income').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });
    
    $('.dos').on("select2:selecting", function(e) { 
      let value = $('.dos').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    // CSA
    $('.invest-much').on("select2:selecting", function(e) { 
      let value = $('.investment').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.frequent-invest').on("select2:selecting", function(e) { 
      let value = $('.investment').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.investment').on("select2:selecting", function(e) { 
      let value = $('.investment').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.investing').on("select2:selecting", function(e) { 
      let value = $('.investing').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.for-investment').on("select2:selecting", function(e) { 
      let value = $('.for-investment').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.investor').on("select2:selecting", function(e) { 
      let value = $('.investor').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
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

    $('.liquidity').on("select2:selecting", function(e) { 
      let value = $('.liquidity').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.droploss').on("select2:selecting", function(e) { 
      let value = $('.droploss').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    // PEP select fields
    $('.government').on("select2:selecting", function(e) { 
      let value = $('.government').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });
    
    $('.relative').on("select2:selecting", function(e) { 
      let value = $('.relative').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });
    
    // Upload documents select fields
    $('.idtype').on("select2:selecting", function(e) { 
      let value = $('.idtype').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      } 
    });

    $('.idtype').change(function() {
      let value = $('.idtype').val();
      if(value === 'PHU' || value === 'TIN' || value === 'INT' || value === 'NCD' || value === 'SEN' || value === 'SSS') {
        $('.expirymonth').prop('disabled', true);
        $('.expiryday').prop('disabled', true);
        $('.expiryyear').prop('disabled', true);
      } else {
        $('.expirymonth').prop('disabled', false);
        $('.expiryday').prop('disabled', false);
        $('.expiryyear').prop('disabled', false);
      }
    });

    $('.expirymonth').on("select2:selecting", function(e) { 
      let value = $('.expirymonth').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.expiryday').on("select2:selecting", function(e) { 
      let value = $('.expiryday').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    $('.expiryyear').on("select2:selecting", function(e) { 
      let value = $('.expiryyear').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    // Settlement select fields
    $('.bank-name').on("select2:selecting", function(e) { 
      let value = $('.bank-name').val();

      if(value != "" || value != null) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });
      }
    });

    // Disable expiry date on non-expiring ID
    // $(".id-type").on("change", function () { 
    //   let value = $('.id-type').val();
      
    //   if(value === "SSS" || value === "UMID" || value === "GSIS" || value === "TIN" || value === "HDMF" || value === "PHIC" || value === "VOTER") {
    //     $('.expirymonth').select2({
    //       disabled: true
    //     });
    //     $('.expiryyear').select2({
    //       disabled: true
    //     });
    //     $('.expiryday').select2({
    //       disabled: true
    //     });
    //   } else {
    //     $('.expirymonth').select2({
    //       disabled: false
    //     });
    //     $('.expiryyear').select2({
    //       disabled: false
    //     });
    //     $('.expiryday').select2({
    //       disabled: false
    //     });
    //   }
    // });

    // Bank name same as first name and last name
    $('.firstname').keyup(function() {
      $('.txtAccountname').val($('.firstname').val() + " " + $('.lastname').val());
    });

    $('.lastname').keyup(function() {
      $('.txtAccountname').val($('.firstname').val() + " " + $('.lastname').val());
    });

    // // Function that will prevent the no checkbox uncheck rather it will change the color into green.
    // $(".checkOther").on("click", function (e) {
    //   var checkbox = $(this);
    //   if (checkbox.is(":checked")) {
    //   } else {
    //     $(this, "input:checked").attr("style", "--b: #13C95C;");
    //     e.preventDefault();
    //     return false;
    //   }
    // });

    // If screen is mobile
    if($(window).width() < 440) {
      $('.select-placeholder').each(function(i, obj) {
        if($(this).text().length >= 34) {
          $(this).addClass('select-placeholder-mobile');
        }
      });
    }

    // Click function for back button
    $(".btnBack").click(function () {
      if (step === 7) {
        saveToLocalStorage('.settlementForm');

        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".pMore").text("Upload Documents");
        $(".pTitle").text("Upload Documents");
        $(".pSubtitle").html("Please ensure your ID type and number corresponds to the VALID ID (w/ photo) you will upload. <br/><br/>The details you provided on the Personal Info should be the same as the details found on your government issued ID (w/photo).");
        $(".divSettlement").css("display", "none");
        $(".divSettlement").removeClass("animate__fadeOut");
        $(".divSettlement").addClass("animate__animated  animate__fadeOut");
        $(".divUpload").css("display", "block");
        $(".divUpload").removeClass("animate__fadeOut");
        $(".divUpload").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "470px");
        step = 6;
      } else if (step === 6) {
        saveToLocalStorage('.uploadForm');

        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("FATCA");
        $(".pTitle").text("FATCA");
        $(".pSubtitle").text('If you have answered "Yes" on at least one question, we will need you to submit additional requirements before we can have your Seedbox account approved.');
      
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
        saveToLocalStorage('.fatcaForm');

        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".pMore").text("PEP Declaration");
        $(".pTitle").text("PEP");
        $(".pSubtitle").html("<span style='font-weight: bold; display: contents;'>Second Degree of Consanguinity/Affinity</span> - You are related to the person if you are either his/her sibling, grandparent, grandchild, parent-in-law, or son/daughter-in-law.");
      
        $(".divFatca").css("display", "none");
        $(".divFatca").removeClass("animate__fadeOut");
        $(".divFatca").addClass("animate__animated  animate__fadeOut");
        $(".divPep").css("display", "block");
        $(".divPep").removeClass("animate__fadeOut");
        $(".divPep").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "330px");
        step = 4;
      } else if (step === 4) {
        saveToLocalStorage('.pepForm');

        $(".conContent").css("height", "auto");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        $(".pMore").text("CSA");
        $(".pTitle").text("CSA");
        $(".pSubtitle").text("The results on this form will help determine which available funds can best suit your investing needs.");
      
        $(".divPep").css("display", "none");
        $(".divPep").removeClass("animate__fadeOut");
        $(".divPep").addClass("animate__animated  animate__fadeOut");
        $(".divCsa").css("display", "block");
        $(".divCsa").removeClass("animate__fadeOut");
        $(".divCsa").addClass("animate__animated  animate__fadeIn");
        $(".divWhite").css("top", "260px");
        step = 3;
      } else if (step === 3) {
        saveToLocalStorage('.csaForm');

        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Professional Details");
        $(".pTitle").text("Professional Details");
        $(".pSubtitle").html("<span style='font-weight: bold; display: contents;'>Net Worth</span> is everything own (example: cash, money in your bank, investments, etc.) minus everything you owe (example: your debt, credit card, mortgage) <br/><br/><span style='font-weight: bold; display: contents;'>Annual Gross Income</span> is the amount of money a person earns in one year before taxes and includes income from all sources. <br/><br/>Please indicate if you are an Officer/Director/Shareholder of the company you are working for.");

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
        saveToLocalStorage('.professionalForm');

        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "80px");
        $(".colForm").css("padding-bottom", "80px");
        $(".pMore").text("Address Information");
        $(".pTitle").text("Address");
        $(".pSubtitle").html('Current address is where you are residing at this time. <br/><br/>Example: You are currently residing in Manila because of work but have a home in Cebu. <br/><br/>Your current address is your Manila address and your permanent address is your address in Cebu. <br/><br/>Example: If you are an OFW residing in UAE, your current address is your UAE address and your permanent address is your address in the Philippines.');

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
        saveToLocalStorage('.addressForm');

        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".pMore").text("Personal Information");
        $(".pTitle").text("Personal\nInformation");
        $(".pSubtitle").html("Why invest? Investing makes your money work for you - potentially building wealth by allowing you to outpace inflation and increase value over time. <br/><br/>Please make sure all your personal information are correct and consistent with your government issued IDs and bank accounts.");
      
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

        saveToDB();

        saveToLocalStorage('.personalForm');
        // if(!validated) {
        //   return false;
        // }
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "80px");
        $(".colForm").css("padding-bottom", "80px");
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
        $(".pTitle").text("Address");
        $(".pSubtitle").html('Current address is where you are residing at this time. <br/><br/>Example: You are currently residing in Manila because of work but have a home in Cebu. <br/><br/>Your current address is your Manila address and your permanent address is your address in Cebu. <br/><br/>Example: If you are an OFW residing in UAE, your current address is your UAE address and your permanent address is your address in the Philippines.');

        $(".divWhite").css("top", "125px");
        $("#txtAccountname").val($("#txtfullname").val());
        $(".colmid").css({ height: $(".conContent").height() + "px" });
      } else if (step === 1) {
        let validated = addressValidation();

        saveToDB();

        saveToLocalStorage('.addressForm');

        // if(!validated) {
        //   return false;
        // }
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("Professional Details");
        $(".pTitle").text("Professional Details");
        $(".pSubtitle").html("<span style='font-weight: bold; display: contents;'>Net Worth</span> is everything own (example: cash, money in your bank, investments, etc.) minus everything you owe (example: your debt, credit card, mortgage) <br/><br/><span style='font-weight: bold; display: contents;'>Annual Gross Income</span> is the amount of money a person earns in one year before taxes and includes income from all sources. <br/><br/>Please indicate if you are an Officer/Director/Shareholder of the company you are working for.");

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
         // $(".present").val($('.current').val()).trigger('change');
        } else if ($(this).is(":not(:checked)")) {
          // $(".txtPermaAdd1").val("");
          // $(".txtPermaAdd2").val("");
          // $(".txtPermaCity").val("");
          // $(".txtPermaProvince").val("");
          // $(".present").val("").change();
        }
        $(".divWhite").css("top", "195px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });
        step = 2;
      } else if (step === 2) {
        let validated = professionalValidation();

        saveToDB();

        saveToLocalStorage('.professionalForm');

        // if(!validated) {
        //   return false;
        // }
        $(".conContent").css("height", "82vh");
        $(".colForm").css("padding-top", "0px");
        $(".colForm").css("padding-bottom", "0px");
        $(".colmid").css({ height: $(".conContent").height() + "px" });

        $(".pMore").text("CSA");
        $(".pTitle").text("CSA");
        $(".pSubtitle").text("The results on this form will help determine which available funds can best suit your investing needs.");
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

        saveToDB();
        saveToLocalStorage('.csaForm');

        // if(!validated) {
        //   return false;
        // }
        $(".pMore").text("PEP Declaration");
        $(".pTitle").text("PEP");
        $(".pSubtitle").html("<span style='font-weight: bold; display: contents;'>Second Degree of Consanguinity/Affinity</span> - You are related to the person if you are either his/her sibling, grandparent, grandchild, parent-in-law, or son/daughter-in-law.");

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

        saveToDB();
        saveToLocalStorage('.pepForm');

        // if(!validated) {
        //   return false;
        // }
        $(".conContent").attr(
          "style",
          "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
        );
        $(".colForm").css("padding-top", "20px");
        $(".colForm").css("padding-bottom", "20px");
        $(".pMore").text("FATCA");
        $(".pTitle").text("FATCA");
        $(".pSubtitle").text('If you have answered "Yes" on at least one question, we will need you to submit additional requirements before we can have your Seedbox account approved.');

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
        saveToLocalStorage('.fatcaForm');
        saveToDB();

        $(".pMore").text("Upload Documents");
        $(".pTitle").text("Upload Documents");
        $(".pSubtitle").html("Please ensure your ID type and number corresponds to the VALID ID (w/ photo) you will upload. <br/><br/>The details you provided on the Personal Info should be the same as the details found on your government issued ID (w/photo).");

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

        if($('#imguploadid').get(0).files.length !== 0) {
          $('#imguploadid').trigger('change');
        }

        if($('#imguploadsig').get(0).files.length !== 0) {
          $('#imguploadsig').trigger('change');
        }

        if($('#imguploadid').get(0).files.length === 0 && $('#imguploadsig').get(0).files.length === 0) {
          saveToDB();
        }

        saveToLocalStorage('.uploadForm');
        // if(!validated) {
        //   return false;
        // }
        $(".pMore").text("Settlement Information");
        $(".pTitle").text("Settlement Information");
        $(".pSubtitle").text("The settlement account is where we will deposit your funds should you decide to redeem your investment in the future.");
      
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

        saveToDB();
        saveToLocalStorage('.settlementForm');

        // if(!validated) {
        //   return false;
        // }
      }
    });

    $(document).ready(function() {
      $('.select2').change(function(e) {
        $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
        $(this).siblings(".select-placeholder").css({ opacity: "1" });   
      });
    });
  }, []);
  
  return (
    <Default>
      <Head>
        <link 
          href="Css/index.css"
          rel="stylesheet"
          type="text/css"
          />
        <script>
          {`
            let step = 0;
          `}
        </script>
      </Head>
        <Sidebar></Sidebar>
        <div className="container-fluid" style={{backgroundColor: '#fafafa'}}>
          <Navbar></Navbar>
          <div className="container con conContent" style={{backgroundColor: 'white', width: '100%', borderRadius: '25px', boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', WebkitBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', MozBoxShadow: '2px 2px 10px 2px rgba(0,0,0,0.19)', height: '82vh'}}>
            <KycForm></KycForm>
          </div>
        </div>
      </Default>
  )
}
