export function initializeElements() {

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

  $(function () {
    // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
    var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
  
    $(".txtEmail").on("keyup", function () {
      $(".pErrorEmail").hide();
      regExp.test($(this).val())
        ? $(".pErrorEmail.success").hide()
        : $(".pErrorEmail.error").show();
    });
  });

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
      $text = $("#txtIdNumber");
      if ($text.val().length === 2) {
        $text.val($text.val() + "-");
      } else if ($text.val().length === 12) {
        $text.val($text.val() + "-");
      }
    }
    if ($("#IdType").val() === "Driver license") {
      $("#txtIdNumber").attr("maxlength", "13");
      $text = $("#txtIdNumber");
      if ($text.val().length === 3) {
        $text.val($text.val() + "-");
      } else if ($text.val().length === 5) {
        $text.val($text.val() + "-");
      }
    }
    if ($("#IdType").val() === "Passport") {
      $("#txtIdNumber").attr("maxlength", "12");
    }
    if ($("#IdType").val() === "SSS ID") {
      $("#txtIdNumber").attr("maxlength", "13");
      $text = $("#txtIdNumber");
      if ($text.val().length === 2) {
        $text.val($text.val() + "-");
      } else if ($text.val().length === 10) {
        $text.val($text.val() + "-");
      }
    }
  });

  // Ambot
  $(".pClamp").click(function () {
    $(this).attr(
      "style",
      "text-overflow: clip !important;display: block !important;-webkit-line-clamp: 4 !important;"
    );
  });

  $(".txtusername").keyup(function (event) {
    $(this).css("border-color", "green");
  });

  $("#txtTin").keyup(function (event) {
    addHyphen(this);
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

// Remove the search bar in selectbox
$(".select2").select2({
  width: "element",
  minimumResultsForSearch: -1,
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
    /*
var bday = $("#selectYY").val() + - + $("#selectMM").val() + - + $("#selectDD").val();
        var dob = bday;
        if (dob != '') {
            var str = dob.split('-');
            var firstdate = new Date(str[0], str[1], str[2]);
            var today = new Date();
            var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
            var age = parseInt(dayDiff);

            if (age < 18) {
                $(".pErrorAge").css("display", "block");
            }
            else {
                $(".pErrorAge").css("display", "none");
                $(".divAdrress").removeClass("animate__animated  animate__fadeOut animate__fadeIn");
                $(".divAdrress").removeClass("animate__animated  animate__fadeOut animate__fadeIn");
                $(".divInfo").css("display", "none");
                $(".divInfo").addClass("animate__animated  animate__fadeOut")
                $(".divAdrress").css("display", "block");
                $(".divAdrress").addClass("animate__animated  animate__fadeIn");
                step = 1;
                $(".divWhite").css("top", "125px");
                $("#txtAccountname").val($("#txtfullname").val());
            }
        }
        */
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

}

export function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $(".container").css("filter", "blur(0px)");
  $(".container-fluid").css("filter", "blur(0px)");
}
  
export function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  $(".container").css("filter", "blur(5px)");
  $(".container-fluid").css("filter", "blur(5px)");
}
  
export function functionPersonal() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("Personal Information");
  $(".pTitle").text("Personal\nInformation");
  $(".pSubtitle").html("Why invest? Investing makes your money work for you - potentially building wealth by allowing you to outpace inflation and increase value over time. <br/><br/>Please make sure all your personal information are correct and consistent with your government issued IDs and bank accounts.");
  $(".divAdrress").css("display", "none");
  $(".divForm").css("display", "none");
  $(".divAdrress").removeClass("animate__fadeOut");
  $(".divAdrress").addClass("animate__animated  animate__fadeOut");
  $(".divAdrress").addClass("animate__animated  animate__fadeOut");
  $(".divInfo").css("display", "block");
  $(".divInfo").removeClass("animate__fadeOut");
  $(".divInfo").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "58px");
  step = 0;
}
  
export function functionAddress() {
  $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: 82vh !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("Address Information");
    $(".pTitle").text("Address");
    $(".pSubtitle").html('Current address is where you are residing at this time. <br/><br/>Example: You are currently residing in Manila because of work but have a home in Cebu. <br/><br/>You current address is your Manila address and your permanent address is your address is in Cebu. <br/><br/>Example: If you are on OFW residing in UAE, your current address is your UAE address and your permanent address is your address in the Philippines.');

    $(".divForm").css("display", "none");
    $(".divForm").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divAdrress").css("display", "block");
    $(".divAdrress").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "125px");
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
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    step = 1;
}
  
export function functionProfessional() {
  $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("Professional Details");
    $(".pTitle").text("Professional Details");
    $(".pSubtitle").html("Net Worth is everything own (example: cash, money in your bank, investments, etc.) minus owe (example: your debt, credit card, mortgage) <br/><br/>Annual Gross Income is the amount of money a person earns in one year before taxes and includes income from all sources. <br/><br/>Please indicate if you are an Officer/Director/Shareholder of the company you are working for.");

    $(".divForm").css("display", "none");
    $(".divForm").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divAdrress1").css("display", "block");
    $(".divAdrress1").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "195px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    step = 2;
  }
  
export function functionCsa() {
  $(".conContent").css("height", "85vh");
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
  $(".divForm").css("display", "none");
  $(".divFinancial").css("display", "none");
  $(".divFinancial").addClass("animate__animated  animate__fadeOut");
  $(".divCsa").css("display", "block");
  $(".divCsa").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "265px");
  step = 3;
  }
  
export function functionPep() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("PEP Declaration");
  $(".pTitle").text("PEP");
  $(".pSubtitle").text("Second Degree of Consanguinity/Affinity - You are related to the person if you are either his/her sibling, grandparent, grandchild, parent-in-law, or son/daughter-in-law.");
  $(".divForm").css("display", "none");
  $(".divCsa").css("display", "none");
  $(".divCsa").removeClass("animate__fadeOut");
  $(".divCsa").addClass("animate__animated  animate__fadeOut");
  $(".divPep").css("display", "block");
  $(".divPep").removeClass("animate__fadeOut");
  $(".divPep").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "330px");
step = 4;
  }
  
export function functionFatca() {
  $(".conContent").attr(
    "style",
    "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: 0 !important;"
  );
  $(".conContent").attr(
    "style",
    "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
  );
  $(".colForm").css("padding-top", "20px");
  $(".colForm").css("padding-bottom", "20px");
  $(".pMore").text("FATCA");
  $(".pTitle").text("FATCA");
  $(".pSubtitle").text('If you have answered "Yes" on at least one question, we will need you to submit additional requirements before we can have your Seedbox account approved.');

  $(".divForm").css("display", "none");
  $(".divFatca").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divFatca").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divFinancial").css("display", "none");
  $(".divFinancial").addClass("animate__animated  animate__fadeOut");
  $(".divFatca").css("display", "block");
  $(".divFatca").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "400px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });

  step = 5;
}
  
export function functionUpload() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("Upload Documents");
  $(".pTitle").text("Upload Documents");
  $(".pSubtitle").html("Please ensure your ID type and number corresponds to the VALID ID (w/ photo) you will upload. <br/><br/>The details you provided on the Personal Info should be the same as the details found on your government issued ID (w/photo).");

  $(".divForm").css("display", "none");
  $(".divSettlement").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divSettlement").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divSettlement").css("display", "none");
  $(".divUpload").css("display", "block");
  $(".divUpload").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "470px");
  step = 6;
}
  
export function functionSettlement() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("Settlement Information");
  $(".pTitle").text("Settlement Information");
  $(".pSubtitle").text("The settlement account is where we will deposit your funds should you decide to redeem your investment in the future. ");

  $(".divForm").css("display", "none");
  $(".divPep").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divPep").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divPep").css("display", "none");
  $(".divPe   p").addClass("animate__animated  animate__fadeOut");
  $(".divSettlement").css("display", "block");
  $(".divSettlement").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "540px");
  $("#txtAccountname").val($("#txtfullname").val());

  step = 7;
}

export function moreLess(initiallyVisibleCharacters) {
  var visibleCharacters = initiallyVisibleCharacters;
  var paragraph = $(".text");

  paragraph.each(function () {
    var text = $(this).text();
    var wholeText =
      text.slice(0, visibleCharacters) +
      "<span class='ellipsis'>... </span><a href='#' class='more'>MORE<i class='fa fa-arrow-circle-o-down' aria-hidden='true'></i></a>" +
      "<span style='display:none'>" +
      text.slice(visibleCharacters, text.length) +
      "<a href='#' class='less'> LESS<i class='fa fa-arrow-circle-o-up' aria-hidden='true'></i></a></span>";

    if (text.length < visibleCharacters) {
      return;
    } else {
      $(this).html(wholeText);
    }
  });
  $(".more").click(function (e) {
    e.preventDefault();
    $(this).hide().prev().hide();
    $(this).next().show();
  });
  $(".less").click(function (e) {
    e.preventDefault();
    $(this).parent().hide().prev().show().prev().show();
  });
}
export function addHyphen(element) {
  let val = $(element).val().split("-").join(""); // Remove dash (-) if mistakenly entered.

  let finalVal = val.match(/.{1,3}/g).join("-"); // Add (-) after 3rd every char.
  $(element).val(finalVal); // Update the input box.
}

export function addHyphenPagibig(element) {
  let val = $(element).val().split("-").join(""); // Remove dash (-) if mistakenly entered.

  let finalVal = val.match(/.{1,4}/g).join("-"); // Add (-) after 3rd every char.
  $(element).val(finalVal); // Update the input box.
}

export function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

export function readURL(input, imageType) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    
    //console.log(input.files);
    reader.onload = function (e) {
        $(imageType).attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

export function saveToLocalStorage(formName) {
  let formValues = $(formName).serializeArray();

  console.log(formValues);
  let invested = [];
  for(let i = 0; i <= formValues.length - 1; i++) {
    if(formValues[i].name === 'invested') {
      console.log(formValues[i].value);

      invested.push(formValues[i].value);
    } else {
      localStorage.setItem(formValues[i].name, formValues[i].value);
    }
  }

  if(formName === '.csaForm') {
    localStorage.setItem('invested', JSON.stringify(invested));
  } else if(formName === '.uploadForm') {
    let imgData = $('.idimage');
    //getBase64Image(imgData);
    let currentIdImage = imgData[0].currentSrc;
    currentIdImage.replace(/^data:image\/(png|jpg);base64,/, "");
    localStorage.setItem('idImage', currentIdImage);

    let imgData2 = $('.signatureimage');
    //getBase64Image(imgData);
    let currentSignImage = imgData2[0].currentSrc;
    currentSignImage.replace(/^data:image\/(png|jpg);base64,/, "");
    localStorage.setItem('signatureImage', currentSignImage);
  }
}