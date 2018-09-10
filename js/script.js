'use strict'
var bodyStyle = document.querySelector("body");
var bodyStyleCremeBrulee = document.querySelector(".body-double-creme-brulee");
var bodyStyleCremeChocolate = document.querySelector(".body-double-creme-chocolate");
var bodyStyleIceCreamWithFudge = document.querySelector(".body-double-ice-cream-with-fudge");

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
  siteNavigationSearch.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    navPopUpSearch.classList.add("visible");
    navPopUpSearch.addEventListener("mouseleave", function (evt) {
      navPopUpSearch.classList.remove("visible");
    });
  });
}

if (siteNavigationLoginLink) {
  siteNavigationLoginLink.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    navPopUpLoginLink.classList.add("visible");
    navPopUpLoginLink.addEventListener("mouseleave", function (evt) {
      navPopUpLoginLink.classList.remove("visible");
    });
  });
}

if (siteNavigationBasketRed) {
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
