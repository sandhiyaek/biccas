window.addEventListener('load', function () {
	const html = document.querySelector('html');

	// Mobile navigation
	if (document.querySelector('.menu-trigger')) {
		const menuTrigger = document.querySelector('.menu-trigger');
		menuTrigger.addEventListener('click', function () {
			html.classList.toggle('menu-active');
		});
	}

	// Header scroll
	if (window.innerWidth > 768) {
		window.addEventListener('scroll', function () {
			const header = document.querySelector('.site-header');
			if (window.scrollY >= 100) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
		});
	}

	// Modal box
	if (document.querySelector('.modal')) {
		const btnModal = document.querySelector('.btn-modal');
		const modal = document.querySelector('.modal');
		const modalCloser = modal.querySelector('.modal-overlay');
		btnModal.addEventListener('click', function () {
			modal.classList.add('visible');
		});
		modalCloser.addEventListener('click', function () {
			modal.classList.remove('visible');
		});
	}
});
