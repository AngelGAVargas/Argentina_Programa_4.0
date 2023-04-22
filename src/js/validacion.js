$(document).ready(function(){
  
  
  //captumaros el evento click del boton de formulario de contacto
  $("#btnFormcontac").click(function(){
      //llamamos al formulario por el ID
    $("#form-contacto").validate({
      //creamos un formato de reglas estilo json
      rules: {
        nombre: {
          required: true,
          minlength: 3,
          maxlength: 20
        },
        apellido: {
          required: true,
          minlength: 3,
          maxlength: 20
        },
        email: {
          required: true,
          email: true
        },
        mensaje: {
          required: true,
          minlength: 10,
          maxlength: 200
        },
      },
      messages: {
        nombre: {
          required: "Ingresa un nombre",
        },
        apellido: {
          required: "Ingresa un apellido",
        },
        email: {
          required: "Ingresa un mail",
          email: "Debe tener @"
        },
        mensaje: {
          required: "Ingresa un mensaje",
        },
      }
    });
    //llamamos al formulario para devolver un retur si no es valido
    if($("#form-contacto").valid() == false){
      return;
    }
    //gaurdamos los valores que carga el usuario en los input del formulario
    let nombrec = $("#nombrec").val();
    let apellidoc = $("#apellidoc").val();
    let emailc = $("#emailc").val();
    let mensajec = $("#mensajec").val();
    
  });


});
