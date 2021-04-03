
var inputNombre = document.querySelector('#number')
var btnPlay = document.querySelector('#play')

function countDown(){
	nombre = nombre - 1
	var numberCountDown = document.querySelector('.numberCountDown')
	numberCountDown.innerHTML = nombre 
	if(nombre === 0){
		numberCountDown.innerHTML = "Vita!!!!"
		window.clearInterval(timer)
	}
}

function replaceInputByDiv(){
	var div = document.createElement('div')
	div.classList.add('numberCountDown')

	inputNombre.replaceWith(div)
	
	
}

play.addEventListener('click',function (){
	nombre = parseInt(inputNombre.value)

	replaceInputByDiv()
	btnPlay.remove()
	timer = window.setInterval(countDown,1000)
})


