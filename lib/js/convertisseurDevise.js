var moneyElement = document.querySelector('#money')
var btnConvert = document.querySelector('.btnConvert')

function roundVola(vola){
	
	resultat = Math.round(vola*100)/100
	
}

function conversion(){
	vola = parseInt(moneyElement.value)
	vola = vola/4500
	return vola
}

function affichageArgent(resultat){
	div = document.createElement('div')
	div.classList.add('vola')
	div = formConvertisseur.appendChild(div)
	div.innerHTML = moneyElement.value+" Ariary:"

	span = document.createElement('span')
	span.classList.add('money')
	span = div.appendChild(span)
	
	span.innerHTML = resultat +" Euros"
}

btnConvert.addEventListener('click',function(){
	vola = conversion()	
	roundVola(vola)
	affichageArgent(resultat)
})