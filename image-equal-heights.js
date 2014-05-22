/**
 * Image Equal Heights
 *
 * Equalize the heights of child images.
 * 
 * Version 1.0
 * Updated 05/22/2014
 *
 * Copyright (c) 2014 David Jenkins (david.nicholas.jenkins@gmail.com)
 *
 * Usage: $(object).imageEqualHeights();
 * 
 * Example: $(".cols").imageEqualHeights()
 * 
 */
(function($)
{
    $.fn.imageEqualHeights = function()
    {
        var self = $(this),
            children_images = self.find('img'),
            tallest = 0;

        // Grab all child img tags and loop through them,
        // testing to see which image is the tallest.
        children_images.each(function()
        {
            var img = $(this),
                img_height = img.height();

            if(img_height > tallest)
                tallest = img_height;
        });

        // Now we will go ahead and loop through each of our children
        // img tags again and apply our height change!
        return children_images.each(function()
        {
            var img = $(this),
                img_height = img.height(),
                difference = 0;

            // If the current img is the same height as our tallest
            // then we will go ahead and skip!
            if (img_height === tallest)
                return;

            // Now we figure out how much taller the tallest image is
            // compared to the current image's height.
            difference = tallest - img_height;

            // Once we have that we will center align our image by apply
            // the difference (between heights) split between the top and
            // bottom padding. Simply divide by 2!
            padding_split = difference / 2;

            // Set our CSS and continue to the next!
            img.css({
                "padding-top": padding_split,
                "padding-bottom": padding_split
            });
        });
    }
})(jQuery);
