let estudiantes = [
    {
        nombre: "Edwin",
        apellido: "Erazo",
        nota1: 8.4,
        nota2: 9.5,
        nota3: 8.7,
        total: 26.6,
        promedio: 8.7
    },
    {
        nombre: "Maritza",
        apellido: "Roserp",
        nota1: 5.4,
        nota2: 8.5,
        nota3: 9.7,
        total: 23.6,
        promedio: 9.7
    },
    {
        nombre: "Esteban",
        apellido: "Guaranda",
        nota1: 5.4,
        nota2: 8.5,
        nota3: 9.7,
        total: 28.4,
        promedio: 9.0
    },
    {
        nombre: "Ricardo",
        apellido: "Batista",
        nota1: 6.4,
        nota2: 9.5,
        nota3: 8.9,
        total: 24.8,
        promedio: 8.9
    },
]

calcularTotal = function (n1, n2, n3) {
    let suma = n1 + n2 + n3;
    return suma;
}
calcularPromedio = function (p1, p2, p3) {
    let suma = p1 + p2 + p3;
    let promedio = suma / 3;
    return promedio;
}
calcular = function () {
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");
    let total = calcularTotal(nota1, nota2, nota3);
    mostrarTexto("lblTotal", "Total: " + total);
    let promedio = calcularPromedio(nota1, nota2, nota3)
    mostrarTexto("lblPromedio", "Promedio: " + promedio);
    habilitarComponente("btnGuardar");
}
guardar = function () {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");
    let total = calcularTotal(nota1, nota2, nota3);
    let promedio = calcularPromedio(nota1, nota2, nota3)
    let estudiante = {};
    estudiante.nombre = nombre;
    estudiante.apellido = apellido;
    estudiante.nota1 = nota1;
    estudiante.nota2 = nota2;
    estudiante.nota3 = nota3;
    estudiante.total = total;
    estudiante.promedio = promedio;
    estudiantes.push(estudiante)
    alert("Notas guardadas con exito");
    limpiarCampos()
    cargarTabla()
}

cargarTabla = function () {
    let cmpTabla = document.getElementById("tablaContenido");
    let contenidoTabla = "<table><tr><th>Nombre</th>" +
        "<th>Apellido</th>" +
        "<th> Nota 1</th>" +
        "<th> Nota 2</th>" +
        "<th> Nota 3</th>" +
        "<th> Total</th>" +
        "<th> Promedio</th></tr>"
    for (let i = 0; i < estudiantes.length; i++) {
        let elementoEstudiante = estudiantes[i];
        contenidoTabla += "<tr><td>" + elementoEstudiante.nombre + "</td>" +
            "<td>" + elementoEstudiante.apellido + "</td>" +
            "<td>" + elementoEstudiante.nota1 + "</td>" +
            "<td>" + elementoEstudiante.nota2 + "</td>" +
            "<td>" + elementoEstudiante.nota3 + "</td>" +
            "<td>" + elementoEstudiante.total + "</td>" +
            "<td>" + elementoEstudiante.promedio + "</td></tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;

    deshabilitarComponente("btnGuardar")
}
limpiarCampos = function () {
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtNota1", "");
    mostrarTextoEnCaja("txtNota2", "");
    mostrarTextoEnCaja("txtNota3", "");
    mostrarTexto("lblTotal", "");
    mostrarTexto("lblPromedio", "");
}