function leer(){
    var nom=document.forms["formulario"].elements[0].value;
    //referencia por id
    var clave=document.getElementById("pass").value;
    //referencia por tagname
    var car=document.getElementsByTagName("select")[0].value;
    //referencia por name
    var gen=document.getElementsByName("género");
        for(i=0;i<gen.length;i++){
            if(gen[i].checked)
                var g=gen[i].value;
        }

    document.getElementById("resultado").innerHTML= 
    "\<br>Tu nombre: " + nom + 
    "\<br>Tu password: "+ clave +
    "\<br>Tu carrera: "+ car +
    "\<br>Tu género: "+g;

}