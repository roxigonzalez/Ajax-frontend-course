$(document).ready(function() {
  $("#comprobar").click(function(e) {
    e.preventDefault();
    console.log("hizo clic");
    $.ajax({
      url: "../servidor/compruebaDisponibilidad.php",
      type: "post",
      data: { nombre: $("#login").val() },
      success: function(result) {
        console.log(result);
        $("#disponibilidad").html($("<p>El resultado fue:" + result + "</p>"));
      }
    });
  });
});
