'use strict'


$(function(){
	//setInterval
	//animate margin-left
	//if it's last slide go to postion 1 (0px);

	//listen for mouseenter and pause
	//resume on mouseleave
	/* step 1
	setInterval(function(){
		$("#slider .slides").animate({"margin-left": "-=920px"}, 1000);
	}, 3000);
*/

/* step 2
//configuration
	var width = 920;
	var animationSpeed = 10000;
	var pause = 3000;

	setInterval(function(){
		$("#slider .slides").animate({"margin-left": "-="+width}, animationSpeed);
	}, pause);
*/

/* step 3 caching
//configuration
	var width = 920;
	var animationSpeed = 1000;
	var pause = 3000;
// lets cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	setInterval(function(){
		$slideContainer.animate({"margin-left": "-="+width}, animationSpeed);
	}, pause);
*/

/*step4 add callback
//configuration
	var width = 920;
	var animationSpeed = 1000;
	var pause = 3000;
// lets cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var currentSLide = 1;
	setInterval(function(){
		$slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function(){
				currentSLide++;
				if(currentSLide === $slides.length){
					currentSLide =1;
					$slideContainer.css('margin-left',0);
				}
			});
	}, pause);
*/

//step 5 add mouseenter and mouseexit
//create a way to step slider.  add setInterval

	var width = 920;
	var animationSpeed = 1000;
	var pause = 1000;
	var currentSLide = 1;
// lets cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function(){
					currentSLide++;
					if(currentSLide === $slides.length){
						currentSLide =1;
						$slideContainer.css('margin-left',0);
					}
				});
		}, pause);
	}

	function stopSlider(){
		clearInterval(interval);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	startSlider();
});