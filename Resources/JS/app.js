// Sticky Navbar and Back to Top Button

const nav = document.querySelector("nav");
const goTop = document.querySelector(".go-top");

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
        hamBtn.classList.remove("open");
        hamOpen = false;
        navigation.classList.remove("show");

    if (scrollHeight > navHeight) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove("sticky");
    }

    if (scrollHeight > 500) {
        goTop.classList.add("back-top");
    }
    else {
        goTop.classList.remove("back-top");
    }

});


//Hamburger Menu Button
const hamBtn = document.querySelector(".ham-btn");
const navigation = document.querySelector(".navigation")
let hamOpen = false;

hamBtn.addEventListener('click', () => {
    if (!hamOpen) {
        hamBtn.classList.add("open");
        hamOpen = true;
        navigation.classList.add("show");
    } else {
        hamBtn.classList.remove("open");
        hamOpen = false;
        navigation.classList.remove("show");
    }
});