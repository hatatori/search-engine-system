pesquisa_input = document.querySelectorAll(".pesquisa");

	for(i in pesquisa_input){
		
			pesquisa_input[i].onkeyup=function(e){

				reg = new RegExp(this.value.toLowerCase(),"g")
				lis = this.parentElement.querySelector(".lista")

				console.log(lis)

				for(j of lis.children){
					if( !j.getAttribute("nome").match(reg) )
						j.style.display="none"
					else
						j.removeAttribute("style")
				}
			}
	}