$('#open-modal').click(function(){
	$('#overlay').fadeIn(400,function(){
		//$('#modal').slideDown(200);
	});
	$('#modal').fadeIn(800);
	
});

$('.close-modal').click(closeModal);
$('#myForm').submit(function(event){
	event.preventDefault();
	$('#open-modal').trigger('click');
})
function closeModal(){
	$('#overlay').fadeOut(800);
	$('#modal').fadeOut(400);
}


//Carousel JS
var index = 0;
var slide = 0;
var width = $('#carousel').width();
$('#carousel .slide').each(function(){
	$(this).css('margin-left',width * index);
	index++;
});
$('#carousel .adv-next').on('click',function(){});

$('#carousel .adv-next').click(function(){
	slide++;
	if(slide == index -1){
		$('#carousel .adv-next').hide();
		$('#carousel .submit').show();
	}
	$('#carousel .slide').animate({'margin-left':'-='+width},200,function(){});
});

$('#carousel .submit').on('click',function(){
	$('#myForm').trigger('submit');
});




