$(document).ready(function() {
    var html = "";
    var celula = 0;
    var vetorCampos = [];
    var objCampos = {};
    var totalDeCelulas = 100;
    var totalDeMinas = 30;
    var celulasComMinas = [];
    
    
    //Sorteia os campos que terão bombas
    for (var x = 0; x < 30; x++) {
        var campoSorteado = parseInt(Math.random() * 100);
        
        while (celulasComMinas.indexOf(campoSorteado) != -1) {
            campoSorteado = parseInt(Math.random() * 100);
        }
        celulasComMinas.push(campoSorteado);

    }
    
    //Cria os campos
    for (var x = 0; x < 100; x++) {
        if (celulasComMinas.indexOf(x) == -1) {
            objCampos = {
                indice: x,
                temBomba: false
            };
        } else {
            objCampos = {
                indice: x,
                temBomba: true
            };
        }
        vetorCampos.push(objCampos);
        objCampos = {};
    }
    
    //Preenche os campos
//    for (var x = 0; x < 10; x++) {
//        html += "<tr>";
//        for (var y = 0; y < 10; y++) {
//            if (vetorCampos[celula].temBomba == true) {
//                html += "<td><span style = 'color: red'>X</span></td>";
//            } else {
//                html += "<td>" + vetorCampos[celula].indice + "</td>";
//            }
//            celula++;
//        }
//        html+= "</tr>";
//    }

    for (var x = 0; x < 10; x++) {
        html += "<tr>";
        for (var y = 0; y < 10; y++) {
            html += "<td id = '" + celula + "'></td>";
            celula++;
        }
        html += "</tr>";
    }
    
    $("#tblCampo").html(html);
    
    $("#tblCampo td").click(function() {
        console.log($(this).attr("id"));
    });
    
    
});