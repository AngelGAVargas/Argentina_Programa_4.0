//Creamos los parametros de validacion para el formulario
const constraints = {
    nombre: {
      presence: true,
    },
    apellido: {
      presence: true,
    },
    email: {
      presence: true,
      email: true,
      message: "Debe ser una dirección de correo válida"
    },
    mensaje: {
      presence: true,
    },
};  
 //obtenemos los valores del formulario
const form = document.getElementById('form-contacto');

//creamos la validacion a partir del clic en el boton "enviar"

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const formData = new FormData(form);

    const errors = validate(Object.fromEntries(formData.entries()), constraints);
  
    if (errors) {
      const errorMensaje = Object.values(errors).map(
        (value) => value.join(" ")
      );
      const errorParrafo = document.querySelector("#error-mensaje");
      errorParrafo.textContent = errorMensaje.join("\n");
    } else {
      form.submit();
    }
});
