"use strict";var bodyStyle=document.querySelector("body"),bodyStyleCremeBrulee=document.querySelector(".body-double-creme-brulee"),bodyStyleCremeChocolate=document.querySelector(".body-double-creme-chocolate"),bodyStyleIceCreamWithFudge=document.querySelector(".body-double-ice-cream-with-fudge"),labelSlider1=document.querySelector(".label-slider-1"),labelSlider2=document.querySelector(".label-slider-2"),labelSlider3=document.querySelector(".label-slider-3"),inputSlider1=document.querySelector(".input-slider-1"),inputSlider2=document.querySelector(".input-slider-2"),inputSlider3=document.querySelector(".input-slider-3"),navCatalog=document.querySelector(".nav-catalog"),navPopUpSearch=document.querySelector(".pop-up-search"),navPopUpLoginLink=document.querySelector(".pop-up-login-link"),navPopUpbasket=document.querySelector(".pop-up-basket"),navPopUpFeedback=document.querySelector(".pop-up-feedback"),navPopUpFeedbackClose=document.querySelector(".close"),siteNavigationCatalog=document.querySelector(".site-navigation-catalog"),siteNavigationSearch=document.querySelector(".search"),siteNavigationLoginLink=document.querySelector(".login-link"),siteNavigationBasketRed=document.querySelector(".basket-red"),feedbackButton=document.querySelector(".feedback-button"),fatContentLabelRadios=document.querySelectorAll(".label-radio"),fatContentInputRadios=document.querySelectorAll(".input-radio"),filterFillingLabels=document.querySelectorAll(".filter-filling-label"),filterFillingCheckboxes=document.querySelectorAll(".filter-filling-checkbox");labelSlider1&&labelSlider1.addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),bodyStyle.classList.add("body-double-creme-brulee"),bodyStyle.classList.remove("body-double-creme-chocolate"),bodyStyle.classList.remove("body-double-ice-cream-with-fudge"),inputSlider1.checked=!0)}),labelSlider2&&labelSlider2.addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),bodyStyle.classList.add("body-double-creme-chocolate"),bodyStyle.classList.remove("body-double-creme-brulee"),bodyStyle.classList.remove("body-double-ice-cream-with-fudge"),inputSlider2.checked=!0)}),labelSlider3&&labelSlider3.addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),bodyStyle.classList.add("body-double-ice-cream-with-fudge"),bodyStyle.classList.remove("body-double-creme-brulee"),bodyStyle.classList.remove("body-double-creme-chocolate"),inputSlider3.checked=!0)}),inputSlider1&&inputSlider1.addEventListener("click",function(e){bodyStyle.classList.add("body-double-creme-brulee"),bodyStyle.classList.remove("body-double-creme-chocolate"),bodyStyle.classList.remove("body-double-ice-cream-with-fudge")}),inputSlider2&&inputSlider2.addEventListener("click",function(e){bodyStyle.classList.add("body-double-creme-chocolate"),bodyStyle.classList.remove("body-double-creme-brulee"),bodyStyle.classList.remove("body-double-ice-cream-with-fudge")}),inputSlider3&&inputSlider3.addEventListener("click",function(e){bodyStyle.classList.add("body-double-ice-cream-with-fudge"),bodyStyle.classList.remove("body-double-creme-brulee"),bodyStyle.classList.remove("body-double-creme-chocolate")}),siteNavigationCatalog&&siteNavigationCatalog.addEventListener("mouseenter",function(e){e.preventDefault(),navCatalog.classList.add("visible"),navCatalog.addEventListener("mouseleave",function(e){navCatalog.classList.remove("visible")})}),siteNavigationSearch&&(siteNavigationSearch.addEventListener("click",function(e){e.preventDefault()}),siteNavigationSearch.addEventListener("mouseenter",function(e){e.preventDefault(),navPopUpSearch.classList.add("visible"),navPopUpSearch.addEventListener("mouseleave",function(e){navPopUpSearch.classList.remove("visible")})})),siteNavigationLoginLink&&(siteNavigationLoginLink.addEventListener("click",function(e){e.preventDefault()}),siteNavigationLoginLink.addEventListener("mouseenter",function(e){e.preventDefault(),navPopUpLoginLink.classList.add("visible"),navPopUpLoginLink.addEventListener("mouseleave",function(e){navPopUpLoginLink.classList.remove("visible")})})),siteNavigationBasketRed&&(siteNavigationBasketRed.addEventListener("click",function(e){e.preventDefault()}),siteNavigationBasketRed.addEventListener("mouseenter",function(e){e.preventDefault(),navPopUpbasket.classList.add("visible"),navPopUpbasket.addEventListener("mouseleave",function(e){navPopUpbasket.classList.remove("visible")})})),feedbackButton&&feedbackButton.addEventListener("click",function(e){e.preventDefault(),navPopUpFeedback.classList.add("visible-slow"),navPopUpFeedbackClose.addEventListener("click",function(e){navPopUpFeedback.classList.remove("visible-slow")}),window.addEventListener("keydown",function(e){27===e.keyCode&&navPopUpFeedback.classList.contains("visible-slow")&&(e.preventDefault(),navPopUpFeedback.classList.remove("visible-slow"))})}),1==fatContentLabelRadios&&(fatContentLabelRadios[0].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),fatContentInputRadios[0].checked=!0)}),fatContentLabelRadios[1].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),fatContentInputRadios[1].checked=!0)}),fatContentLabelRadios[2].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),fatContentInputRadios[2].checked=!0)}),fatContentLabelRadios[3].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),fatContentInputRadios[3].checked=!0)})),1==filterFillingLabels&&(filterFillingLabels[0].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),filterFillingCheckboxes[0].checked?filterFillingCheckboxes[0].checked=!1:filterFillingCheckboxes[0].checked=!0)}),filterFillingLabels[1].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),filterFillingCheckboxes[1].checked?filterFillingCheckboxes[1].checked=!1:filterFillingCheckboxes[1].checked=!0)}),filterFillingLabels[2].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),filterFillingCheckboxes[2].checked?filterFillingCheckboxes[2].checked=!1:filterFillingCheckboxes[2].checked=!0)}),filterFillingLabels[3].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),filterFillingCheckboxes[3].checked?filterFillingCheckboxes[3].checked=!1:filterFillingCheckboxes[3].checked=!0)}),filterFillingLabels[4].addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||(e.preventDefault(),filterFillingCheckboxes[4].checked?filterFillingCheckboxes[4].checked=!1:filterFillingCheckboxes[4].checked=!0)}));
