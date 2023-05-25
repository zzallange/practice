$(function () {
	// sectionNav
	const gnbHead = $('.header_top').outerHeight();
	const subHead = $('.m_location_bar').outerHeight(true);
	const secNav = $('.sec_nav');
	const secNavTop = secNav.offset().top;
	const secNavHeight = secNav.outerHeight(true);
	const secMenu = $('.sec_gnb li');
	const section = $('.sec_content');
	const headTopHeight = gnbHead + secNavHeight;
	const subTopHeight = subHead + secNavHeight;

	$(window).scroll(function (e) {
		e.preventDefault();
		const wScroll = $(this).scrollTop();
		// PC scroll sec_nav
		if (wScroll > secNavTop - gnbHead && window.innerWidth > 1024) {
			secNav.addClass('active');
		} else {
			secNav.removeClass('active');
		}
		// Mobile scroll sec_nav
		if (wScroll > 0 && window.innerWidth <= 1024) {
			secNav.addClass('fixed');
		} else {
			secNav.removeClass('fixed');
		}
		// Scroll active menu
		for (var i = 0; i < section.length; i++) {
			const secContent = section.eq(i).offset().top;
			if (wScroll >= secContent - headTopHeight && window.innerWidth > 1024) {
				secMenu.removeClass('active');
				secMenu.eq(i).addClass('active');
			} else if (wScroll >= secContent - subTopHeight && window.innerWidth <= 1024) {
				secMenu.removeClass('active');
				secMenu.eq(i).addClass('active');
			}
		}
	})

	
	// sectionMenu
	secMenu.click(function (e) {
		e.preventDefault();
		const target = $(this);
		const index = target.index();
		const secCont = section.eq(index);
		const secContTop = secCont.offset().top;
		// responsive 1024
		if (window.innerWidth > 1024) {
			$('html,body').animate({ scrollTop: secContTop - headTopHeight + 1 }, 300);
		} else if (window.innerWidth <= 1024) {
			$('html,body').animate({ scrollTop: secContTop - subTopHeight + 1 }, 300);
		}
	});
	// Sustainability Product Accordion 
	$('.material_sort').click(function () {
		$(this).toggleClass('active');
		$(this).siblings().toggleClass('active');
	});
});//end

// Mobile Swiper Section_nav
$(function () {
		var swiper = new Swiper('.sec_nav_wrap', {
		breakpoints : {
			560: {
				slidesPerView: 'auto',
				preventClicks: true,
				preventClicksPropagation: false,
				observer: true,
				observeParents: true
			}
		}
	});
	var secNavItem = $('.sec_nav_wrap .swiper-wrapper .swiper-slide a');
	secNavItem.click(function () {
		var target = $(this).parent();
		secNavItem.parent().removeClass('on')
		target.addClass('on');
		itemCenter(target);
	});

	function itemCenter(target) {
		var snbwrap = $('.sec_nav_wrap .swiper-wrapper');
		var targetPos = target.position();
		var box = $('.sec_nav_wrap');
		var boxHarf = box.width() / 2;
		var pos;
		var listWidth = 0;

		snbwrap.find('.swiper-slide').each(function () { listWidth += $(this).outerWidth(); })

		var selectTargetPos = targetPos.left + target.outerWidth() / 2;
		if (selectTargetPos <= boxHarf) { 
			pos = 0;
		} else if ((listWidth - selectTargetPos) <= boxHarf) { 
			pos = listWidth - box.width();
		} else {
			pos = selectTargetPos - boxHarf;
		}

		setTimeout(function () {
			snbwrap.css({
				"transform": "translate3d(" + (pos * -1) + "px, 0, 0)",
				"transition-duration": "500ms"
			})
		}, 200);
	}
})