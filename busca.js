pesquisa_input = document.querySelectorAll(".pesquisa");
pesquisa_lista = document.querySelectorAll(".lista");

a=0
for(i of pesquisa_input){

	i.onkeyup=function(e){

		reg = new RegExp(this.value.toLowerCase(),"g")
		lis = pesquisa_lista[a-1]


		// console.log('ok')

		console.log(pesquisa_lista[a-1])
		console.log(a)


		for(j of lis.children){
			if( !j.getAttribute("nome").match(reg) )
				j.style.display="none"
			else
				j.removeAttribute("style")
		}

	}

	a++

}
	// i.onkeyup=function(e){

	// 	console.log(this)

	// 			// reg = new RegExp(this.value.toLowerCase(),"g")
	// 			// lis = this.parentElement.querySelector(".lista")


	// 			// for(j of lis.children){
	// 			// 	if( !j.getAttribute("nome").match(reg) )
	// 			// 		j.style.display="none"
	// 			// 	else
	// 			// 		j.removeAttribute("style")
	// 			// }
	// 		}
	// 	}