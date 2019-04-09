function aplyValidations(){
  event.preventDefault();
  validarNombre();
  validardireccion();
  validartelefono();
  validarRadioButton();

  validarSelectCiudad();
}


function validarNombre(){
  var validarNombre = document.getElementById('nombre').value;

  if (validarNombre==""){
      alert("Campo nombre vacio");
      return false;
    }
}

function validardireccion(){
  var direccion = document.getElementById('direccion').value;

  if (direccion ==""){
    alert("Campo direccion vacio");
    return false;
  }
}

function validartelefono(){
  var validartelefono = document.getElementById('telefono').value;

  if (validartelefono==0){
      alert("Campo telefono vacio");
      return false;
    }
}

function validarSelectCiudad(){
var pais = document.getElementById('pais').value;
  if (pais=="0") {
      alert("Faltó seleccionar una ciudad");
      return false;
  }
}

