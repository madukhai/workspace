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



function load_journal(){
	var journal_str = localStorage.getItem("journal");
	var journal;
	if (journal_str == null){
		journal = new Journal();
		console.log(1);
		return journal;
	}else{
		console.log(journal_str);
		console.log(2);
	}
	console.log(journal_str);
	return journal_str;
}

function journal_object_to_string(journal){
	var journal_str = '{';
	for(var prop in journal){
		element = check_object(journal.prop);
		journal_str += prop.toString();
		journal_str += ":",
		journal_str += element;
		journal_str += ',';
	}
	journal_str += "}"
	return	journal_str;
}
function check_object(element){
	switch (typeof(element)){
		case "string":
			return element;
		case "object":
			var result = "";
			if(element instanceof Array){
				result =+ "[";
				for(var i=0;i<element.length;i++){
					result = result + check_object(element[i]) + ",";
				}
				result += "]";
				return result;
			}else if(element instanceof Date){
				result = element.toString();
			}else if(element instanceof Entry){
				for(var prop in element){
					result = result + prop.toString() + ":" + check_object(element.prop) + ',';
				}
				return result;
			}
		case "function":
			return	String(element);
	}
}



// -----------------------------------------------------------

var journal = new Journal();
var e1 = new Entry('big', 'lalalalala', 'joe');
var e2 = new Entry('small', 'lalalalala', 'jason');
var article = "If I judge my readers’ impressions correctly, I dare say that after hearing all that was said about taboo they are far from knowing what to understand by it and where to store it in their minds. This is surely due to the insufficient information I have given and to the omission of all discussions concerning the relation of taboo to superstition, to belief in the soul, and to religion. On the other hand I fear that a more detailed description of what is known about taboo would be still more confusing; I can therefore assure the reader that the state of affairs is really far from clear. We may say, however, that we deal with a series of restrictions which these primitive races impose upon themselves; this and that is forbidden without any apparent reason; nor does it occur to them to question this matter, for they subject themselves to these restrictions as a matter of course and are convinced that any transgression will be punished automatically in the most severe manner. There are reliable reports that innocent transgressions of such prohibitions have actually been punished automatically. For instance, the innocent offender who had eaten from a forbidden animal became deeply depressed, expected his death and then actually died. The prohibitions mostly concern matters which are capable of enjoyment such as freedom of movement and unrestrained intercourse; in some cases they appear very ingenious, evidently representing abstinences and renunciations; in other cases their content is quite incomprehensible, they seem to concern themselves with trifles and give the impression of ceremonials. Something like a theory seems to underlie all these prohibitions, it seems as if these prohibitions are necessary because some persons and objects possess a dangerous power which is transmitted by contact with the object so charged, almost like a contagion. The quantity of this dangerous property is also taken into consideration. Some persons or things have more of it than others and the danger is precisely in accordance with the charge. The most peculiar part of it is that any one who has violated such a prohibition assumes the nature of the forbidden object as if he had absorbed the whole dangerous charge. This power is inherent in all persons who are more or less prominent, such as kings, priests and the newly born, in all exceptional physical states such as menstruation, puberty and birth, in everything sinister like illness and death and in everything connected with these conditions by virtue of contagion or dissemination."
var e3 = new Entry('mid', article, 'khai');
e3.subtitle = "long article"



journal.addEntry(e1);
journal.addEntry(e2);
journal.addEntry(e3);
console.log(journal);
var journal_str = journal_object_to_string(journal);

localStorage.setItem("journal", journal_str);
var journal_storage = load_journal();
console.log(journal_storage);


// localStorage.clear();


