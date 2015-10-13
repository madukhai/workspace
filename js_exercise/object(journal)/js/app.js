// listener.
var j = jQuery.noConflict();

j(document).ready(function(){
	
	show_all();

	j('#entry').submit(function(event){
		event.preventDefault();
		j('#card-container').empty();
		create_entry();
		j('#myModal').trigger('click')
	});

	j('#search').submit(function(event){
		event.preventDefault();
		show_search();
	});

	j('#see_all_entries').on('click',function(event){
		event.preventDefault();
		j('#card-container').empty();
		show_all();
	});
	// music box.
	// music.
	
	var container = j('.container');
	var play = j('#play');
	var pause = j('#pause');
	var mute = j('#mute');
	var muted = j('#muted');
	var close = j('#close');
	var next = j('#next');
	var prev = j('#prev');
	var seek = j('#seek')
	var repeat_all = j('#repeat_all');
	var repeat_one = j('#repeat_one');
	var random = j('#random');


    song.volume = 1;
    song.autoplay = false;
    song.loop = false;

    auto_change();
    

    j('.song_name').html(song.src.split('/').pop().split('.')[0]);
    
	//songs[cur_music].play();//auto play first.
	play.on('click', function(event){
		event.preventDefault();
		song.play();
		j('.song_name').html(song.src.split('/').pop().split('.')[0]);

	});
	pause.on('click', function(event) {
        event.preventDefault();
        song.pause();
        
 
    });
    next.on('click', function(event){
    	event.preventDefault();
		helper_next();
		song.play();
		auto_change();
		j('.song_name').html(song.src.split('/').pop().split('.')[0]);
    });
    prev.on('click', function(event){
    	event.preventDefault();
    	helper_prev();
    	song.play();
    	auto_change();
    	j('.song_name').html(song.src.split('/').pop().split('.')[0]);
    });


    // closing modal
    j('.close-modal').click(function(){
    	console.log('close');
    	j('#myModal').trigger('click');
    	// console.log("---------");

    });
	

	// j('.close-modal').click(closeModal);
	// j('#myForm').submit(function(event){
	// 	event.preventDefault();
	// 	j('#open-modal').trigger('click');
	// })
	


});

// 



function helper_next(){
	song.pause();
	song.currentTime = 0;
	if (cur_music == songs.length - 1){
		cur_music = 0;
	}else{
		cur_music ++;
	}
	song = songs[cur_music];
	
}

function helper_prev(){
	song.pause();
	song.currentTime = 0;
	if (cur_music == 0){
		cur_music = songs.length - 1;
	}else{
		cur_music --;
	}
	song = songs[cur_music];
	
}

function auto_change(){
	song.addEventListener('timeupdate',function (){
    	curtime = parseInt(song.currentTime, 10);
        if (curtime >= song.duration -1){
        	j('#next').trigger('click');	
        }
    });
}


function Journal(){
	this.entries = [];
	this.num_of_entries = 0;

}
Journal.prototype.addEntry = function(entry){
	this.entries.push(entry);
	this.num_of_entries ++;
	this.censor(entry);
	}


function Entry(title,content,author){
	this.title = title;
	this.content = content;
	this.author = author;
	this.hash = '';
	this.timestamp = "";
	this.tags = [];
	this.subtitle = "";
	this.imgs = [];
	this.date = 
	this.position = 0;
}




Journal.prototype.findEntryByTag = function(tag){
		
	var result_entries = []
	for(var i=0; i<this.num_of_entries;i++){
		if(this.entries[i].tags.indexOf(tag) != -1){
			result_entries.push(this.entries[i]);
		}
	}
	return result_entries;
};
Journal.prototype.findEntryByStr = function(str){
	var result_entries = [];
	for(var i=0; i<this.num_of_entries;i++){
		var current = this.entries[i];
		if (current.content.search(str) != -1 || current.title.search(str) != -1 || current.author.search(str) != -1 || this.entries[i].tags.indexOf(str) != -1){
			result_entries.push(this.entries[i]);
		}
	}
	return result_entries;
};

Entry.prototype.displayEntry = function(entry){
	console.log(this.title + "\n" + this.content + "\n" + "By " + this.author);
};

Journal.prototype.displayEntryList = function(entrylist){
	var length = entrylist.length;
	for(var i=0;i<length;i++){
		displayEntry(entrylist[i]);
	}
};


Journal.prototype.deleteEntry = function(entry){
	var index = this.entries.indexOf(entry) ;
	this.entries.splice(index,1);
};

Journal.prototype.censor = function(entry){
	
	var length = entry.content.length;
	var badwords = ["fuck", "shit", "ass", "bitch", "suck"];
	var content_lower = entry.content.toLowerCase();
	var words_in_lower = content_lower.split(" ");
	var words_in_content = entry.content.split(" ");
	
	for(var i=0; i< badwords.length;i++){
		var replace = "";
		for (var j=0; j<badwords[i].length;j++){
			replace += "X";
		}
		
		var indexes = findMatch(badwords[i], words_in_lower);
		
		if(indexes.length != 0){
			for(var j=0;j<indexes.length;j++){
				if(words_in_lower[indexes[j]]  != badwords[i]){
					
					var start_index = words_in_lower[indexes[j]].search(badwords[i]);
					var end_index = start_index + badwords[i].length;
					replace = words_in_content[indexes[j]].slice(0,start_index) + replace +  words_in_content[indexes[j]].slice(end_index, words_in_content[indexes[j]].length);
					
				}
				words_in_content[indexes[j]] = replace;
				
			}
		}
	}
	entry.content = words_in_content.join(" ");
}

Journal.prototype.addEntry = function(entry){
	this.censor(entry);
	this.entries.push(entry);
	this.num_of_entries ++;

}

function findMatch(str, arr){
	var res = [];
	for(var i=0; i<arr.length;i++){
		
		if(arr[i].search(str) != -1){
			res.push(i);
		}
	}
	return res;
}



function create_entry(){
	
	var title = j('input[name="etitle"]').val();
	var author = j('input[name="eauthor"]').val();
	var content = j('textarea[name="econtent"]').val();
	var e = new Entry(title,content,author);
	e.imgs.push('img/a.jpg');
	e.imgs.push('img/authors/1.png');
	var time = new Date();

	e.timestamp = time;
	journal.addEntry(e);
	// clear. frm.find('input....same as up stairs')
	j('#entry').get(0).reset();
	show_all();	
}

function writeCard(e){
	var html ='<div class="card" data-hash="">';
	html+='				<div class="card__container card__container--closed">';
	html+='						<svg class="card__image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 500" preserveAspectRatio="xMidYMid slice">';
	html+='							<defs>';
	html+='								<clipPath id="clipPath' + position + '">';
	html+='									<polygon class="clip" points="0,500 0,0 1920,0 1920,500"></polygon>';
	html+='								</clipPath>';
	html+='							</defs>';
	html+='							<image clip-path="url(#clipPath' + position + ')" width="1920" height="500" xlink:href="'+ e.imgs[0] +'"></image>';
	html+='						</svg>';
	html+='						<div class="card__content">';
	html+='							<i class="card__btn-close fa fa-times"></i>';
	html+='							<div class="card__caption">';
	html+='								<h2 class="card__title">'+e.title+'</h2>';
	html+='								<p class="card__subtitle">'+e.subtitle+'</p>';
	html+='							</div>';
	html+='							<div class="card__copy">';
	html+='								<div class="meta">';
	html+='									<img class="meta__avatar" src="' + e.imgs[1] +'" alt="' + e.author + '" />';
	html+='									<span class="meta__author">Gerry Sutherland</span>';
	html+='									<span class="meta__date">' + e.timestamp + '</span>';
	html+='								</div>';
	html+='								<p>' + e.content + '</p>';
	html+='							</div>';
	html+='						</div>';
	html+='					</div>';

	return html;
}

function show_entry(e){

	var html = writeCard(e);
	$('#card-container').append(html);
	position++;

}
function show_search(){
	var key_word = $('input[name="keyword"]').val();
	var search_result = [];
	
	search_result = journal.findEntryByStr(key_word);
	$('#card-container').empty();
	if (search_result.length == 0){
		// write no result found.
		
		$('#card-container').html('<h2 style="color:red">There is no result for ' + key_word + '!</h2>');
	}else{
		
		for(var j=0;j<search_result.length;j++){
			show_entry(search_result[j]);

		}
	}
	$('#search').get(0).reset();

	rebindCards();
}

function show_all(){
	for(var i=0;i<journal.num_of_entries;i++){
		show_entry(journal.entries[i]);
	}
	rebindCards();
}

function rebindCards(){
	demo.init();
	$('body').css('overflow','auto');
}

// global variable.








