/* 《 스크립트 》 */
$(document).ready(function(){
	$('.sec_main').length && intro(); //인트로
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.design_slide').length && designSlide(); //design 슬라이드
	gsap.registerPlugin(ScrollTrigger);
	gsap.set(".sec_enhance", {"--brandBgMask":"50% 38% 0% 38%"});
	webMotion();

	const customCursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', (e) => {
		// 마우스의 X, Y 좌표를 가져와서 커스텀 커서의 위치를 업데이트
		customCursor.style.left = e.clientX + 'px';
		customCursor.style.top = e.clientY + 'px';
	});

	// 마우스가 웹페이지 밖으로 나가면 커서를 숨기고 싶을 때 (선택 사항)
	document.addEventListener('mouseleave', () => {
		customCursor.style.opacity = '0';
	});

	// 마우스가 웹페이지 안으로 들어오면 커서를 보이게 (선택 사항)
	document.addEventListener('mouseenter', () => {
		customCursor.style.opacity = '1';
	});

	const lenis = new Lenis({
		smoothWheel: true,
		smoothTouch: false,
		duration: 1.1,
		easing: (t)=>1-Math.pow(1-t,3)
	});

	function raf(t){
		lenis.raf(t);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	lenis.on('scroll', ScrollTrigger.update)
});

function intro() {
	$("#contanier").hide();

    $(".sec_main").on("click", function() {
        $(this).fadeOut(400, function() {
            $("#contanier").fadeIn(200);

			AOS.refresh();
			ScrollTrigger.refresh();
			$('.main_slide').length && mainSlide();
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
		// centeredSlides: true,
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