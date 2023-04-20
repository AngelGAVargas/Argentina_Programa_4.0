$(document).ready(function() {
    $('#iniciar-cotizacion').click(function(e){
        e.preventDefault();
        $(".coti-1").fadeOut("slow", function() {
            $(".coti-2").fadeIn("slow");
        });
    });

    $('#coti-1').click(function(e){
        e.preventDefault();
        $(".coti-2").fadeOut("slow", function() {
            $(".coti-3").fadeIn("slow");
        });
    });

    $('#coti-2').click(function(e){
        e.preventDefault();
        $(".coti-3").fadeOut("slow", function() {
            $(".coti-4").fadeIn("slow");
        });
    });

    $('#enviar').click(function(e){
        e.preventDefault();
        $(".coti-4").fadeOut("slow", function() {
            $(".coti-5").fadeIn("slow");
        });
        mostrarResumen();
    });
    function mostrarResumen() {
        // capturamos los datos de los formularios
        var datosFormulario1 = $('#coti-form-1 form').serializeArray();
        var datosFormulario2 = $('#coti-form-2 form').serializeArray();
        var datosFormulario3 = $('#coti-form-3 form').serializeArray();
      
        // generamos el resumen en pantalla
        var resumen = '<h3>Resumen de datos</h3>';
        resumen += '<ul>';
        datosFormulario1.forEach(function(dato) {
          resumen += '<li>' + dato.name + ': ' + dato.value + '</li>';
        });
        datosFormulario2.forEach(function(dato) {
          resumen += '<li>' + dato.name + ': ' + dato.value + '</li>';
        });
        datosFormulario3.forEach(function(dato) {
            resumen += '<li>' + dato.name + ': ' + dato.value + '</li>';
          });
        resumen += '</ul>';
        resumen += '<button id="btnDescargar">Descargar PDF</button>';
        $('#resumen').html(resumen);
      
        // agregamos un evento de clic al botón de descargar en PDF
        $('#btnDescargar').click(function(e) {
          e.preventDefault();
          descargarPDF();
        });
      }
      
      function descargarPDF() {
        const { jsPDF } = window.jspdf;    
        // Crear un objeto jsPDF
        const doc = new jsPDF();
   
        // Obtener los datos del formulario
        let nombre = $(".name").val();
        let apellido = $(".apellido").val();
        let email = $(".email").val();
        let telefono = $("#telefono").val();
        let idea = $("#idea").val();
        let servicio = $("#servicio").val();
        let fecha = $("#fecha").val();
        let presupuestoMax = $("#presupuesto-max").val();
   
        // Agregar los datos al PDF
        doc.text("RUBYTEC", 10, 10);
        doc.text("Resumen de cotizacion:", 10, 20);
        doc.text("Nombre: " + nombre, 10, 30);
        doc.text("Apellido: " + apellido, 10, 40);
        doc.text("Email: " + email, 10, 50);
        doc.text("Telefono: " + telefono, 10, 60);
        doc.text("Idea: " + idea, 10, 70);
        doc.text("Servicio: " + servicio, 10, 80);
        doc.text("Fecha estimada: " + fecha, 10, 90);
        doc.text("Monto maximo: $ " + presupuestoMax, 10, 100);
   
        // Descargar el PDF
        doc.save("resumen_de_cotizacion.pdf");
    };
      
   
  });
  