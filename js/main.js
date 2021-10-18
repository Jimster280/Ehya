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
    $("body").css("padding-right", "0");
    $("body").css("overflow", "auto");
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

  $(function () {
    $("#phone").mask("8(999) 999-9999");
    $("#phone-2").mask("8(999) 999-9999");
  });

  var swiper = new Swiper(".genres-swiper", {
    direction: "horizontal",
    spaceBetween: 26,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: ".genres-swiper__button--next",
      prevEl: ".genres-swiper__button--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        grid: {
          rows: 2,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
        },
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 26,
        grid: {
          rows: 1,
        },
      },
    },
  });
  var swiper = new Swiper(".uncommen-swiper", {
    direction: "horizontal",
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".uncommen-swiper__button--next",
      prevEl: ".uncommen-swiper__button--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  var menuButton = document.querySelector(".header-menu__button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header__item--left")
      .classList.toggle("header__item--active");
  });

  var heartButton = document.querySelector(".heart");
  heartButton.addEventListener("click", function () {
    document.querySelector(".heart").classList.toggle("heart--active");
  });
  var heartButton = document.querySelector(".frame-svg");
  heartButton.addEventListener("click", function () {
    document.querySelector(".frame-svg").classList.toggle("frame-svg--active");
  });
  var player;
  $(".video-play").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "5qap5aO4i9A",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player2;
  $(".video-play--secondary").on("click", function onYouTubeIframeAPIReady() {
    player2 = new YT.Player("player2", {
      height: "100%",
      width: "100%",
      videoId: "5gf20QoQbWg",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player3;
  $(".video-play--secondary").on("click", function onYouTubeIframeAPIReady() {
    player3 = new YT.Player("player3", {
      height: "100%",
      width: "100%",
      videoId: "5gf20QoQbWg",
      events: {
        onReady: videoPlay,
      },
    });
  });
  var player4;
  $(".video-play--secondary").on("click", function onYouTubeIframeAPIReady() {
    player4 = new YT.Player("player4", {
      height: "100%",
      width: "100%",
      videoId: "5gf20QoQbWg",
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }
});
