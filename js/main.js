function validateForm(){
	//Para el campo Nombre validando datos
	var valor = document.getElementById("name").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  	alert("Campo obligatorio Nombre");
	}
	else{
		var m = /^[a-zA-Z]*$/;
		if(!valor.search(m)){
	   		m=/[a-z]/g;
	   		if(!valor.search(m)){
	   			return alert("La primera letra debe empezar con maýuscula")
	   		}
	   	}
	  	else{
  			alert ("Ingrese datos válidos (A-Z)");
	  	}
	}
  	var apellido = document.getElementById("lastname").value;
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
  	alert("Campo obligatorio Apellidos");
	}
	else{
		var n = /^[a-zA-Z]*$/;
		if(!apellido.search(n)){
	   		n=/[a-z]/g;
	   		if(!apellido.search(n)){
	   			alert("La primera letra debe empezar con maýuscula")
	   		}
	   	}
	  	else{
  			alert ("Ingrese datos válidos (A-Z)");
	  	}
	}
	var valor_1 = document.getElementById("input-email").value;
	if( valor_1 == null || valor_1.length == 0 || !/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/.test(valor_1)) {
       return alert("Ingresa un correo");
    }
	var valor_2 = document.getElementById("input-password").value;
	if( valor_2 == null || valor_2.length == 0 || valor_2.length <= 6 || valor_2 == "123456" || valor_2 == "98754" || valor_2 == "password") {
        return alert("Contraseña no válida");
    } 	
}
