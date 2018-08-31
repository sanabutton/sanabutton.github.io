
$(function(){
	var showTop = 200;
	$('body').append('<a href="javascript:void(0);" id="fixedTop">▲</a>');
	var fixedTop = $('#fixedTop');
	fixedTop.on('click',function(){
		$('html,body').animate({scrollTop:'0'},500);
	});
	$(window).on('load scroll resize',function(){
		if($(window).scrollTop() >= showTop){
			fixedTop.fadeIn('normal');
		} else if($(window).scrollTop() < showTop){
			fixedTop.fadeOut('normal');
		}
	});
});

function addPageScroller(){
    var $fixedBottom = $('fixedBottom');
    if($fixedBottom.size() > 0){
    
        $(window).scroll(function(event){
             if($(this).scrollTop() > 200){
                 $fixedBottom.fadeOut();
            }else{
                 $fixedBottom.fadeIn();
            }
        });      
        $fixedBottom.click(function(event){
            $('html,body').animate({scrollTop:$('body').height()}, 500);
            return event.preventDefault();
    });
}};
