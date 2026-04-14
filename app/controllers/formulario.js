$(document).ready(function () {

    $("#btn-procesar").click(function () {
        var nombre = $("#nombre").val().trim();
        var edad   = $("#edad").val().trim();
        var sueldo = $("#sueldo").val().trim();

        if (nombre === "" || edad === "" || sueldo === "") {
            Swal.fire({
                icon: "warning",
                title: "Campos vacíos",
                text: "Por favor, complete todos los campos antes de continuar."
            });
            return;
        }

        conectar_backend(nombre, edad, sueldo);
    });

    function conectar_backend(nombre, edad, sueldo) {
        $.ajax({
            url: "../models/procesar.php",
            method: "POST",
            data: { nombre: nombre, edad: edad, sueldo: sueldo },
            dataType: "json"
        })
        .done(function (response) {
            if (response.status === true) {
                Swal.fire({
                    icon: "success",
                    title: "Postulación Aprobada",
                    text: response.mensaje
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Postulación Rechazada",
                    text: response.mensaje
                });
            }
        })
        .fail(function () {
            Swal.fire({
                icon: "error",
                title: "Error de conexión",
                text: "No se pudo conectar con el servidor. Intente nuevamente."
            });
        });
    }

});
