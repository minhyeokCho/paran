/* 《 스크립트 》 */
$(document).ready(function(){
	$('.sec_main').length && intro(); //인트로
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.design_slide').length && designSlide(); //design 슬라이드
	$('.go_top').length && goTop(); //페이지상단이동
	initLenis();
	initCustomCursor();
	gsap.registerPlugin(ScrollTrigger);
	gsap.set(".sec_enhance", {"--brandBgMask":"50% 38% 0% 38%"});
	webMotion();

	const $mMenu = $('.m_menu');
	const $header = $('header');
	const $body = $('body');

	// 메뉴는 처음에 숨겨둔다.
	$mMenu.hide();

	// .mo_menu 버튼을 클릭했을 때 실행될 함수
	$('.mo_menu').on('click', function() {
		// 만약 m_menu가 보이고 있다면 (열려있다면)
		if ($mMenu.is(':visible')) {
			// 부드럽게 사라지게 하고, 애니메이션이 끝나면 클래스들을 제거한다.
			$mMenu.fadeOut(0, function() { // 0.3초 동안 사라지게
				$header.removeClass('active');
				$body.removeClass('overflow-hidden');
			});
		} else { // m_menu가 숨겨져 있다면 (닫혀있다면)
			// 먼저 클래스들을 추가하고, 부드럽게 나타나게 한다.
			$header.addClass('active');
			$body.addClass('overflow-hidden');
			$mMenu.fadeIn(300); // 0.3초 동안 나타나게
		}
	});
});

function initCustomCursor() {
  const cursors = document.querySelectorAll('.cursor');
  if (!cursors.length) return;

  let x = 0, y = 0;

  const onMove = (e) => {
    x = e.clientX;
    y = e.clientY;
    // 다음 프레임에서 한 번에 적용
    requestAnimationFrame(() => {
      cursors.forEach(el => {
        el.style.left = x + 'px';
        el.style.top  = y + 'px';
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

function initLenis() {
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
function intro() {
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

function mainSlide () {
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
        // 초기 실행 시 첫 슬라이드의 비디오만 재생
        playActiveVideo();
      },
      slideChangeTransitionStart() {
        // 넘어갈 때 모든 비디오 정지
        pauseAllVideos();
      },
      slideChangeTransitionEnd() {

        // 새 슬라이드 비디오 재생
        playActiveVideo();
      }
    }
	})

	
  // 모든 비디오에 ended 이벤트 연결
  document.querySelectorAll('.main_slide video').forEach(video => {
    video.addEventListener('ended', function () {
      mainSlide.slideNext(); // 영상 끝나면 다음 슬라이드
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
    v.muted = true; // 자동재생 보장
    const p = v.play();
    if (p && typeof p.then === 'function') p.catch(()=>{});
  }
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
function webMotion(){
  const $sec = $(".sec_enhance");

  // Lottie가 없다면 훅 무시 (에러 방지)
  const safeLottie = window.lottieA && typeof lottieA.play === "function" ? lottieA : null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $sec,
      id: "brandTrigger",
      scrub: true,
      // markers: true,
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
    // 존재하는 요소로 변경: .txt → .txt_wrap
    // .to($sec.find(".intro_wrap .txt_wrap"), {
    //   y: "-80%",
    //   duration: 0.6,
    //   delay: 0.4,
    //   ease: "none"
    // }, "scene1")
    .to($sec.find(".bg_wrap"), {
      y: 0,
      duration: 1,
      ease: "none"
    }, "scene1")
    // CSS 변수(clip-path inset) 트윈: 중앙 작은 마스크 → 좀 더 넓게
    .to($sec, {
      "--brandBgMask": "25% 38% 15% 38%",
      duration: 0.5,
      ease: "none",
      onComplete(){ $sec.find(".bg_wrap").addClass("active"); },
      onUpdate(){ $sec.find(".bg_wrap").removeClass("active"); }
    }, "scene2")
    // 전체 화면 풀오픈
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