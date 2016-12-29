/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
/* global blueimp, $ */
$(function() {
    'use strict'
  
            // Initialize the Gallery as image carousel:
        blueimp.Gallery([{
                title: 'Banana',
                href: 'http://danielw.me/img/tweetmap.jpg',
                type: 'image/jpeg',
                thumbnail: 'http://danielw.me/img/tweetmap.jpg'
            },
            {
                title: 'Apple',
                href: 'http://danielw.me/img/tweetmap.jpg',
                type: 'image/jpeg',
                thumbnail: 'http://danielw.me/img/tweetmap.jpg'
            }
        ], {
            container: '#blueimp-image-carousel',
            carousel: true,
			slideshowInterval: 2500,
			fullScreen: true
        })
		
		 blueimp.Gallery([{
                title: 'Banana',
                href: 'http://danielw.me/img/thephonelady.jpg',
                type: 'image/jpeg',
                thumbnail: 'http://danielw.me/img/thephonelady.jpg'
            },
            {
                title: 'Apple',
                href: 'http://danielw.me/img/thephonelady.jpg',
                type: 'image/jpeg',
                thumbnail: 'http://danielw.me/img/thephonelady.jpg'
            }
        ], {
            container: '#blueimp-image-carousel2',
            carousel: true,
			slideshowInterval: 2500,
			 fullScreen: true
        })
		
		
    

})