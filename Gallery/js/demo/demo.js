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
               title: 'Traffic light in action',
                href: 'https://i.imgur.com/yRLkOb6.mp4',
                type: 'video/mp4',
				poster: 'https://i.imgur.com/m8zSVtM.jpg'
            },
            {
                title: 'Opening up my traffic light',
                href: 'https://i.imgur.com/cy4qx3x.jpg',
                type: 'image/jpeg'
            },
			{
                title: 'Processor + Relay + Bluetooth',
                href: 'https://i.imgur.com/dlbC1pa.jpg',
                type: 'image/jpeg'
            },
						{
                title: 'AC to DC converter for electronics',
                href: 'https://i.imgur.com/DiHPyFj.jpg',
                type: 'image/jpeg'
            }
			,
						{
                title: 'Cramming everything into a partition',
                href: 'https://i.imgur.com/vqcumwh.jpg',
                type: 'image/jpeg'
            }
        ], {
            container: '#blueimp-image-carousel3',
            carousel: true,
			preloadRange: 2
        })
		
		
		
				 blueimp.Gallery([{
               title: 'Game Play video',
                href: 'https://2.sendvid.com/ffhcaxsx.mp4',
				type: 'video/mp4',
				poster: 'img/crypt6.jpg'
            }
			,
						{
                title: 'Home screen',
                href: 'img/crypt1.jpg',
                type: 'image/jpeg'
            }
			,
						{
                title: 'Level picker',
                href: 'img/crypt2.jpg',
                type: 'image/jpeg'
            }
			,
            {
                title: 'Game Play',
                href: 'img/crypt3.jpg',
                type: 'image/jpeg'
            },
			{
                title: 'Game Play',
                href: 'img/crypt4.jpg',
                type: 'image/jpeg'
            },
						{
                title: 'Game Play',
                href: 'img/crypt5.jpg',
                type: 'image/jpeg'
            }
			
        ], {
            container: '#blueimp-image-carousel4',
            carousel: true,
			preloadRange: 2
        })
		
		
    
	
	 blueimp.Gallery([
						{
                title: 'Home screen',
                href: 'img/tt1.png',
                type: 'image/png'
            }
			,
						{
                title: 'Level picker',
                href: 'img/tt2.png',
                type: 'image/png'
            }
			,
            {
                title: 'Game Play',
                href: 'img/tt3.png',
                type: 'image/png'
            },
			{
                title: 'Game Play',
                href: 'img/tt4.png',
                type: 'image/png'
            },
						{
                title: 'Game Play',
                href: 'img/tt5.png',
                type: 'image/png'
            }
			
        ], {
            container: '#blueimp-image-carousel5',
            carousel: true,
			preloadRange: 2
        })
	
	

})