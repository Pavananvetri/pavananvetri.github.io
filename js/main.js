(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
	  

    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#frame').length) {
		
      $('#frame').delay(5000).fadeOut('slow', function () {
        $(this).remove();
		$('body').css('overflow','visible');
	    $('html').css('overflow','visible');
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 355,
		"density": {
		  "enable": true,
		  "value_area": 789.1476416322727
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.48927153781200905,
		"random": false,
		"anim": {
		  "enable": true,
		  "speed": 0.2,
		  "opacity_min": 0,
		  "sync": false
		}
	  },
	  "size": {
		"value": 2,
		"random": true,
		"anim": {
		  "enable": true,
		  "speed": 2,
		  "size_min": 0,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 0.2,
		"direction": "none",
		"random": true,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "bubble"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 83.91608391608392,
		  "size": 1,
		  "duration": 3,
		  "opacity": 1,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });

  particlesJS("particles3-js", {
	"particles": {
	  "number": {
		"value": 355,
		"density": {
		  "enable": true,
		  "value_area": 789.1476416322727
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.48927153781200905,
		"random": false,
		"anim": {
		  "enable": true,
		  "speed": 0.2,
		  "opacity_min": 0,
		  "sync": false
		}
	  },
	  "size": {
		"value": 2,
		"random": true,
		"anim": {
		  "enable": true,
		  "speed": 2,
		  "size_min": 0,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 0.2,
		"direction": "none",
		"random": true,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "bubble"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 83.91608391608392,
		  "size": 1,
		  "duration": 3,
		  "opacity": 1,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });

  particlesJS("particles2-js", {
	"particles": {
	  "number": {
		"value": 355,
		"density": {
		  "enable": true,
		  "value_area": 789.1476416322727
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.48927153781200905,
		"random": false,
		"anim": {
		  "enable": true,
		  "speed": 0.2,
		  "opacity_min": 0,
		  "sync": false
		}
	  },
	  "size": {
		"value": 2,
		"random": true,
		"anim": {
		  "enable": true,
		  "speed": 2,
		  "size_min": 0,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 0.2,
		"direction": "none",
		"random": true,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "bubble"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 83.91608391608392,
		  "size": 1,
		  "duration": 3,
		  "opacity": 1,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });
  let itemsImgs = document.querySelectorAll(".project-grid a img");
  itemsImgsArr = Array.from(itemsImgs);
  console.log(itemsImgsArr)
  
  // pop slider
  let popSlider = document.querySelector(".resume-mf .modal-layer");
  let bgSlide = document.querySelector(".modal-layer .slide-img");
  
  // icons/buttons
  // close
  let closeBtn = document.querySelector("#closeBtn");
  closeBtn.style.cssText = `cursor : pointer;`;
  // left
  let prevBtn = document.querySelector("#prev");
  prevBtn.style.cssText = `cursor : pointer;`;
  // right
  let nextBtn = document.querySelector("#next");
  nextBtn.style.cssText = `cursor : pointer;`;
  let subimages = [["img/funskool/Pavanan%20Portfolio-02.png", "img/funskool/Pavanan%20Portfolio-03.png", "img/funskool/Pavanan%20Portfolio-04.png"],
  					["img/Flintobox/Pavanan%20Portfolio-05.png","img/Flintobox/Pavanan%20Portfolio-06.png", "img/Flintobox/Pavanan%20Portfolio-07.png", "img/Flintobox/Pavanan%20Portfolio-08.png"],
  					["img/Vaya/Pavanan%20Portfolio-09.png","img/Vaya/Pavanan%20Portfolio-10.png","img/Vaya/Pavanan%20Portfolio-11.png","img/Vaya/Pavanan%20Portfolio-12.png","img/Vaya/Pavanan%20Portfolio-13.png","img/Vaya/Pavanan%20Portfolio-14.png","img/Vaya/Pavanan%20Portfolio-15.png",
						"img/Vaya/Pavanan%20Portfolio-16.png","img/Vaya/Pavanan%20Portfolio-17.png", "img/Vaya/Pavanan%20Portfolio-18.png","img/Vaya/Pavanan%20Portfolio-19.png", "img/Vaya/Pavanan%20Portfolio-20.png", "img/Vaya/Pavanan%20Portfolio-21.png", "img/Vaya/Pavanan%20Portfolio-22.png",
						"img/Vaya/Pavanan%20Portfolio-23.png","img/Vaya/Pavanan%20Portfolio-24.png", "img/Vaya/Pavanan%20Portfolio-25.png", "img/Vaya/Pavanan%20Portfolio-26.png","img/Vaya/Pavanan%20Portfolio-27.png",
						"img/Vaya/Pavanan%20Portfolio-28.png","img/Vaya/Pavanan%20Portfolio-29.png"],
					["img/Valeo/Pavanan%20Portfolio-33.png", "img/Valeo/Pavanan%20Portfolio-34.png", "img/Valeo/Pavanan%20Portfolio-35.png"],
					["img/CLRI/Pavanan%20Portfolio-30.png","img/CLRI/Pavanan%20Portfolio-31.png","img/CLRI/Pavanan%20Portfolio-32.png"],
					["img/Adaptive%20design/Pavanan%20Portfolio-36.png","img/Adaptive%20design/Pavanan%20Portfolio-37.png","img/Adaptive%20design/Pavanan%20Portfolio-38.png"],
				
			
			];
  // index of item
  let urlString = "http://127.0.0.1:5500/pavananvetri.github.io/img/Adaptive%20design/Pavanan%20Portfolio-36.png";


// splitUrl[0] will contain "http://127.0.0.1:5500/pavananvetri.github.io/"
// To include "img/" in the first part, you can append it back

  let activeIndex =0;
  let indexoption=0;
  let  imageSize = Array.from(subimages[activeIndex]);
  for (let i = 0; i < itemsImgs.length; i++) {
	itemsImgs[i].addEventListener("click", function (e) {
	console.log(i)
	  popSlider.style.display = "flex";
	  
	  let activeSrc = e.target.src;
	  splitUrl = activeSrc.split("img/");
	  activeSrc = splitUrl[0]+subimages[i][0];
	  console.log(activeSrc);
	  console.log(activeSrc);
	  console.log(imageSize);
	  imageSize = Array.from(subimages[i]);
	  bgSlide.style.backgroundImage = `url(${activeSrc})`;
	  activeIndex = itemsImgsArr.indexOf(e.target);
	  console.log(activeIndex)
	});
  }
  
  closeBtn.addEventListener("click", removeSlider);
  
  function removeSlider() {
	popSlider.style.display = "none";
  }
  
  nextBtn.addEventListener("click", nextSlider);
  
  function nextSlider() {
	indexoption++;

	if (indexoption == imageSize.length) {
	  indexoption = 0;
	}
	console.log(subimages[activeIndex][indexoption]);
	let imgSrc = splitUrl[0]+subimages[activeIndex][indexoption];
	bgSlide.style.backgroundImage = `url(${imgSrc})`;
  }
  
  prevBtn.addEventListener("click", prevSlider);
  
  function prevSlider() {
	indexoption--;
	if (indexoption < 0) {
	  indexoption = imageSize.length - 1;
	}
	let imgSrc = splitUrl[0]+subimages[activeIndex][indexoption];;
	bgSlide.style.backgroundImage = `url(${imgSrc})`;
  }
  
  // keyboard events
  document.addEventListener("keydown", function (e) {
	if (e.key == "Escape") {
	  removeSlider();
	} else if (e.key == "ArrowRight") {
	  nextSlider();
	} else if (e.key == "ArrowLeft") {
	  prevSlider();
	}
  });