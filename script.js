"use strict";
// referencio elementos del DOM
const getEl = (id) => document.getElementById(id);
const btnMsgExito = getEl("btnMsgExito");
const btnMsgError = getEl("btnMsgError");
const btnMsgConfirmacion = getEl("btnMsgConfirmacion");

// Alerta general para pruebas
const alerta = () => {
  alert("En construccion");
};

// Sweet Alert Exito
const sweetAlertExito = (message, fontSize) => {
  Swal.fire({
    position: "center",
    width: "200px",
    heightAuto: false,
    showConfirmButton: false,
    background: "#ABEBC6",
    icon: "success",
    iconColor: "green",
    color: "green",
    timer: 1300,
    html: `<div style="font-size: ${fontSize}; text-align: center;">${message}</div>`, // Personaliza el tamaño del mensaje
  });
}

// Sweet Alert Error
const sweetAlertError = (message, fontSize) => {
  Swal.fire({
    position: "center",
    width: "200px",
    heightAuto: false,
    showConfirmButton: false,
    background: "#E6B0AA",
    icon: "error",
    iconColor: "red",
    color: "red",
    timer: 1300,
    html: `<div style="font-size: ${fontSize}; text-align: center;">${message}</div>`, // Personaliza el tamaño del mensaje
  });
}

// Sweet Alert de confirmacion
const sweetAlertConfirmacion = (mensaje, tamanoTitulo, callback) => {
  Swal.fire({
    title: mensaje,
    position: "center",
    icon: "warning",
    iconColor: "#F39C12",
    background: "#F9E79F",
    width: "300px",
    heightAuto: false,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    // Modificar el estilo del título directamente
    didOpen: () => {
      const title = document.querySelector(".swal2-title");
      if (title) {
        title.style.fontSize = tamanoTitulo; // Ajustar el tamaño del título
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      callback(true);
    } else {
      callback(false);
    }
  });
};


// PROGRAMA PRICIPAL

// Acciones al presionar boton mensaje exito
btnMsgExito.addEventListener('click', () =>{
  sweetAlertExito("Envío exitoso!", "1.1em");
})

// Acciones al presionar boton mensaje error
btnMsgError.addEventListener("click", ()=>{
  sweetAlertError("Faltan datos", "1.1em");
});

// Acciones al presionar boton mensaje de confirmacion
btnMsgConfirmacion.addEventListener("click", () =>{
    sweetAlertConfirmacion(
      "¿Estás seguro de continuar?","1.1em", (confirmado) => {
        if (confirmado) {
          alert("Acción confirmada");
        } else {
          alert("Acción cancelada");
        }
      }
    );

});
