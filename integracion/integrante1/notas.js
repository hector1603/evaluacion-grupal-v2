let estudiantes = [
    {nombre: "Edwin", apellido: "Erazo", nota1: 8.4, nota2: 9.5, nota3: 8.7, total:26.6, promedio: 8.7},
    {nombre: "Maritza", apellido: "Rosero", nota1: 5.4, nota2: 8.5, nota3: 9.7, total:23.6, promedio: 9.7},
    {nombre: "Esteban", apellido: "Guaranda", nota1: 9.4, nota2: 10.0, nota3: 9.0, total:28.4, promedio: 9.0},
    {nombre: "Ricardo", apellido: "Batista", nota1: 6.4, nota2: 9.5, nota3: 8.9, total:24.8, promedio: 8.9}
];

calcularTotal = function(n1, n2, n3) {
    let result;
    result = n1 + n2 + n3;
    return result;
}

calcularPromedio = function(p1, p2, p3) {
    let promedio;
    promedio = (p1 + p2 + p3) / 3;
    return promedio.toFixed(2);
}

calcular = function() {
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");
    let sumaNotas = calcularTotal(nota1, nota2, nota3);
    let promedio = calcularPromedio(nota1, nota2, nota3);

    mostrarTexto("lblNotas", sumaNotas);
    mostrarTexto("lblPromedio", promedio);
    habilitarComponente("btnGuardar");
}

guardar = function() {
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorNota1 = recuperarFloat("txtNota1");
    let valorNota2 = recuperarFloat("txtNota2");
    let valorNota3 = recuperarFloat("txtNota3");

    let estudiante = {};
    estudiante.nombre = valorNombre;
    estudiante.apellido = valorApellido;
    estudiante.nota1 = valorNota1;
    estudiante.nota2 = valorNota2;
    estudiante.nota3 = valorNota3;

    let total = calcularTotal(valorNota1, valorNota2, valorNota3);
    let promedio = calcularPromedio(valorNota1, valorNota2, valorNota3);

    estudiante.total = total;
    estudiante.promedio = promedio;

    if(validarNombre(valorNombre)){
        estudiantes.push(estudiante);
        alert("Notas guardadas con éxito.");
        mostrarTabla();
        document.getElementById("errorNombre").innerHTML = '';
    } 

    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellido").value = '';
    document.getElementById("txtNota1").value = '';
    document.getElementById("txtNota2").value = '';
    document.getElementById("txtNota3").value = '';
    document.getElementById("txtNota3").value = '';
}

mostrarTabla = function() {
    let cmpEstudiantes = document.getElementById("tablaEstudiantes");
    let tablaEstudiantes = "<table><tr><th>NOMBRE</th><th>NOTA 1</th><th>NOTA 2</th><th>NOTA 3</th><th>TOTAL</th><th>PROMEDIO</th></tr>";

    for(let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];
        tablaEstudiantes += "<tr><td>" + estudiante.nombre + " " + estudiante.apellido + "</td>"
                        +"<td class='centered'>" + estudiante.nota1 + "</td>"
                        +"<td class='centered'>" + estudiante.nota2 + "</td>"
                        +"<td class='centered'>" + estudiante.nota3 + "</td>"
                        +"<td class='centered'>" + estudiante.total + "</td>"
                        +"<td class='centered'>" + estudiante.promedio + "</th></tr>";
    }

    tablaEstudiantes += "</table>";
    cmpEstudiantes.innerHTML = tablaEstudiantes;
    deshabilitarComponente("btnGuardar");
}


validarNombre = function(nombre) {
    let validado = true;
        if(nombre == "") {
            validado = false
            mostrarTexto("errorNombre", "Campo obligatorio.");
        } else if(nombre.length < 3 || nombre.length > 10) {
            validado = false;
            mostrarTexto("errorNombre", "El nombre debe tener de 3 a 10 caracteres.");
        }
    
    return validado;
}