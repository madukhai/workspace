$(document).ready(function(){
	//enable listeners
	$('#tag-search').submit(function(event){
		event.preventDefault();
		$('#instagram-pics').empty();
		$("#image-container").stop(true, false);
		$("#image-container").css('top','0') ;
		instagram_api($(this));
		
	})
	//load default page
	/*PLACE FUNCTION HERE THAT LOADS PICTURES ON PAGE LOAD */
	// back_setting();

	$('#tag-search').keyup(function(event){
		event.preventDefault();
		$('.dropdown-menu').empty()
		instagram_search($(this));
	});
	$('.dropdown-menu').on('click',function(event){
		
		event.preventDefault();
		$('#tag-search').trigger('submit');
	});


});

//global variable
var animation ='';

function instagram_api(frm){
	var search = frm.find('input[name="tag_search"]').val();
	/* PLACE FUNCTION HERE */
	// console.log($("#image-container").css('top'));
	// $("#image-container").addEventListener('moving',function (){
 //    	 if($("#image-container").css('top') < (-800)){
	// 		console.log($("#image-container").css('top'));
	// 		ajax_call(search);
	// 	}; 
 //    });
	ajax_call(search);
	
}



var scroll_images=function(){
	$('#image-container').animate({'top':'-=10'},100,function(){
		 // console.log($("#image-container").css('top'));
	});
	
}
function images_response(data){
	
	images = data.data;
	var counter = 0;
	for(image in images){
		// console.log(images[image].images.standard_resolution.url);
		/* 
			WRITE THE FUNCTION THAT TAKES THE IMAGE URL AND ADDS THEM TO
			list with the id instagram-pics. You will need to know the following things:

			1. To add html to an element with jquery use this syntax $('#instagram-pics').append('html tag goes in here');
			2. To make sure all images fit in the squares available to them, use these css properties
			   background:url('image url')
			   background-size:cover
			   background-position:center center
	     */
		counter++
	     var html = "";
	     html += '<div class="pics"></div>'
	     $('#instagram-pics').append(html);
	     $('#instagram-pics .pics').css({"background": 'url(' + images[image].images.standard_resolution.url +')',"background-size": "cover","background-position":"center center" ,"float":"left","width": "300px","height": "300px"});
	     $('#instagram-pics .pics').removeClass('pics');
	     $('#instagram-pics .temp').removeClass('temp');
	     // console.log(images[image]);
	     // back_setting(images[image]);
	}
	clearInterval(animation);
	animation=setInterval(/*PLACE FUNCTION HERE */scroll_images,100);
	load_more(data);
	
}

function ajax_call(tag){

	/* 
	complete the AJAX code block below to gather the 20 most recent photos with the tag 
	you searched for

	You can use the following client Id:
	client_id=61f8b631abd34732a3bcd8c73d0d73a9

	*/

	
	$.ajax({
		url:"https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=client_id=61f8b631abd34732a3bcd8c73d0d73a9",
		type:'GET',
		data: {client_id:'61f8b631abd34732a3bcd8c73d0d73a9'},
		dataType:'jsonp',
		success:function(data){
			/* PLACE FUNCTION HERE */
			images_response(data);
			// back_setting();
		},
		error:function(data){
			console.log(data);
		}	
	});
	
}

function load_more(imgsObj){
	var photos;
	$.ajax({
		url: imgsObj.pagination.next_url,
		type:'GET',
		data: {client_id:'61f8b631abd34732a3bcd8c73d0d73a9'},
		dataType:'jsonp',
		success:function(data){
			/* PLACE FUNCTION HERE */
			images_response(data);
			// back_setting();
		},
		error:function(data){
			console.log(data);
		}	
	});
	
	return photos;	
}


	
function instagram_search(frm){
	var search = frm.find('input[name="tag_search"]').val();
	ajax_search(search);
}


function ajax_search(tag){

	/* 
	complete the AJAX code block below to gather the 20 most recent photos with the tag 
	you searched for

	You can use the following client Id:
	client_id=61f8b631abd34732a3bcd8c73d0d73a9

	*/
	
	var photos = {};
	// console.log('---------1');
	$.ajax({
		url:"https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=client_id=61f8b631abd34732a3bcd8c73d0d73a9",
		type:'GET',
		data: {client_id:'61f8b631abd34732a3bcd8c73d0d73a9'},
		dataType:'jsonp',
		success:function(data){
			/* PLACE FUNCTION HERE */
			dropdown(data,tag);
		},
		error:function(data){
			console.log(data);
		}		
	});
	
}

function dropdown(data,tag){
	var results = data.data;
	var all_match = [];
 	for(var result in results){
 		for(var i =0; i< results[result].tags.length;i++){
 			if(results[result].tags[i].slice(0,tag.length) == tag){
 				if(all_match.indexOf(results[result].tags[i]) == -1){
 					all_match.push(results[result].tags[i]);
 				}
 				
 			};
 		}
 	}

 	for(var j=0;j< all_match.length;j++){
 		var html = ""
		html = "<li><a>" + all_match[j] + "</a></li>";
		// console.log(html);
		$('.dropdown-menu').append(html);
		
 	}
}


function back_setting(image){
	var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    cell_size: 150,
    variance: 1,
    stroke_width: 1
  }).svg(); // Render as SVG.

  // Add pattern to DOM.
  var container = document.querySelector('.trianglify');
  container.insertBefore(pattern, container.firstChild);


  var html = "";

  html +=' <svg width="600" height="600">';
  
  html +='  <defs>'
  html +='      <pattern id="imgpattern" x="-10" y="-10" width="3" height="3">';
  html +='        <image width="600" height="600"';
  // html +='               xlink:href="http://lorempixel.com/output/animals-q-c-640-480-2.jpg"/>';
  html +='               xlink:href="'+ image.images.standard_resolution.url +'"/>';
  html +='      </pattern>';
  html +='  </defs>';
    
    
    
  html +='  <path fill="url(#imgpattern)" stroke="black" stroke-width="4"';
  html +='        d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z" />';

  html +=' </svg>';
  $('.instagram-pics').append(html);
  

  $('path').addClass('temp');
  $('.temp').attr('fill', 'url(#imgpattern)');
  $('.temp').removeClass('temp');
  console.log(html);



  // Get all pattern polygons.
  // var polyArray = [].slice.call(pattern.children);

  // Get polygon coords and hide them.
  // var polyPoints = polyArray.map(function(poly) {

    

  //   var rect = poly.getBoundingClientRect();

  //   var point = {
  //     x: rect.left + rect.width / 2,
  //     y: rect.top + rect.height / 2
  //   };

  //   return point;
  // });
}




