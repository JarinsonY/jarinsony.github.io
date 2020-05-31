$(function () {
    $("#btnMostrar").hide(1000);
    $("#space").hide(500);
    var nUsados = [];
    var nombreMejor = '';
    var edadMejor;
    var mejorPromedio = 0.0;
    var nombrePeor = '';
    var edadPeor;
    var peorPromedio = 5.0;
    var parametros = location.search.substring(1, location.search.length);

    vecParametros = parametros.split("&");


    for (let i = 0; i < vecParametros.length; i++) {
        vecParamActual = vecParametros[i].split("=");

        if (isNaN(parseFloat(vecParamActual[1]))) { // --> True: NO es número // False: SÍ es un número
            var valor = String(vecParamActual[1]).replace(/[+]/g, " ");
            $("#bienvenido").html(valor);
            if (valor == "usuario1") {
                $("#perfil").attr("src", "imagenes/usuario1.jpg");
            } else {
                $("#perfil").attr("src", "imagenes/usuario2.jpg");
            }
        }
    }

    let dia = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let año = new Date().getFullYear();
    $("#hoy").html(dia + " - " + mes + " - " + año);

    $("#btnAñadir").click(function () {
        var edad = genEdad();
        var nota1 = nota();
        var nota2 = nota();
        var nota3 = nota();
        if (nUsados.length < 10) {
            var numero = genEstudiante();
            if (numero != false) {
                var num = numero;
                aggEstudiante();
                $("#f").children("span").hide(500);
            } else {
                console.log("Número ya ingresado.");
                $("#f").children("span").text("Se iba a ingresa un estudiante ya generado, por favor intente nuevamente.").show(500);
            }
        } else {
            alert("Ya se añadió el número máximo de estudiantes.");
        }
        if (nUsados.length > 1) {
            $("#btnMostrar").show(1000);
            $("#space").show(1000);
        }
        console.log(nUsados);
        function genEstudiante() {
            var min = 1;
            var max = 10;
            var n = Math.round(Math.random() * (max - min) + min);
            for (let i = 0; i < nUsados.length; i++) {
                if (n == nUsados[i]) {
                    return false;
                }
            }
            nUsados.push(n);
            return n;
        }

        function genEdad() {
            var min = 18;
            var max = 35;
            return (Math.round(Math.random() * (max - min) + min));
        }

        function nota() {
            var min = 0.0;
            var max = 5.0;
            return (Math.random() * (max - min) + min).toFixed(2);
        }


        function aggEstudiante() {
            var promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
            var fila = '';



            fila +=
                `<tr>
            <td>${"Estudiante " + num}</td>
            <td>${edad}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${nota3}</td>
            <td>${promedio.toFixed(2)}</td>
            </tr>`;

            if (promedio > mejorPromedio) {
                nombreMejor = num;
                edadMejor = edad;
                mejorPromedio = promedio;
            } else if (promedio < peorPromedio) {
                nombrePeor = num;
                edadPeor = edad;
                peorPromedio = promedio;
            }
            $("#body_tabla1").append(fila);
        }

    });

    $("#btnMostrar").click(function () {
        this.onclick(location =
                        'index3.html?nombreMejor=' + nombreMejor + '&edadMejor=' + edadMejor + '&mejorPromedio=' + mejorPromedio.toFixed(2) +
                        '&nombrePeor=' + nombrePeor + '&edadMejor=' + edadMejor + '&peorPromedio=' + peorPromedio.toFixed(2));
    });
})