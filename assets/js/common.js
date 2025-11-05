/* 《 스크립트 》 */
$(document).ready(function(){
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.design_slide').length && designSlide(); //design 슬라이드
});

function mainSlide () {
	var mainSlide = new Swiper('.main_slide', {
		slidesPerView : '1',
		spaceBetween : 0,
		loop:true,
		loopAdditionalSlides : 1,
		speed:800,
		autoHeight : true, // 높이 자동 조정
		watchOverflow:true, //페이지가 1개 일 경우 페이징 버튼 숨김
		observer: true, // display:none 오류
		observeParents: true,
		// centeredSlides: true,
		// autoplay:{
		// 	delay:500,
		// 	disableOnInteraction:false
		// },
		navigation : {
			prevEl : '.main_arr.arr_prev',
			nextEl : '.main_arr.arr_next',
		},
		pagination: {
			el: ".swiper_bullet",
			clickable: true,
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let bullets = "";
				for (let i = 1; i<= total; i++) {
					bullets += `<span class="custom-bullet ${i === current ? "active" : ""}"></span>`
				}
				return`
					<div class="bullet-wrap">${bullets}</div>
					<div class="fraction">${current} / ${total}</div>
				`
			}
		},
	})
}

function designSlide () {
	var designSlide = new Swiper('.design_slide', {
		slidesPerView : 'auto',
		spaceBetween : 60,
		loop:true,
		loopAdditionalSlides : 1,
		speed:800,
		watchOverflow:true, //페이지가 1개 일 경우 페이징 버튼 숨김
		observer: true, // display:none 오류
		observeParents: true,
		centeredSlides: true,
		// autoplay:{
		// 	delay:500,
		// 	disableOnInteraction:false
		// },
		navigation : {
			prevEl : '.design_arr.arr_prev',
			nextEl : '.design_arr.arr_next',
		},
		pagination: {
			el: '.design_bullet',
			type: 'progressbar',
		},
	})
}
