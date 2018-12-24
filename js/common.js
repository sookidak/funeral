function GNB_on(){
	$(".nav-bg").stop().slideDown("fast",function(){
	$('.gnb').addClass('active');
	});
}
function GNB_off(){
	$('.gnb').removeClass('active');
	$(".nav-bg").stop().slideUp("fast");
	$('.gnb li').removeClass('active');
}

$(document).ready(function() {
	var $allBtn=$(".btn-allmenu"),
	$closeBtn=$(".btn-close"),
	$header = $('.header'),  
	$footer = $('.footer'), 
	$nav = $('.nav-btn'), 
	$topWrap=$(".top-wrap"),
	$mainWrap=$(".main-wrap"),
	$opensectionWrap=$(".opensection-wrap"),
	$container=$("#container"),
	$gnb2depth=$(".gnb-2depth a"),
	$gnb3Wrap=$(".gnb3-wrap"),
	$gnb=$(".gnb"),
	$tablist1=$(".tablist-type1"),
	$tablist2=$(".tablist-type2"),
	$qna=$(".qna"),
	$location=$(".location-nav-wrap");
    $lang=$(".lang");

	var allBtnNum = 0;	//전체메뉴 기본 설정값



	//메인 확인
	var mainCheck = function(){
		if ($('#main').length==1) {
			return true;
		}else{
			return false;
		}
	}
    
    //메인 슬라이드 적용
	$('#slider').bxSlider({
		auto: true,
		autoControls: true
	});
       //메인 슬라이드 적용
	if ($('#deceased table').length > 1){
        $('#deceased').bxSlider({
		auto: true,
		autoControls: true
	});
        
    }
    
    
    //gnb
	$gnb.find('li > a').mouseover(function(){		
		$('.gnb li').removeClass('active');		
		$(this).parent().parent().parent('li').addClass('active');
        GNB_on();
	}).focus(function(){
		GNB_on();
	});
	$topWrap.mouseenter(function(){
		GNB_off();
	});
	$container.mouseenter(function(){
		GNB_off();
	});
	$('.gnb li a:last').focusout(function(){
		GNB_off();
	});


	//로케이션 이벤트
	$location.find('a').on('focus mouseenter', function(event) {
		$(this).addClass('active');
	});
	$location.on('blur mouseleave', function(event) {
		$(this).find('a').removeClass('active');
	});
    
    //외국어 이벤트
	$lang.find('a').on('focus mouseenter', function(event) {
		$(this).addClass('active');
	});
	$lang.on('blur mouseleave', function(event) {
		$(this).find('a').removeClass('active');
	});


	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $tablist1.find('a').length;
	if (tapN < 6) {
		var tapW = 1180/tapN;
		$tablist1.find('a').css( 'width', tapW+'px' );
	}else if(tapN > 6){
		$(".scroll-btn").addClass('active')
	}


	//탭 클릭 이벤트 
	$tablist1.find('a').on('click',function(e) {
		e.preventDefault();		
		$tablist1.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel").removeClass('active');
		var panel = $(this).attr('href');
		//alert(panel);
		$(panel).addClass('active');
	});


	//서브 탭 클릭 이벤트 
	$tablist2.find('a').on('click',function(e) {
		e.preventDefault();		
		$tablist2.find('a').removeClass('active');
		$(this).addClass('active');
		$(".tabpanel-sub").removeClass('active');
		var panel = $(this).attr('href');
		$(panel).addClass('active');
	});


	//탭 가로 스크롤 버튼
	$('.scroll-left').on('click keydown', function(event) {
		scrollMove(-196);
	});
	//탭 가로 스크롤 버튼
	$('.scroll-right').on('click keydown', function(event) {
		scrollMove(196);
	});
	var scrollMove = function (n){
		$('.tablist-type1').animate({scrollLeft : $('.tablist-type1').scrollLeft() + n}, 500);   
	}


  	//자주하는 질문
  	$qna.find('button').on('click focus keydown',function() {
  		$qna.find('dt').removeClass('active');
        $qna.find('dd').removeClass('active');
        $(this).parent().addClass('active');
        $(this).parent().next().addClass('active');
  	});

    

	//진료과 목록  아이콘 노출 
	$('.text-ko > a').on('focus',function(){
		$('.over-icon').css( 'display', 'none' );
		$(this).siblings('.over-icon').css( 'display', 'block' );
	});


	//select disable적용
	if ($("select").length){ 		
		$('select').each(function(i, e){
			var sele = $(this).prop('disabled');		
			if (sele==true) {		 			
				$(this).parent('.select').addClass('disabled');
			}
		});
	}
	//select 적용 
  	var selectTarget = $('.select select'); 
  	selectTarget.change(function(){ 
  		var select_name = $(this).children('option:selected').text(); 
  		$(this).siblings('label').text(select_name); 
  	});





});







