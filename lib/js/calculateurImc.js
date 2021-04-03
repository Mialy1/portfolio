var poidsElement = document.querySelector('#poids')
var tailleElement = document.querySelector('#taille')
var btnImc = document.querySelector('.btnImc')

function roundDecimal(result){
	
	resultat = Math.round(result*100)/100
	
}


function calculImc(){
	poids = poidsElement.value
	taille = tailleElement.value

	result = poids/(Math.pow(taille,2))
	return result
}


function afficheImc(resultat){
	div = document.createElement('div')
	div.classList.add('divPoids')
	div = formCalculImc.appendChild(div)
	div.innerHTML = poids+" Kg"

	spanTaille = document.createElement('span')
	spanTaille.classList.add('divTaille')
	spanTaille = div.appendChild(spanTaille)
	spanTaille.innerHTML = taille+"m"

	spanImc = document.createElement('span')
	spanImc.classList.add('imc')
	spanImc = div.appendChild(spanImc)
	spanImc.innerHTML = "Imc = "+ resultat

	spanImcConstat = document.createElement('span')
	spanImcConstat.classList.add('imcConstat')
	spanImcConstat = div.appendChild(spanImcConstat)

	if(resultat<18.5){
		spanImcConstat.innerText = "Insuffisance ponderale (maigreur)"
	}
	else if(resultat >= 18.5 && resultat<25){
		spanImcConstat.innerText = "Corpulence normale"
	}
	else if (resultat >= 25 && resultat<30) {
		spanImcConstat.innerText = "Surpoids"
	}
	else if(resultat >= 30 && resultat<35){
		spanImcConstat.innerText = "Obesité modéré"
	}
	else if(resultat >= 35 && resultat<40){
		spanImcConstat.innerText = "Obesité severe"
	}
	else{
		spanImcConstat.innerText = "Obesité morbide ou massive "
	}
}

btnImc.addEventListener('click',function(){
	result = calculImc()
	roundDecimal(result)
	afficheImc(resultat)
})