/* 《 스크립트 》 */
$(document).ready(function(){
	$('.sec_main').length && intro(); //인트로
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.design_slide').length && designSlide(); //design 슬라이드
	$('.go_top').length && goTop(); //페이지상단이동
	$('.m_menu').length && mMenu(); //모바일 메뉴
	$('.cursor').length && initCustomCursor(); //커서 커스텀
	initLenis(); // 전체 스크롤 커스텀
	gsap.registerPlugin(ScrollTrigger);
	gsap.set(".sec_enhance", {"--brandBgMask":"50% 38% 0% 38%"});
	webMotion();
});

function mMenu() {
	const $mMenu = $('.m_menu');
	const $header = $('header');
	const $body = $('body');

	$mMenu.hide();

	$('.mo_menu').on('click', function() {
		if ($mMenu.is(':visible')) {
			$mMenu.fadeOut(0, function() { 
				$header.removeClass('active');
				$body.removeClass('overflow-hidden');
			});
		} else { 
			$header.addClass('active');
			$body.addClass('overflow-hidden');
			$mMenu.fadeIn(300); 
		}
	});
}

function initCustomCursor() { //마우스 커서 커스텀
	const cursors = document.querySelectorAll('.cursor');
	if (!cursors.length) return;

	let x = 0, y = 0;

	const onMove = (e) => {
		x = e.clientX;
		y = e.clientY;
		requestAnimationFrame(() => {
			cursors.forEach(el => {
			el.style.left = x + 'px';
			el.style.top	= y + 'px';
			el.style.opacity = '1';
			});
		});
	};

	const onLeave = () => {
		cursors.forEach(el => el.style.opacity = '0');
	};

	const onEnter = () => {
		cursors.forEach(el => el.style.opacity = '1');
	};

	document.addEventListener('mousemove', onMove);
	document.addEventListener('mouseleave', onLeave);
	document.addEventListener('mouseenter', onEnter);
}

function initLenis() { //전체 스크롤 커스텀
	const lenis = new Lenis({
		smoothWheel: true,
		smoothTouch: false,
		duration: 1.1,
		easing: (t) => 1 - Math.pow(1 - t, 3),
	});

	function raf(t) {
		lenis.raf(t);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
	lenis.on('scroll', ScrollTrigger.update);
}
function intro() { //메인 인트로
	$("#contanier").hide();

	$(".sec_main").on("click", function() {
		$(this).fadeOut(400, function() {
			$("#contanier").fadeIn(200);

			AOS.refresh();
			ScrollTrigger.refresh();
			$('.main_slide').length && mainSlide();
			initCustomCursor();
		});
	});
}

function mainSlide () { //메인 슬라이드
	var mainSlide = new Swiper('.main_slide', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		loopAdditionalSlides: 1,
		speed: 800,
		autoHeight: true,
		watchOverflow: true,
		observer: true,
		observeParents: true,
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
		on: {
			init() {
				playActiveVideo();
			},
			slideChangeTransitionStart() {
				pauseAllVideos();
			},
			slideChangeTransitionEnd() {
				playActiveVideo();
			}
		}
	})

	
	document.querySelectorAll('.main_slide video').forEach(video => {
		video.addEventListener('ended', function () {
			mainSlide.slideNext();
		});
	});

	function pauseAllVideos() {
		document.querySelectorAll('.main_slide video').forEach(v => {
			v.pause();
			v.currentTime = 0;
		});
	}

	function playActiveVideo() {
		const v = document.querySelector('.main_slide .swiper-slide-active video');
		if (!v) return;
		v.muted = true; 
		const p = v.play();
		if (p && typeof p.then === 'function') p.catch(()=>{});
	}
}

function designSlide () { //디자인 슬라이드
	var designSlide = new Swiper('.design_slide', {
		slidesPerView : 'auto',
		spaceBetween : 60,
		loop:true,
		loopAdditionalSlides : 1,
		speed:800,
		watchOverflow:true,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		navigation : {
			prevEl : '.design_arr.arr_prev',
			nextEl : '.design_arr.arr_next',
		},
		pagination: {
			el: '.design_bullet',
			type: 'progressbar',
		},
		breakpoints: {
			768: {
				spaceBetween: 60, // 768px 이상
			},
			0: {
				spaceBetween: 30, // 768px 이하
			},
		},
	})
}
function webMotion(){ //GSAP 모션
	const $sec = $(".sec_enhance");
	const safeLottie = window.lottieA && typeof lottieA.play === "function" ? lottieA : null;
	const tl = gsap.timeline({
	scrollTrigger: {
		trigger: $sec,
		id: "brandTrigger",
		scrub: true,
		start: "top top",
		end: "bottom bottom"
	}
	});

	tl.to($sec, {
		duration: 0.1,
		ease: "none",
		onStart(){
		if(safeLottie){ safeLottie.setDirection(1); safeLottie.play(); }
		},
		onReverseComplete(){
		if(safeLottie){ safeLottie.setDirection(-1); safeLottie.play(); }
		}
	})
	.to($sec.find(".bg_wrap"), {
		y: 0,
		duration: 1,
		ease: "none"
	}, "scene1")
	.to($sec, {
		"--brandBgMask": "25% 38% 15% 38%",
		duration: 0.5,
		ease: "none",
		onComplete(){ $sec.find(".bg_wrap").addClass("active"); },
		onUpdate(){ $sec.find(".bg_wrap").removeClass("active"); }
	}, "scene2")
	.to($sec, {
		"--brandBgMask": "0% 0% 0% 0%",
		duration: 1,
		ease: "none",
		onComplete(){ $sec.find(".cont_wrap").addClass("active"); },
		onUpdate(){ $sec.find(".cont_wrap").removeClass("active"); }
	}, "scene3")
	.to({}, {duration: 1, ease:"none"}, "scene3-blank");
}

function goTop(){ //페이지상단이동
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.go_top').addClass('active')
		}else{
			$('.go_top').removeClass('active')
		}
	});

	$('.go_top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}