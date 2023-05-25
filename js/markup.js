// GNB
$(function(){ 
    $('.nav_th').bind("mouseover focusin", function() {
        $('.header_wrap').addClass('is_active');
    });
    $('.header_inner').bind("mouseleave focusout", function() {
        $('.header_wrap').removeClass('is_active');
        $('.nav_th3_wrap').removeClass('is_active'); 
    });
    $('.gnb_close_btn').on('click', function() {
        $('.header_wrap').removeClass('is_active'); 
        $('.nav_th3_wrap').removeClass('is_active'); 

    });

    // HEADER SCROLL
    $(window).scroll(function(){


        var head_wrap = $('.header_main');
        var winScroll = $(window).scrollTop();
        if( winScroll > 1 ){
            head_wrap.removeClass('is_transparent'); 
        }else {
            head_wrap.addClass('is_transparent'); 
        }
    })
    
    //3depth
    $('.nav_th3_wrap').prev('.nav_th2_tit').on("click", function() {
        if ($('.nav_th3_wrap').hasClass('is_active')) {
            $(this).next('.nav_th3_wrap').removeClass('is_active');
        }else {
            $(this).next('.nav_th3_wrap').addClass('is_active');
        }

    });
    //language menu
    $('.util_language').on('click',function(){
        if (!$('.language_wrap').hasClass('is_active')) {
            $('.language_wrap').addClass('is_active');
        } else {
            $('.language_wrap').removeClass('is_active');
        }
      });

      $('.language_wrap').bind("mouseleave",function (e){
        $('.language_wrap').removeClass('is_active');
      });


        // mobile hamberger button click
    $('.nav_btn').on('click',function (e){
        $('body').toggleClass('stop_overflow');
        $('.nav_item').removeClass('is_active');

        if ($(this).attr('aria-selected') == 'false') {
            $('.header_wrap').addClass('is_on');
            $(this).attr('aria-selected', true);
        } else {
            $('.header_wrap').toggleClass('is_on');
            $(this).attr('aria-selected', false);
        }
    });
    
    
   /* [s] mobile dropdown */
   $('.nav_mo .nav_th1_wrap .nav_th2_wrap').hide();
   $(".nav_mo .nav_th1_tit").on('click',function (e){
     $(this).parent(".nav_th1").toggleClass('is_current');
     $(this).siblings("ul").slideToggle("300").toggleClass('is_current');
   });


 /* [e] mobile dropdown */

});




// input
/*
$(function(){
    $('.input_area input').on('keyup', function(){
        if ($(this).val().length > 0) {
            $(this).parent('.input_area').addClass('is_show');
        }else {
            $(this).parent('.input_area').removeClass('is_show');
        }
    })
})
*/


$(function(){
    $('.eye_open').click(function(){
          if($(this).hasClass('is_active')){
            $(this).removeClass('is_active');
            $('#passWord').attr('type','password');
          }else{
            $(this).addClass('is_active');  
            $('#passWord').attr('type','text');
          }
      });
  });


  // toggle class
  $(function(){
    function toggleCon(){
        const toggle_area = $('.toggle_item');
        const toggle_head = $('.toggle_item .toggle_head');
        const toggle_panel = $('.toggle_item .toggle_panel');

        toggle_area.attr('aria-status','disabled');
        toggle_head.attr('aria-selected','false').attr('aria-expanded','false');
        toggle_panel.attr('aria-hidden','true');

        function ariaToggle(){
        toggle_area.each(function(){ 
            that = $(this); 
            if($(this).hasClass('is_current')){   
            that = $(this);
            that.attr('aria-status','expanded');
            that.find('.toggle_head').attr('aria-selected','true').attr('aria-expanded','true');            
            that.find('.toggle_panel').attr('aria-hidden','false'); 
            that.find('.toggle_panel').slideDown(100); 
            }else{     
            that.attr('aria-status','disabled');
            that.find('.toggle_head').attr('aria-selected','false').attr('aria-expanded','false');       
            that.find('.toggle_panel').attr('aria-hidden','true');
            that.find('.toggle_panel').slideUp(100);
            }
        })
        } ariaToggle();

        toggle_area.each(function(){
        that = $(this);
        that.find('.toggle_head .target').on('click', function(){ 
            $(this).parent('.toggle_head').parent('.toggle_item').toggleClass('is_current');
            $(this).parent('.toggle_head').siblings('.toggle_panel').toggle(100);   
            ariaToggle();    
        });        
        });
    }toggleCon();
});

// 체크박스 전체 선택
$(function(){
    $("#allcheck").on('click',function (e){
      $('.chk_input').not(this).prop('checked', this.checked);
    });

    $('.mypage_agreement .chk_required').on('click',function (){
        console.log($('.mypage_agreement .chk_required').length);
        if($('.mypage_agreement .chk_required:checked').length == $('.mypage_agreement .chk_required').length ) {
            $('.mypage_agreement + .button_wrap .type_primary').removeClass('is_before');
        } else {
            $('.mypage_agreement + .button_wrap .type_primary').addClass('is_before');
        }
    });
});

// 드롭다운 (selectBox)
$(function(){
    $('.dropdown_wrap .dropdown_tit').on('click',function (e){
        $(this).parent('.dropdown_wrap').toggleClass('is_active');
    });
    $('.dropdown_wrap').bind("mouseleave",function (e){
        $(this).removeClass('is_active');
    });
    $('.dropdown_item').on("click",function (e){
        $('.dropdown_value').val() = $(this).text(); 
    });
});


// swiper slide
$(function(){
    const mainArrary = ['bar_01','bar_02'];
    for(let i = 0; i < mainArrary.length; i++){
    const swiper = new Swiper('.swiper_' + mainArrary[i], {
        clickable: true,
        slidesPerView:'auto',
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000,
        },          
        /*
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        */
        pagination: {
            el: '.swiper_' + mainArrary[i] + ' .swiper_pagination',
            clickable: 'true',
            type: 'bullets',
        },
      });
    }
});


$(function () {
	
	//POPUP - 회원 바로가기 개인설정 버튼 클릭시
	var btnSetting = $('.member_request .btn_setting');
	var popSetting = $('.popup_setting');
	var btnClose = popSetting.find('.btn_close');
	var btnCancle = $('.setting_buttons .btn_cancle');
	var dimRequest = $('.member_request .dim');

	btnSetting.click(function () {
		popSetting.addClass('active');
		dimRequest.addClass('active');
	});
	btnClose.click(function () {
		popSetting.removeClass('active');
		dimRequest.removeClass('active');
	})
	btnCancle.click(function () {
		popSetting.removeClass('active');
		dimRequest.removeClass('active');
	});
	dimRequest.click(function () {
		popSetting.removeClass('active');
		dimRequest.removeClass('active');
	});

	// Sustainability Product
	$('.sustain_item').click(function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})

	// Mobile - Technical Support
	var tabMenu = $('.support_tabmenu .tabmenu_link');
	var tabCont = $('.support_tabcont .tabcont_column');

	tabMenu.click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var menuIdx = $(this).index();
		tabCont.eq(menuIdx).addClass('active').siblings().removeClass('active');
	});

	if (matchMedia("screen and (max-width: 1024px)").matches) {
		$('.tabcont_item .card_item').click(function () {
			$(this).siblings().addClass('on');
			$(this).parent().addClass('on');
		})
		$('.hover_item .btn_close').click(function () {
			$('.tabcont_item').removeClass('on');
			$(this).parent().removeClass('on');
		})
	}


});//end