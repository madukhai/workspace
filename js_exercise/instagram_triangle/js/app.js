$(document).ready(function(){
	//enable listeners
	back_setting();
	$('#tag-search').submit(function(event){
		event.preventDefault();
		// $('.outlay').css('opacity','0.5');
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
	
	var images = [];
	// console.log(data);
	for(var i=0; i<data.length;i++){
		for(var j=0;j<data[i].data.length;j++){
			images.push(data[i].data[j]);
		}
	}
	 // console.log(images.length);

		// var html = "";

		//   html +=' <svg width="600" height="600">';
		  
		//   html +='  <defs>'
		//   html +='      <pattern id="imgpattern" x="-10" y="-10" width="3" height="3">';
		//   html +='        <image width="600" height="600"';
		//   // html +='               xlink:href="http://lorempixel.com/output/animals-q-c-640-480-2.jpg"/>';
		//   html +='               xlink:href="'+ images[image].images.standard_resolution.url +'"/>';
		//   html +='      </pattern>';
		//   html +='  </defs>';
		    
		    
		    
		//   // html +='  <path fill="url(#imgpattern)" stroke="black" stroke-width="4"';
		//   // html +='        d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z" />';

		//   html +=' </svg>';
		//   $('#instagram-pics').append(html);
		  

		//   // $('path').addClass('temp');
		//   // $('.temp').attr('fill', 'url(#imgpattern)');
		//   // $('.temp').removeClass('temp');
		//   // // console.log(html);
		// var temp_containers = $('#instagram-pics')[0];
		// console.log(temp_containers);
// '=============================================================='
	for(image in images){
		// console.log(images[image]);
		// 
		var html = "";
		html +=' <svg width="600" height="600">';
		html +='  <defs>'
		html +='      <pattern id="imgpattern' + images[image].id + '" x="0" y="0" width="2" height="2">';
		html +='        <image width="500" height="500"';
		  // html +='               xlink:href="http://lorempixel.com/output/animals-q-c-640-480-2.jpg"/>';
		html +='               xlink:href="'+ images[image].images.standard_resolution.url +'"/>';
		html +='      </pattern>';
		html +='  </defs>';

		  // html +='  <path fill="url(#imgpattern)" stroke="black" stroke-width="4"';
		//   // html +='        d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z" />';

		html +=' </svg>';
		$('#instagram-pics').append(html);
	}
	var temp_containers = $('#instagram-pics')[0].children;

	
	var path_container = $("#image-container svg")[0].children;
	// console.log(path_container);
	var counter = 0;
	// var pathes = [];
	$('path').each(function(){
		// var path = [];
		// path.push($(this).attr('d'));
		// path.push($(this).attr('stroke'));
		// path.push($(this).attr('stroke-width'));
		// pathes.push(path);
		if(counter < temp_containers.length){
			// get patternid.
			var patternId = $(temp_containers[counter]).find('pattern')[0].getAttribute('id');
			
		}else{
			var patternId = $(temp_containers[counter-temp_containers.length]).find('pattern')[0].getAttribute('id');
		}
		patternId = "url(#" + patternId + ")";		
			// 	// connect to path fill;
		
		$(this).attr('fill',patternId);
		counter++;

		// add a <a>tag as parent of this path.

		// var parent = $(this).parentNode;
		// console.log(parent);
		// var wrapper = document.createElement('a');
		// var html = "<a href='" + $(temp_containers[counter]).find('pattern')[0].getAttribute('xlink:href') + "'></a>";
		// // set the wrapper as child (instead of the element)
		// $(wrapper).append($(this));

		// $(wrapper).html(html);
		// $(parent).replaceWith(wrapper, $(this));
		// // set element as child of wrapper
		// $(wrapper).append($(this));







	});

	// var counter = 0;
	// $('#image-container > svg').empty();
	// while(counter < temp_containers.length && counter < pathes.length){

	// 	var patternId = $(temp_containers[counter]).find('pattern')[0].getAttribute('id');
	// 	patternId = "url(#" + patternId + ")";
		
	// 	var new_html = "";

	// 	new_html +='  <path fill="' + patternId + '" stroke="' + pathes[counter][1] + '" stroke-width="' + pathes[counter][2] + '" d="' + pathes[counter][0] + '" />';

	// 	$('#image-container > svg').append(new_html);
	// 	console.log(counter);
	// 	counter++;
	// }







// '=============================================================='
	// while(counter < temp_containers.length && counter < path_container.length){
	// 	// get patternid.
	// 	var patternId = $(temp_containers[counter]).find('pattern')[0].getAttribute('id');
	// 	patternId = 'url(#"' + patternId + '")';
	// 	// connect to path fill;
	// 	var path = path_container[counter];
		
	// 	$('path').attr('fill',patternId);
	// 	// $(path).addClass('temp');
 //  // 		$('.temp').attr('fill', patternId);
 //  // 		console.log($('.temp').attr('fill'));
 //  // 		$('.temp').removeClass('temp');

 //  // 	$(path).css('fill',patternId);
	// 	// console.log($('.temp').attr('id'));
	// 	// var img = $(temp_containers[0]).find('image');
	// 	// console.log(img[0].getAttribute('xlink:href'));
	// 	counter++;
	// }

	// console.log($('#instagram-pics'));
	// clearInterval(animation);
	// animation=setInterval(/*PLACE FUNCTION HERE */scroll_images,100);

// ----------------------------------------------------------------

	// var html = "";

 //  	html +=' <svg width="600" height="600">';
  
 // 	 html +='  <defs>'
 //  	html +='      <pattern id="imgpattern" x="-10" y="-10" width="3" height="3">';
 // 	 html +='        <image width="600" height="600"';
 //  // html +='               xlink:href="http://lorempixel.com/output/animals-q-c-640-480-2.jpg"/>';
 // 	 html +='               xlink:href="'+ images[0].images.standard_resolution.url +'"/>';
 // 	 html +='      </pattern>';
 // 	 html +='  </defs>';
    
    
    
 // 	 html +='  <path fill="url(#imgpattern)" stroke="black" stroke-width="4"';
 // 	 html +='        d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z" />';

 //  	html +=' </svg>';
 // 	 $('body').html(html);
  

 //  	$('path').addClass('temp');
 //  	$('.temp').attr('fill', 'url(#imgpattern)');
 //  	$('.temp').removeClass('temp');
	
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
			var collections = [];
			load_more(data,collections);
			// back_setting();
		},
		error:function(data){
			console.log(data);
		}	
	});
	
}

// function collect_data(data,collections){

// 	collections.concat(data.data);
// 	return collections;
// }

function load_more(imgsObj,collections){
	$.ajax({
		url: imgsObj.pagination.next_url,
		type:'GET',
		data: {client_id:'61f8b631abd34732a3bcd8c73d0d73a9'},
		dataType:'jsonp',
		success:function(data){
			/* PLACE FUNCTION HERE */
			if(collections.length <5){
				collections = collections.concat(data,collections);
				load_more(data,collections);
			}else{
				images_response(collections);
			}
			
			// back_setting();
		},
		error:function(data){
			console.log(data);
		}	
	});
	

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


function back_setting(){
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


function ad(){
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


}

