// toggle bar here 
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
// dark mood initialization here 
let themeToggler = document.querySelector('#theme-toggle');
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun')
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
// typed js init here 
var typed = new typed('.typing-text', {
    Strings: ['front-end developer', 'web designer', 'web developer', 'programmer'],
    loop: true,
    typeSpeed: 150,
    backDelay: 900,
    backSpeed: 50
});
