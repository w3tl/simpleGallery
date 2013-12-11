/*
 * simpleGallery v0.9.1
 * https://github.com/w3tl/simpleGallery
 *
 * Copyright 2013 Vitaly Dostovalov (dostovalovvs@gmail.com)
 * Released under the MIT license.
 *
 * Date: 2013.12.11
 */
(function ($) {
    $.fn.gallery = function () {
        this.prepend(
            '<div id="view"><span id="prev" class="control"></span><span id="close" class="control"></span><span id="next" class="control"></span><img></div>'
        );

        var view = $("#view"),
            view_image = view.children("img"),
            curr_image;

        function viewImage() {
            full_image = curr_image.data("full");
            view_image.attr('src', full_image);
        };
        this.find("img").click(function () {
            curr_image = $(this);
            viewImage();
            view.show();
        });
        view.find("#close").click(function () {
            view.hide();
        });
        view.find("#prev").click(function () {
            curr_image = curr_image.prev("img").length ?
                curr_image.prev() : curr_image.nextAll().last();
            viewImage();
        });
        view.find("#next").click(function () {
            curr_image = curr_image.next().length ?
                curr_image.next() : curr_image.siblings("img").first();
            viewImage();
        });
    };
})(jQuery);