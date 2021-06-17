function changebg () {
	var el = document.querySelector('button').addEventListener('click', changehex);

	var hexc=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

	function changehex () {
		var hex="#";

		for (var i = 0; i <6; i++) {
				var index 
				index = Math.floor(Math.random()*hexc.length);
				hex+= hexc[index];
			};
		el1 = document.querySelector('#hex-c');
		el1.textContent = "HEX CODE :"+ hex	;
		el2 = document.querySelector('#cbc');
		el2.style.backgroundColor = hex;	
	};
}