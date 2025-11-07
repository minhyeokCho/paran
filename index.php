<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>엘리프세종스마트시티</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap">
	<link rel="stylesheet" href="./assets/css/lib/swiper-bundle.min.css" />
	<link rel="stylesheet" href="./assets/css/lib/aos.css" />
	<link rel="stylesheet" href="./assets/css/common.css" />
	<link rel="stylesheet" href="./assets/css/main.css" />
	<script src="./assets/js/lib/scrollTrigger.js"></script>
	<script src="./assets/js/lib/gsap.js"></script>
	<script src="./assets/js/lib/lenis.js"></script>
	<script src="./assets/js/lib/jquery-3.6.0.min.js"></script>
	<script src="./assets/js/lib/swiper-bundle.min.js"></script>
	<script src="./assets/js/lib/aos.js"></script>
	<script src="./assets/js/common.js"></script>
</head>
<body>
	<section class="sec_main">
		<figure class="video_wrap">
			<video autoplay loop muted playsinline preload="metadata">
				<source src="./assets/images/video/intro_01.mp4" type="video/mp4" media="(min-width: 768px)">
				<source src="./assets/images/video/intro_mo.mp4" type="video/mp4" media="(max-width: 767px)">
			</video>
		</figure>
		<div class="cont">
			<div class="top_logo img"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
				<img src="./assets/images/main/logo_top.png" alt="ENHANCE YOUR LIFE">
			</div>
			<div class="txt_img img"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250">
				<img src="./assets/images/main/txt_visual.png" alt="세종의 새로운 중심에서 빛나는 미래가치가 시작되다">
			</div>
			<i data-aos="fade-up" data-aos-duration="1200" data-aos-delay="350"></i>
			<div class="main_logo img"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
				<img src="./assets/images/main/logo_top_02.png" alt="ENHANCE YOUR LIFE">
			</div>
			<div class="btm_logo img">
				<img src="./assets/images/main/logo_visual.png" alt="계룡건설">
			</div>
		</div>
		<div class="cursor"></div>
	</section>
	<div id="contanier">
		<?php include __DIR__ . '/include/header.php'; ?>
		<section class="sec_main_slide">
			<div class="main_slide swiper">
				<div class="swiper-wrapper">
					<div class="item swiper-slide">
						<video autoplay  muted playsinline preload="metadata">
							<source src="./assets/images/video/main_01.mp4" type="video/mp4" media="(min-width: 768px)">
							<source src="./assets/images/video/main_m_01.mp4" type="video/mp4" media="(max-width: 767px)">
						</video>
						<div class="txt_wrap">
							<figure class="img t1"><img src="./assets/images/main/slide_txt_01.png" alt="nature" class="nature"></figure>
							<h2>교육</h2>
							<p>단지와 인접하여 도보통학 가능한<br/>합강초(예정), 합강중(예정), 합강고(예정) 등의 학세권 입지</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<video autoplay  muted playsinline preload="metadata">
							<source src="./assets/images/video/main_02.mp4" type="video/mp4" media="(min-width: 768px)">
							<source src="./assets/images/video/main_m_02.mp4" type="video/mp4" media="(max-width: 767px)">
						</video>
						<div class="txt_wrap">
							<figure class="img t2"><img src="./assets/images/main/slide_txt_02.png" alt="nature" class="nature"></figure>
							<h2>자연</h2>
							<p>미호천, 금강, 세종지구공원 등<br/>풍부한 자연환경이 인접한 생활환경</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<video autoplay  muted playsinline preload="metadata">
							<source src="./assets/images/video/main_03.mp4" type="video/mp4" media="(min-width: 768px)">
							<source src="./assets/images/video/main_m_03.mp4" type="video/mp4" media="(max-width: 767px)">
						</video>
						<div class="txt_wrap">
							<figure class="img t3"><img src="./assets/images/main/slide_txt_03.png" alt="nature" class="nature"></figure>
							<h2>교통</h2>
							<p>KTX오송역, 남청주IC, BRT, 외곽순환도로 등<br/>시, 내외 이동이 용이한 자리</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<video autoplay  muted playsinline preload="metadata">
							<source src="./assets/images/video/main_04.mp4" type="video/mp4" media="(min-width: 768px)">
							<source src="./assets/images/video/main_m_04.mp4" type="video/mp4" media="(max-width: 767px)">
						</video>
						<div class="txt_wrap">
							<figure class="img t4"><img src="./assets/images/main/slide_txt_04.png" alt="nature" class="nature"></figure>
							<h2>미래가치</h2>
							<p>자연친화적 기술, ICT기술의 융,복합이<br/>이루어 질 스마트시티 국가시범도시의 가치</p>
						</div>
					</div>
				</div>
				<div class="arr_swiper">
					<button type="button" class="main_arr arr_prev"><span class="blind">이전</span></button>
					<div class="swiper_bullet"></div>
					<button type="button" class="main_arr arr_next"><span class="blind">다음</span></button>
				</div>
			</div>
			<div class="scroll">
				<span>SCROLL</span>
				<span class="bar">
					<i></i>
				</span>
			</div>
			<div class="open">
				<span></span>
			</div>
		</section>
		<section class="sec_brand">
			<div class="brand_tit" data-aos="fade-up" data-aos-duration="1000">
				<figure class="img">
					<img src="./assets/images/main/txt_brand.png" alt="ELIF세종">
				</figure>
				<h2>새로운 중심 <span>새로운 이름</span></h2>
				<p>세종의 새로운 중심에서<br/>빛나는 미래가치가 시작된다</p>
			</div>
			<div class="brand">
				<div class="txt_wrap">
					<h2 class="logo" data-aos="fade-up" data-aos-duration="1000">
						<figure class="img"><img src="./assets/images/main/logo_wh.png" alt="엘리프세종스마트시티"></figure>
					</h2>
					<strong data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">총 424세대</strong>
					<p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">59㎡ / 74㎡ / 80㎡ / 84㎡</p>
				</div>
			</div>
		</section>
		<section class="sec_value">
			<div class="sec_tit">
				<figure class="img">
					<img src="./assets/images/main/txt_brand.png" alt="ELIF세종">
				</figure>
				<h2>SPECIAL VALUE</h2>
			</div>
			<div class="value_card">
				<div class="card card1">
					<div class="txt_wrap">
						<h3>교육<span>과</span> 미래가치 중심<span>에서</span><br/>가치있는 일상<span>을 완성하다</span></h3>
						<p>미래가치와 교육, 모두 가까운 중심에서 더 큰 미래를 키워보세요</p>
					</div>
				</div>
				<div class="card card2">
					<div class="txt_wrap">
						<h3>스마트 러닝 환경 구축</h3>
						<p>AI·데이터 기반 맞춤형 학습시스템 도입이 계획 된<br/>스마트 스쿨 모델 추진 예정</p>
					</div>
				</div>
				<div class="card card3">
					<div class="txt_wrap">
						<h3>스마트 기술의 도시</h3>
						<p>도시 전체가 하나의 실증 플랫폼(테스트베드)으로 <br/>설계되는 ‘Living Lab 도시’</p>
					</div>
				</div>
				<div class="card card4"></div>
			</div>
		</section>
		<section class="sec_design">
			<div class="sec_tit">
				<figure class="img">
					<img src="./assets/images/main/txt_design.png" alt="ELIF세종">
				</figure>
				<h2>SPECIAL DESIGN</h2>
				<p>일상을 배려한 설계로 변치 않을 주거 가치를 만나보세요</p>
			</div>
			<div class="design_slide swiper">
				<div class="swiper-wrapper">
					<div class="item swiper-slide">
						<figure class="img">
							<img src="./assets/images/main/design_01.jpg">
						</figure>
						<div class="txt_wrap">
							<h3>생애주기 맞춤형 타입구성</h3>
							<p>세대 구성원 및 생애주기를 고려한<br/>59,74,80,84타입의 다양한 타입구성</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<figure class="img">
							<img src="./assets/images/main/design_02.jpg">
						</figure>
						<div class="txt_wrap">
							<h3>채광을 고려한 단지설계</h3>
							<p>일조와 자연 채광을 고려한<br/>전 세대 남향 위주 단지배치(일부세대 제외)</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<figure class="img">
							<img src="./assets/images/main/design_03.jpg">
						</figure>
						<div class="txt_wrap">
							<h3>실용적인 평면계획</h3>
							<p>4Bay 판상형 구조(일부세대 제외)와<br/>넓은 개방감을 주는 평면설계</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<figure class="img">
							<img src="./assets/images/main/design_04.jpg">
						</figure>
						<div class="txt_wrap">
							<h3>입주민을 배려한 단지배치</h3>
							<p>넓은 동간거리 및 다양하고 유용한<br/>커뮤니티 시설 배치 계획</p>
						</div>
					</div>
					<div class="item swiper-slide">
						<figure class="img">
							<img src="./assets/images/main/design_05.jpg">
						</figure>
						<div class="txt_wrap">
							<h3>제로에너지 인증 친환경 아파트</h3>
							<p>제로에너지건축물(ZEB) 5등급이 적용된<br/>5-1생활권 프리미엄 단지</p>
						</div>
					</div>
				</div>
				<div class="arr_swiper">
					<button type="button" class="design_arr arr_prev"><span class="blind">이전</span></button>
					<button type="button" class="design_arr arr_next"><span class="blind">다음</span></button>
				</div>
				<div class="design_bullet"></div>
			</div>
		</section>
		<section class="sec_enhance">
			<div class="sticky">
				<div class="bg_wrap">
					<div class="mask">
						<div class="bg"></div>
					</div>
				</div>
				<div class="intro_wrap">
					<div class="txt_wrap">
						<figure class="img">
							<img src="./assets/images/main/txt_enhance.png" alt="ELIF세종">
						</figure>
						<h2>ENHANCE</h2>
						<h2>YOUR <i></i> LIFE</h2>
					</div>
				</div>
				<div class="cont_wrap">
					<div class="txt_content">
						<div class="txt_l">
							<h3>BRAND</h3>
							<p>ENHANCE YOUR LIFE</p>
						</div>
						<i></i>
						<div class="txt_r">
							<strong>일상을 새롭게 하다</strong>
							<p class="txt_01">
								ELIF는 LIFE의 스펠링을 변형하여 삶을 다르게 보고<br/>일상을 새롭게 만들어가는 주거 공간을 의미합니다
							</p>
							<p class="txt_02">
								계룡그룹의 주거 브랜드 ELIF가<br/>여러분의 일상에 새로움을 선사합니다
							</p>
							<figure class="img">
								<img src="./assets/images/main/logo_wh2.png" alt="ELIF">
							</figure>
						</div>
					</div>
					<div class="cursor"></div>
				</div>
			</div>
		</section>
		<section class="sec_contact">
			<div class="contact_wrap">
				<div class="txt_wrap">
					<h2 data-aos="fade-right">CONTACT US</h2>
					<p class="desc" data-aos="fade-right" data-aos-delay="100">세종의 새로운 중심에서 빛나는 미래가치가 시작되다</p>
					<dl data-aos="fade-right" data-aos-delay="100">
						<dt>문의</dt>
						<dd>
							<span>044) 864.5543</span>
						</dd>
					</dl>
					<dl data-aos="fade-right" data-aos-delay="200">
						<dt>세대</dt>
						<dd>
							<span>총 424세대</span>
							<strong>59㎡ / 74㎡ / 80㎡ / 84㎡ </strong>
						</dd>
					</dl>
					<dl data-aos="fade-right" data-aos-delay="300">
						<dt>현장</dt>
						<dd>행정중심복합도시 5-1생활권 L9BL</dd>
					</dl>
					<dl data-aos="fade-right" data-aos-delay="400">
						<dt>견본주택</dt>
						<dd>세종특별자치시 대평동 123-30번지</dd>
					</dl>
				</div>
				<div class="img_wrap" data-aos="fade-left" data-aos-delay="100">
					<figure class="img">
						<img src="./assets/images/main/map.jpg" alt="지도">
					</figure>
				</div>
			</div>
		</section>
		<?php include __DIR__ . '/include/footer.php'; ?>
		<div class="go_top">
			<a href="#none"><span class="blind">상단으로 이동</span></a>
		</div>
	</div>
	<script> 
		AOS.init();
	</script>
</body>
</html>