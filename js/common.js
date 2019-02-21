$(document).ready(function () {
	var $allBtn = $(".btn-allmenu"),
		$closeBtn = $(".btn-close"),
		$header = $('.header'),
		$footer = $('.footer'),
		$nav = $('.nav-btn'),
		$navWrap = $(".nav-wrap"),
		$topWrap = $(".top-wrap"),
		$mainWrap = $(".main-wrap"),
		$opensectionWrap = $(".opensection-wrap"),
		$container = $("#container"),
		$gnb2depth = $(".gnb-2depth a"),
		$gnb3Wrap = $(".gnb3-wrap"),
		$gnb = $(".gnb"),
		$tablist1 = $(".tablist-type1"),
		$tablist2 = $(".tablist-type2"),
		$qna = $(".qna"),
		$location = $(".location-nav-wrap"),
		$lang = $(".lang");


	//메인 확인
	var mainCheck = function () {
		if ($('#main').length == 1) {
			return true;
		} else {
			return false;
		}
	}
	//메인 탑 버튼 숨기기
	if (mainCheck()) {
		$('.footer .top-btn').hide();

	}

	//메인 슬라이드 적용
	$('#slider').bxSlider({
		auto: true,
		autoControls: true
	});
	//메인 슬라이드 적용
	if ($('#deceased table').length > 1) {
		$('#deceased').bxSlider({
			auto: true,
			autoControls: true
		});

	}


	//메뉴 열기
	var openMenu = function () {
		$opensectionWrap.slideDown("fast")
			.addClass('active');
		$allBtn.hide();
		$closeBtn.show();
	}
	//메뉴 닫기
	var closeMenu = function () {
		$opensectionWrap.stop().slideUp("fast")
			.removeClass('active');
		$allBtn.show();
		$closeBtn.hide();
	}

	//메뉴 롤오버 이벤트 
	$gnb.on('mouseenter', function () {
		openMenu();
	});
	$navWrap.on('mouseleave', function () {
		closeMenu();
	});
	$gnb.find('a').on('focus', function () {
		openMenu();
	});
	$gnb2depth.last().blur(function () {
		closeMenu();
	});

	//메뉴 - 2depth
	$gnb2depth.on('mouseenter', function () {
		$(this).addClass('active')
			.siblings('.gnb3Wrap').show();
		var no = $(this).parents("div.gnb2-wrap").index();
		$gnb.find("li a").removeClass("active");
		$gnb.find("li").eq(no).find("a").addClass("active");

	});
	$gnb2depth.on('mouseleave', function () {
		$(this).removeClass('active');
		$gnb.find("li a").removeClass("active");
	});


	//로케이션 이벤트
	$location.find('a').on('focus mouseenter', function (event) {
		$(this).addClass('active');
	});
	$location.on('blur mouseleave', function (event) {
		$(this).find('a').removeClass('active');
	});

	//외국어 이벤트
	$lang.find('a').on('focus mouseenter', function (event) {
		$(this).addClass('active');
	});
	$lang.on('blur mouseleave', function (event) {
		$(this).find('a').removeClass('active');
	});


	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $tablist1.find('a').length;
	if (tapN < 6) {
		//var tapW = 1180/tapN;
		//$tablist1.find('a').css( 'width', tapW+'px' );
	} else if (tapN > 6) {
		for (i = 0; i < tapN / 4; i++) {
			var j = i * 4;
			$tablist1.find('a').slice(j, j + 4).wrapAll("<div class='br'></div>");
		}
	}


	//탭 클릭 이벤트 
	$tablist1.find('a').on('click', function (e) {
		e.preventDefault();
		$tablist1.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel").removeClass('active');
		var panel = $(this).attr('href');
		//alert(panel);
		$(panel).addClass('active');
	});


	//서브 탭 클릭 이벤트 
	$tablist2.find('a').on('click', function (e) {
		e.preventDefault();
		$tablist2.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel-sub").removeClass('active');
		var panel = $(this).attr('href');
		$(panel).addClass('active');
	});


	//탭 가로 스크롤 버튼
	$('.scroll-left').on('click keydown', function (event) {
		scrollMove(-196);
	});
	//탭 가로 스크롤 버튼
	$('.scroll-right').on('click keydown', function (event) {
		scrollMove(196);
	});
	var scrollMove = function (n) {
		$('.tablist-type1').animate({ scrollLeft: $('.tablist-type1').scrollLeft() + n }, 500);
	}


	//자주하는 질문
	$qna.find('button').on('click focus keydown', function () {
		$qna.find('dt').removeClass('active');
		$qna.find('dd').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().next().addClass('active');
	});



	//진료과 목록  아이콘 노출 
	$('.text-ko > a').on('focus', function () {
		$('.over-icon').css('display', 'none');
		$(this).siblings('.over-icon').css('display', 'block');
	});


	//select disable적용
	if ($("select").length) {
		$('select').each(function (i, e) {
			var sele = $(this).prop('disabled');
			if (sele == true) {
				$(this).parent('.select').addClass('disabled');
			}
		});
	}
	//select 적용 
	var selectTarget = $('.select select');
	selectTarget.change(function () {
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});





});







