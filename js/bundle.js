/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");


//activeLink in navigationbar
const header__hamburger_menu_navigation_list_links = document.querySelectorAll(".navigation-bar__list-item");
const clr_green_900 = "#41F6D7";
const clr_grey_900 = "#7E7E82";
const clr_black_900 = "#1B1C21";
const clr_green_100 = "#B8FFEC";
const listButtons = document.querySelectorAll(".main__main-section-list-button");

//breakpoints
const breakpointmin768px = window.matchMedia("(min-width:768px)");
const breakpointmin1440px = window.matchMedia("(min-width:1440px)");
const breakpointmax768px = window.matchMedia("(max-width:768px)");

//read more button and paragraph in main section
const button_read_more = document.querySelector(".main__main-section-read-more");
const mainSection_text_content = document.querySelectorAll(".main__main-section-text-content span");
button_read_more.classList.add("is-active");

//related to the equipment-section and brands-section show-more-buttons
const buttons_show_more = document.querySelectorAll("[class$=__show-more-button]");
const list_items_brands = document.querySelectorAll(".brands-section__list-item");
const list_items_equipment = document.querySelectorAll(".equipment-types-section__list-item");
buttons_show_more.forEach(button => button.classList.add("is-active"));

//list of swipers
const allSliders = document.querySelectorAll(".swiper");
const arrBrands = Array.from(list_items_brands);
const arrEquipment = Array.from(list_items_equipment);

//navigation-menu
const header_hamburger_button_open = document.querySelector(".header__hamburger-button");
const hamburger_button_close = document.querySelector(".navigation-bar-header-button-close");
const navigation_bar = document.querySelector(".navigation-bar");

//feedback-modal
const feedback_modal_close = document.querySelector(".feedback-modal__close-button");
const navigation_chat_button = document.querySelector(".navigation-bar__footer-chat-button");
const feedback_modal = document.querySelector(".feedback-modal");
const header_chat_button = document.querySelector(".header__interaction-menu-chat-button");

//call-modal
const call_modal_close = document.querySelector(".call-modal__close-button");
const navigation_call_button = document.querySelector(".navigation-bar__footer-call-button");
const call_modal = document.querySelector(".call-modal");
const header_call_button = document.querySelector(".header__interaction-menu-call-button");
const overlay = document.querySelector("#overlay");

//common swiper function
const buildSwiper = (element, id) => {
  return new Swiper(element, {
    pagination: {
      el: ".swiper-pagination"
    },
    slidesPerView: 1.3,
    breakpoints: {
      400: {
        slidesPerView: 1.5
      },
      450: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 2.5
      },
      768: {
        enabled: false
      }
    }
  });
};
function read_more_button_handler(element, id) {
  if (element.classList.contains("is-active")) {
    element.children[0].style.transform = "rotate(180deg)";
    element.children[1].textContent = "Закрыть";
    Array.from(mainSection_text_content).forEach(span => {
      span.style.display = "inline";
    });
    button_read_more.classList.remove("is-active");
  } else {
    button_read_more.classList.add("is-active");
    reset_text();
    element.children[0].style.transform = "rotate(0deg)";
    element.children[1].textContent = "Читать далее";
  }
}
button_read_more.addEventListener("click", (event, id) => {
  read_more_button_handler(event.currentTarget, id);
});
function reset_text() {
  Array.from(mainSection_text_content).forEach(span => span.style.display = "inline");
  if (breakpointmax768px.matches) {
    Array.from(mainSection_text_content).slice(1, 3).forEach(span => {
      span.style.display = "none";
    });
  } else if (breakpointmin768px.matches && !breakpointmin1440px.matches || breakpointmin1440px.matches) {
    Array.from(mainSection_text_content).slice(2, 3).forEach(span => {
      span.style.display = "none";
    });
  }
}
reset_text();
breakpointmax768px.addEventListener("change", reset_text);

//remove shadow from all the links in the navigation bar
function removeBorder(elements) {
  elements.forEach(element => {
    element.style.borderLeft = "none";
  });
}

//change the color of all the links in the navigation bar
function removeColor(elements) {
  elements.forEach(element => {
    element.children[0].style.color = clr_black_900;
  });
}

//set active link color and borderLeft
function activeLinkBorder(link) {
  removeBorder(header__hamburger_menu_navigation_list_links);
  removeColor(header__hamburger_menu_navigation_list_links);
  link.style.borderLeft = `3px solid ${clr_green_900}`;
  link.children[0].style.color = clr_grey_900;
}

//calling the color and border color setter when clicked
const links_active = header__hamburger_menu_navigation_list_links.forEach(link => {
  link.addEventListener("click", event => {
    activeLinkBorder(event.currentTarget);
  });
  link.addEventListener("keypress", event => {
    if (event.key === " ") {
      activeLinkBorder(event.currentTarget);
    }
  });
});
links_active;

//main section buttons
function removeShadow() {
  listButtons.forEach(btn => {
    btn.style.boxShadow = "none";
  });
}
listButtons.forEach(button => {
  button.addEventListener("click", event => {
    removeShadow();
    let clickedButton = event.target;
    clickedButton.style.boxShadow = `0px 0px 0px 3px ${clr_green_100} inset`;
  });
});
function breakPointChecker() {
  let init = false;

  //change the layout of the swipers based on the breakpoints
  function handleBreakPointChange() {
    if (breakpointmin768px.matches) {
      allSliders.forEach(slider => {
        if (slider.swiper) slider.swiper.destroy(true, true);
      });
      init = false;
      document.querySelectorAll(".swiper-wrapper").forEach(el => el.style.display = "grid");
      reset_items();
    } else {
      document.querySelectorAll(".swiper-wrapper").forEach(el => el.style.display = "flex");
      if (!init) {
        init = true;
        allSliders.forEach((element, id) => {
          buildSwiper(element, id);
        });
      }
    }
  }
  breakpointmin768px.addEventListener("change", handleBreakPointChange);
  handleBreakPointChange();
}

//initial-load
window.addEventListener("load", breakPointChecker);
breakpointmin768px.addEventListener("change", reset_items);
breakpointmin1440px.addEventListener("change", reset_items, reset_text);

//resetting the brand items in brand-section and equipment items in equipment-section
function reset_items() {
  arrBrands.forEach(el => el.style.display = "block");
  arrEquipment.forEach(el => el.style.display = "block");
  if (breakpointmin768px.matches && !breakpointmin1440px.matches) {
    arrBrands.slice(arrBrands.length - 4).forEach(el => el.style.display = "none");
    arrEquipment.slice(arrEquipment.length - 3).forEach(el => el.style.display = "none");
  } else if (breakpointmin1440px.matches) {
    arrBrands.slice(arrBrands.length - 2).forEach(el => el.style.display = "none");
    arrEquipment.slice(arrEquipment.length - 1).forEach(el => el.style.display = "none");
  }
}

//show-more buttons
const buttonsHandler = (element, id) => {
  if (element.classList.contains("is-active")) {
    Array.from(element.parentElement.parentElement.children[0].children).forEach(el => el.style.display = "block"); //setting the items where the button is located to element
    element.children[0].style.transform = "rotate(180deg)";
    element.children[1].textContent = "Скрыть";
    element.classList.remove("is-active");
  } else {
    element.classList.add("is-active");
    reset_items();
    element.children[0].style.transform = "rotate(0deg)";
    element.children[1].textContent = "Показать все";
  }
};
buttons_show_more[0].addEventListener("click", (event, id) => {
  buttonsHandler(event.currentTarget, id);
});
buttons_show_more[1].addEventListener("click", (event, id) => {
  buttonsHandler(event.currentTarget, id);
});

//when the sidebar is opened(navmenu, call-modal, feedback-modal)
function sideOpenHandler() {
  overlay.classList.add("is-active");
}

//when the sidebar is closed(navmenu, call-modal, feedback-modal)
function sideCloseHandler() {
  overlay.classList.remove("is-active");
}

//open navmenu
header_hamburger_button_open.addEventListener("click", () => {
  navigation_bar.classList.add("is-active");
  sideOpenHandler();
});

//close navmenu
hamburger_button_close.addEventListener("click", () => {
  navigation_bar.classList.remove("is-active");
  if (!(feedback_modal.classList.contains("is-active") || call_modal.classList.contains("is-active"))) {
    sideCloseHandler();
  }
});

//for feedback modal(handling both chat button in navmenu and in the (header(breakpoints:768px to 1440px))
function feedbackModalOpenHandler(event) {
  if (event === header_chat_button || navigation_chat_button) {
    call_modal.classList.remove("is-active");
    navigation_bar.classList.remove("is-active");
    feedback_modal.classList.add("is-active");
    overlay.classList.add("is-active");
    sideOpenHandler();
  }
}

//feedback-modal open
navigation_chat_button.addEventListener("click", event => {
  feedbackModalOpenHandler(event.currentTarget);
});
header_chat_button.addEventListener("click", event => {
  feedbackModalOpenHandler(event.currentTarget);
});
feedback_modal_close.addEventListener("click", event => {
  closeModal(event.currentTarget, feedback_modal, feedback_modal_close);
});
function closeModal(event, modal, modal_close_button) {
  if (event === modal_close_button) {
    modal.classList.remove("is-active");
    overlay.classList.remove("is-active");
  }
}

//for call modal(handling both call button in navmenu and in the (header(breakpoints:768px to 1440px))
function CallModalOpenHandler(event) {
  if (event === header_call_button || navigation_call_button) {
    feedback_modal.classList.remove("is-active");
    navigation_bar.classList.remove("is-active");
    call_modal.classList.add("is-active");
    overlay.classList.add("is-active");
    sideOpenHandler();
  }
}

//call-modal open
navigation_call_button.addEventListener("click", event => {
  CallModalOpenHandler(event.currentTarget);
});
header_call_button.addEventListener("click", event => {
  CallModalOpenHandler(event.currentTarget);
});
call_modal_close.addEventListener("click", event => {
  closeModal(event.currentTarget, call_modal, call_modal_close);
});
overlay.addEventListener("click", () => {
  feedback_modal.classList.remove("is-active");
  call_modal.classList.remove("is-active");
  navigation_bar.classList.remove("is-active");
  overlay.classList.remove("is-active");
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map