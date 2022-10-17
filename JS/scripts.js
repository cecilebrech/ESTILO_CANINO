
             
function valida_envia() {
  
    if (document.fvalida.firstname.value.length == 0){
        alert("Tiene que escribir su nombre");
        document.fvalida.firstname.focus()
        return 0;
    
    }else if (document.fvalida.lastname.value.length == 0){
      alert("Tiene que escribir su apellido");
      document.fvalida.lastname.focus()
      return 0;
    }else if (document.fvalida.address.value.length == 0){
      alert("Tiene que escribir su direccion");
      document.fvalida.address.focus()
      return 0;
    }else if (document.fvalida.city.value.length == 0){
      alert("Tiene que escribir su ciudad");
      document.fvalida.city.focus()
      return 0;
    }

    //valido el zipcode. tiene que ser numero.
zipcode = document.fvalida.zipcode.value
zipcode = validarEntero(zipcode)
document.fvalida.zipcode.value = zipcode
if (zipcode == "") {
  alert("Tiene que introducir un número en su codigo postal.")
  document.fvalida.zipcode.focus()
  return 0;


}else {
alert("Gracias por enviar el formulario")
  document.fvalida.submit(); 
}




    
}




function validarEntero(valor) {

valor = parseInt(valor)


if (isNaN(valor)) {
  
  return ""
} else {
  
  return valor
}


}



