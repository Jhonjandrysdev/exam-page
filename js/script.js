const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flechaizquierda');
const flechaDerecha = document.getElementById('flechaderecha');

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 8);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// <--------- VALIDACION FORMULARIO ---------------->

const form = document.getElementById('myForm');
const errorMessage = document.getElementById('mensaje')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('nombre').value.trim(); 
    const email = document.getElementById('correo').value.trim();
    
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = ''; 
    
    // Validación
    if (!name || name.length < 3) {
      // Si el nombre es vacío o tiene menos de 3 caracteres
      errorMessage.innerHTML = 'Por favor, ingresa un nombre válido';
      errorMessage.style.display = 'block'; // Mostrar el mensaje de error
      return; // No continuar con el envío del formulario
    }
    
    if (!email || !email.includes('@')) {
      // Si el correo está vacío o no contiene el carácter '@'
      errorMessage.innerHTML = 'Por favor, ingresa un correo válido.';
      errorMessage.style.display = 'block'; // Mostrar el mensaje de error
      return; // No continuar con el envío del formulario
    }
    
    // Si ambos campos son válidos, enviar el formulario
    console.log('Nombre:', name);
    console.log('Correo:', email);
    alert("Bienvenido " + email)
    form.submit(); 
  });