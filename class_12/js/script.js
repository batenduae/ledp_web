//SmoothScroll Js
//Jquery No conflict declaration
// jQuery.noConflict();
// jQuery(document).ready(function( $ ){
//     $(this).smoothScrollWindow();
// })

var anchorScroll = $(document).AnchorScroll({
        target:'a[href^="#"]',
        speed: 1500,
        offset: -60,
        easing:"linear",
        center: 0,
    });
    