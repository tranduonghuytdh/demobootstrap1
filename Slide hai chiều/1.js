var nutPhai = document.querySelector('.nuts b.phai'),
	nutTrai = document.querySelector('.nuts b.trai'),
	slides = document.querySelectorAll('.slides ul li'),
	chisoHientai = 0,
	soluongSlide = slides.length,
	trangThai = 'dangDungYen';
function XacDinh2SlideVaChuyenDong(nutnao){
	// Xử lý lỗi click liên tục
	if (trangThai == 'dangChuyenDong') { return false; }
	// Đánh dấu là đang chuyển động
	trangThai = 'dangChuyenDong';
	// Để có thể bỏ cái đang chuyển động thì đặt biến và để về trạng thái dangDungYen
	var trangthaiCua2CD = 0;
	// Xác định phần từ hiện tại
	var phantuHientai = slides[chisoHientai];
	if (nutnao == 'nutTrai') {
		// Xác đinh phần từ tiếp theo
		if (chisoHientai > 0) { chisoHientai = chisoHientai - 1; }
		else {chisoHientai = soluongSlide - 1; }
	}
	else if (nutnao == 'nutPhai'){
		// Xác đinh phần từ tiếp theo
		if (chisoHientai < (soluongSlide -1 )) { chisoHientai = chisoHientai + 1; }
		else { chisoHientai = 0; }
	} // Xong if ngoài
	var phantuTieptheo = slides[chisoHientai];
	// Ckeck trạng thái chuyển động
	xulyHienTaiKetThucCD = function(){
		this.classList.remove('dangxem');
		if (nutnao == 'nutTrai') {
			phantuHientai.classList.remove('bienmatAnPre');
		}
		else if (nutnao == 'nutPhai'){
			phantuHientai.classList.remove('bienmatnext');
		}
		trangthaiCua2CD++;if (trangthaiCua2CD == 2) { trangThai = 'dangDungYen';}
	}
	xulyTiepTheoKetThucCD = function(){
		this.classList.add('dangxem');
		if (nutnao == 'nutTrai') {
			phantuTieptheo.classList.remove('divaoAnPre');
		}
		else if (nutnao == 'nutPhai'){
			phantuTieptheo.classList.remove('divaonext');
		}
		trangthaiCua2CD++;if (trangthaiCua2CD == 2) { trangThai = 'dangDungYen';}
	}
	phantuHientai.addEventListener('webkitAnimationEnd',xulyHienTaiKetThucCD);
	phantuTieptheo.addEventListener('webkitAnimationEnd',xulyTiepTheoKetThucCD);
	// Xác định được Hiện tại và tiếp theo thêm chuyển động
	if (nutnao == 'nutTrai') {
		phantuHientai.classList.add('bienmatAnPre');
		phantuTieptheo.classList.add('divaoAnPre');
	}
	else if (nutnao == 'nutPhai'){
		phantuHientai.classList.add('bienmatnext');
		phantuTieptheo.classList.add('divaonext');
	} // Xong if ngoài
}
// Bước 1: bắt sự kiện click cho Nút
chuyenSlidenutphai = function(){
	XacDinh2SlideVaChuyenDong('nutPhai');
	// // Xử lý k được click nút nhiều lần liên tiếp
	// if (trangThai == 'dangChuyenDong') {return false;} // Dừng chương trình luôn

	// trangThai = 'dangChuyenDong';

	// // Để click tiếp thì dựa vào 2 slide bằng chỉ só vs nhau
	// var trangthaiCua2CD = 0;

	// // Bước 2: Xác định phần tử hiện tại dựa theo mảng
	// var phantuHientai = slides[chisoHientai];

	// // Bước 3: Xác định phần tử tiếp theo dựa vào chỉ số của phần từ tiếp theo
	// if (chisoHientai < (soluongSlide -1 )) {
	// 	chisoHientai = chisoHientai + 1;
	// }
	// else {
	// 	chisoHientai = 0;
	// }
	// var phantuTieptheo = slides[chisoHientai];
	// // Tạo chuyển động sau khi xác định được
	// phantuHientai.classList.add('bienmatnext');
	// phantuTieptheo.classList.add('divaonext');

	// // Xóa hết các class đã thêm vào để có thể sử dụng lại chuyển động khác từ hàm check trạng thái
	// xulyHienTaiKetThucCD = function(){
	// 	this.classList.remove('dangxem');
	// 	this.classList.remove('bienmatnext');
	// 	trangthaiCua2CD++;if (trangthaiCua2CD == 2) { trangThai = 'dangDungYen';}
	// }
	// xulyTiepTheoKetThucCD = function(){
	// 	this.classList.add('dangxem');
	// 	this.classList.remove('divaonext');
	// 	trangthaiCua2CD++;if (trangthaiCua2CD == 2) { trangThai = 'dangDungYen';}
	// }
	// phantuHientai.addEventListener('webkitAnimationEnd',xulyHienTaiKetThucCD);
	// phantuTieptheo.addEventListener('webkitAnimationEnd',xulyTiepTheoKetThucCD);

}
nutPhai.addEventListener('click',chuyenSlidenutphai);

// Xong nút phải

chuyenSlidenuttrai = function(){
	XacDinh2SlideVaChuyenDong('nutTrai');

	// // Xử lý k được click nút nhiều lần liên tiếp Kiểm tra trạng thái
	// if (trangThai == 'dangChuyenDong') {return false;} // Dừng chương trình luôn

	// // Đánh dấu trạng thái
	// trangThai = 'dangChuyenDong';

	// // Để click tiếp thì dựa vào 2 slide bằng chỉ só vs nhau
	// var trangthaiCua2CD = 0;

	// // Xác định phần tử hiện tại dựa theo mảng
	// var phantuHientai = slides[chisoHientai];
	// // Xác định phần tử tiếp theo dựa theo mảng chisoHientai
	// if (chisoHientai > 0 ) {
	// 	chisoHientai = chisoHientai - 1;
	// }
	// else {
	// 	chisoHientai = soluongSlide - 1;
	// }
	// var phantuTieptheo = slides[chisoHientai];
	
	// // Thêm chuyển động vào
	// phantuHientai.classList.add('bienmatAnPre');
	// phantuTieptheo.classList.add('divaoAnPre');

	// // Xóa hết các class đã thêm vào để có thể sử dungj lại phần khác từ hàm check trạng thái
	// xulyHienTaiKetThucCD = function(){
	// 	this.classList.remove('dangxem');
	// 	this.classList.remove('bienmatAnPre');
	// 	trangthaiCua2CD++;if (trangthaiCua2CD == 2) { trangThai = 'dangDungYen';}
	// }
	// xulyTiepTheoKetThucCD = function(){
	// 	this.classList.add('dangxem');
	// 	this.classList.remove('divaoAnPre');
	// 	trangthaiCua2CD++;if (trangthaiCua2CD == 2) { trangThai = 'dangDungYen';}
	// }
	// phantuHientai.addEventListener('webkitAnimationEnd',xulyHienTaiKetThucCD);
	// phantuTieptheo.addEventListener('webkitAnimationEnd',xulyTiepTheoKetThucCD);

}
nutTrai.addEventListener('click',chuyenSlidenuttrai);