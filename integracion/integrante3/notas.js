let estudiantes = [
    {nombre:"Marcos",apellido:"Erazo",nota1:8.4,nota2:9.5,nota3:8.7,total:26.6,promedio:8.7},
    {nombre:"Maritza",apellido:"Rosero",nota1:5.4,nota2:8.5,nota3:9.7,total:23.6,promedio:9.7},
    {nombre:"Esteban",apellido:"Guaranda",nota1:9.4,nota2:10.0,nota3:9.0,total:28.4,promedio:9},
    {nombre:"Ricardo",apellido:"Batista",nota1:6.4,nota2:9.5,nota3:8.9,total:24.8,promedio:8.9},
]
desactivarBoton =function(){
    deshabilitarComponente("btnGuardar");
}
calcularTotal = function(n1,n2,n3){
    return (n1+n2+n3);
}
calcularPromedio = function(p1,p2,p3){
    let promedio = (p1+p2+p3)/3
    return promedio;
}
calcular = function(){
    let valueNote = recuperarFloat("txtNota1");
    let valueNote2 = recuperarFloat("txtNota2");
    let valueNote3 = recuperarFloat("txtNota3");
    let resultTotal = calcularTotal(valueNote,valueNote2,valueNote3);
    mostrarTexto("lblTotal",resultTotal);
    let resultPromedio = calcularPromedio(valueNote,valueNote2,valueNote3);
    mostrarTexto("lblPromedio",resultPromedio);
    habilitarComponente("btnGuardar")
}
guardar = function(){
    let valueName = recuperarTexto("txtNombre");
    let valueName2 = recuperarTexto("txtApellido");
    // Validar Apellido
    if (valueName2.length < 3) {
        mostrarTexto("lblError2",'El apellido debe tener al menos 3 caracteres');
        //alert('El apellido debe tener al menos 3 caracteres');
        return false;
    }
    let valueNote = recuperarFloat("txtNota1");
    let valueNote2 = recuperarFloat("txtNota2");
    let valueNote3 = recuperarFloat("txtNota3");
    let resultTotal = calcularTotal(valueNote,valueNote2,valueNote3);
    let resultPromedio = calcularPromedio(valueNote,valueNote2,valueNote3);
    let objStudent = {
        nombre:valueName,
        apellido:valueName2,
        nota1:valueNote,
        nota2:valueNote2,
        nota3:valueNote3,
        total:resultTotal,
        promedio:resultPromedio
    }
    estudiantes.push(objStudent);
    alert("Notas guardadas con éxito");
    limpiar();
    mostrarEstudiantes();
}

mostrarEstudiantes = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla ="<table class='neon-table'><tr>"+
    "<th>NOMBRE</th>"+
    "<th>NOTA 1</th>"+
    "<th>NOTA 2</th>"+
    "<th>NOTA 3</th>"+
    "<th>TOTAL</th>"+
    "<th>PROMEDIO</th>"+
    "</tr>";
    let objPersona;
    for(let i=0;i<estudiantes.length;i++){
        objPersona = estudiantes[i];
        contenidoTabla+=
        "<tr>"
        +"<td>"+objPersona.nombre+" "+objPersona.apellido+"</td>" 
        +"<td>"+objPersona.nota1+"</td>"
        +"<td>"+objPersona.nota2+"</td>"
        +"<td>"+objPersona.nota3+"</td>"  
        +"<td>"+objPersona.total+"</td>"    
        +"<td>"+objPersona.promedio+"</td>"  
        +"</tr>";
    }
    contenidoTabla +="</table>"
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarComponente("btnGuardar");
}
limpiar = function(){
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtNota1","");
    mostrarTextoEnCaja("txtNota2","");
    mostrarTextoEnCaja("txtNota3","");
    mostrarTexto("lblTotal",'-');
    mostrarTexto("lblPromedio",'-');
    //Errores
    mostrarTexto("lblError2",'');
}