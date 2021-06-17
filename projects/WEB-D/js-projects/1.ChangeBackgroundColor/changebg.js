function changebg () {
	var el=document.querySelector('button').addEventListener('click', function(){
		var el1=document.querySelector('#cbc');
		var bgclr = ['violet','blue','indigo','green','yellow','orange','red','black','pink', 'purple'];
		function color_indexx (){
			var color_index = Math.floor(Math.random()*bgclr.length);
			return color_index;
		};

		el1.style.backgroundColor = bgclr[color_indexx()];
	});
}
