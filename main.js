// Sets current year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Sets the margin of the main class
const main = document.querySelector('main');
setMainMargin();
window.addEventListener('resize', setMainMargin);

// Navigation Bar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

function setMainMargin() {
    var h = document.getElementsByTagName('header')[0].offsetHeight;
    main.style.setProperty('--header-height', h + 10 + "px");
}

// Scrolling
$(".scroll").click(function(e) {
    e.preventDefault();

    var margin_top = parseInt($("main").css("margin-top"), 10);
    var position = $($(this).attr("href")).offset().top - margin_top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});