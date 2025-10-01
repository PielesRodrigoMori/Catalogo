     function validarFormulario() {
      enviar.disabled = !(nombre.value.trim() && email.value.trim() && comentario.value.trim());
    }

    nombre.addEventListener('input', validarFormulario);
    email.addEventListener('input', validarFormulario);
    comentario.addEventListener('input', validarFormulario);

	let abrigoData = {
	"nut0101": {
    "imagen": "nut0101.png",
    "titulo": "Nutria Negra",
    "codigo": "ast0101",
    "descripcion": "Abrigo de nutria ajustado"
  },
  "lie0101": {
    "imagen": "lie0101.png",
    "titulo": "Liebre",
    "codigo": "lie0101",
    "descripcion": "Abrigo de liebre marrón"
  },
  "cab0101": {
    "imagen": "cab0101.png",
    "titulo": "Cabrito listado",
    "codigo": "cab0101",
    "descripcion": "Abrigo de cabrito largo"
  },
  "cab0201": {
    "imagen": "cab0201.png",
    "titulo": "Cabrito gris",
    "codigo": "cab0201",
    "descripcion": "Abrigo de cabrito gris"
  },
  "ast0401": {
    "imagen": "ast0401.png",
    "titulo": "Astracán negro",
    "codigo": "ast0401",
    "descripcion": "Abrigo de astracán negro largo "
  },
  "ast0301": {
    "imagen": "ast0301.png",
    "titulo": "Astracán Negro",
    "codigo": "ast0301",
    "descripcion": "Abrigo de astracán negro largo"
  },
   "ast0201": {
    "imagen": "ast0201.png",
    "titulo": "Astracán Negro cuello café",
    "codigo": "ast0201",
    "descripcion": "Abrigo de astracán negro medio cuerpo"
  },
  "vis0201": {
    "imagen": "vis0201.png",
    "titulo": "Visón corto",
    "codigo": "vis0201",
    "descripcion": "Abrigo de visón medio cuerpo"
  },
  "vis0301": {
    "imagen": "vis0301.png",
    "titulo": "Visón 3 cortes",
    "codigo": "vis0301",
    "descripcion": "Abrigo de visón de 3 largos opcionales"
  },
  "vis0101": {
    "imagen": "vis0101.png",
    "titulo": "Visón negro",
    "codigo": "vis0101",
    "descripcion": "Abrigo de visón negro largo"
  },
  "mus0101": {
    "imagen": "mus0101.png",
    "titulo": "Muskrat corto",
    "codigo": "mus0101",
    "descripcion": "Abrigo de Muskrat medio cuerpo"
  },
  "mus0201": {
    "imagen": "mus0201.png",
    "titulo": "Muskrat largo",
    "codigo": "mus0201",
    "descripcion": "Abrigo de Muskrat largo estilo bata"
  },
  "zor0501": {
    "imagen": "zor0501.png",
    "titulo": "Zorro corto",
    "codigo": "zor0501",
    "descripcion": "Abrigo de zorro medio cuerpo"
  },
  "zor0401": {
    "imagen": "zor0401.png",
    "titulo": "Zorro corto",
    "codigo": "zor0401",
    "descripcion": "Abrigo de zorro medio cuerpo"
  },
  "zor0101": {
    "imagen": "zor0101.png",
    "titulo": "Zorro corto",
    "codigo": "zor0101",
    "descripcion": "Abrigo de zorro rojo medio cuerpo"
  },
   "zor0601": {
    "imagen": "zor0601.png",
    "titulo": "Zorro beige",
    "codigo": "zor0601",
    "descripcion": "Abrigo de Zorro beige con capucha"
  },
  "zor0201": {
    "imagen": "zor0201.png",
    "titulo": "Zorro plateado",
    "codigo": "zor0201",
    "descripcion": "Abrigo de Zorro plateado"
  }
 };


    // Cargar JSON al inicio
    ///   fetch('script/datos_abrigos.json')
    //  .then(response => response.json())
   // .then(data => {
        // Asignar los datos
    //      abrigoData = data;
        // Mostrar la galería solo después de que los datos se han cargado
    //    document.querySelector('.gallery').style.display = 'flex';
   // })
   // .catch(error => {
    //    console.error("Error cargando el JSON:", error);
  //      alert("Hubo un error al cargar la información. Por favor, intente de nuevo más tarde.");
  //  });

   function openPopup(imgElement) {
    const fullName = imgElement.dataset.base;   // "ast0101"
    const base = fullName.slice(0, -2);          // "ast01"

    const info = abrigoData[fullName];
	//alert(info);
    if (!info) {
      alert("No se encontró información para " + fullName);
      return;
    }

    // Rellenar texto
    document.getElementById("popup-title").textContent = info.titulo;
    document.getElementById("popup-code").textContent = "Código: " + info.codigo;
    document.getElementById("popup-description").textContent = info.descripcion;

    // Cargar imágenes relacionadas
    const container = document.getElementById('popup-images');
    container.innerHTML = '';

    for (let i = 1; i <= 4; i++) {
      const num = i.toString().padStart(2, '0');
      const img = document.createElement('img');
      img.src = `imagenes/${base}${num}.png`;
      img.alt = `${base}${num}`;
      img.style.width = '45%';
      img.style.borderRadius = '8px';
      container.appendChild(img);
    }

    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  function enviarFormulario(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const comentario = document.getElementById('comentario').value;
  
  const templateParams = {
    from_name: nombre,
    from_email: email,
    phone: telefono,
    message: comentario,
    subject:"Correo de contacto " + nombre + " - Teléfono : " + telefono
  };

    emailjs.send('service_eep36ct', 'template_9523ntc', templateParams)
    .then(function(response) {
      alert("Formulario enviado correctamente.");
      console.log('SUCCESS!', response.status, response.text);
	  // El método más sencillo y limpio es usar el método .reset() del elemento form.
      if (formulario) {
          formulario.reset(); 
      }
      // -------------------------------------

    }, function(error) {
      alert("Error al enviar el formulario.");
      console.log('FAILED...', error);
    });
}



