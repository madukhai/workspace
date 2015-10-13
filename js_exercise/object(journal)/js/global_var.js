// global variable.
var journal = new Journal();
var e1 = new Entry('big', 'lalalalala', 'joe');
var e2 = new Entry('small', 'lalalalala', 'jason');
var article = "If I judge my readers’ impressions correctly, I dare say that after hearing all that was said about taboo they are far from knowing what to understand by it and where to store it in their minds. This is surely due to the insufficient information I have given and to the omission of all discussions concerning the relation of taboo to superstition, to belief in the soul, and to religion. On the other hand I fear that a more detailed description of what is known about taboo would be still more confusing; I can therefore assure the reader that the state of affairs is really far from clear. We may say, however, that we deal with a series of restrictions which these primitive races impose upon themselves; this and that is forbidden without any apparent reason; nor does it occur to them to question this matter, for they subject themselves to these restrictions as a matter of course and are convinced that any transgression will be punished automatically in the most severe manner. There are reliable reports that innocent transgressions of such prohibitions have actually been punished automatically. For instance, the innocent offender who had eaten from a forbidden animal became deeply depressed, expected his death and then actually died. The prohibitions mostly concern matters which are capable of enjoyment such as freedom of movement and unrestrained intercourse; in some cases they appear very ingenious, evidently representing abstinences and renunciations; in other cases their content is quite incomprehensible, they seem to concern themselves with trifles and give the impression of ceremonials. Something like a theory seems to underlie all these prohibitions, it seems as if these prohibitions are necessary because some persons and objects possess a dangerous power which is transmitted by contact with the object so charged, almost like a contagion. The quantity of this dangerous property is also taken into consideration. Some persons or things have more of it than others and the danger is precisely in accordance with the charge. The most peculiar part of it is that any one who has violated such a prohibition assumes the nature of the forbidden object as if he had absorbed the whole dangerous charge. This power is inherent in all persons who are more or less prominent, such as kings, priests and the newly born, in all exceptional physical states such as menstruation, puberty and birth, in everything sinister like illness and death and in everything connected with these conditions by virtue of contagion or dissemination."
var e3 = new Entry('mid', article, 'khai');
e3.subtitle = "long article"
e3.imgs = ["img/a.jpg", "img/authors/1.png"];
e2.imgs = ["img/b.jpg", "img/authors/2.png"];
e1.imgs = ["img/c.jpg", "img/authors/3.png"];


journal.addEntry(e1);
journal.addEntry(e2);
journal.addEntry(e3);

var empty_place = new Audio('music/your_empty_place.mp3');
var letter_for_you = new Audio('music/letter_for_you.mp3');
var songs = []
songs.push(empty_place);
songs.push(letter_for_you);
var cur_music = 1;
var song = songs[cur_music];
var duration = song.duration;
var position = 0;












	// var d = document.createElement('div');
	// d.className =' cur_entry';

	// var id = 'entry' + journal.entries.indexOf(e);
	// j('.entry_list').append(d);
	// j('.cur_entry').addClass('entry');
	// j('.cur_entry').append('<h2>' + e.title + ' </h2>');
	// j('.cur_entry').append('<h4>' + e.author + ' </h4>');
	// j('.cur_entry').append('<p>' + e.content + ' </p>');
	// j('.cur_entry').attr('id',id);
	// j('.cur_entry').removeClass('cur_entry');
	
	// var div_card = document.createElement('div');
	// div_card.className = 'temp_card';
	// j('.wrapper').append(div_card);	
	// j('.temp_card').addClass('card');

	// var div_container = document.createElement('div');
	// div_container.className = "temp_card__container";
	// j('.temp_card').append(div_container);
	// j('.temp_card__container').addClass('card__container');
	// j('.temp_card__container').addClass('card__container--closed');
	

	// j('.temp_card').removeClass("temp_card");

	// var svg_image = document.createElement('svg');
	// svg_image.className = "temp_card__image";
	// j('.temp_card__container').append(svg_image);
	
	// j('.temp_card__image').attr("xmlns", "http://www.w3.org/2000/svg");
	// j('.temp_card__image').attr("xmlns:xlink","http://www.w3.org/1999/xlink");
	// j('.temp_card__image').attr("viewBox","0 0 1920 500");
	// j('.temp_card__image').attr("preserveAspectRatio","xMidYMid slice");


	 
	// j('.temp_card__image').addClass('card__image');
	

	// var defs = document.createElement('defs');
	// defs.className = "temp_defs";
	// j('.temp_card__image').append(defs);

	// var clipPaths = document.createElement('clipPath');
	// clipPaths.className = 'clips';
	// j('.temp_defs').append(clipPaths);
	// var id = 'clipPath' + journal.entries.indexOf(e);
	// j('.clips').attr('id', id);
	

	// var polygon_clip = document.createElement('polygon');
	// polygon_clip.className = 'temp_clip';
	// j('.clips').append(polygon_clip);
	// j('.temp_clip').attr("points","0,500 0,0 1920,0 1920,500");
	// j('.temp_clip').addClass('clip');
	// j('.temp_clip').removeClass('temp_clip');

	// j('.clips').removeClass('clips');
	// j('.temp_defs').removeClass("temp_defs");

	// var image = document.createElement('image');
	// image.className = 'image';
	// j('.temp_card__image').append(image);
	// var clip_path = 'url(#clipPath' + journal.entries.indexOf(e) + ')';
	// j('.image').attr("clip-path", clip_path);
	// j('.image').attr("width","1920");
	// j('.image').attr("height","500");
	// j('.image').attr("xlink:href",e.imgs[0]);
	// j('.image').removeClass('image');

	// j('.temp_card__image').removeClass('temp_card__image');

	// var div_content = document.createElement('div');
	// div_content.className = 'temp_card__content';
	// j('.temp_card__container').append(div_content);
	// j('.temp_card__content').addClass('card__content');

	// j('.temp_card__container').removeClass('temp_card__container');

	// var italic_button = document.createElement('i');
	// italic_button.className = "temp_card__btn-close";
	// j('.temp_card__content').append(italic_button);
	// j('.temp_card__btn-close').addClass("card__btn-close");
	// j('.temp_card__btn-close').addClass("fa");
	// j('.temp_card__btn-close').addClass("fa-times");
	// j('.temp_card__btn-close').removeClass("temp_card__btn-close");

	// var div_caption = document.createElement('div');
	// div_caption.className = "temp_card__caption";
	// j('.temp_card__content').append(div_caption);
	// j('.temp_card__caption').addClass("card__caption");

	// //problem.1 
	// var caption_h2 = document.createElement('h2');
	// caption_h2.className = "temp_card__title";
	
	// j('.temp_card__caption').append(caption_h2);
	// j('.temp_card__title').html(e.title);
	// j('.temp_card__title').addClass("card__title");
	// j('.temp_card__title').removeClass("temp_card__title");

	// // problem.2
	// var caption_p = document.createElement('p');
	// caption_p.className = "temp_card__subtitle";
	
	// j('.temp_card__caption').append(caption_p);
	// j('.temp_card__subtitle').html(e.subtitle);
	// j('.temp_card__subtitle').addClass("card__subtitle");
	// j('.temp_card__subtitle').removeClass("temp_card__subtitle");

	// j('.temp_card__caption').removeClass("temp_card__caption");

	// var div_copy = document.createElement('div');
	// div_copy.className = 'temp_card__copy';
	// j('.temp_card__content').append(div_copy);
	// j('.temp_card__copy').addClass("card__copy");

	// j('.temp_card__content').removeClass('temp_card__content');

	// // problem.3
	// var div_meta = document.createElement('div');
	// div_meta.className = "temp_meta";
	// j('.temp_card__copy').append(div_meta);
	// j('.temp_meta').addClass('meta');

	// var meta_img = document.createElement('img');
	// meta_img.className = "temp_meta__avatar";
	// j('.temp_meta').append(meta_img);
	// j('.temp_meta__avatar').attr("src",e.imgs[1]);
	// j('.temp_meta__avatar').attr("alt",e.author);
	// j('.temp_meta__avatar').addClass("meta__avatar");
	// j('.temp_meta__avatar').removeClass("temp_meta__avatar");

	// var meta_author = document.createElement('span');
	// meta_author.className = "temp_meta__author";
	// j('.temp_meta').append(meta_author);
	// j('.temp_meta__author').html(e.author);
	// j('.temp_meta__author').addClass("meta__author");
	// j('.temp_meta__author').removeClass("temp_meta__author");

	// var meta_date = document.createElement('span');
	// meta_date.className = "temp_meta__date";
	// j('.temp_meta').append(meta_date);
	// j('.temp_meta__date').html(e.date);
	// j(".temp_meta__date").addClass("meta__date");
	// j('.temp_meta__date').removeClass('temp_meta__date');

	// j('.temp_meta').removeClass('temp_meta');

	// var meta_p = document.createElement('p');
	// meta_p.className = "temp_meta__p";
	// j('.temp_card__copy').append(meta_p);
	// j('.temp_meta__p').html(e.content);
	// j('.temp_meta__p').removeClass('temp_meta__p');

	// // j('.temp_card__copy').html('<p>' + e.content + '</p>');

	// j('.temp_card__copy').removeClass("temp_card__copy");
