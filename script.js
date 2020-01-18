
window.addEventListener('DOMContentLoaded', () => {

    const collapseBtn = document.getElementById('collapseMenu');
    const navMenu = document.getElementById('navMenu');
    const headerContainer = document.querySelector('header > div');

    const navLinks = {
        home: document.getElementById('homeNavBtn'),
        idea: document.getElementById('ideaNavBtn'),
        team: document.getElementById('teamNavBtn'),
        contact: document.getElementById('contactNavBtn'),
    }

    collapseBtn.addEventListener('click', () => {
        headerContainer.style.lineHeight = 'none';
        $(navMenu).slideToggle(500);
    });

    const x = window.matchMedia('(max-width: 720px)');
    mediaQueryListener(x);
    x.addListener(mediaQueryListener);


    function mediaQueryListener(x) {
        if (x.matches) {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    }



     $(window).scroll(function(e) {
        const scrollTop = $(document).scrollTop();
        removeActiveClass();
        if (scrollTop < 760) {
            navLinks.home.classList.add('active');
        } else if (scrollTop < 1720) {
            navLinks.idea.classList.add('active');
        } else if (scrollTop < 2760) {
            navLinks.team.classList.add('active');
        } else {         
            navLinks.contact.classList.add('active');
        }
    });

    function removeActiveClass() {
        document.querySelector('a.active').classList.remove('active');
    }
});


function showYoutubeVideo() {
    const ytPlayer = document.querySelector('.video-container');
    ytPlayer.style.display = 'block'
}


function scrollToSection(section) {
    if (section === 'home') {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    } else if (section === 'idea-video') {
        $("html, body").animate({ scrollTop: $('#' + section).offset().top }, 1000);
    } else if (section === 'meet-team') {
        $("html, body").animate({ scrollTop: $('#' + section).offset().top - 100 }, 1000);
    } else if (section === 'contact-us') {
        $("html, body").animate({ scrollTop: $('#' + section).offset().top + 100 }, 1000);
    }
}