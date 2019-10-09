$(document).ready(function (){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var curScroll = $(window).scrollTop();
            var toScroll = $(this.hash).offset().top - 72;
            
            var scrollTime = 15 * Math.sqrt(Math.abs(curScroll - toScroll)) + 100;
            
            $('html, body').animate({
               scrollTop: $(this.hash).offset().top - 72
            }, scrollTime, 'swing');
            // document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        });
    });
});