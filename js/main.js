$(document).ready(function () {

    $('#ripple-effect').ripples({
        resolution: 1080,
        dropRadius: 7
    });

    const bars = document.querySelectorAll('.progress-bar');
    // console.log(bars);
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    })


    const counters = document.querySelectorAll('.counter')

    function activeCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;


            let target = +counter.dataset.count;
            let steps = target / 100;


            let counIt = function () {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {

                    counter.innerText = Math.ceil(displayedCount + steps)
                    setTimeout(counIt, 300);

                }
                else {
                    counter.innerText = target;

                }
            }
            counIt();
        })
    }

    activeCounter()

    let counterSection = document.querySelector('.counter-wrapper');

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    const sectionObserrver = new IntersectionObserver(function (entries) {

        if (entries[0].isIntersecting) {
            activeCounter();

        }
    }, options)


    sectionObserrver.observe(counterSection);




    // image filter 

    var $wrapper = $('.portfolio-wrapper');


    // intitializing

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOption: {
            duration: 750,
            eaeing: 'liner'
        }
    });

    let links = document.querySelectorAll('.tabs a');
    // console.log(links);

    links.forEach(link => {

        let selector = link.dataset.filter;

        link.addEventListener('click',function(e) {
            e.preventDefault(); 

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOption: {
                    duration: 750,
                    eaeing: 'liner'
                }
            });


            links.forEach(LINK => {
                LINK.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    });

    // magnify popup imag 

    $('.zoom').magnificPopup({
        type: "image",
        gallery: {
            enabled : true
        },
        zoom : {
            enable: true
        }
    });

    // slder script

    $('.slider').slick({
        arrows: false,
        autoplay: true
    })

});

