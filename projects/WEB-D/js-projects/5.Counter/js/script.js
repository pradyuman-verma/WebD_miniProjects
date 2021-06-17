(function () {
	var el1=document.querySelector("#add-count");
	el1.addEventListener('click',addcount);
	function addcount() {
	 	var el=document.querySelector('#count-num');
	 	var ivalue=parseInt(el.textContent,10);
	 	el.textContent=ivalue+1;
	 	if(el.textContent>0){
	 		el.style.color='rgba(255,165,0,.7)';
	 	}
	 	if(el.textContent==0){
	 		el.style.color = "#e0e0e0";
	 	}
	 }; 

	var el2 = document.querySelector('#lower-count');
	el2.addEventListener('click', lowercount);
	function lowercount () {
		var el=document.querySelector('#count-num');
		var ivalue=parseInt(el.textContent,10);
	 	el.textContent=ivalue-1;
	 	if (el.textContent<0) {
	 		el.style.color = 'rgba(255,0,0,.6)';
	 	}
	 	if(el.textContent==0){
	 		el.style.color = "#e0e0e0";
	 	}	 		
	}
})();