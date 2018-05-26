"use strict"; // Start of use strict
console.time("--== Custom JS File ==--");
// Functions definitions
//======================

function revSliderActivator() {
    // Main Revolution Slider Settings
    $("#main-slider").length && $("#main-slider").revolution({
        sliderType: "Auto Responsive",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: "#site-header",
        delay: 6000,
        gridwidth: 1230,
        gridheight: 700,
        navigation: {
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            arrows: {
                style: "",
                enable: true,
                hide_under: 768,
                hide_onleave: false,
                left: {
                    h_align: "left",
                    v_align: "center"
                },
                right: {
                    h_align: "right",
                    v_align: "center"
                }
            }
        }
    })
}

function formValidation() {
    // Single Post Form
    $("#comment-form").length && $("#comment-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please type a e-mail address.",
                email: "This is not a valid email address."
            }
        }
    });

    // Contact Homepage Form
    $("#contact-form").length && $("#contact-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please type a e-mail address.",
                email: "This is not a valid email address."
            }
        }
    });
}

function instagramGallery() {
    // Instagram Footer
    if ($("#footer-insta").length) {
        var a = new Instafeed({
            get: "user",
            userId: "3013976721", // your user id here
            accessToken: "3013976721.14e148f.c89002a243444fb1b7a1839aa0125047", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered small-border hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "footer-insta",
            limit: 8,
            resolution: "low_resolution"
        });
        a.run()
    }
    // Instagram Biography Page
    if ($("#biography-insta").length) {
        var a = new Instafeed({
            get: "user",
            userId: "3013976721", // your user id here
            accessToken: "3013976721.14e148f.c89002a243444fb1b7a1839aa0125047", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "biography-insta",
            limit: 8,
            resolution: "low_resolution"
        });
        a.run()
    }
}

function twitterActivator() {
    // Twitter Footer Feed
    function b(a) {
        for (var b = a.length, c = 0, d = document.getElementById("twitter-feed"), e = "<ul>"; c < b;) e += '<li class="clearfix"><i class="fa fa-twitter"></i><div>' + a[c] + "<div></li>", c++;
        e += "</ul>", d.innerHTML = e
    }
    var a = {
        id: "722835766359957504", // Your Twiiter ID
        domId: "twitter-feed",
        dateOnly: true,
        maxTweets: 2,
        enableLinks: true,
        showUser: false,
        showTime: true,
        showInteraction: false,
        customCallback: b
    };
    $("#twitter-feed").length && twitterFetcher.fetch(a)
}

function qtyButton() {
    // Single Product Quantity Button 
    $(".qtybutton").on("click", function() {
        var a = $(this),
            b = a.parent().find("input").val();
        if (a.hasClass("inc")) var c = parseFloat(b) + 1;
        else if (b > 0) var c = parseFloat(b) - 1;
        else c = 0;
        a.parent().find("input").val(c)
    })
}

function radioTimelineCarousel() {
    // Radio Timeline Carousel Settings
    $(".radio-shows-slider").each(function() {
        $(this).owlCarousel({
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                992: {
                    items: 3
                }
            },
            dots: false,
            nav: true,
            margin: 30
        })
    })
}

function nivoLightboxActivator() {
    // Nivo LightBox Activator
    $(".nivo-trigger").length && $(".nivo-trigger").nivoLightbox({
        theme: "default",
        effect: "fadeScale"
    })
}

function customPlayerFunctionality() {
    // Play/Pause Button bottom right
    var a = $("#pause-player"),
        b = $("#jp_container_1"),
        c = $("#jquery_jplayer_1");
    b.length && (a.addClass("player_exists"), a.on("click", function() {
        var a = $(this).data("clicked");
        b.hasClass("jp-state-playing") ? (c.jPlayer("pause"), $(this).removeClass("is_playing")) : (c.jPlayer("play"), $(this).addClass("is_playing")), $(this).data("clicked", !a)
    }), $("#jp_container_1 .jp-next, #jp_container_1 .jp-previous").on("click", function() {
        a.addClass("is_playing")
    }), $("#jp_container_1 .jp-play").on("click", function() {
        a.toggleClass("is_playing")
    }));
    // Playlist Toggle 
    $("#playlist-toggle").on("click", function() {
        $(this).parent().parent().parent().find("#main-player-playlist").addClass("toggled")
    }), $("#close-playlist").on("click", function() {
        $(this).parent().parent().parent().removeClass("toggled")
    })
}

function navbarButtons() {
    // Navigation Bar Buttons
    var a = $("#mini-cart-widget"),
        b = $("#mini-cart-toggle"),
        c = $("#search-toggle"),
        d = $("#menu-toggle");
    b.on("click", function() {
        $(this).toggleClass("toggled"), c.add(d).removeClass("toggled"), a.toggleClass("open"), $("#site-navigation, #search-header").removeClass("open")
    }), c.on("click", function() {
        $(this).toggleClass("toggled"), b.add(d).removeClass("toggled"), $("#search-header").toggleClass("open"), $("#site-navigation").add(a).removeClass("open")
    }), d.on("click", function() {
        $(this).toggleClass("toggled"), b.add(c).removeClass("toggled"), $("#site-navigation").toggleClass("open"), $("#search-header").add(a).removeClass("open")
    })
}

function masonryActivator() {
    // Masonry Activator
    var a = $(".masonry_wrapper");
    a.length && a.imagesLoaded(function() {
        a.masonry({
            columnWidth: 0,
            gutter: 0,
            percentPosition: true,
            originTop: true
        })
    })
}

function filterIsotope() {
    // Isotope Activator
    var a = $(".filterable-content");
    a.length && a.isotope(), $("#filter").length && $("#filter").on("click", "li", function() {
        $("li.selected").removeClass("selected"), $(this).addClass("selected");
        var a = $(this).attr("data-filter");
        $(".filterable-content").isotope({
            filter: a
        })
    })
}

function showBackToTop() {
    // Show BackToTop and Player buttons on bottom right
    $(window).scrollTop() > 450 ? ($("#site-header").addClass("scrolling"), $("#back-to-top, #pause-player.player_exists").css({
        bottom: "-1px"
    })) : ($("#site-header").removeClass("scrolling"), $("#back-to-top, #pause-player.player_exists").css({
        bottom: "-40px"
    }))
}

function clickBackToTop() {
    // BackToTop Animation
    $("#back-to-top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"), false
    })
}

// Functions to run while Document Ready event
jQuery(document).on("ready", function() {
    console.time("== Ready Inner Execution ==");
    ! function(a) {
        console.time("== 1 =="),
        revSliderActivator(),
        console.timeEnd("== 1 =="),
        console.time("== 2 =="),
        formValidation(),
        console.timeEnd("== 2 =="),
        console.time("== 3 =="),
        instagramGallery(), 
        console.timeEnd("== 3 =="),
        console.time("== 4 =="),
        twitterActivator(), 
        console.timeEnd("== 4 =="),
        console.time("== 5 =="),
        qtyButton(),
        console.timeEnd("== 5 =="),
        console.time("== 6 =="),
        radioTimelineCarousel(),
        console.timeEnd("== 6 =="),
        console.time("== 7 =="), 
        nivoLightboxActivator(),
        console.timeEnd("== 7 =="),
        console.time("== 8 =="),
        customPlayerFunctionality(),
        console.timeEnd("== 8 =="),
        console.time("== 9 =="),
        navbarButtons(), 
        console.timeEnd("== 9 =="),
        console.time("== 10 =="),
        masonryActivator(), 
        console.timeEnd("== 10 =="),
        console.time("== 11 =="),
        clickBackToTop(),
        console.timeEnd("== 11 ==")
    }(jQuery)
    console.timeEnd("== Ready Inner Execution ==");
});

// Functions to run while Document Load event
jQuery(window).on("load", function() {
    ! function(a) {
        filterIsotope()
    }(jQuery)
}); 

// Functions to run while Document Resize event
jQuery(window).on("resize", function() {
    ! function(a) {
        setTimeout(function() {
            filterIsotope()
        }, 1000)
    }(jQuery)
}); 

// Functions to run while Window Scroll event
jQuery(window).on("scroll", function() {
    ! function(a) {
        showBackToTop()
    }(jQuery)
});
console.timeEnd("--== Custom JS File ==--");


// ===========================================================
// ======================== Switcher =========================
// ===========================================================

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// === Custom settings ===
$(document).ready(function() {
    $('head').append('<link id="link" rel="stylesheet" type="text/css" media="screen" href="assets/css/style.css">');
    $('head').append('<link rel="stylesheet" type="text/css" media="screen" href="assets/css/style_switcher.css">');
    $('body').prepend('<div id="style-switcher-container"><ul id="style-switcher"><li class="title">- Colors -</li><li><a class="color color1" href="#" id="assets/css/style.css">Default Color</a></li><li><a class="color color2" href="#" id="assets/css/style_color2.css">Second Color</a></li><li><a class="color color3" href="#" id="assets/css/style_color3.css">Third Color</a></li><li class="title">- Fonts -</li><li><a class="font" href="#" id="assets/css/style.css">Poppins + SSP</a></li><li><a class="font" href="#" id="assets/css/style_font2.css">Ubuntu + Roboto</a></li><li><a class="font" href="#" id="assets/css/style_font3.css">Monts. + Raleway</a></li></ul><ul class="switcher-pages"><li><a href="../electro/index.html">Electro Version</a></li></ul><span class="switcher-toggle"><i class="fa fa-cog"></i></span></div>');
});

$(document).ready(function() {
    "use strict";
    if($.cookie("musicbase1.0.0")) {
        $("link#link").attr("href",$.cookie("musicbase1.0.0"));
    } 
    $("#style-switcher li a").click(function() { 
        $("link#link").attr("href",$(this).attr('id'));
        $.cookie("musicbase1.0.0",$(this).attr('id'), { path: '/'});
        return false;
    });
    // show-hide color pallete
    $('#style-switcher-container .switcher-toggle').click(function(e){
        e.preventDefault();
        var div = $('#style-switcher-container');
        console.log(div.css('left'));
        if (div.css('left') === '-150px') {
            $('#style-switcher-container').animate({
                left: '-1px'
            }); 
        } else {
            $('#style-switcher-container').animate({
                left: '-150px'
            });
        }
    })
});