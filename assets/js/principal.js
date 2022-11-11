// Barra de Navegação 
let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar'); 

menu.onclick = () => 
{
    navbar.classList.toggle('active'); 
}

window.onscroll = () => 
{
    navbar.classList.remove('active'); 
}

// Modo Dark 
let darkmode = document.querySelector('#darkmode'); 

darkmode.onclick = () => 
{
    if (darkmode.classList.contains('bx-moon'))
    {
        darkmode.classList.replace('bx-moon', 'bx-sun'); 
        document.body.classList.add('active'); 
    } 
    else 
    {
        darkmode.classList.replace('bx-sun', 'bx-moon'); 
        document.body.classList.remove('active'); 

    }
}

// Scroll 
    const sr = ScrollReveal ({
            origin: 'top', 
            distance: '40px', 
            duration: 2000, 
            reset: true 
        }); 

        sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box, .testimonial`, {
    interval: 200
})

