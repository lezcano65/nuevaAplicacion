const tipoLetra = document.getElementById('tipo_letra');
const contenido = document.getElementById('contenido');

tipoLetra.addEventListener('change', () => {
  const seleccionado = tipoLetra.value;
  contenido.className = 'tipo_letra';
  if (seleccionado === 'tipo1') {
    contenido.classList.add('tipo1');
  } else if (seleccionado === 'tipo2') {
    contenido.classList.add('tipo2');
  } else if (seleccionado === 'tipo3') {
    contenido.classList.add('tipo3');
  }
});