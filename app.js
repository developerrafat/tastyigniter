const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle');

const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', function(e){
    navMenu.classList.toggle('menu-active');
    navLink.forEach(rafat => {
        rafat.addEventListener('click', function(){
            navMenu.classList.remove('menu-active')
        })
    })
})

// sticky
window.addEventListener('scroll',function(e){
    if(scrollY > 20){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});
// sticky
// pop contact
const contactBtn = document.querySelector('#contact-btn');
const closeBtn = document.querySelector('.close-pop');
const popBox = document.querySelector('.popup-box');
const popContact = document.querySelector('.pop-contact');
contactBtn.addEventListener('click',function(){
    popBox.classList.add('show-pop');
})
closeBtn.addEventListener('click',function(){
    popBox.classList.remove('show-pop');
})
popContact.addEventListener('submit',function(e){
    e.preventDefault();
})
// pop contact end
// navbar active
const navLink = document.querySelectorAll('.nav-link');
const section = document.querySelectorAll('.section');

function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop){}
    navLink.forEach(item => item.classList.remove('nav-active'));
    navLink[len].classList.add('nav-active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);
// function activeNav(){
//     navLink.forEach(item => 
//         item.classList.remove('nav-active')
//     )
//     this.classList.add("nav-active")
// }
// navLink.forEach((item) => {
//     item.addEventListener('click',activeNav)
// })

// navbar active
// type js
const deveLoper = `Frontend <span class="highlight">Developer</span>`
var typed = new Typed('#typing', {
    strings: [deveLoper,"Freelancer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });

// type js
// aos
AOS.init();
// aos
// mmouse hover scroll

// mmouse hover scroll