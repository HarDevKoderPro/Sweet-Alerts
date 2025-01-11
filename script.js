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
function sweetAlertExito(mensaje) {
  Swal.fire({
    position: "center",
    width: "180px",
    heightAuto: false,
    showConfirmButton: false,
    title: mensaje,
    background: "#ABEBC6",
    icon: "success",
    iconColor: "green",
    color: "green",
    timer: 2000,
  });
}

// Sweet Alert Error
function sweetAlertError(mensaje) {
  Swal.fire({
    position: "center",
    width: "180px",
    heightAuto: false,
    showConfirmButton: false,
    title: mensaje,
    background: "#E6B0AA",
    icon: "error",
    iconColor: "red",
    color: "red",
    timer: 2000,
  });
}

// Sweet Alert de confirmacion
  const sweetAlertConfirmacion = (mensaje, callback) => {
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
    }).then((result) => {
      if (result.isConfirmed) {
        callback(true);
      }else{
        callback(false);
      }
    });  
  };

// PROGRAMA PRICIPAL

// Acciones al presionar boton mensaje exito
btnMsgExito.addEventListener('click', () =>{
  sweetAlertExito('');
})

// Acciones al presionar boton mensaje error
btnMsgError.addEventListener("click", ()=>{
  sweetAlertError('')
});

// Acciones al presionar boton mensaje de confirmacion
btnMsgConfirmacion.addEventListener("click", () =>{
  sweetAlertConfirmacion('Deseas Continuar?',(respuesta) =>{
    console.log(respuesta)
  })

});
