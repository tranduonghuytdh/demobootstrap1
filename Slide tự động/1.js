document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slide = document.querySelectorAll('.cacslide ul li');
	var thoigian = setInterval(function(){ autoSlide()},5000);
	
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			// Hủy chuyển động
			clearInterval(thoigian);
			// xóa tất cả màu đen đi
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			//Thêm đen vào khi click qua những cái khác
			this.classList.add('kichhoat');

			// Xong xử lý chuyển màu của nút

			//Tính vị trí của slide
			var nutkichhoat = this;
			var vitri = 0;
			//console.log(nutkichhoat);
			// console.log(nutkichhoat.previousElementSibling);
			for (vitri = 0;nutkichhoat = nutkichhoat.previousElementSibling; vitri++) {
				// console.log('Biến = ' + vitri);
				// console.log('Phần tử kích hoạt là ' + nutkichhoat);
			}
			// console.log('vị trí phần tử có nút kích hoat là  : ' + vitri);
			//Xong vòng lặp này thì biến vitri = số thứ tự
			//-> Sau khi có vị trí thì dựa vào vị trí để hiển thị các slide theo vị trí

			// Bước 1: Khi click thì cho cac slide ẩn đi
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				slide[vitri].classList.add('active');
			}
		})
	} //Xong phần chuyển slide và chuyển nút

	function autoSlide(){
			//bước 1: Xem slide nào đang hiển thị
			var vitrislide = 0;
			//Khai báo đối tượng đang hiển thị
			var slideHientai = document.querySelector('.cacslide ul li.active');
			// console.log(vitrislide.previousElementSibling);
			// console.log(vitrislide);
			
			for (vitrislide = 0;slideHientai = slideHientai.previousElementSibling;vitrislide++) {}
			// console.log('vị trí của nút hiện tại là : ' + vitrislide);
			//Xóa các slide và nút

			//Bước 3: Check thử slide ở cuối chưa nếu cuối rồi thì hiển thị slide đầu tiên
			if (vitrislide < (slide.length-1)) {
				//Bước 2
				for (var i = 0; i < slide.length; i++) {
					slide[i].classList.remove('active');
					nut[i].classList.remove('kichhoat');
				}
				//Thêm slide tiếp theo vào tự động
				slide[vitrislide].nextElementSibling.classList.add('active');
				nut[vitrislide].nextElementSibling.classList.add('kichhoat');
			}
			else {
				for (var i = 0; i < slide.length; i++) {
					slide[i].classList.remove('active');
					nut[i].classList.remove('kichhoat');
				}
				//Thêm slide tiếp theo vào tự động
				slide[0].classList.add('active');
				nut[0].classList.add('kichhoat');
			}
		}
},false);