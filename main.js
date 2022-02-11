
const img3 = document.getElementById('barb');
const info = document.getElementById('info');

const cargarImagen = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '000px 0px 100px 0px',
	threshold: 1.0
});


observador.observe(barb);
observador.observe(info);

