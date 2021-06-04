// document.addEventListener("DOMContentLoaded",function(){

// 	var logo = document.querySelector('.logo');
// 	var menutren = document.querySelector('.menutren');
// 	var trangthai = 'tren60';

// 	window.addEventListener('scroll',function(){
// 		if (window.pageYOffset > 60) {
// 			if (trangthai == 'tren60') {
// 				trangthai = 'duoi60';
// 				logo.classList.add('maucam');
// 				menutren.classList.add('mautrang');
// 				menutren.classList.remove('navbar-dark');
// 				menutren.classList.add('navbar-light');
// 			}
// 		} else if(window.pageYOffset <= 60){
// 			if (trangthai == 'duoi60') {
// 				trangthai = 'tren60';
// 				logo.classList.remove('maucam');
// 				menutren.classList.remove('mautrang');
// 				menutren.classList.add('navbar-dark');
// 				menutren.classList.remove ('navbar-light');
// 			}
// 		}
// 	})

// },false)

$(function() {

	$(window).scroll(function() {
		if ($('body,html').scrollTop() > 60 ) {
			$('.logo').addClass('maucam');
			$('.navbar').addClass('nentrang').removeClass('navbar-dark').addClass('navbar-light');
		}
		else {
			$('.logo').removeClass('maucam');
			$('.navbar').removeClass('nentrang').addClass('navbar-dark').removeClass('navbar-light');
		}
	});

	$('.nav-link').on('click',function(event) {
		event.preventDefault();
		 //Act on the event 
		$('.body,html').animate({scrollTop: $('.noidung').offset().top},500,"easeInOutExpo");
	});
	
	$('.logo').on('click',function(event) {
		event.preventDefault();
		 //Act on the event 
		$('.body,html').animate({scrollTop: 0},500,"easeInOutExpo");
	});
	
	$('.nutfind').on('click',function(event) {
		event.preventDefault();
		 //Act on the event 
		$('.body,html').animate({scrollTop: $('.noidung').offset().top},500,"easeInOutExpo");
	});

	$('.nutget').on('click',function(event) {
		event.preventDefault();
		 //Act on the event 
		$('.body,html').animate({scrollTop: $('.noidung1').offset().top},500,"easeInOutExpo");
	});

});