

	var date = new Date()

	heure = date.getHours()
	minute = date.getMinutes()
	seconde = date.getSeconds()

function horloge(){

	if (seconde == 60) {
		seconde = 0
		minute = minute + 1
		if (minute == 60) {
			minute = 0 
			heure = heure + 1
		}
	}

	heureValue = document.querySelector('.heureValue')
	minuteValue = document.querySelector('.minuteValue')
	secondeValue = document.querySelector('.secondeValue')
	
	heureValue.innerHTML = (heure<10) ? "0" + heure : heure
	minuteValue.innerHTML = (minute<10) ? "0" + minute : minute
	secondeValue.innerHTML = (seconde<10) ? "0" + seconde : seconde
	seconde = seconde + 1 

}

window.setInterval(horloge,1000)



