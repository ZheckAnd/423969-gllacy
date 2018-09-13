'use strict'
var bodyStyle = document.querySelector("body");
var bodyStyleCremeBrulee = document.querySelector(".body-double-creme-brulee");
var bodyStyleCremeChocolate = document.querySelector(".body-double-creme-chocolate");
var bodyStyleIceCreamWithFudge = document.querySelector(".body-double-ice-cream-with-fudge");

var labelSlider1 = document.querySelector(".label-slider-1");
var labelSlider2 = document.querySelector(".label-slider-2");
var labelSlider3 = document.querySelector(".label-slider-3");

var inputSlider1 = document.querySelector(".input-slider-1");
var inputSlider2 = document.querySelector(".input-slider-2");
var inputSlider3 = document.querySelector(".input-slider-3");

var navCatalog = document.querySelector(".nav-catalog");
var navPopUpSearch = document.querySelector(".pop-up-search");
var navPopUpLoginLink = document.querySelector(".pop-up-login-link");
var navPopUpbasket = document.querySelector(".pop-up-basket");
var navPopUpFeedback = document.querySelector(".pop-up-feedback");
var navPopUpFeedbackClose = document.querySelector(".close");

var siteNavigationCatalog = document.querySelector(".site-navigation-catalog");
var siteNavigationSearch = document.querySelector(".search");
var siteNavigationLoginLink = document.querySelector(".login-link");
var siteNavigationBasketRed = document.querySelector(".basket-red");
var feedbackButton = document.querySelector(".feedback-button");

var fatContentLabelRadios = document.querySelectorAll(".label-radio");
var fatContentInputRadios = document.querySelectorAll(".input-radio");

var filterFillingLabels = document.querySelectorAll(".filter-filling-label");
var filterFillingCheckboxes = document.querySelectorAll(".filter-filling-checkbox");


if (labelSlider1) {
  labelSlider1.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      bodyStyle.classList.add("body-double-creme-brulee");
      bodyStyle.classList.remove("body-double-creme-chocolate");
      bodyStyle.classList.remove("body-double-ice-cream-with-fudge");

      inputSlider1.checked = true;
    }
  });
}

if (labelSlider2) {
  labelSlider2.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      bodyStyle.classList.add("body-double-creme-chocolate");
      bodyStyle.classList.remove("body-double-creme-brulee");
      bodyStyle.classList.remove("body-double-ice-cream-with-fudge");

      inputSlider2.checked = true;
    }
  });
}

if (labelSlider3) {
  labelSlider3.addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      bodyStyle.classList.add("body-double-ice-cream-with-fudge");
      bodyStyle.classList.remove("body-double-creme-brulee");
      bodyStyle.classList.remove("body-double-creme-chocolate");

      inputSlider3.checked = true;
    }
  });
}

if (inputSlider1) {
  inputSlider1.addEventListener("click", function (evt) {
    bodyStyle.classList.add("body-double-creme-brulee");
    bodyStyle.classList.remove("body-double-creme-chocolate");
    bodyStyle.classList.remove("body-double-ice-cream-with-fudge");
  });
}

if (inputSlider2) {
  inputSlider2.addEventListener("click", function (evt) {
    bodyStyle.classList.add("body-double-creme-chocolate");
    bodyStyle.classList.remove("body-double-creme-brulee");
    bodyStyle.classList.remove("body-double-ice-cream-with-fudge");
  });
}

if (inputSlider3) {
  inputSlider3.addEventListener("click", function (evt) {
    bodyStyle.classList.add("body-double-ice-cream-with-fudge");
    bodyStyle.classList.remove("body-double-creme-brulee");
    bodyStyle.classList.remove("body-double-creme-chocolate");
  });
}

if (siteNavigationCatalog) {
  siteNavigationCatalog.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    navCatalog.classList.add("visible");
    navCatalog.addEventListener("mouseleave", function (evt) {
      navCatalog.classList.remove("visible");
    });
  });
}

if (siteNavigationSearch) {
  siteNavigationSearch.addEventListener("click", function (evt) {
    evt.preventDefault();
  });

  siteNavigationSearch.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    navPopUpSearch.classList.add("visible");
    navPopUpSearch.addEventListener("mouseleave", function (evt) {
      navPopUpSearch.classList.remove("visible");
    });
  });
}

if (siteNavigationLoginLink) {
  siteNavigationLoginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
  });

  siteNavigationLoginLink.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    navPopUpLoginLink.classList.add("visible");
    navPopUpLoginLink.addEventListener("mouseleave", function (evt) {
      navPopUpLoginLink.classList.remove("visible");
    });
  });
}

if (siteNavigationBasketRed) {
  siteNavigationBasketRed.addEventListener("click", function (evt) {
    evt.preventDefault();
  });

  siteNavigationBasketRed.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    navPopUpbasket.classList.add("visible");
    navPopUpbasket.addEventListener("mouseleave", function (evt) {
      navPopUpbasket.classList.remove("visible");
    });
  });
}

if (feedbackButton) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    navPopUpFeedback.classList.add("visible-slow");
    navPopUpFeedbackClose.addEventListener("click", function (evt) {
      navPopUpFeedback.classList.remove("visible-slow");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (navPopUpFeedback.classList.contains("visible-slow")) {
          evt.preventDefault();
          navPopUpFeedback.classList.remove("visible-slow");
        }
      }
    });
  });
}

if (fatContentLabelRadios == true) {
  fatContentLabelRadios[0].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      fatContentInputRadios[0].checked = true;
    }
  });

  fatContentLabelRadios[1].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      fatContentInputRadios[1].checked = true;
    }
  });

  fatContentLabelRadios[2].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      fatContentInputRadios[2].checked = true;
    }
  });

  fatContentLabelRadios[3].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      fatContentInputRadios[3].checked = true;
    }
  });
}

if (filterFillingLabels == true) {
  filterFillingLabels[0].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      if (filterFillingCheckboxes[0].checked) {
        filterFillingCheckboxes[0].checked = false;
      } else {
        filterFillingCheckboxes[0].checked = true;
      }
    }
  });

  filterFillingLabels[1].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      if (filterFillingCheckboxes[1].checked) {
        filterFillingCheckboxes[1].checked = false;
      } else {
        filterFillingCheckboxes[1].checked = true;
      }
    }
  });

  filterFillingLabels[2].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      if (filterFillingCheckboxes[2].checked) {
        filterFillingCheckboxes[2].checked = false;
      } else {
        filterFillingCheckboxes[2].checked = true;
      }
    }
  });

  filterFillingLabels[3].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      if (filterFillingCheckboxes[3].checked) {
        filterFillingCheckboxes[3].checked = false;
      } else {
        filterFillingCheckboxes[3].checked = true;
      }
    }
  });

  filterFillingLabels[4].addEventListener("keydown", function (evt) {
    if (evt.keyCode == 13 || evt.keyCode == 32) {
      evt.preventDefault();
      if (filterFillingCheckboxes[4].checked) {
        filterFillingCheckboxes[4].checked = false;
      } else {
        filterFillingCheckboxes[4].checked = true;
      }
    }
  });
}
