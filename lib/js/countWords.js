var sentences = document.querySelector('#sentences')
var btnCount = document.querySelector('.btnCount')


function countLetters(sentences){
	nbLetters = sentences.value.length
	return nbLetters
}

function countWords(sentences){
	nbWords = sentences.value.split(' ').length
	return nbWords
}

function affichage(nbLetters,nbWords){
	var div = document.createElement('div')
	div.classList.add('Words')
	div = formCountWords.appendChild(div)
	div.innerHTML = sentences.value

	var spanLetter = document.createElement('span')
	spanLetter.classList.add('countLetters')
	spanLetter = div.appendChild(spanLetter)	
	spanLetter.innerHTML = nbLetters + ' lettre'+((nbLetters>1)?'s':'')

	var spanWord = document.createElement('span')
	spanWord.classList.add('countWords')
	spanWord = div.appendChild(spanWord)	
	spanWord.innerHTML = nbWords + ' mot'+((nbWords>1)?'s':'')
}

btnCount.addEventListener('click',function(){
	nbLetters = countLetters(sentences)
	nbWords = countWords(sentences)
	affichage(nbLetters,nbWords)
})