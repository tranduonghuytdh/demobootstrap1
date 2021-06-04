 $(function(){
  $(window).scroll(function(){
  	if($('body,html').scrollTop() > 300){
  		$('.nutlen').addClass('hienthi');
  	}
  	else if($('body,html').scrollTop() <= 300) {
  		$('.nutlen').removeClass('hienthi');
  	}
  })

  $('.nutlen').on('click', function(event) {
  	//event.preventDefault();
  	$('body,html').animate({scrollTop: 0},1000);
  });
})  
 

document.addEventListener("DOMContentLoaded",function(){
	
	trangthai = 'duoi300';
	var lg = document.querySelector('.logo');
	var menu = document.querySelector('.navbar');
	var chu = document.querySelectorAll('.nav-link');
	var nut = document.querySelector('.nutlen');
	window.addEventListener('scroll',function(){

		if (window.pageYOffset > 60) {
			if (trangthai == 'duoi300') {
				trangthai = 'tren300';
				lg.classList.add('chucam');
				menu.classList.add('menutrang');
				for (var i = 0; i < chu.length; i++) {
					chu[i].classList.add('mauden');
				}
			}
		}
		else if(window.pageYOffset <= 60){
			if (trangthai == 'tren300') {
				trangthai = 'duoi300';
				lg.classList.remove('chucam');
				menu.classList.remove('menutrang');
				for (var i = 0; i < chu.length; i++) {
					chu[i].classList.remove('mauden');
				}
			}
		}
		})
},false)