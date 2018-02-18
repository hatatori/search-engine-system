
	function getgo(a,b){

		a = document.getElementById(a);
		b = document.getElementById(b);

		len = b.children.length;

		a.onkeyup=function(){
			
			val = this.value.toLowerCase();

			for(i=0;i<len;i++){
			
			re = new RegExp(val,"g")

				v = b.children[i].outerHTML.toLowerCase();
				
				s = v.match(re);				
				
				if( s != null )
					b.children[i].removeAttribute('style','comum');
				else
					b.children[i].style.display='none';
			}
		}
	}

	getgo('fin','rfin');
