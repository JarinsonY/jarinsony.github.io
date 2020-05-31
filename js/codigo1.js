$(() => {
    $('input[type = "submit"]').hide(1000);

    var valiNom;
    $('#nombre').change( function(){
        var nombre = $("#nombre").val();
        if(nombre === "usuario1" || nombre === "usuario2"){
            $("#nombre").removeClass("is-invalid");
            $("#nombre").addClass("is-valid");
            $("#nombre").parent().children("span").hide(1000);
            $("#revisa").parent().children("span").hide(1000);
            valiNom = true;
        } else if(nombre != "usuario1" || nombre != "usuario2"){
            $("#nombre").addClass("is-invalid");
            $("#nombre").parent().children("span").text("Dato incorrecto, pruebe con usuario1 o usuario2.").show(1000);
            valiNom = false;
        }
    });


    $("#fecha").change( function() {
        var edad = (new Date().getFullYear() - new Date($("#fecha").val()).getFullYear());
        if (edad < 18) {
            $('input[type = "submit"]').hide(1000);
            $("#fecha").addClass("is-invalid");
            $("#fecha").parent().children("span").text("Es necesario ser mayor de 18 años.").show(1000);
        } else if(valiNom == false){
            $("#revisa").parent().children("span").text("Compruebe los datos.").show(1000);
        } else if(edad >= 18 && valiNom == true){
            $('input[type = "submit"]').show(1000);
            $("#fecha").removeClass("is-invalid");
            $("#fecha").addClass("is-valid");
            $("#fecha").parent().children("span").hide(1000);
            $("#revisa").parent().children("span").hide(1000);
        }
    });
})

/*$(() => {
    $('input[type = "button"]').hide();
    inicio();
})

    function inicio(){
        valiNom();
        valiEdad();
        if(valiNom() == true && valiEdad() == true){
            $('input[type = "button"]').show(1000);
            $("#btnContinuar").click("index2.html");
        }
    }

    function valiNom(){
        var nombre = $('#nombre').val();
        if(nombre != "usuario1" || nombre != "usuario2"){
            $("#nombre").addClass("is-invalid");
            $("#nombre").parent().children("span").text("Dato incorrecto, pruebe con usuario1 o usuario2.").show(1000);
            return false;
        } else {
            $("#nombre").removeClass("is-invalid");
            $("#nombre").addClass("is-valid");
            $("#nombre").parent().children("span").hide(1000);
        }
    }

    function valiEdad(){
        var fnacimiento = document.getElementById("fecha").value;
        var edad = (new Date().getFullYear() - new Date($("#fecha").val()).getFullYear()) - 1;

        if (fnacimiento == null || fnacimiento == 0) {
            $("#fecha").addClass("is-invalid");
            $("#fecha").parent().children("span").text("No se ha indicado la fecha de nacimiento.").show(1000);
            return false;
        } else if(edad < 18){
            $("#fecha").addClass("is-invalid");
            $("#fecha").parent().children("span").text("Es necesario ser mayor de 18 años.").show(1000);
            return false;
        } else {
            $("#fecha").removeClass("is-invalid");
            $("#fecha").addClass("is-valid");
            $("#fecha").parent().children("span").hide(1000);
            return true;
        }
    }*/
