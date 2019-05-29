$("#boton-usuarios").on("click", getUsers);

function getUsers() {
  $.ajax({
    url: "https://reqres.in/api/users",
    success: function(respuesta) {
      var listaUsuarios = $("#lista-usuarios");
      for (var i = 0; i < respuesta.data.length; i++) {
        var elemento = respuesta.data[i];
        console.log(elemento);
        listaUsuarios.append(
          "<div>" +
            "<p>" +
            elemento.first_name +
            " " +
            elemento.last_name +
            "</p>" +
            "<img src=" +
            elemento.avatar +
            "></img>" +
            "</div>"
        );
      }
      // $.each(respuesta.data, function(index, elemento) {
      //
      // });
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}
