(function($){

	// убираем меню по клику в мобилке
	$('.menu-switcher').click(function(e){
		$(this).prev().slideDown();
		$(this).css({'display':'none'});
		$('.search').fadeIn();
		$('.search').css({'margin-top':'0'});
		$('.close-menu').show();
		e.preventDefault();
	});
	$('.close-menu').click(function(e){
		$('.mainmenu ul').slideUp();
		$('.menu-switcher').css({'display':'block'});
		$('.search').fadeOut();
		
		e.preventDefault();
	});
	// меняем текст в кнопке сабмит
	$('.search input[type="submit"]').attr('value','поиск');

	// скрываем и показываем поиск
	$('.search').css({'z-index':'1'});

	$('.search-switcher').toggle(function() {
		  $('.search').stop('true','true').fadeIn();		  
		},function(){
			$('.search').stop('true','true').fadeOut();	
		});




})(jQuery);
