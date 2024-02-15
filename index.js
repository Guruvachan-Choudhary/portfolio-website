//  role type
let typeData = new Typed(".role", {
    strings: [
        "Frontend Developer",
        "Web Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// nav bar 
let nav = document.querySelector('.nav-items');
let menuBar = document.querySelector('#bars');
let closeButton = document.querySelector('#close');

if(menuBar){
    menuBar.addEventListener('click', () =>{
        nav.classList.add('active');
    });
}
if(closeButton){
    closeButton.addEventListener('click', () =>{
        nav.classList.remove('active');
    });
}

// dark or light button
const themeBtn = document.getElementById("theme-btn");
themeBtn.onclick = () =>{
    themeBtn.classList.toggle("fa-sun");
    if(themeBtn.classList.contains("fa-sun")){
        document.body.classList.add("changeTheme");
    }else{
        document.body.classList.remove("changeTheme");
    }
}
