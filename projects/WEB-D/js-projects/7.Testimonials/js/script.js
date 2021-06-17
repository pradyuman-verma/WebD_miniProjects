(function () {
	var arr=['customer1','customer2','customer3','customer4','customer5'];
	var name = ['tyrell','mia','julia','robert','rohit'];
	var msg = ["There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
				'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'
				,"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."]
	el=document.querySelector('#left'); 
	el.addEventListener('click', leftbtn);
	var index = 0;
	function leftbtn () {
		var el1=document.querySelector('#cus-img');
		var el2=document.querySelector('#cus-name');
		var el3=document.querySelector('#writebox');
		index-=1;
		if(index<0){
			index=arr.length-1;
		}
		var loc = "../7.Testimonials/images/" + arr[index] + ".jpeg";
		el2.textContent = name[index];
		el3.textContent= msg[index];
		el1.style.backgroundImage = 'url(' + loc + ')';
		var loc='';
	};

	el=document.querySelector('#right'); 
	el.addEventListener('click', rightbtn);
	function rightbtn () {
		var el1=document.querySelector('#cus-img');
		var el2=document.querySelector('#cus-name');
		var el3=document.querySelector('#writebox');
		index+=1;
		if(index>arr.length-1){
			index=0;
		}
		var loc = "../7.Testimonials/images/" + arr[index] + ".jpeg";
		el2.textContent = name[index];
		el3.textContent= msg[index];
		el1.style.backgroundImage = 'url(' + loc + ')';
		var loc='';
	};

})();