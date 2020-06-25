/* var slider = $('.sectiondos--parallax-fixed');

var scroll;
$(window).scroll(function () {
    scroll = $(window).scrollTop();
    if (scroll >= 950) {
        slider.css({
            marginLeft: '-' + 10 + '%',

        });

        if (scroll >= 1070) {
            slider.css({
                marginLeft: '-' + 20 + '%',

            });
        }


    } else {

    }

});
 */
var imagen1 = $('.sectiondos-img1');
var imagen2 = $('.sectiondos-img2');
var flag = false;
var scroll;
$(window).scroll(function () {
    scroll = $(window).scrollTop();
    if (scroll > 1150) {
        $(".slaider").css({ "position": "fixed", "top": "80px" });


        if (scroll >= 1250) {
            $(imagen2).css({ "width": "100%" });
            if (scroll >= 1375) {
                $(imagen2).css({ "width": "90%" });

                if (scroll >= 1500) {
                    $(imagen2).css({ "width": "80%" });

                    if (scroll >= 1625) {
                        $(imagen2).css({ "width": "70%" });
                        if (scroll >= 1750) {
                            $(imagen2).css({ "width": "60%" });
                            if (scroll >= 1875) {
                                $(imagen2).css({ "width": "50%" });

                                if (scroll >= 2000) {
                                    $(imagen2).css({ "width": "40%" });

                                    if (scroll >= 2125) {
                                        $(imagen2).css({ "width": "30%" });

                                        if (scroll >= 2250) {
                                            $(imagen2).css({ "width": "20%" });

                                            if (scroll >= 2375) {
                                                $(imagen2).css({ "width": "10%" });
                                                if (scroll >= 2505) {
                                                    $(imagen2).css({ "width": "0%" });


                                                }

                                            }
                                        }
                                    }
                                }
                            }

                        }

                    }

                }
            }
        }
    } else {
        $(".slaider").css({ "position": "relative", "top": "0" });


    }

});


var primerScroll = null;

jQuery(window).scroll(function () {
    var scrollActual = jQuery(this).scrollTop();
    if (primerScroll === null) {
        primerScroll = scrollActual;
    }
    console.log(scrollActual);
});
