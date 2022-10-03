window.addEventListener('load', function() {
	let countUser = document.querySelector('.count-user'),
	countComp = document.querySelector('.count-comp'),
	userField = document.querySelector('.user-field'),
	compField = document.querySelector('.comp-field'),
	res  = document.querySelector('.result'),
	play  = document.querySelector('.play'),
	fields = document.querySelectorAll('.field'),
	userStep, compStep, countU = 0, countC = 0, blocked = false;

	function choiceUser(e) {
		if (blocked) return;
		let target = e.target;
		if (target.classList.contains('field')) {
			userStep = target.dataset.field;
			fields.forEach(item => item.classList.remove('active', 'error'));
			target.classList.add('active');
			choiceComp();
		}
	}

	function choiceComp() {
		blocked = true;
		let rand = Math.floor(Math.random() * 3);
		compField.classList.add('blink');
		let compFields = compField.querySelectorAll('.field');

		setTimeout (() => {
			compField.classList.remove('blink');
			compStep = compFields[rand].dataset.field;
			compFields[rand].classList.add('active');
			winner();
		},2000);
	}

	function winner() {
		blocked = false;

		let comb = userStep + compStep;

		switch (comb) {
			case 'rr':
			case 'ss':
			case 'pp':
				res.innerText = 'Draw!';
				break;

			case 'rs':
			case 'sp':
			case 'pr':
				res.innerText = 'Victory!';
				countU++;
				countUser.innerText = countU;
				compField.querySelector('[data-field='+compStep+']').classList.add('error');
				break;

			case 'sr':
			case 'ps':
			case 'rp':
				res.innerText = 'Loser!';
				countC++;
				countComp.innerText = countC;
				userField.querySelector('[data-field='+userStep+']').classList.add('error');
				break;
		}
	}

	function playGame() {
		countU = countC = 0;
		res.innerText = 'Make a choice';
		countUser.innerText = '0';
		countComp.innerText = '0';
		fields.forEach(item => item.classList.remove('active', 'error'));
	}

	play.addEventListener('click', playGame);
	userField.addEventListener('click', choiceUser);
});

window.onload = function () {
	const parallax = document.querySelector('.user-field');

		if (parallax){

			const fields = document.querySelector('.rock');

			const forFieldsX = 10;
			const forFieldsY = 10;

			const speed = 0.4;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setMouseParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				fields.style.cssText = `transform: translate(${positionX / forFieldsX}%, ${positionY / forFieldsY}%);`;

				requestAnimationFrame(setMouseParallaxStyle);
			}
			setMouseParallaxStyle (); 

			fields.addEventListener('mousemove', function (e) {
				const parallaxWidth = parallax.offsetWidth;
				const parallaxHeight = parallax.offsetHeight;

				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - parallaxHeight / 2;

				coordXprocent = coordX / parallaxWidth * 100;
				coordYprocent = coordY / parallaxHeight * 100;
			});
		}
}

window.addEventListener('load', function () {
	const parallax = document.querySelector('.user-field');

		if (parallax){

			const fields = document.querySelector('.scissors');

			const forFieldsX = 10;
			const forFieldsY = 10;

			const speed = 0.4;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setMouseParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				fields.style.cssText = `transform: translate(${positionX / forFieldsX}%, ${positionY / forFieldsY}%);`;

				requestAnimationFrame(setMouseParallaxStyle);
			}
			setMouseParallaxStyle (); 

			fields.addEventListener('mousemove', function (e) {
				const parallaxWidth = parallax.offsetWidth;
				const parallaxHeight = parallax.offsetHeight;

				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - parallaxHeight / 2;

				coordXprocent = coordX / parallaxWidth * 100;
				coordYprocent = coordY / parallaxHeight * 100;
			});
		}
});

window.addEventListener('load', function () {
	const parallax = document.querySelector('.user-field');

		if (parallax){

			const fields = document.querySelector('.paper');

			const forFieldsX = 10;
			const forFieldsY = 10;

			const speed = 0.4;

			let positionX = 0, positionY = 0;
			let coordXprocent = 0, coordYprocent = 0;

			function setMouseParallaxStyle() {
				const distX = coordXprocent - positionX;
				const distY = coordYprocent - positionY;

				positionX = positionX + (distX * speed);
				positionY = positionY + (distY * speed);

				fields.style.cssText = `transform: translate(${positionX / forFieldsX}%, ${positionY / forFieldsY}%);`;

				requestAnimationFrame(setMouseParallaxStyle);
			}
			setMouseParallaxStyle (); 

			fields.addEventListener('mousemove', function (e) {
				const parallaxWidth = parallax.offsetWidth;
				const parallaxHeight = parallax.offsetHeight;

				const coordX = e.pageX - parallaxWidth / 2;
				const coordY = e.pageY - parallaxHeight / 2;

				coordXprocent = coordX / parallaxWidth * 100;
				coordYprocent = coordY / parallaxHeight * 100;
			});
		}
});
	