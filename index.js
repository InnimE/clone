window.onload = function () {

    $('body').prepend('<header></header>');
    $('body').append('<footer></footer>');

    $('header').load('./inc.html header > div',nav);
    $('footer').load('./inc.html footer > section',section);

    function nav(){
        const nav = document.querySelector('nav');
        const triggerMenu = document.querySelector('.trigger-menu');
    
        triggerMenu.onclick = function () {
            nav.classList.toggle('active');
            triggerMenu.classList.toggle('active');
        }
    }

    function section(){
        const elm = document.querySelectorAll('section');
        const elmCount = elm.length;

        elm.forEach(function (item, index) {
            item.addEventListener('mousewheel', function (event) {
                event.preventDefault();
                let delta = 0;

                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;

                let moveTop = window.scrollY;
                let elmSelector = elm[index];

                if (delta < 0) {
                    if (elmSelector !== elmCount - 1) {
                        try {
                            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;

                        } catch (e) {
                            moveTop = window.pageYOffset + elm[9].getBoundingClientRect().top;
                        }
                    }
                } else {
                    if (elmSelector !== 0) {
                        try {
                            moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                        } catch (e) {
                            moveTop = window.pageYOffset + elm[8].getBoundingClientRect().top;
                        }
                    }
                }

                const body = document.querySelector('html');
                window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
            });
        });
    }

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

}
    
