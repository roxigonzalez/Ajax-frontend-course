$("#boton-usuarios").on("click", getUsers);

function getUsers() {
  $.ajax({
    url: 'https://reqres.in/api/users',
    success: function(respuesta) {

      var listaUsuarios = $("#lista-usuarios");
      $.each(respuesta.data, function(index, elemento) {
        listaUsuarios.append(
            '<div>'
          +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
          +     '<img src=' + elemento.avatar + '></img>'
          + '</div>'
        );    
      });
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}