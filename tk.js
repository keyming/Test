$(function(){
	(function(){
$('#main_menu li').hover(function() { 
$(this).find('.sub-menu').css('display', 'block'); 
}, function() { 
$(this).find('.sub-menu').css('display', 'none'); 
});  
	})();
});