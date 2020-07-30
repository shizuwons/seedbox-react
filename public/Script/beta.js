$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $("#loadingPay").hide();
  
  var imgSrc = $(".imgProf").attr("src");
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#blah").attr("src", e.target.result);
        if (imgSrc === $("#blah").attr("src")) {
          $(".pFillemail").text("Please put a valid image");
        } else {
          $(".pFillemail").text("");
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imgInp").change(function () {
    readURL(this);
  });
  
  var price;
  
  $(".divVariant").click(function () {
    $(".divVariant").removeClass("divActive");
    $(".divVariant").addClass("divNotActive");
    $(".divVariant").find(".imgPic").removeClass("imgActive");
    $(".divVariant").find(".pVariantBox").removeClass("pVariantActive");
    $(this).find(".imgPic").addClass("imgActive");
    $(this).find(".pVariantBox").addClass("pVariantActive");
    $(this).removeClass("divNotActive");
    $(this).addClass("divActive");
  });
  
  $(".divVariantClassic").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    const element1 = document.querySelector(".divClassic1");
    element1.classList.add("animated", "fadeIn");
    $(".divClassic1").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "Classic";
  });
  
  $(".divVariantClassicPlus").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    $(".imgTick").css("display", "none");
    const element1 = document.querySelector(".divElite");
    element1.classList.add("animated", "fadeIn");
    $(".divClassicPlus").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "ClassicPlus";
  });
  
  $(".divVariantElite").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    $(".imgTick").css("display", "none");
    const element1 = document.querySelector(".divElite");
    element1.classList.add("animated", "fadeIn");
    $(".divElite").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "Elite";
  });
  
  $(".divVariantPrime").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    const element1 = document.querySelector(".divPrime");
    element1.classList.add("animated", "fadeIn");
    $(".divPrime").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "Prime";
  });
  
  $(".divVariantVeteran").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    const element1 = document.querySelector(".divVeteran");
    element1.classList.add("animated", "fadeIn");
    $(".divVeteran").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "Veteran";
  });
  
  $(".divVariantPrestige").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    const element1 = document.querySelector(".divPrestige");
    element1.classList.add("animated", "fadeIn");
    $(".divPrestige").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "Prestige";
  });
  
  $(".divVariantKiddie").click(function () {
    const element = document.querySelector(".divBenefits");
    element.classList.add("animated", "fadeOut");
    $(".divBenefits").css("display", "none");
    const element1 = document.querySelector(".divKiddie");
    element1.classList.add("animated", "fadeIn");
    $(".divKiddie").css("display", "block");
    $(this).find(".imgTick").css("display", "block");
    variant = "Kiddie";
  });
  
  var $owl = $(".owl-carousel");
  
  $owl.children().each(function (index) {
    $(this).attr("data-position", index); // NB: .attr() instead of .data()
  });
  
  $(".owl-carousel").owlCarousel({
    loop: false,
    rewind: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
  
  $(document).on("click", ".owl-item>div", function () {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300; // in ms
    $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
  });
  
  var variant = sessionStorage.getItem("variant");
  
  if (variant === "Classic") {
    $(".divVariantClassic").trigger("click");
  } else if (variant === "Elite") {
    $(".divVariantElite").trigger("click");
  } else if (variant === "Prime") {
    $(".divVariantPrime").trigger("click");
  } else if (variant === "Premium") {
    $(".divVariantPremium").trigger("click");
  } else if (variant === "Prestige") {
    $(".divVariantPrestige").trigger("click");
  } else if (variant === "Kiddie") {
    $(".divVariantKiddie").trigger("click");
  } else if (variant === "ClassicPlus") {
    $(".divVariantClassicPlus").trigger("click");
  }
  
  var $owl = $(".owl-carousel");
  $owl.children().each(function (index) {
    $(this).attr("data-position", index); // NB: .attr() instead of .data()
  });
  $(document).on("click", ".owl-item>div", function () {
    $owl.trigger("to.owl.carousel", $(this).data("position"));
  });
  
  jQuery(window).resize(function () {
    var screen = $(window);
    if (screen.width < 500) {
      $(".conMain").removeClass("h-100");
    } else {
      $(".conMain").addClass("h-100");
    }
  });
  
  var next = 1;
  var back = 1;
  $(".btnNextFooter").click(function () {
    if (next === 1) {
      const element = document.querySelector(".divCreate");
      element.classList.add("animated", "fadeOut");
      $(".divStep1").removeClass("divBoxActive");
      $(".divStep2").addClass("divBoxActive");
      $(".divCreate").css("display", "none");
      $(".divCreate").removeClass("animated");
      $(".divCreate").removeClass("fadeOut");
      $(".divMembership").css("display", "block");
      const element1 = document.querySelector(".divMembership");
      element1.classList.add("animated", "fadeIn");
      $(".pVariant").text(variant);
      next = 2;
      back = 2;
      $(".divLine1").css("background-color", "#00C853");
      $(".p2").css("background-color", "#00C853");
    } else if (next === 2) {
      const element = document.querySelector(".divPersonalInfo");
      element.classList.add("animated", "fadeOut");
      $(".divPersonalInfo").css("display", "none");
      $(".divPersonalInfo").removeClass("animated");
      $(".divPersonalInfo").removeClass("fadeOut");
      $(".divAddress").css("display", "block");
      const element1 = document.querySelector(".divAddress");
      element1.classList.add("animated", "fadeIn");
      next = 3;
      back = 3;
    } else if (next === 3) {
      const element = document.querySelector(".divMembership");
      element.classList.add("animated", "fadeOut");
      $(".divMembership").css("display", "none");
      $(".divMembership").removeClass("animated");
      $(".divMembership").removeClass("fadeOut");
      $(".divStep2").removeClass("divBoxActive");
      $(".divStep3").addClass("divBoxActive");
      const element1 = document.querySelector(".divOverview");
      element1.classList.add("animated", "fadeIn");
      $(".divOverview").css("display", "block");
      $(".imgOverview").attr("src", $(".imgProf").attr("src"));
      newText =
        $(".txtfirstname").val() +
        " " +
        $(".txtmiddle").val() +
        " " +
        $(".txtlast").val();
      $(".pFirst").text($(".txtfirstname").val());
      $(".pMiddle").text($(".txtmiddle").val());
      $(".pLast").text($(".txtlast").val());
      $(".pFullName").text(newText);
      $(".pEmail").text($(".txtEmail").val());
      $(".pPhone").text($(".txtPhone").val());
      $(".pMobile").text($(".txtMobile").val());
      $(".pVariant").text(variant);
      $(".pPrice").text(price);
      $(".pBday").text($(".bday").val());
      $(".pAddress").text($(".txtAddress").val());
      $(".pCardNumber").text($(".cardNumber").val());
      $(".pCardMM").text($(".cardMM").val());
      $(".pCardYY").text($(".cardYY").val());
      back = 4;
      $(".divLine2").css("background-color", "#00C853");
      $(".p3").css("background-color", "#00C853");
  
      if (variant === "Classic") {
        price = "599.00";
      } else if (variant === "Elite") {
        price = "999.00";
      } else if (variant === "Prime") {
        price = "2999.00";
      } else if (variant === "Premium") {
        price = "1499.00";
      } else if (variant === "Prestige") {
        price = "9999.00";
      } else if (variant === "Kiddie") {
        price = "1499.00";
      } else {
        price = "599.00";
      }
  
      $(".imgArrow").css("display", "block");
      $(".btnNextFooter").html("Pay" + " " + "\u20B1" + price);
      $(".btnNextFooter").html("Pay" + " " + "\u20B1" + price);
      $(".btnBackFooter").css("width", "18%");
      $(".btnNextFooter").css("width", "75%");
      next = 4;
    } else if (next === 4) {
      $("#loadingPay").show();
      $(".btnNextFooter").attr("disabled", true);
      $(".btnNextFooter").css("background-color", "#6c757d");
  
      $.ajaxSetup({
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
      });
  
      var form_data = new FormData();
      form_data.append("firstname", $(".txtfirstname").val());
      form_data.append("middle_initial", $(".txtmiddle").val());
      form_data.append("lastname", $(".txtlast").val());
      form_data.append("mobile_number", $(".txtMobile").val());
      form_data.append("email", $(".txtEmail").val());
      form_data.append("gender", $(".txtGender").val());
      form_data.append("birthday", $(".bday").val());
      form_data.append("surehealth_variant", variant);
      form_data.append("permanent_address", $(".txtAddress").val());
      form_data.append("barangay", $(".txtBarangay").val());
      form_data.append("city", $(".txtCity").val());
      form_data.append("zip_code", $(".txtZipCode").val());
      form_data.append("phone_number", $(".txtPhone").val());
      form_data.append("image", $("#imgInp")[0].files[0]);
      form_data.append("civil", $(".txtCivil").val());
      form_data.append("number", $(".cardNumber").val());
      form_data.append("mm", $(".cardMM").val());
      form_data.append("yy", $(".cardYY").val());
      form_data.append("cvc", $(".cardCVC").val());
      newText =
        $(".txtfirstname").val() +
        " " +
        $(".txtmiddle").val() +
        " " +
        $(".txtlast").val();
      // {
      //     firstname:$('.txtfirstname').val(),
      //     middle_initial:$('.txtmiddle').val(),
      //     lastname:$('.txtlast').val(),
      //     mobile_number:$('.txtMobile').val(),
      //     email:$('.txtEmail').val(),
      //     gender:$('.txtGender').val(),
      //     birthday:$('.bday').val(),
      //     surehealth_variant:variant,
      //     permanent_address:$('.txtAddress').val(),
      //     barangay:$('.txtBarangay').val(),
      //     city:$('.txtCity').val(),
      //     zip_code:$('.txtZipCode').val(),
      //     phone_number:$('.txtPhone').val(),
      //     image:$('#imgInp')[0].files[0],
      //     civil:$('.txtCivil').val(),
      //     number:$('.cardNumber').val(),
      //     mm:$('.cardMM').val(),
      //     yy:$('.cardYY').val(),
      //     cvc:$('.cardCVC').val(),
      // }
  
      $.ajax({
        type: "POST",
        url: "/memberships",
        data: {
          firstname: $(".txtfirstname").val(),
          middle_initial: $(".txtmiddle").val(),
          lastname: $(".txtlast").val(),
          fullname: newText,
          mobile_number: $(".txtMobile").val(),
          email: $(".txtEmail").val(),
          gender: $(".txtGender").val(),
          birthday: $(".bday").val(),
          surehealth_variant: variant,
          permanent_address: $(".txtAddress").val(),
          barangay: $(".txtBarangay").val(),
          city: $(".txtCity").val(),
          zip_code: $(".txtZipCode").val(),
          phone_number: $(".txtPhone").val(),
          image: "",
          // image:$('#imgInp')[0].files[0],
          civil: $(".txtCivil").val(),
          number: $(".cardNumber").val(),
          mm: $(".cardMM").val(),
          yy: $(".cardYY").val(),
          cvc: $(".cardCVC").val(),
        },
        success: function (data) {
          location.href = "/response-success";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          location.href = "/response-error";
        },
      });
    }
  });
  
  $(".btnBackFooter").click(function () {
    if (back === 1) {
      window.location = "index.html";
    } else if (back === 2) {
      const element = document.querySelector(".divMembership");
      element.classList.add("animated", "fadeOut");
      $(".divMembership").css("display", "none");
      $(".divMembership").removeClass("animated");
      $(".divMembership").removeClass("fadeOut");
      $(".divStep2").removeClass("divBoxActive");
      $(".divStep1").addClass("divBoxActive");
      const element1 = document.querySelector(".divCreate");
      element1.classList.add("animated", "fadeIn");
      $(".divCreate").css("display", "block");
      next = 1;
    } else if (back === 3) {
      const element = document.querySelector(".divAddress");
      element.classList.add("animated", "fadeOut");
      $(".divAddress").css("display", "none");
      $(".divAddress").removeClass("animated");
      $(".divAddress").removeClass("fadeOut");
      const element1 = document.querySelector(".divPersonalInfo");
      element1.classList.add("animated", "fadeIn");
      $(".divPersonalInfo").css("display", "block");
      back = 2;
      next = 2;
      $(".imgArrow").css("display", "none");
      $(".btnNextFooter").html("Next");
    } else if (back === 4) {
      const element = document.querySelector(".divOverview");
      element.classList.add("animated", "fadeOut");
      $(".divOverview").css("display", "none");
      $(".divOverview").removeClass("animated");
      $(".divOverview").removeClass("fadeOut");
      $(".divStep3").removeClass("divBoxActive");
      $(".divStep2").addClass("divBoxActive");
      const element1 = document.querySelector(".divMembership");
      element1.classList.add("animated", "fadeIn");
      $(".divMembership").css("display", "block");
      back = 3;
      next = 3;
      $(".btnNextFooter").html("Next");
      $(".btnBackFooter").css("width", "45%");
      $(".btnNextFooter").css("width", "45%");
    }
  });
  