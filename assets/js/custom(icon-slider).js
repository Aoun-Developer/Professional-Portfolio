/*--------------------- Copyright (c) 2019 -----------------------
[Master Javascript]

Project: Portfolio Responsive HTML Template
Version: 1.0.6
Assigned to: ThemeForest
------------------------------------------------------------------


------------------------------------------------------------------*/

(function ($) {
    "use strict";
    var portfolio = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function () {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- CV Portfolio Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.responsor_slider();

        },
        responsor_slider: function () {
            if ($('.slider_sections .swiper-container').length > 0) {
                var swiper = new Swiper('.slider_sections .swiper-container', {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3500,
                    },

                    // Responsive breakpoints
                    breakpoints: {
                        // when window width is <= 320px
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is <= 767px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        // when window width is <= 640px
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }

                });
            }
        },

    };
    portfolio.init();





    $(window).on('load', function () {
        $(".status").fadeOut(1800);
        $(".preloader").delay(1000).fadeOut("slow");
    });

}(jQuery));