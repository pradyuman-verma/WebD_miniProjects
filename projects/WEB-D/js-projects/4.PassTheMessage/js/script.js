(function (){
	var el = document.querySelector('button').addEventListener('click', messageback);
	function messageback () {
		var el2 = document.querySelector('input');
		if(el2.value == ""){
			setTimeout(commandthis, 250);
			function commandthis(){
				alert('Message you entered is invalid ')
			}
		}
		else{
		var message = el2.value;
		el2.value= "";
		var el3 = document.querySelector('#inbox');
		el3.textContent = message ; 
	}
	};

})();