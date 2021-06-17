(function () {	
	var imagesarr=['img1.jpeg','img2.jpg','img3.jpg','img4.jpeg'];
	var count=0;
	var el1=document.querySelector('#left');
	el1.addEventListener('click', previmage);
	function previmage () {
		var el=document.querySelector('#img');		
	 	count-=1;
	 	if (count<0) {
	 		count=imagesarr.length-1;
	 	}
	 	var furl = '../6.BackgroundImageSlider/images/'+imagesarr[count];
	 	console.log(furl);
	 	el.style.backgroundImage = 'url(' + furl + ')';
	 	var furl='';
	 };

	var el1=document.querySelector('#right');
	el1.addEventListener('click', nextimage);
	function nextimage () {
		var el=document.querySelector('#img');		
	 	count+=1;
	 	if (count>3) {
	 		count=0;
	 	}
	 	var furl = '../6.BackgroundImageSlider/images/'+imagesarr[count];
	 	console.log(furl);
	 	el.style.backgroundImage = 'url(' + furl + ')';
	 	var furl='';
	 };
})();