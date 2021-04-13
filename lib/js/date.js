var date = new Date()

Jour = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
Mois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]

function ajoutMois(){

	mois = document.querySelector('.mois')
	span = document.createElement('span')
	span.classList.add('valeurMois')
	mois.appendChild(span)

	span.innerHTML= Mois[date.getMonth()].toUpperCase()

}


function ajoutJour(){
	jour = document.querySelector('.jour')
	chiffre = document.querySelector('.chiffre')


	

	jour.innerHTML = Jour[date.getDay()-1]
	chiffre.innerHTML = date.getDate()

}

function ajoutAnnee(){
	annee = document.querySelector('.annee')

	annee.innerHTML = date.getFullYear()
	
}





ajoutMois()
ajoutJour()
ajoutAnnee()






