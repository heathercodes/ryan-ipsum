var ryanIpsum = {};

ryanIpsum.quotes = [
	'scoot', 
	'woof', 
	'oopsy doodle',
	'milk, bread, cheese',
	'international coffee time',
	'very important time',
	'art', 
	'just like how the call is coming from inside the apartment',
	'rude monkey tho',
	'full hog',
	'angry threatened swan',
	'wheres the bears',
	'woof indeed!',
	'bonkers',
	'NAILED IT!',
	'git it?',
	'do a clearfix on that badboy',
	'doo dod o oooo dooolooo',
	'we made a boo boo',
	'kids on the bench, waiting for the cheese',
	'What the heck is it?',
	'this fun coloured one… I can’t wait for the day',
	'you ready for this',
	'whaaaaaat?!',
	'were gonna write this in es6, is that okay?',
	'baaaaahbel... baybel?',
	'people call it es6 forever and always',
	'jumping the gun',
	'six in one, half a dozen in the other',
	'this hotdogs really come through today',
	'and there will be no fanfare because that’s how the command line treats you',
	'git collabo',
	'*fart noise* oops hit the wrong button',
	'welcome to the danger zone',
	'neato',
	'burgunday',
	'there’s a wave in this screen',
	'blamo',
	'hit me with a pwd',
	'Get cider, get footer',
	'loopyloop',
	'THERE ARE SO MANY NAMES OF THINGS',
	'dive into the loop',
	'it’s like solving a dungeons and dragons problem',
	'no? nah, it’s cool whatever',
	'sorry, texting my mom',
	'oh that\'s my mom calling',
	'lets add an image, whoa I’m so excited',
	'I\'m gonna write a book on that I think',
	'doo doo',
	'an array!',
	'* hand claps *',
	'password very strong, 10/10, would use again',
	'lets connect this badboy up',
	'let\’s connect all this bad stuff up! I dont know what that meant',
	'should have cleaned out my downloads, feel so bad',
	'anyone like this jam?',
	'crushed it',
	'...no? ... okay... MOVING ON',
	'lets google "how often do babies barf?"',
	'he did go pretty hog on that bottle',
	'BLAMO',
	'clap clap clap clap clap',
	'badboy',
	'WILDCARD!'
]

ryanIpsum.randomizer = function (min, max) {
	return Math.floor(Math.random()*(max - min + 1)) + min;
}

//when user selects number of paragraphs
//and selects size of paragraphs
//value of both number (1 to 6) and size (small, medium, large) from the inputs = the content they receive
$('form').submit(function(e) {
	e.preventDefault();
	var paragraphs = $('.num').val();
	var size = $('.size').val();

	// establish: how many words in a sentence (3-10) -- randomize plus insert ','
	var minWord = 3;
	var maxWord = 10;
	var randomizer = Math.floor(Math.random()*(maxWord - minWord + 1)) + minWord;

	// how the functions work: once we receive the inputs, 
	// size: tells the function how many sentences it needs to create

	for (i = 0; i > randomizer; i++) {
		var sentence = Math.floor(Math.random() * ryanIpsum.quotes.length);
		console.log(sentence);
	}

	// size variable determines how many sentences in a paragraph, needs to talk to the randomizer to determine how many words will be in a sentence
	// from there, number of paragraphs determines how many times the paragraph size function runs
});


//length of paragraphs
//small = 2 sentences
//med = 6 sentences
//large = 12 sentences

//on submit, text is displayed on page
//plus copy and paste option at bottom -- revealed only on submit (handlebars time)


// number: tells the function how many times it needs to run to create new paragraphs -- a loop here

//plus konami code for ryan vid

// ryanIpsum.words.length



ryanIpsum.init = function() {

}

$(function() {
	ryanIpsum.init()
});


