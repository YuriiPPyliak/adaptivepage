	$(document).ready(function(){
	$('.gallery').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
			});
			});
				
	$('.gallery').slick({
	dots: true,
	arrows: false,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
	breakpoint: 1199,
	settings: {
	slidesToShow: 2,
	slidesToScroll: 1
		}
		},
		{
	breakpoint: 1023,
	settings: {
	slidesToShow: 1,
	slidesToScroll: 1
		}
		}
		]
		});
		
	const btn__burger = document.querySelector('#btn-burger');
        const btn__close = document.querySelector('#btn-close');
        const header = document.querySelector('#header');
        btn__burger.addEventListener('click', function () {
            header.classList.add('menu-open');
            btn__close.addEventListener('click', function () {
                header.classList.replace('menu-open', 'header')
            })
        })