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
                href: 'http://DanielWeisberg.com/img/hacklassonde2.jpg',
                type: 'image/jpeg',
            },
            {
                title: 'Intense hacking in progress',
                href: 'http://DanielWeisberg.com/img/hacklassonde.jpg',
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
                href: 'http://DanielWeisberg.com/img/finhack.jpg',
                type: 'image/jpeg',
            },
            {
                title: 'NFC Tag',
                href: 'http://DanielWeisberg.com/img/finhack7.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'Showing progress',
                href: 'http://DanielWeisberg.com/img/finhack2.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'The website',
                href: 'http://DanielWeisberg.com/img/finhack6.png',
                type: 'image/png',
            },
			 {
                title: 'The team',
                href: 'http://DanielWeisberg.com/img/finhack3.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'Preparing to present',
                href: 'http://DanielWeisberg.com/img/finhack4.jpg',
                type: 'image/jpeg',
            },
			 {
                title: 'Intense hacking in progress',
                href: 'http://DanielWeisberg.com/img/finhack5.jpg',
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
                href: 'https://dl.dropboxusercontent.com/s/d447a4dm2eyr52j/Crypt%20Raider%20Mummy%27s%20Revenge%20Android%20App.mp4',
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
                title: 'Building manager screen',
                href: 'img/tt1.png',
                type: 'image/png'
            }
			,
						{
                title: 'Selecting a property for a task',
                href: 'img/tt2.png',
                type: 'image/png'
            }
			,
            {
                title: 'Selecting a service',
                href: 'img/tt3.png',
                type: 'image/png'
            },
			{
                title: 'Selecting a contractor',
                href: 'img/tt4.png',
                type: 'image/png'
            },
						{
                title: 'Contractor screen',
                href: 'img/tt5.png',
                type: 'image/png'
            }
			
        ], {
            container: '#blueimp-image-carousel5',
            carousel: true,
			preloadRange: 2
        })
	
	
	
	
	
	 blueimp.Gallery([
						{
                title: 'Creating a level',
                href: 'img/gen.png',
                type: 'image/png'
            }
			,
						{
                title: 'Export file',
                href: 'img/gen2.png',
                type: 'image/png'
            }
        ], {
            container: '#blueimp-image-carousel6',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		blueimp.Gallery([
		 {
               title: 'Demo video',
                href: 'https://dl.dropboxusercontent.com/s/bvobl9tvnlmtcci/Quickstart%20Apps.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/quickstart1.png'
            },
			
			{
                title: 'Creating notification',
                href: 'img/quickstart2.png',
                type: 'image/png'
            }
			,
			{
                title: 'Quickstart notifications',
                href: 'img/quickstart3.png',
                type: 'image/png'
            }
        ], {
            container: '#blueimp-image-carousel7',
            carousel: true,
			preloadRange: 2
        })
	
	
			blueimp.Gallery([
		 {
               title: 'Demo video',
                href: 'https://dl.dropboxusercontent.com/s/z0abwznbpv04xgs/Speech%20to%20TextClipboard%20Pro%20Version.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/typer.png'
            }
        ], {
            container: '#blueimp-image-carousel8',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		
		blueimp.Gallery([
		 {
               title: '',
                href: 'https://dl.dropboxusercontent.com/s/2251mm7l4fe5nvb/Swiper%20no%20Swiping%20%28Picture%29%20Android%20App.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/swiper.png'
            }
			
        ], {
            container: '#blueimp-image-carousel9',
            carousel: true,
			preloadRange: 2
        })
		
		
				blueimp.Gallery([
		 {
               title: 'Demo video',
                href: 'https://dl.dropboxusercontent.com/s/by5jl0dki6inrnr/Touchless%20%20Android%20App.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/touchless1.png'
            },
			
			{
                title: 'Creating notification',
                href: 'img/touchless3.png',
                type: 'image/png'
            }
			,
			{
                title: 'Quickstart notifications',
                href: 'img/touchless4.png',
                type: 'image/png'
            }
        ], {
            container: '#blueimp-image-carousel10',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		
		
		
		blueimp.Gallery([
		 {
               title: 'Demo video',
                href: 'https://dl.dropboxusercontent.com/s/4tr57vvg95pfzwj/Robotic%20Arm%20Demo.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/arm1.jpeg'
            },
			
			{
                title: 'Controlling the robot',
                href: 'img/arm2.jpeg',
                type: 'image/jpeg'
            }
			
        ], {
            container: '#blueimp-image-carousel11',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		
		
		
		
		blueimp.Gallery([
		 {
               title: 'Velocity Pitch',
                href: 'https://dl.dropboxusercontent.com/s/ycxdwvfgmtzdfvj/EZBot%20-%20Velocity%20Fund%20Finals%20%245K%20Fall%202015.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/ezbot4.png'
            },
			
			{
                title: 'Schematics',
                href: 'img/ezbot1.png',
                type: 'image/png'
            }
			,
			{
                title: 'Printed PCB',
                href: 'img/ezbot2.jpeg',
                type: 'image/jpeg'
            }
			,
			{
                title: 'Android Software Homescreen',
                href: 'img/ezbot3.png',
                type: 'image/png'
            }
        ], {
            container: '#blueimp-image-carousel12',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		
			blueimp.Gallery([
		 {
               title: 'ENVR Demo',
                href: 'https://dl.dropboxusercontent.com/s/40h6u3o3v0xdpuz/ENVR%20Prototype%20Demo.mp4?dl=0',
				type: 'video/mp4',
				poster: 'http://envr.io/img/envr/ENVRv1.png'
            },
			
			{
                title: 'Rendering',
                href: 'http://envr.io/img/envr/WithoutFront.png',
                type: 'image/png'
            }
			,
			{
                title: 'Rendering',
                href: 'http://envr.io/img/envr/withoutIsometric.png',
                type: 'image/png'
            }
			,
			{
                title: 'Rendering',
                href: 'http://envr.io/img/envr/withFrontTilt.png',
                type: 'image/png'
            }
        ], {
            container: '#blueimp-image-carousel13',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		
		blueimp.Gallery([	
			{
                title: 'Full view',
                href: 'img/roboarm1.png',
                type: 'image/png'
            }
			,
			{
                title: 'Turning mechanism',
                href: 'img/roboarm3.jpg',
                type: 'image/jpg'
            }
			,
			{
                title: 'Switch control system',
                href: 'img/roboarm4.jpg',
                type: 'image/jpg'
            }
			,
			{
                title: 'Fingers',
                href: 'img/roboarm6.jpg',
                type: 'image/jpg'
            }
			,
			{
                title: 'Front view',
                href: 'img/roboarm10.jpg',
                type: 'image/jpg'
            }
        ], {
            container: '#blueimp-image-carousel14',
            carousel: true,
			preloadRange: 2
        })
		
		
		blueimp.Gallery([	
			{
               title: 'Door Opener Demo',
                href: 'https://dl.dropboxusercontent.com/s/s6qdt8b1kl62s7n/Highschool%20DIY%20Automated%20Door%20%28Passkey%20and%20Camera%29.mp4?dl=0',
				type: 'video/mp4',
				poster: 'img/dooropener.png'
            }
		
        ], {
            container: '#blueimp-image-carousel15',
            carousel: true,
			preloadRange: 2
        })

})