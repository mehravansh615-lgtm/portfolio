// ======================
// Mobile Menu
// ======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ======================
// Sticky Navbar
// ======================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
});

// ======================
// Scroll To Top Button
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ======================
// Dark Mode
// ======================

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

// ======================
// Typing Effect
// ======================

const typing = document.querySelector(".typing");

const words = [
    "Computer Engineer",
    "Web Developer",
    "Programmer",
    "UI Designer",
    "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0,charIndex++);
    }else{
        typing.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && charIndex === currentWord.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        wordIndex++;

        if(wordIndex === words.length){
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect,speed);

}

typeEffect();

// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ======================
// Skill Animation
// ======================

const skills = document.querySelectorAll(".progress");

function animateSkills(){

    const trigger = window.innerHeight;

    skills.forEach(skill=>{

        const top = skill.getBoundingClientRect().top;

        if(top < trigger - 100){

            skill.style.animation = "fillBar 2s forwards";

        }

    });

}

window.addEventListener("scroll",animateSkills);

animateSkills();

// ======================
// Active Navigation Link
// ======================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});

// ======================
// Contact Form
// ======================

const form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// ======================
// Fade Animation
// ======================

const cards = document.querySelectorAll(
".project-card,.certificate-card,.achievement-card,.timeline-item,.skill,.about-info div"
);

function reveal(){

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

});

window.addEventListener("scroll",reveal);

reveal();





