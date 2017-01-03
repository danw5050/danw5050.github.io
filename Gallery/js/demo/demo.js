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
                title: 'The Kinect Controlled Robot',
                href: 'http://danielw.me/img/hacklassonde2.jpg',
                type: 'image/jpeg',
            },
            {
                title: 'Intense hacking in progress',
                href: 'http://danielw.me/img/hacklassonde.jpg',
                type: 'image/jpeg',
            }
        ], {
            container: '#hack-lassonde',
            carousel: true,
			startSlideshow: true,
			preloadRange: 2
			
        })
		
		 blueimp.Gallery([{
                title: 'A picture of the TD Strip hardware',
                href: 'http://danielw.me/img/finhack.jpg',
                type: 'image/jpeg',
            },
            {
                title: 'NFC Tag',
                href: 'http://danielw.me/img/finhack7.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'Showing progress',
                href: 'http://danielw.me/img/finhack2.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'The website',
                href: 'http://danielw.me/img/finhack6.png',
                type: 'image/png',
            },
			 {
                title: 'The team',
                href: 'http://danielw.me/img/finhack3.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'Preparing to present',
                href: 'http://danielw.me/img/finhack4.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'Intense hacking in progress',
                href: 'http://danielw.me/img/finhack5.jpg',
                type: 'image/jpeg',
            }
        ], {
            container: '#blueimp-image-carousel2',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		 blueimp.Gallery([{
                title: 'Video of pedestrian light',
                href: 'https://www.youtube.com/watch?v=05UNmnMI1aM',
				youTubeVideoIdProperty: '05UNmnMI1aM',
                type: 'text/html',
				youtube: '05UNmnMI1aM',
				poster: 'https://img.youtube.com/vi/05UNmnMI1aM/maxresdefault.jpg'
            },
            {
                title: 'Apple',
                href: 'http://danielw.me/img/finhack5.jpg',
                type: 'image/jpeg',
            }
        ], {
            container: '#blueimp-image-carousel3',
            carousel: true,
			preloadRange: 2
        })
		
		
    

})