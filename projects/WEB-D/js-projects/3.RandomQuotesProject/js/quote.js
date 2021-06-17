(function () {

		var el1 = document.querySelector('button').addEventListener('click', changequote);
		var quote_container=["A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
								"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all.",
								"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got.",
								'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.', 
								'The price of anything is the amount of life you exchange for it.'];
		var author_name=['Tyne Daly','John Kenneth Galbraith','life','Charles Lindbergh','David Thoreau'];

		function changequote () {
			var index = Math.floor(Math.random()*quote_container.length);
			var el2 = document.querySelector('#quote');
			el2.textContent = quote_container[index];
			var el3= document.querySelector('#author');
			el3.textContent = author_name[index];
		};
})();