$(document).ready(function () {
  // Create the measurement node
  var scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  // Get the scrollbar width
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  // Delete the DIV
  document.body.removeChild(scrollDiv);

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
    $("body").css("padding-right", scrollbarWidth);
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $(".body").css("padding-right", "0");
    $(".body").css("overflow", "auto");
  }
  // обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be not shorter then 2",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need ur phone number",
          phone: "Your phone number must be in the format of +7(9**) ***-**-**",
          minlength: "Enter full phone number",
        },
      },
    });
    AOS.init();
  });

  $(".contact__form").each(function () {
    $(this).validate({
      errorClass: "contact-error",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be not shorter then 2",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need ur phone number",
          phone: "Your phone number must be in the format of +7(9**) ***-**-**",
          minlength: "Enter full phone number",
        },
      },
    });
    AOS.init();
  });

  $(function () {
    $("#phone").mask("8(999) 999-9999");
    $("#phone-2").mask("8(999) 999-9999");
  });

  var menuButton = document.querySelector(".header__menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header__item--left")
      .classList.toggle("header__item--active");
  });

  var menuButton = document.querySelector(".header__menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("body--hidden");
  });
});
