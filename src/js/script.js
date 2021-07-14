window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		  menuItem = document.querySelectorAll('.menu_item'),
		  hamburger = document.querySelector('.hamburger'),
		  btnsModal = document.querySelectorAll('.subheader_btn, .promo_btn, #menu_request'),
		  modal = document.querySelector('.overlay'),
		  closeModal = document.querySelector('.modal__close'),
		  form = document.querySelector('.feed-form');


	toggleActiveModal = () => {
		modal.classList.remove('active');
		document.body.style.overflow = "";
	}

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});	
	menuItem.forEach((item) => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		});
	});
	btnsModal.forEach((btn) => {
		btn.addEventListener('click', () => {
			modal.classList.add('active');
			document.body.style.overflow = "hidden";
		})
	})
	closeModal.addEventListener('click', toggleActiveModal)

	window.addEventListener('click', (e) => {
		if (e.target.classList.contains('active')) {
			toggleActiveModal()
		}
	})

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let formData = new FormData(form)

		fetch('mailer/smart.php', {
			method: 'POST',
			body: formData,
		})
		.then (() => {
			toggleActiveModal()
			alert('Запрос отправлен');
		})
		.catch(() => {
			alert('Произешел сбой при отправке данных');
		})
		.finally(() => {
			form.reset();
		})
	});

	// async function formSend(e) {
	// 	e.preventDefault();

	// 	let formData = new FormData(form)

	// 	let response = await fetch('mailer/smart.php', {
	// 		method: "POST",
	// 		body: formData,
	// 	})







	// fetch('https://jsonplaceholder.typicode.com/posts', {
	// 		method: "POST",
	// 		body: JSON.stringify({name:'Dima'}),
	// 		headers: {
	// 			'Content-type': 'application/json'
	// 		}
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => console.log(json))
	
});
