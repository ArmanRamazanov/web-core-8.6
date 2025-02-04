import '../styles/main.scss';

//breakpoints
const breakpointmin768px = window.matchMedia("(min-width:768px)");
const breakpointmin1440px = window.matchMedia("(min-width:1440px)");

//related to the equipment-section and brands-section show-more-buttons
const buttons_show_more = document.querySelectorAll("[class$=__show-more-button]");
const list_items_brands = document.querySelectorAll(".brands-section__list-item");
const list_items_equipment = document.querySelectorAll(".equipment-types-section__list-item");

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

//to blur when the modal or navigation_bar are active
const website_header = document.querySelector(".header")
const website_main = document.querySelector(".main")
const website_footer = document.querySelector(".footer")

//common swiper function
const buildSwiper = (element, id) =>{
    return new Swiper(element,{
            pagination:{
                el:".swiper-pagination",
            },
            
            slidesPerView:1.3,
            
            breakpoints:{
                400:{
                    slidesPerView:1.5
                },
                450:{
                    slidesPerView:2
                },
                600:{
                    slidesPerView:2.5
                },
                768:{
                    enabled:false
                }
        }

    })
}


function breakPointChecker(){
    let init = false

    //change the layout of the swipers based on the breakpoints
    function handleBreakPointChange(){
        if(breakpointmin768px.matches){
            allSliders.forEach(slider=>{
                if(slider.swiper) slider.swiper.destroy(true,true)
            })
            init = false;
            document.querySelectorAll(".swiper-wrapper").forEach(el=>el.style.display = "grid")
            reset_items();
        }

        else{
            document.querySelectorAll(".swiper-wrapper").forEach(el=>el.style.display = "flex")
            if(!init){
                init = true
                allSliders.forEach((element,id)=>{
                    buildSwiper(element,id)
                })
            }
        }
    }
    
    breakpointmin768px.addEventListener("change",handleBreakPointChange)
    handleBreakPointChange()
}

//initial-load
window.addEventListener("load",breakPointChecker)


breakpointmin768px.addEventListener("change",reset_items)
breakpointmin1440px.addEventListener("change",reset_items)

//resetting the brand items in brand-section and equipment items in equipment-section
function reset_items(){
    arrBrands.forEach(el=>el.style.display = "block")
    arrEquipment.forEach(el=>el.style.display = "block")
    if(breakpointmin768px.matches && !breakpointmin1440px.matches){
        arrBrands.slice(arrBrands.length - 4).forEach(el=>el.style.display = "none")
        arrEquipment.slice(arrEquipment.length - 3).forEach(el=>el.style.display = "none")
    }

    else if(breakpointmin1440px.matches){
        arrBrands.slice(arrBrands.length-2).forEach((el)=>el.style.display = "none")
        arrEquipment.slice(arrEquipment.length-1).forEach((el)=>el.style.display = "none")
    }
}

//show-more buttons
const buttonsHandler = (element,id) => {
    if(element.classList.contains("is-active")){
        Array.from(element.parentElement.parentElement.children[0].children).forEach(el=>el.style.display = "block") //setting the items where the button is located to element
        element.children[0].style.transform = "rotate(180deg)"
        element.children[1].textContent = "Скрыть"
        element.classList.remove("is-active")
    }

    else{
       element.classList.add("is-active")
       reset_items()
       element.children[0].style.transform = "rotate(0deg)"
       element.children[1].textContent = "Показать все"
    }
}

buttons_show_more[0].addEventListener("click",(event, id)=>{
    buttonsHandler(event.currentTarget, id)
})

buttons_show_more[1].addEventListener("click",(event, id)=>{
    buttonsHandler(event.currentTarget, id)
})

//when the sidebar is opened(navmenu, call-modal, feedback-modal)
function sideOpenHandler(){
    website_header.style.opacity = "0.05"
    website_main.style.opacity = "0.05"
    website_footer.style.opacity = "0.05"
}

//when the sidebar is closed(navmenu, call-modal, feedback-modal)
function sideCloseHandler(){
    website_header.style.opacity = "1"
    website_main.style.opacity = "1"
    website_footer.style.opacity = "1"
}

//open navmenu
header_hamburger_button_open.addEventListener("click",()=>{
    navigation_bar.classList.add("is-active");
    sideOpenHandler()
})

//close navmenu
hamburger_button_close.addEventListener("click",()=>{
    navigation_bar.classList.remove("is-active");
    sideCloseHandler();
})

//for feedback modal(handling both chat button in navmenu and in the (header(breakpoints:768px to 1440px))
function feedbackModalOpenHandler(event){
    if(event === header_chat_button || navigation_chat_button){
        call_modal.classList.remove("is-active");
        feedback_modal.classList.add("is-active");
        navigation_bar.style.opacity = "0.05"
        sideOpenHandler();
    }
}

//feedback-modal open
navigation_chat_button.addEventListener("click",(event)=>{
    feedbackModalOpenHandler(event.currentTarget);
})

header_chat_button.addEventListener("click",(event)=>{
    feedbackModalOpenHandler(event.currentTarget);
})

//feedback-modal close
feedback_modal_close.addEventListener("click",()=>{
    feedback_modal.classList.remove("is-active");
    navigation_bar.style.opacity = "1"
    sideCloseHandler();
})

//for call modal(handling both call button in navmenu and in the (header(breakpoints:768px to 1440px))
function CallModalOpenHandler(event){
    if(event === header_call_button || navigation_call_button){
        feedback_modal.classList.remove("is-active");
        call_modal.classList.add("is-active");
        navigation_bar.style.opacity = "0.05"
        sideOpenHandler();
    }
}

//call-modal open
navigation_call_button.addEventListener("click", (event)=>{
    CallModalOpenHandler(event.currentTarget);
})

header_call_button.addEventListener("click", (event)=>{
    CallModalOpenHandler(event.currentTarget);
})

//call-modal close
call_modal_close.addEventListener("click",()=>{
    call_modal.classList.remove("is-active");
    navigation_bar.style.opacity = "1"
    sideCloseHandler();
})


