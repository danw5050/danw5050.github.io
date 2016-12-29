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
			fullScreen: true
        })
		
		 blueimp.Gallery([{
                title: 'Banana',
                href: 'http://danielw.me/img/thephonelady.jpg',
                type: 'image/jpeg',
            },
            {
                title: 'Apple',
                href: 'http://danielw.me/img/thephonelady.jpg',
                type: 'image/jpeg',
            }
        ], {
            container: '#blueimp-image-carousel2',
            carousel: true,
			 fullScreen: true
        })
		
		
		
		 blueimp.Gallery([{
                title: 'Banana',
                href: 'http://danielw.me/img/thephonelady.jpg',
                type: 'image/jpeg',
            },
            {
                title: 'Apple',
                href: 'http://danielw.me/img/thephonelady.jpg',
                type: 'image/jpeg',
            }
        ], {
            container: '#blueimp-image-carousel3',
            carousel: true,
			 fullScreen: true
        })
		
		
    

})