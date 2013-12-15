/*
 * simpleGallery v0.9.3
 * https://github.com/w3tl/simpleGallery
 *
 * Copyright 2013 Vitaly Dostovalov (dostovalovvs@gmail.com)
 * Released under the MIT license.
 *
 * Date: 2013.12.15
 */
(function ($) {
    $.fn.gallery = function () {
        return this.each(function() {
            var gallery = $(this),
                loading = $("#bubbl", view),
                curr_image;
            
            gallery.prepend(
                '<div id="view"><span id="prev" class="control"></span><span id="close" class="control"></span><span id="next" class="control"></span><img><div id="bubbl"><span id="bubbl1"></span><span id="bubbl2"></span><span id="bubbl3"></span></div></div>'
            );

            var view = $("#view", gallery),
                view_image = view.children("img");

            function next() {
                return curr_image.next().length ? curr_image.next() : curr_image.siblings("img").first();
            }
            function prev() {
                return curr_image.prev("img").length ? curr_image.prev() : curr_image.nextAll().last();
            }
        
            function viewImage(image) {
                curr_image = image.data("full") ? image : next();
                full_image = curr_image.data("full");
                loading.show();
                view_image.hide().attr('src', full_image).load(function() {
                    loading.hide();
                    view_image.show();
                });
            }
        
            gallery.click(function(e) {
                var clicked = $(e.target)[0].tagName === "IMG" ? $(e.target) : null ;
                if ( clicked ) {
                    viewImage(clicked); 
                    view.show();
                }
            });
        
            $( "#close", view ).click(function () { 
                view.hide(); 
            });
            $( "#prev", view ).click(function () {
                curr_image = prev();
                viewImage(curr_image);
            });
            $( "#next", view ).click(function () {
                curr_image = next();
                viewImage(curr_image);
            });
        });
    }        
})(jQuery);
