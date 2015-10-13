$('#edit-header').html('The jQuery Challenge');
$('#box1').css('background', 'green');
$('#para1').css({'font-weight': 900, 'font-size': '35px'});
$('.box2').addClass('spin');
$('#button1').click(function() {
        alert('You clicked the button');
    }); 
$('#box3').hover(function(){
	$(this).css('background', 'green');
}, function(){
	$(this).css('background', 'red');
});
$('#input1').keyup(function() {
	console.log($(this).val());
});

$('#box4').animate({'marginLeft':'+=400px', 'marginTop':'+=150px'}, 2000,function(){
        
    });
