var word = document.querySelector('#word')
var btn = document.querySelector('.btnTest')




function testPalindrome(){
	var mot = word.value.toUpperCase()
	var reverseMot = ''
	
	for(var i = mot.length-1; i >= 0 && mot.length>1; i--){
		
		reverseMot = reverseMot + mot[i]
		console.log(reverseMot)
	}
	
	if (mot == reverseMot ) {
		alert("Ce mot est un palindrome")
	}
	else{
		alert("Ce mot n'est pas un palindrome")
	}


	

	
}

btn.addEventListener('click',testPalindrome)