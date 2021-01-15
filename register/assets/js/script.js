const navSlide = () => {
	const burger = document.querySelector('.menu');
	const nav = document.querySelector('.responsive-menu');
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
	});

}
navSlide();