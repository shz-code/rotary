let hamBtn = document.getElementById("hamBtn"), nav__ul = document.querySelector(".nav__ul");
let nav__clickable = document.querySelector(".nav__clickable");
let imgSlider = document.querySelector(".img_slider__slider");
let imgSliderContainer = document.querySelector(".img_slider");
let navAdjustment = document.querySelector('.nav_adjust');

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

window.addEventListener("load", () =>{
    function displaytime() {
        const date = new Date();
        time.innerHTML = date.toLocaleTimeString();
        dateht.innerHTML = date.toDateString();
    }
    setInterval(displaytime);
    function slideChanger(){
        try{
            imgSlider.querySelector('.active').classList.remove("active");
        }
        catch{
            console.log("Error");
        }

        imgBo[slideIndex].classList.add("active");

    }
    let imgSlider = document.querySelector(".img_slider__slider");
    let imgBo = imgSlider.querySelectorAll('.imgBo');
    let arrowLeft = document.querySelector(".arrow.left");
    let arrowRight = document.querySelector(".arrow.right");
    slideIndex = 0;

    arrowRight.addEventListener("click" , ()=> {
        if(slideIndex === imgBo.length-1){
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
            slideIndex = imgBo.length-1;
        }
        else{
            slideIndex--;
        }
        slideChanger();
        clearInterval(AutoSlide);

    });      
    slides = imgBo.length;
    
    // imgSlider.style.maxWidth = (imgBo[0].offsetWidth) + 'px'; 

    imgBo[0].classList.add('active');
    function autoSlide(){
        if(slideIndex === imgBo.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slideChanger();
    }
    let AutoSlide = setInterval(autoSlide, 5000);
});