/*
 * simpleGallery v0.9.2
 * https://github.com/w3tl/simpleGallery
 *
 * Copyright 2013 Vitaly Dostovalov (dostovalovvs@gmail.com)
 * Released under the MIT license.
 *
 * Date: 2013.12.12
 */
(function ($) {
    $.fn.gallery = function () {
        this.prepend(
            '<div id="view"><span id="prev" class="control"></span><span id="close" class="control"></span><span id="next" class="control"></span><img><div id="bubbl"><span id="bubbl1"></span><span id="bubbl2"></span><span id="bubbl3"></span></div></div>'
        );
        var view = $("#view"),
            view_image = view.children("img"),
            loading = $("#bubbl"),
            curr_image;

        function viewImage() {
            full_image = curr_image.data("full");
            loading.show();
            view_image.hide().attr('src', full_image).load(function() {
                loading.hide();
                view_image.show();
            });
        };
        
        this.click(function(e) {
            var clicked = $(e.target)[0].tagName === "IMG" ? $(e.target) : null ;
            if ( clicked ) {
                curr_image = clicked;
                view.show();
                viewImage();  
            }
        });
        
        $( "#close", view ).click(function () { 
            view.hide(); 
        });
        $( "#prev", view ).click(function () {
            curr_image = curr_image.prev("img").length ?
                curr_image.prev() : curr_image.nextAll().last();
            viewImage();
        });
        $( "#next", view ).click(function () {
            curr_image = curr_image.next().length ?
                curr_image.next() : curr_image.siblings("img").first();
            viewImage();
        });
    };
})(jQuery);
