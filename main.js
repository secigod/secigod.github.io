$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} 
		$('.submenu').click(function(){
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		});
	});

	// Mostramos y ocultamos submenus
	
}
