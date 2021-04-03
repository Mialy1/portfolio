var valeur = document.querySelector('#toDo')
console.log(valeur.value)

var btnAdd = document.querySelector('.btnAdd')

function addToDoList(){
	var div = document.createElement('div')
	var span = document.createElement('span')

	div.classList.add('createToDoList')
	span.classList.add('task')
	span.innerHTML = valeur.value
	div.appendChild(span)
	div = formTodoList.appendChild(div)


	

	var checkbox = document.createElement('input')
	checkbox.setAttribute("type","checkbox")
	checkbox.classList.add('checkbox')
	div.appendChild(checkbox)

	var supprimer = document.createElement('button')
	supprimer.classList.add('btnDelete')

	supprimer = div.appendChild(supprimer)
	supprimer.innerText = "supprimer"

	
	
}

function getBtnDelete(){
	var btnsDelete = document.querySelectorAll('.btnDelete')

	for (var i = 0; i < btnsDelete.length; i++) {
		btnsDelete[i].addEventListener('click',function(){
			this.parentElement.remove()
		})
	}
}


function checkTask(){
	var checkbox = document.querySelectorAll('.checkbox')
	console.log(checkbox.length)
	for(var j = 0; j < checkbox.length; j++){

		
		
			checkbox[j].addEventListener('change',function(){
			span = this.previousElementSibling
			console.log(span)

			if (this.checked == true) {
				span.classList.add('checked')
			}
			else{
				span.classList.remove('checked')
			}


		})

	}
}


btnAdd.addEventListener('click', function(){
	addToDoList()
	getBtnDelete()
	checkTask()
})
