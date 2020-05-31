$(() => {
    var parametros = location.search.substring(1, location.search.length);
    //alert(parametros);
    vecParametros = parametros.split("&");
    //alert(vecParametros.length + " - " + vecParametros[0] + ", " + vecParametros[1]);

    var datos = [];
    for (let i = 0; i < vecParametros.length; i++) {
        vecParamActual = vecParametros[i].split("=");

        if (isNaN(parseFloat(vecParamActual[1]))) { // --> True: NO es número // False: SÍ es un número
            var valor = String(vecParamActual[1]).replace(/[+]/g, " ");
            //alert(valor);
            $("#bienvenido").html(valor);
            datos.push(valor);
        } else {
            //alert(vecParamActual[1]);
            datos.push(vecParamActual[1]);
        }
    }
    console.log(datos);
    var nombreMejor = datos[0];
    var edadMejor = datos[1];
    var mejorPromedio = datos[2];
    var nombrePeor = datos[3];
    var edadPeor = datos[4];
    var peorPromedio = datos[5];

    var fila = '';
    var fila2 = '';
    
    fila += 
    `<tr class="gana">
    <td>${"Estudiante " + nombreMejor}</td>
    <td>${edadMejor}</td>
    <td>${mejorPromedio}</td>
    </tr>`;
    fila2 +=
    `<tr class="pierde">
    <td>${"Estudiante " + nombrePeor}</td>
    <td>${edadPeor}</td>
    <td>${peorPromedio}</td>
    </tr>`;
    
    $("#body_tabla2").append(fila);
    $("#body_tabla2").append(fila2);

    $("#btnSalir").click(function (){
        (this).onClick(location = 'index.html');
    });
})