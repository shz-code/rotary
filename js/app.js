// Navigation Start
// Navigation Start
let hamBtn = document.getElementById("hamBtn"), nav__ul = document.querySelector(".nav__ul");
let nav__clickable = document.querySelector(".nav__clickable");
let imgSlider = document.querySelector(".img_slider__slider");
let imgSliderContainer = document.querySelector(".img_slider");
let navAdjustment = document.querySelector('.nav_adjust');
let masterNavtog = document.querySelector(".master__navtog");
let masterNav = document.querySelector('.master__navigator');
let masterNav_Link = masterNav.querySelectorAll(".master__navigator_link.closable");
let master__nav_clickable = masterNav.querySelector(".master__nav_clickable");
let body = document.querySelector("body");

hamBtn.addEventListener("click", ()=>{
    nav__ul.classList.toggle("nav__ul__open");
    navAdjustment.classList.toggle('pos');
    if(nav__clickable.classList.contains("nav__open")){
        historytog();
    }
});
function historytog(){
    nav__clickable.classList.toggle("nav__open");
};
function gallary(){
    master__nav_clickable.classList.toggle("nested");
};
function bodyHide() {
    body.classList.toggle("hide");
}
function masterNavToggle(){
    masterNavtog.classList.toggle('active');
    masterNav.classList.toggle("active");
    if(window.innerWidth < 1000){
        bodyHide();
    }
}
masterNav_Link.forEach((i)=>{
    i.addEventListener("click" , ()=>{
        masterNavToggle();
    });
});
document.addEventListener("click", (e)=>{
    console.log(1);
    if(body.classList.contains("hide")){
        console.log(2);
        if(!e.target.classList.contains("master__navigator_link") 
        && !e.target.classList.contains("master__navtog")){
            console.log(3);
            masterNavToggle();
        }
    }
});
// Navigation End
// Navigation End
window.addEventListener("load", () =>{
    function displaytime() {
        const date = new Date();
        time.innerHTML = date.toLocaleTimeString();
        dateht.innerHTML = date.toDateString();
    }
    setInterval(displaytime);
    function slideChanger(){
        imgSlider.querySelector('.active').classList.remove("active");
        imgSliderItem[slideIndex].classList.add("active");
    };
    // Img Slider Start
    // Img Slider Start
    let imgSlider = document.querySelector(".img_slider__slider");
    let imgSliderItem = imgSlider.querySelectorAll('.img_slider__slider_item');
    let arrowLeft = document.querySelector(".arrow.left");
    let arrowRight = document.querySelector(".arrow.right");
    slideIndex = 0;
    arrowRight.addEventListener("click" , ()=> {
        if(slideIndex === imgSliderItem.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slideChanger();
        clearInterval(AutoSlide);

    });
    arrowLeft.addEventListener("click" , ()=> {
        if(slideIndex === 0){
            slideIndex = imgSliderItem.length-1;
        }
        else{
            slideIndex--;
        }
        slideChanger();
        clearInterval(AutoSlide);

    });      
    slides = imgSliderItem.length;
    imgSliderItem[0].classList.add('active');
    function autoSlide(){
        if(slideIndex === imgSliderItem.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slideChanger();
    }
    let AutoSlide = setInterval(autoSlide, 5000);
    // Img Slider ENd
    // Img Slider end
    // Master Section Start
    // Master Section Start
    let recenTabs = document.querySelector('.recent__tabs');
    let recentTabsItem = recenTabs.querySelectorAll(".recent__tabs_item");
    let recentBody = document.querySelector(".recent__body");
    recentTabsItem.forEach((item) =>{
        item.addEventListener("click" , (event)=>{
            let selectedItem = event.target;
            let target = selectedItem.getAttribute("data-target");
            let activatedRecentTab = recenTabs.querySelector(".recent__tabs_item.active");
            let activatedItem = recentBody.querySelector(".master__body_content.active");
            if(recentBody.querySelector(target)){
                if(!selectedItem.classList.contains("active")){
                    selectedItem.classList.add("active");
                    activatedRecentTab.classList.remove("active")
                }
                activatedItem.classList.remove("active");
                recentBody.querySelector(target).classList.add("active");
            }
            else{
                console.log("NO element");
            }
        });
    });

    // Master Section End
    // Master Section End
});