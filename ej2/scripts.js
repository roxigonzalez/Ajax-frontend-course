$(document).ready(function() {
  $("#btn-get-users").click(function() {
    // console.log("hice click!");
    getUsers();
  });

  function getUsers() {
    $.ajax({
      url: "https://reqres.in/api/users?per_page=12",
      type: "GET",
      dataType: "json",
      success: function(respuesta) {
        var divListaUsuarios = $("#lista-usuarios");
        console.log(respuesta.data);
        var collectionUsers = respuesta.data;
        var newElement = "";
        for (var i = 0; i < collectionUsers.length; i++) {
          var user = collectionUsers[i];
          newElement +=
            "<div><span>" +
            user.first_name +
            " " +
            user.last_name +
            "<br/></span>" +
            "<strong>Correo: " +
            user.email +
            "</strong><br/>" +
            "<img src=" +
            user.avatar +
            " /></hr></div>";
        }
        divListaUsuarios.html(newElement);
      },
      error: function(error) {
        alert("Ha ocurrido un error");
      },
      complete: function(status) {
        // alert("petición finalizada!");
      }
    });
  }
});
